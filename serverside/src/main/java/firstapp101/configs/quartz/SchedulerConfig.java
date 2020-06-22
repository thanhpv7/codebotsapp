/*
 * @bot-written
 * 
 * WARNING AND NOTICE
 * Any access, download, storage, and/or use of this source code is subject to the terms and conditions of the
 * Full Software Licence as accepted by you before being granted access to this source code and other materials,
 * the terms of which can be accessed on the Codebots website at https://codebots.com/full-software-licence. Any
 * commercial use in contravention of the terms of the Full Software Licence may be pursued by Codebots through
 * licence termination and further legal action, and be required to indemnify Codebots for any loss or damage,
 * including interest and costs. You are deemed to have accepted the terms of the Full Software Licence on any
 * access, download, storage, and/or use of this source code.
 * 
 * BOT WARNING
 * This file is bot-written.
 * Any changes out side of "protected regions" will be lost next time the bot makes any changes.
 */

package firstapp101.configs.quartz;

import com.google.common.collect.Iterables;
import lombok.extern.slf4j.Slf4j;
import org.quartz.JobDetail;
import org.quartz.Trigger;
import org.quartz.spi.JobFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.config.PropertiesFactoryBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.scheduling.quartz.*;

import javax.sql.DataSource;
import java.io.IOException;
import java.util.List;
import java.util.Properties;

// % protected region % [Add any additional imports here] on begin
import firstapp101.jobs.SimpleJob;
import firstapp101.jobs.TankCheckJob;
// % protected region % [Add any additional imports here] end

@Configuration
@ConditionalOnProperty(name = "quartz.enabled")
@Slf4j
public class SchedulerConfig {

	// All triggers in the application, method based injection used to avoid cyclic bean dependency
	@Autowired
	private List<Trigger> triggers;

	/**
	 * Make use of the AutoWiringSpringBeanJobFactory to allow us to properly
	 * inject our services and repositories into our jobs when they run.
	 *
	 * @return  JobFactory The custom job factory.
	 */
	@Bean
	public JobFactory jobFactory(ApplicationContext applicationContext) {
		AutoWiringSpringBeanJobFactory jobFactory = new AutoWiringSpringBeanJobFactory();
		jobFactory.setApplicationContext(applicationContext);
		return jobFactory;
	}

	/**
	 * These properties are sourced from an external file due to the use of
	 * Quartz scheduler within Spring Boot.
	 *
	 * These have been sourced in this way due to the `spring.quartz.properties`
	 * option that can be used within the default application properties not
	 * correctly setting these settings. This has been done primarily to set the
	 * PostgreSQL data store delegate.
	 *
	 * @return  Properties  The loaded quartz properties.
	 */
	@Bean
	public Properties quartzProperties() throws IOException {
		PropertiesFactoryBean propertiesFactoryBean = new PropertiesFactoryBean();
		propertiesFactoryBean.setLocation(new ClassPathResource("/quartz/quartz.properties"));
		propertiesFactoryBean.afterPropertiesSet();
		return propertiesFactoryBean.getObject();
	}

	@Bean
	public SchedulerFactoryBean schedulerFactoryBean(DataSource dataSource, JobFactory jobFactory) throws IOException {
		SchedulerFactoryBean factory = new SchedulerFactoryBean();
		factory.setJobFactory(jobFactory);
		factory.setDataSource(dataSource);
		factory.setQuartzProperties(quartzProperties());

		log.trace("Setting triggers");

		// Set the triggers
		factory.setTriggers(Iterables.toArray(triggers, Trigger.class));

		return factory;
	}

	// % protected region % [Add trigger and job details here] on begin
	@Bean
	public JobDetailFactoryBean simpleJobDetail() {
		return JobHelpers.createJobDetail(
				SimpleJob.class,
				"SimpleJob",
				SimpleJob.getDescription()
		);
	}

	@Bean
	public SimpleTriggerFactoryBean simpleJobTrigger(@Qualifier("simpleJobDetail") JobDetail jobDetail) {
		return JobHelpers.createSimpleTrigger(jobDetail, Frequency.MINUTE.getMillis() * 2); // Run every two minutes
	}

	@Bean
	public JobDetailFactoryBean tankCheckJobDetail() {
		return JobHelpers.createJobDetail(
				TankCheckJob.class,
				TankCheckJob.getName(),
				TankCheckJob.getDescription()
		);
	}

	@Bean
	public SimpleTriggerFactoryBean tankCheckJobTrigger(@Qualifier("tankCheckJobDetail") JobDetail jobDetail) {
		return JobHelpers.createSimpleTrigger(jobDetail, Frequency.SECOND.getMillis() * 20); // Run every 2 minutes
	}
	// % protected region % [Add trigger and job details here] end
}
