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
package firstapp101.cucumber.context;

import com.google.inject.Inject;
import cucumber.runtime.java.guice.ScenarioScoped;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

import java.util.HashMap;
import java.util.Map;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Context to be shared between multiple steps within a single scenario. This allows sharing of variables between those
 * steps for context keeping. A context will be created at the beginning of a scenario run and removed after it has been
 * run.
 */
@Slf4j
@ScenarioScoped
public class TestContext {
	/**
	 * Internal store. Use classes and keys to separate between different object types.
	 */
	private final Map<String, Object> store;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	@Inject
	public TestContext(
			// % protected region % [Add any additional constructor parameters here] off begin
			// % protected region % [Add any additional constructor parameters here] end
	) {
		// % protected region % [Add any additional logic before the main body here] off begin
		// % protected region % [Add any additional logic before the main body here] end

		store = new HashMap<>();

		// % protected region % [Add any additional logic after the main body here] off begin
		// % protected region % [Add any additional logic after the main body here] end
	}

	/**
	 * Storing an object with key into the context.
	 *
	 * @param key the key with which the object will be stored
	 * @param obj the actual object to be stored in the context
	 */
	public void put(@NonNull String key, @NonNull Object obj) {
		log.debug("Storing obj {} with key {}", obj.toString(), key);

		// % protected region % [Add any additional logic for put before the main body here] off begin
		// % protected region % [Add any additional logic for put before the main body here] end

		if (!store.containsKey(key)) {
			store.put(key, obj);
		}

		// % protected region % [Add any additional logic for put after the main body here] off begin
		// % protected region % [Add any additional logic for put after the main body here] end

		log.debug("Stored obj {} with key {}", obj.toString(), key);
	}

	/**
	 * Return the object in the context that has the given key.
	 *
	 * @param key the key with which the object is stored
	 */
	public Object get(@NonNull String key) {
		log.debug("Retrieving obj with key {}", key);

		// % protected region % [Add any additional logic for get before the main body here] off begin
		// % protected region % [Add any additional logic for get before the main body here] end

		Object obj = store.get(key);

		// % protected region % [Add any additional logic for get after the main body here] off begin
		// % protected region % [Add any additional logic for get after the main body here] end

		log.debug("Retrieved obj with key {}", key);

		return obj;
	}

	/**
	 * Remove the object that has the given key.
	 *
	 * @param key the key with which the object is stored
	 */
	public void remove(@NonNull String key) {
		log.debug("Removing object with key {}", key);

		// % protected region % [Add any additional logic for remove before the main body here] off begin
		// % protected region % [Add any additional logic for remove before the main body here] end

		store.remove(key);

		// % protected region % [Add any additional logic for remove after the main body here] off begin
		// % protected region % [Add any additional logic for remove after the main body here] end

		log.debug("Removed object with key {}", key);
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
