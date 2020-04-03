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
 * Guice module for Tank used to register providers for dependency injection.
 */
@Slf4j
@AllArgsConstructor
public class TankModule extends AbstractModule {
	// % protected region % [Apply any additional class fields here] off begin
	// % protected region % [Apply any additional class fields here] end

	@Override
	protected void configure() {
		log.trace("Configuring TankModule");

		super.configure();

		// % protected region % [Apply any additional configure steps here] off begin
		// % protected region % [Apply any additional configure steps here] end

		log.trace("Configured TankModule");
	}

	/**
	 * Return a factory for mass data generation.
	 */
	@Provides
	public TankEntityFactory tankEntityFactory(
			// % protected region % [Apply any additional injected arguments for tankEntityFactory here] off begin
			// % protected region % [Apply any additional injected arguments for tankEntityFactory here] end
			Injector injector
	) {
		log.trace("Creating TankEntityFactory");

		// % protected region % [Apply any additional logic for tankEntityFactory before the main body here] off begin
		// % protected region % [Apply any additional logic for tankEntityFactory before the main body here] end

		TankEntityFactory entityFactory = new TankEntityFactory(
				// % protected region % [Apply any additional constructor arguments for TankEntityFactory here] off begin
				// % protected region % [Apply any additional constructor arguments for TankEntityFactory here] end
				injector
		);

		// % protected region % [Apply any additional logic for tankEntityFactory after the main body here] off begin
		// % protected region % [Apply any additional logic for tankEntityFactory after the main body here] end

		log.trace("Created TankEntityFactory");

		return entityFactory;
	}

	/**
	 * Return an empty Tank entity with no references set.
	 */
	@Provides
	@Named("tankEntityWithNoRef")
	public TankEntity tankEntityWithNoRef(
			// % protected region % [Apply any additional constructor parameters for tankEntityWithNoRef here] off begin
			// % protected region % [Apply any additional constructor parameters for tankEntityWithNoRef here] end
			MockNeat mock
	) {
		log.trace("Creating entity of type TankEntity with no reference");

		// % protected region % [Apply any additional logic for tankWithNoRef before the main body here] off begin
		// % protected region % [Apply any additional logic for tankWithNoRef before the main body here] end

		TankEntity newEntity = new TankEntity();
		newEntity.setId(UUID.randomUUID());
		newEntity.setCreated(OffsetDateTime.now());
		newEntity.setModified(OffsetDateTime.now());
		// % protected region % [Add customisation for Name here] off begin
		newEntity.setName(mock.strings().get());
		// % protected region % [Add customisation for Name here] end
		// % protected region % [Add customisation for Width here] off begin
		newEntity.setWidth(mock.doubles().get());
		// % protected region % [Add customisation for Width here] end
		// % protected region % [Add customisation for Length here] off begin
		newEntity.setLength(mock.doubles().get());
		// % protected region % [Add customisation for Length here] end
		// % protected region % [Add customisation for Height here] off begin
		newEntity.setHeight(mock.doubles().get());
		// % protected region % [Add customisation for Height here] end
		// % protected region % [Add customisation for Last Cleaned here] off begin
		newEntity.setLastCleaned(OffsetDateTime.now());
		// % protected region % [Add customisation for Last Cleaned here] end
		// % protected region % [Add customisation for Clean here] off begin
		newEntity.setClean(CleanEnum.CLEANED);
		// % protected region % [Add customisation for Clean here] end

		// % protected region % [Apply any additional logic for tankWithNoRef after the main body here] off begin
		// % protected region % [Apply any additional logic for tankWithNoRef after the main body here] end

		log.trace("Created entity of type TankEntity with no reference");

		return newEntity;
	}

	/**
	 * Return a collection of Tank entities with no reference at all.
	 */
	@Provides
	@Named("tankEntitiesWithNoRef")
	public Collection<TankEntity> tankEntitiesWithNoRef(
		// % protected region % [Apply any additional constructor parameters for tankEntitiesWithNoRef here] off begin
		// % protected region % [Apply any additional constructor parameters for tankEntitiesWithNoRef here] end
		TankEntityFactory tankEntityFactory
	) {
		log.trace("Creating entities of type TankEntity with no reference");

		// % protected region % [Apply any additional logic for tankEntitiesWithNoRef before the main body here] off begin
		// % protected region % [Apply any additional logic for tankEntitiesWithNoRef before the main body here] end

		Collection<TankEntity> newEntities = tankEntityFactory.createMultipleWithNoRef(10);

		// % protected region % [Apply any additional logic for tankEntitiesWithNoRef after the main body here] off begin
		// % protected region % [Apply any additional logic for tankEntitiesWithNoRef after the main body here] end

		log.trace("Created entities of type TankEntity with no reference");

		return newEntities;
	}

	/**
	 * Return a Tank entity with all references set.
	 */
	@Provides
	@Named("tankEntityWithRefs")
	public TankEntity tankEntityWithRefs(
			// % protected region % [Apply any additional constructor parameters for tankEntityWithRefs here] off begin
			// % protected region % [Apply any additional constructor parameters for tankEntityWithRefs here] end
			Injector injector
	) {
		log.trace("Creating entity of type TankEntity with references");

		// % protected region % [Apply any additional logic for tankEntityWithRefs before the main body here] off begin
		// % protected region % [Apply any additional logic for tankEntityWithRefs before the main body here] end

		TankEntity tankEntity = injector.getInstance(Key.get(TankEntity.class, Names.named("tankEntityWithNoRef")));

		// % protected region % [Apply any additional logic for tankEntityWithRefs after the main body here] off begin
		// % protected region % [Apply any additional logic for tankEntityWithRefs after the main body here] end

		log.trace("Created entity of type TankEntity with references");

		return tankEntity;
	}

	/**
	 * Return a collection of Tank entities with all references set.
	 */
	@Provides
	@Named("tankEntitiesWithRefs")
	public Collection<TankEntity> tankEntitiesWithRefs(
		// % protected region % [Apply any additional constructor parameters for tankEntitiesWithRefs here] off begin
		// % protected region % [Apply any additional constructor parameters for tankEntitiesWithRefs here] end
		TankEntityFactory tankEntityFactory
	) {
		log.trace("Creating entities of type TankEntity with references");

		// % protected region % [Apply any additional logic for tankEntitiesWithNoRef before the main body here] off begin
		// % protected region % [Apply any additional logic for tankEntitiesWithNoRef before the main body here] end

		Collection<TankEntity> newEntities = tankEntityFactory.createMultipleWithRefs(10);

		// % protected region % [Apply any additional logic for tankEntitiesWithNoRef after the main body here] off begin
		// % protected region % [Apply any additional logic for tankEntitiesWithNoRef after the main body here] end

		log.trace("Created entities of type TankEntity with references");

		return newEntities;
	}

	// % protected region % [Apply any additional class methods here] off begin
	// % protected region % [Apply any additional class methods here] end
}
