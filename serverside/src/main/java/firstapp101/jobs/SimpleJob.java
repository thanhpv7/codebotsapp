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

package firstapp101.jobs;

import lombok.Getter;
import org.quartz.DisallowConcurrentExecution;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;
import firstapp101.services.jobs.SimpleJobService;

@Component
@ConditionalOnProperty(name = "quartz.enabled")
@DisallowConcurrentExecution
public class SimpleJob extends AbstractJob {

	@Getter
	private final static String description = "A simple example job.";

	@Getter
	private final static String name = "Simple job";

	@Autowired
	private SimpleJobService jobService;

	@Override
	public void execute(JobExecutionContext context) throws JobExecutionException {
		jobService.executeJob();
	}
}

