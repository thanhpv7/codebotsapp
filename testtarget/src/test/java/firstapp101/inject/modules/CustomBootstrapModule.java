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
package firstapp101.inject.modules;

import firstapp101.inject.listeners.CustomLifecycleListener;
import com.netflix.governator.guice.BootstrapBinder;
import com.netflix.governator.guice.BootstrapModule;
import lombok.extern.slf4j.Slf4j;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Used to setup various functionality before Guice takes effect.
 *
 * @see <a href="https://github.com/Netflix/governator/wiki/Bootstrapping">LifecycleListener</a>
 * @see <a href="https://github.com/Netflix/governator/wiki/LifecycleListener">LifecycleListener</a>
 */
@Slf4j
public class CustomBootstrapModule implements BootstrapModule {
	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	@Override
	public void configure(BootstrapBinder binder) {
		log.trace("Configuring bootstrap binder");

		// % protected region % [Add any additional logic for configure before the main body here] off begin
		// % protected region % [Add any additional logic for configure before the main body here] end

		// % protected region % [Customise lifecycle listener here] off begin
		binder.bindLifecycleListener().to(CustomLifecycleListener.class);
		// % protected region % [Customise lifecycle listener here] end

		// % protected region % [Add any additional logic for configure after the main body here] off begin
		// % protected region % [Add any additional logic for configure after the main body here] end

		log.trace("Configured bootstrap binder");
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
