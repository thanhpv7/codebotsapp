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
package firstapp101.inject.injector;

import firstapp101.inject.modules.*;
import firstapp101.inject.modules.entities.*;
import com.google.inject.Injector;
import com.netflix.governator.guice.LifecycleInjector;
import cucumber.api.guice.CucumberModules;
import cucumber.runtime.java.guice.InjectorSource;
import lombok.extern.slf4j.Slf4j;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Custom injector source with all related modules.
 *
 * @see <a href="https://stackoverflow.com/questions/12404434/configuring-cucumber-guice">Cucumber Guice</a>
 */
@Slf4j
public class CustomInjectorSource implements InjectorSource {
	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	@Override
	public Injector getInjector() {
		log.trace("Creating new injector source");

		// % protected region % [Add any additional logic for getInjector before the main body here] off begin
		// % protected region % [Add any additional logic for getInjector before the main body here] end

		Injector injector = LifecycleInjector.builder()
				.withBootstrapModule(new CustomBootstrapModule())
				.withModules(
						new BaseModule(),
						new TankModule(),
						new SpeciesModule(),
						new FishModule(),
						new AdminModule(),
						new FishnaticModule(),
						new RoleModule(),
						new PrivilegeModule(),
						CucumberModules.createScenarioModule()
				)
				.build()
				.createInjector();

		// % protected region % [Add any additional logic for getInjector after the main body here] off begin
		// % protected region % [Add any additional logic for getInjector after the main body here] end

		log.trace("Created new injector source");

		return injector;
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
