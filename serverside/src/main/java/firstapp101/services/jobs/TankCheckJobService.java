package firstapp101.services.jobs;

import firstapp101.configs.security.helpers.AnonymousHelper;
import firstapp101.entities.TankEntity;
import firstapp101.services.TankService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Service;


@Service
@ConditionalOnProperty(name = "quartz.enabled")
@Slf4j
public class TankCheckJobService implements JobService {

	private final TankService tankService;

	@Autowired
	public TankCheckJobService(TankService tankService) {
		this.tankService = tankService;
	}

	public void executeJob() {
		/*
		 * The anonymous helper is a tool that
		 * allows us to bypass any security restrictions
		 * which is useful as a scheduled task has not got
		 * an authentication profile.
		 * */
		AnonymousHelper.runAnonymously(() -> {
			processOverdueCleanTank();
		});
	}

	/**
	 * Marks overdue tanks to dirty
	 */
	private void processOverdueCleanTank() {
		var tanks = this.tankService.findByCleanToBeOverdue();
		tanks.forEach(TankEntity::markTankAsDirty);
		this.tankService.saveAll(tanks);

		log.info("Marked {} as dirty", tanks.size());
	}
}
