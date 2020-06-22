package firstapp101.jobs;

import firstapp101.services.jobs.TankCheckJobService;
import lombok.Getter;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.beans.factory.annotation.Autowired;

public class TankCheckJob extends AbstractJob {

	@Getter
	private final static String description = "Check the tank and mark overdued tank to dirty";

	@Getter
	private final static String name = "Tank Check Job";

	@Autowired
	private TankCheckJobService jobService;

	@Override
	public void execute(JobExecutionContext context) throws JobExecutionException {
		jobService.executeJob();
	}

}
