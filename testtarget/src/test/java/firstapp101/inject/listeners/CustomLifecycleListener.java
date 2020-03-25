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
package firstapp101.inject.listeners;

import com.google.inject.TypeLiteral;
import com.netflix.governator.lifecycle.LifecycleListener;
import com.netflix.governator.lifecycle.LifecycleState;
import lombok.extern.slf4j.Slf4j;

import java.util.concurrent.TimeUnit;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Custom lifecycle listener to allow us to tap into object lifecycle through out the dependency injection process.
 *
 * @see <a href="https://github.com/Netflix/governator/wiki/LifecycleListener">Lifecycle Listener</a>
 */
@Slf4j
public class CustomLifecycleListener implements LifecycleListener {
	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	/**
	 * @inheritDoc
	 */
	@Override
	public <T> void objectInjected(TypeLiteral<T> type, T obj) {
		// % protected region % [Add any additional logic for objectInjected before the main body here] off begin
		// % protected region % [Add any additional logic for objectInjected before the main body here] end

		log.trace("Injected {}", obj.toString());

		// % protected region % [Add any additional logic for objectInjected after the main body here] off begin
		// % protected region % [Add any additional logic for objectInjected after the main body here] end
	}

	/**
	 * @inheritDoc
	 */
	@Override
	public <T> void objectInjected(TypeLiteral<T> type, T obj, long duration, TimeUnit units) {
		// % protected region % [Add any additional logic for objectInjected with time unit before the main body here] off begin
		// % protected region % [Add any additional logic for objectInjected with time unit before the main body here] end

		log.trace("Injected {}", obj.toString());

		// % protected region % [Add any additional logic for objectInjected with time unit after the main body here] off begin
		// % protected region % [Add any additional logic for objectInjected with time unit after the main body here] end
	}

	/**
	 * @inheritDoc
	 */
	@Override
	public void stateChanged(Object obj, LifecycleState newState) {
		// % protected region % [Add any additional logic for stateChanged before the main body here] off begin
		// % protected region % [Add any additional logic for stateChanged before the main body here] end

		log.trace("Object state {} changed", obj.toString());

		// % protected region % [Add any additional logic for stateChanged after the main body here] off begin
		// % protected region % [Add any additional logic for stateChanged after the main body here] end
	}

	/**
	 * @inheritDoc
	 */
	@Override
	public <T> void objectInjecting(TypeLiteral<T> type) {
		// % protected region % [Add any additional logic for objectInjecting before the main body here] off begin
		// % protected region % [Add any additional logic for objectInjecting before the main body here] end

		log.trace("Injecting object of type {}", type.getRawType().getSimpleName());

		// % protected region % [Add any additional logic for objectInjecting after the main body here] off begin
		// % protected region % [Add any additional logic for objectInjecting after the main body here] end
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
