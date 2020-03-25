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
 * Guice module for Role used to register providers for dependency injection.
 */
@Slf4j
@AllArgsConstructor
public class RoleModule extends AbstractModule {
	// % protected region % [Apply any additional class fields here] off begin
	// % protected region % [Apply any additional class fields here] end

	@Override
	protected void configure() {
		log.trace("Configuring RoleModule");

		super.configure();

		// % protected region % [Apply any additional configure steps here] off begin
		// % protected region % [Apply any additional configure steps here] end

		log.trace("Configured RoleModule");
	}

	/**
	 * Return a factory for mass data generation.
	 */
	@Provides
	public RoleEntityFactory roleEntityFactory(
			// % protected region % [Apply any additional injected arguments for roleEntityFactory here] off begin
			// % protected region % [Apply any additional injected arguments for roleEntityFactory here] end
			Injector injector
	) {
		log.trace("Creating RoleEntityFactory");

		// % protected region % [Apply any additional logic for roleEntityFactory before the main body here] off begin
		// % protected region % [Apply any additional logic for roleEntityFactory before the main body here] end

		RoleEntityFactory entityFactory = new RoleEntityFactory(
				// % protected region % [Apply any additional constructor arguments for RoleEntityFactory here] off begin
				// % protected region % [Apply any additional constructor arguments for RoleEntityFactory here] end
				injector
		);

		// % protected region % [Apply any additional logic for roleEntityFactory after the main body here] off begin
		// % protected region % [Apply any additional logic for roleEntityFactory after the main body here] end

		log.trace("Created RoleEntityFactory");

		return entityFactory;
	}

	/**
	 * Return an empty Role entity with no references set.
	 */
	@Provides
	@Named("roleEntityWithNoRef")
	public RoleEntity roleEntityWithNoRef(
			// % protected region % [Apply any additional constructor parameters for roleEntityWithNoRef here] off begin
			// % protected region % [Apply any additional constructor parameters for roleEntityWithNoRef here] end
			MockNeat mock
	) {
		log.trace("Creating entity of type RoleEntity with no reference");

		// % protected region % [Apply any additional logic for roleWithNoRef before the main body here] off begin
		// % protected region % [Apply any additional logic for roleWithNoRef before the main body here] end

		RoleEntity newEntity = new RoleEntity();
		newEntity.setId(UUID.randomUUID());
		newEntity.setCreated(OffsetDateTime.now());
		newEntity.setModified(OffsetDateTime.now());
		// % protected region % [Add customisation for name here] off begin
		newEntity.setName(mock.strings().get());
		// % protected region % [Add customisation for name here] end

		// % protected region % [Apply any additional logic for roleWithNoRef after the main body here] off begin
		// % protected region % [Apply any additional logic for roleWithNoRef after the main body here] end

		log.trace("Created entity of type RoleEntity with no reference");

		return newEntity;
	}

	/**
	 * Return a collection of Role entities with no reference at all.
	 */
	@Provides
	@Named("roleEntitiesWithNoRef")
	public Collection<RoleEntity> roleEntitiesWithNoRef(
		// % protected region % [Apply any additional constructor parameters for roleEntitiesWithNoRef here] off begin
		// % protected region % [Apply any additional constructor parameters for roleEntitiesWithNoRef here] end
		RoleEntityFactory roleEntityFactory
	) {
		log.trace("Creating entities of type RoleEntity with no reference");

		// % protected region % [Apply any additional logic for roleEntitiesWithNoRef before the main body here] off begin
		// % protected region % [Apply any additional logic for roleEntitiesWithNoRef before the main body here] end

		Collection<RoleEntity> newEntities = roleEntityFactory.createMultipleWithNoRef(10);

		// % protected region % [Apply any additional logic for roleEntitiesWithNoRef after the main body here] off begin
		// % protected region % [Apply any additional logic for roleEntitiesWithNoRef after the main body here] end

		log.trace("Created entities of type RoleEntity with no reference");

		return newEntities;
	}

	/**
	 * Return a Role entity with all references set.
	 */
	@Provides
	@Named("roleEntityWithRefs")
	public RoleEntity roleEntityWithRefs(
			// % protected region % [Apply any additional constructor parameters for roleEntityWithRefs here] off begin
			// % protected region % [Apply any additional constructor parameters for roleEntityWithRefs here] end
			Injector injector
	) {
		log.trace("Creating entity of type RoleEntity with references");

		// % protected region % [Apply any additional logic for roleEntityWithRefs before the main body here] off begin
		// % protected region % [Apply any additional logic for roleEntityWithRefs before the main body here] end

		RoleEntity roleEntity = injector.getInstance(Key.get(RoleEntity.class, Names.named("roleEntityWithNoRef")));

		// % protected region % [Apply any additional logic for roleEntityWithRefs after the main body here] off begin
		// % protected region % [Apply any additional logic for roleEntityWithRefs after the main body here] end

		log.trace("Created entity of type RoleEntity with references");

		return roleEntity;
	}

	/**
	 * Return a collection of Role entities with all references set.
	 */
	@Provides
	@Named("roleEntitiesWithRefs")
	public Collection<RoleEntity> roleEntitiesWithRefs(
		// % protected region % [Apply any additional constructor parameters for roleEntitiesWithRefs here] off begin
		// % protected region % [Apply any additional constructor parameters for roleEntitiesWithRefs here] end
		RoleEntityFactory roleEntityFactory
	) {
		log.trace("Creating entities of type RoleEntity with references");

		// % protected region % [Apply any additional logic for roleEntitiesWithNoRef before the main body here] off begin
		// % protected region % [Apply any additional logic for roleEntitiesWithNoRef before the main body here] end

		Collection<RoleEntity> newEntities = roleEntityFactory.createMultipleWithRefs(10);

		// % protected region % [Apply any additional logic for roleEntitiesWithNoRef after the main body here] off begin
		// % protected region % [Apply any additional logic for roleEntitiesWithNoRef after the main body here] end

		log.trace("Created entities of type RoleEntity with references");

		return newEntities;
	}

	// % protected region % [Apply any additional class methods here] off begin
	// % protected region % [Apply any additional class methods here] end
}
