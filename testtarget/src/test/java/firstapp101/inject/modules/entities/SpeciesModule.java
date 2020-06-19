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
package firstapp101.inject.modules.entities;

import firstapp101.entities.*;
import firstapp101.entities.enums.*;
import firstapp101.inject.factories.*;
import com.google.inject.AbstractModule;
import com.google.inject.Injector;
import com.google.inject.Key;
import com.google.inject.Provides;
import com.google.inject.name.Named;
import com.google.inject.name.Names;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.andreinc.mockneat.MockNeat;

import java.time.OffsetDateTime;
import java.util.Collection;
import java.util.UUID;

// % protected region % [Apply any additional imports here] off begin
// % protected region % [Apply any additional imports here] end

/**
 * Guice module for Species used to register providers for dependency injection.
 */
@Slf4j
@AllArgsConstructor
public class SpeciesModule extends AbstractModule {
	// % protected region % [Apply any additional class fields here] off begin
	// % protected region % [Apply any additional class fields here] end

	@Override
	protected void configure() {
		log.trace("Configuring SpeciesModule");

		super.configure();

		// % protected region % [Apply any additional configure steps here] off begin
		// % protected region % [Apply any additional configure steps here] end

		log.trace("Configured SpeciesModule");
	}

	/**
	 * Return a factory for mass data generation.
	 */
	@Provides
	public SpeciesEntityFactory speciesEntityFactory(
			// % protected region % [Apply any additional injected arguments for speciesEntityFactory here] off begin
			// % protected region % [Apply any additional injected arguments for speciesEntityFactory here] end
			Injector injector
	) {
		log.trace("Creating SpeciesEntityFactory");

		// % protected region % [Apply any additional logic for speciesEntityFactory before the main body here] off begin
		// % protected region % [Apply any additional logic for speciesEntityFactory before the main body here] end

		SpeciesEntityFactory entityFactory = new SpeciesEntityFactory(
				// % protected region % [Apply any additional constructor arguments for SpeciesEntityFactory here] off begin
				// % protected region % [Apply any additional constructor arguments for SpeciesEntityFactory here] end
				injector
		);

		// % protected region % [Apply any additional logic for speciesEntityFactory after the main body here] off begin
		// % protected region % [Apply any additional logic for speciesEntityFactory after the main body here] end

		log.trace("Created SpeciesEntityFactory");

		return entityFactory;
	}

	/**
	 * Return an empty Species entity with no references set.
	 */
	@Provides
	@Named("speciesEntityWithNoRef")
	public SpeciesEntity speciesEntityWithNoRef(
			// % protected region % [Apply any additional constructor parameters for speciesEntityWithNoRef here] off begin
			// % protected region % [Apply any additional constructor parameters for speciesEntityWithNoRef here] end
			MockNeat mock
	) {
		log.trace("Creating entity of type SpeciesEntity with no reference");

		// % protected region % [Apply any additional logic for speciesWithNoRef before the main body here] off begin
		// % protected region % [Apply any additional logic for speciesWithNoRef before the main body here] end

		SpeciesEntity newEntity = new SpeciesEntity();
		newEntity.setId(UUID.randomUUID());
		newEntity.setCreated(OffsetDateTime.now());
		newEntity.setModified(OffsetDateTime.now());
		// % protected region % [Add customisation for Name here] off begin
		String randomStringforName = mock.strings().get().substring(0,10);
		newEntity.setName(randomStringforName);
		// % protected region % [Add customisation for Name here] end

		// % protected region % [Apply any additional logic for speciesWithNoRef after the main body here] off begin
		// % protected region % [Apply any additional logic for speciesWithNoRef after the main body here] end

		log.trace("Created entity of type SpeciesEntity with no reference");

		return newEntity;
	}

	/**
	 * Return a collection of Species entities with no reference at all.
	 */
	@Provides
	@Named("speciesEntitiesWithNoRef")
	public Collection<SpeciesEntity> speciesEntitiesWithNoRef(
		// % protected region % [Apply any additional constructor parameters for speciesEntitiesWithNoRef here] off begin
		// % protected region % [Apply any additional constructor parameters for speciesEntitiesWithNoRef here] end
		SpeciesEntityFactory speciesEntityFactory
	) {
		log.trace("Creating entities of type SpeciesEntity with no reference");

		// % protected region % [Apply any additional logic for speciesEntitiesWithNoRef before the main body here] off begin
		// % protected region % [Apply any additional logic for speciesEntitiesWithNoRef before the main body here] end

		Collection<SpeciesEntity> newEntities = speciesEntityFactory.createMultipleWithNoRef(10);

		// % protected region % [Apply any additional logic for speciesEntitiesWithNoRef after the main body here] off begin
		// % protected region % [Apply any additional logic for speciesEntitiesWithNoRef after the main body here] end

		log.trace("Created entities of type SpeciesEntity with no reference");

		return newEntities;
	}

	/**
	 * Return a Species entity with all references set.
	 */
	@Provides
	@Named("speciesEntityWithRefs")
	public SpeciesEntity speciesEntityWithRefs(
			// % protected region % [Apply any additional constructor parameters for speciesEntityWithRefs here] off begin
			// % protected region % [Apply any additional constructor parameters for speciesEntityWithRefs here] end
			Injector injector
	) {
		log.trace("Creating entity of type SpeciesEntity with references");

		// % protected region % [Apply any additional logic for speciesEntityWithRefs before the main body here] off begin
		// % protected region % [Apply any additional logic for speciesEntityWithRefs before the main body here] end

		SpeciesEntity speciesEntity = injector.getInstance(Key.get(SpeciesEntity.class, Names.named("speciesEntityWithNoRef")));

		// % protected region % [Apply any additional logic for speciesEntityWithRefs after the main body here] off begin
		// % protected region % [Apply any additional logic for speciesEntityWithRefs after the main body here] end

		log.trace("Created entity of type SpeciesEntity with references");

		return speciesEntity;
	}

	/**
	 * Return a collection of Species entities with all references set.
	 */
	@Provides
	@Named("speciesEntitiesWithRefs")
	public Collection<SpeciesEntity> speciesEntitiesWithRefs(
		// % protected region % [Apply any additional constructor parameters for speciesEntitiesWithRefs here] off begin
		// % protected region % [Apply any additional constructor parameters for speciesEntitiesWithRefs here] end
		SpeciesEntityFactory speciesEntityFactory
	) {
		log.trace("Creating entities of type SpeciesEntity with references");

		// % protected region % [Apply any additional logic for speciesEntitiesWithNoRef before the main body here] off begin
		// % protected region % [Apply any additional logic for speciesEntitiesWithNoRef before the main body here] end

		Collection<SpeciesEntity> newEntities = speciesEntityFactory.createMultipleWithRefs(10);

		// % protected region % [Apply any additional logic for speciesEntitiesWithNoRef after the main body here] off begin
		// % protected region % [Apply any additional logic for speciesEntitiesWithNoRef after the main body here] end

		log.trace("Created entities of type SpeciesEntity with references");

		return newEntities;
	}

	// % protected region % [Apply any additional class methods here] off begin
	// % protected region % [Apply any additional class methods here] end
}
