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

import org.quartz.JobDetail;
import org.quartz.SimpleTrigger;
import org.springframework.scheduling.quartz.CronTriggerFactoryBean;
import org.springframework.scheduling.quartz.JobDetailFactoryBean;
import org.springframework.scheduling.quartz.SimpleTriggerFactoryBean;

/**
 * Collection of helpers for use when creating and scheduling jobs
 * TODO https://www.callicoder.com/spring-boot-quartz-scheduler-email-scheduling-example/ Use Builder instead
 */
public class JobHelpers {

	/**
	 * Uses the class name for the job name.
	 *
	 * {@link #createJobDetail(Class, String, String)}
	 */
	public static JobDetailFactoryBean createJobDetail(Class jobClass, String jobDescription) {
		return JobHelpers.createJobDetail(jobClass, jobClass.getSimpleName(), jobDescription);
	}

	/**
	 * Create a Job detail for a given job
	 *
	 * @param jobClass The job class. Must implement org.quarz.Job
	 * @param jobName The simple name of the job
	 * @param jobDescription A simple description of the job
	 *
	 * @return The create job detail as a JobDetailFactoryBean
	 */
	public static JobDetailFactoryBean createJobDetail(Class jobClass, String jobName, String jobDescription) {
		JobDetailFactoryBean factoryBean = new JobDetailFactoryBean();
		factoryBean.setJobClass(jobClass);
		factoryBean.setDurability(true);
		factoryBean.setName(jobName);
		factoryBean.setDescription(jobDescription);

		return factoryBean;
	}

	/**
	 * Create a simple trigger for a given job. This trigger will repeat indefinitely
	 *
	 * {@link #createJobDetail(Class, String, String)} method to create the job detail.
	 *
	 * @param jobDetail The job detail
	 * @param frequency Frequency in milliseconds, {@link Frequency} for predefined options.
	 *
	 * @return A simple job trigger.
	 */
	public static SimpleTriggerFactoryBean createSimpleTrigger(JobDetail jobDetail, long frequency) {
		SimpleTriggerFactoryBean factoryBean = new SimpleTriggerFactoryBean();
		factoryBean.setJobDetail(jobDetail);
		factoryBean.setStartDelay(0L);
		factoryBean.setRepeatInterval(frequency);
		factoryBean.setRepeatCount(SimpleTrigger.REPEAT_INDEFINITELY);

		return factoryBean;
	}

	/**
	 * Create a Cron trigger for a given job.
	 *
	 * {@link #createJobDetail(Class, String, String)} method to create the job detail.
	 *
	 * @param jobDetail The job detail
	 * @param cronExpression Cron expression to use {@link CronFrequency} for predefined options.
	 *
	 * @return A cron job trigger.
	 */
	public static CronTriggerFactoryBean createCronTrigger(JobDetail jobDetail, String cronExpression) {
		CronTriggerFactoryBean factoryBean = new CronTriggerFactoryBean();
		factoryBean.setJobDetail(jobDetail);
		factoryBean.setStartDelay(0L);
		factoryBean.setCronExpression(cronExpression);

		return factoryBean;
	}

	// % protected region % [Add additional helpers here] off begin
	// % protected region % [Add additional helpers here] end
}
