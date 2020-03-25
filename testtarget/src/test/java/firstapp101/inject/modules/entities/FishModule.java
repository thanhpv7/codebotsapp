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
 * Guice module for Fish used to register providers for dependency injection.
 */
@Slf4j
@AllArgsConstructor
public class FishModule extends AbstractModule {
	// % protected region % [Apply any additional class fields here] off begin
	// % protected region % [Apply any additional class fields here] end

	@Override
	protected void configure() {
		log.trace("Configuring FishModule");

		super.configure();

		// % protected region % [Apply any additional configure steps here] off begin
		// % protected region % [Apply any additional configure steps here] end

		log.trace("Configured FishModule");
	}

	/**
	 * Return a factory for mass data generation.
	 */
	@Provides
	public FishEntityFactory fishEntityFactory(
			// % protected region % [Apply any additional injected arguments for fishEntityFactory here] off begin
			// % protected region % [Apply any additional injected arguments for fishEntityFactory here] end
			Injector injector
	) {
		log.trace("Creating FishEntityFactory");

		// % protected region % [Apply any additional logic for fishEntityFactory before the main body here] off begin
		// % protected region % [Apply any additional logic for fishEntityFactory before the main body here] end

		FishEntityFactory entityFactory = new FishEntityFactory(
				// % protected region % [Apply any additional constructor arguments for FishEntityFactory here] off begin
				// % protected region % [Apply any additional constructor arguments for FishEntityFactory here] end
				injector
		);

		// % protected region % [Apply any additional logic for fishEntityFactory after the main body here] off begin
		// % protected region % [Apply any additional logic for fishEntityFactory after the main body here] end

		log.trace("Created FishEntityFactory");

		return entityFactory;
	}

	/**
	 * Return an empty Fish entity with no references set.
	 */
	@Provides
	@Named("fishEntityWithNoRef")
	public FishEntity fishEntityWithNoRef(
			// % protected region % [Apply any additional constructor parameters for fishEntityWithNoRef here] off begin
			// % protected region % [Apply any additional constructor parameters for fishEntityWithNoRef here] end
			MockNeat mock
	) {
		log.trace("Creating entity of type FishEntity with no reference");

		// % protected region % [Apply any additional logic for fishWithNoRef before the main body here] off begin
		// % protected region % [Apply any additional logic for fishWithNoRef before the main body here] end

		FishEntity newEntity = new FishEntity();
		newEntity.setId(UUID.randomUUID());
		newEntity.setCreated(OffsetDateTime.now());
		newEntity.setModified(OffsetDateTime.now());
		// % protected region % [Add customisation for Name here] off begin
		newEntity.setName(mock.strings().get());
		// % protected region % [Add customisation for Name here] end
		// % protected region % [Add customisation for Date of Birth here] off begin
		newEntity.setDateOfBirth(OffsetDateTime.now());
		// % protected region % [Add customisation for Date of Birth here] end
		// % protected region % [Add customisation for Alive here] off begin
		newEntity.setAlive(mock.bools().get());
		// % protected region % [Add customisation for Alive here] end

		// % protected region % [Apply any additional logic for fishWithNoRef after the main body here] off begin
		// % protected region % [Apply any additional logic for fishWithNoRef after the main body here] end

		log.trace("Created entity of type FishEntity with no reference");

		return newEntity;
	}

	/**
	 * Return a collection of Fish entities with no reference at all.
	 */
	@Provides
	@Named("fishEntitiesWithNoRef")
	public Collection<FishEntity> fishEntitiesWithNoRef(
		// % protected region % [Apply any additional constructor parameters for fishEntitiesWithNoRef here] off begin
		// % protected region % [Apply any additional constructor parameters for fishEntitiesWithNoRef here] end
		FishEntityFactory fishEntityFactory
	) {
		log.trace("Creating entities of type FishEntity with no reference");

		// % protected region % [Apply any additional logic for fishEntitiesWithNoRef before the main body here] off begin
		// % protected region % [Apply any additional logic for fishEntitiesWithNoRef before the main body here] end

		Collection<FishEntity> newEntities = fishEntityFactory.createMultipleWithNoRef(10);

		// % protected region % [Apply any additional logic for fishEntitiesWithNoRef after the main body here] off begin
		// % protected region % [Apply any additional logic for fishEntitiesWithNoRef after the main body here] end

		log.trace("Created entities of type FishEntity with no reference");

		return newEntities;
	}

	/**
	 * Return a Fish entity with all references set.
	 */
	@Provides
	@Named("fishEntityWithRefs")
	public FishEntity fishEntityWithRefs(
			// % protected region % [Apply any additional constructor parameters for fishEntityWithRefs here] off begin
			// % protected region % [Apply any additional constructor parameters for fishEntityWithRefs here] end
			Injector injector
	) {
		log.trace("Creating entity of type FishEntity with references");

		// % protected region % [Apply any additional logic for fishEntityWithRefs before the main body here] off begin
		// % protected region % [Apply any additional logic for fishEntityWithRefs before the main body here] end

		FishEntity fishEntity = injector.getInstance(Key.get(FishEntity.class, Names.named("fishEntityWithNoRef")));

		// % protected region % [Apply any additional logic for fishEntityWithRefs after the main body here] off begin
		// % protected region % [Apply any additional logic for fishEntityWithRefs after the main body here] end

		log.trace("Created entity of type FishEntity with references");

		return fishEntity;
	}

	/**
	 * Return a collection of Fish entities with all references set.
	 */
	@Provides
	@Named("fishEntitiesWithRefs")
	public Collection<FishEntity> fishEntitiesWithRefs(
		// % protected region % [Apply any additional constructor parameters for fishEntitiesWithRefs here] off begin
		// % protected region % [Apply any additional constructor parameters for fishEntitiesWithRefs here] end
		FishEntityFactory fishEntityFactory
	) {
		log.trace("Creating entities of type FishEntity with references");

		// % protected region % [Apply any additional logic for fishEntitiesWithNoRef before the main body here] off begin
		// % protected region % [Apply any additional logic for fishEntitiesWithNoRef before the main body here] end

		Collection<FishEntity> newEntities = fishEntityFactory.createMultipleWithRefs(10);

		// % protected region % [Apply any additional logic for fishEntitiesWithNoRef after the main body here] off begin
		// % protected region % [Apply any additional logic for fishEntitiesWithNoRef after the main body here] end

		log.trace("Created entities of type FishEntity with references");

		return newEntities;
	}

	// % protected region % [Apply any additional class methods here] off begin
	// % protected region % [Apply any additional class methods here] end
}
