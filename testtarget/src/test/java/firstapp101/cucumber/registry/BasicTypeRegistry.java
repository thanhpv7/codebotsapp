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
package firstapp101.cucumber.registry;

import io.cucumber.core.api.TypeRegistry;
import io.cucumber.core.api.TypeRegistryConfigurer;
import io.cucumber.cucumberexpressions.ParameterType;
import io.cucumber.cucumberexpressions.Transformer;
import lombok.extern.slf4j.Slf4j;

import java.util.Locale;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Cucumber type registry used to register handlers for string conversation when mapping between feature steps and
 * their definition.
 *
 * @see <a href="https://cucumber.io/docs/cucumber/configuration/#type-registry">Cucumber Type Registry</a>
 */
@Slf4j
public class BasicTypeRegistry implements TypeRegistryConfigurer {
	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	@Override
	public Locale locale() {
		log.debug("Setting up Cucumber locale");

		// % protected region % [Customise your locale here] off begin
		Locale locale = Locale.ENGLISH;
		// % protected region % [Customise your locale here] end

		log.debug("Finished setup Cucumber locale");

		return locale;
	}

	@Override
	public void configureTypeRegistry(TypeRegistry typeRegistry) {
		log.debug("Configuring Cucumber type registry");

		// % protected region % [Add any additional logic for configureTypeRegistry before the main body here] off begin
		// % protected region % [Add any additional logic for configureTypeRegistry before the main body here] end

		typeRegistry.defineParameterType(new ParameterType<>(
				"boolean",
				"true|false",
				Boolean.class,
				(Transformer<Boolean>) Boolean::valueOf
		));

		typeRegistry.defineParameterType(new ParameterType<>(
				"integer",
				"[0-9]+",
				Integer.class,
				(Transformer<Integer>) Integer::parseInt
		));

		typeRegistry.defineParameterType(new ParameterType<>(
				"Double",
				"[0-9]+\\.[0-9]+",
				Double.class,
				(Transformer<Double>) Double::parseDouble
		));

		// % protected region % [Add any additional logic for configureTypeRegistry after the main body here] off begin
		// % protected region % [Add any additional logic for configureTypeRegistry after the main body here] end

		log.debug("Configured Cucumber type registry");
	}
}

