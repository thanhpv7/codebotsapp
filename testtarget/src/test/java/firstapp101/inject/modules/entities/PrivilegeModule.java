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
 * Guice module for Privilege used to register providers for dependency injection.
 */
@Slf4j
@AllArgsConstructor
public class PrivilegeModule extends AbstractModule {
	// % protected region % [Apply any additional class fields here] off begin
	// % protected region % [Apply any additional class fields here] end

	@Override
	protected void configure() {
		log.trace("Configuring PrivilegeModule");

		super.configure();

		// % protected region % [Apply any additional configure steps here] off begin
		// % protected region % [Apply any additional configure steps here] end

		log.trace("Configured PrivilegeModule");
	}

	/**
	 * Return a factory for mass data generation.
	 */
	@Provides
	public PrivilegeEntityFactory privilegeEntityFactory(
			// % protected region % [Apply any additional injected arguments for privilegeEntityFactory here] off begin
			// % protected region % [Apply any additional injected arguments for privilegeEntityFactory here] end
			Injector injector
	) {
		log.trace("Creating PrivilegeEntityFactory");

		// % protected region % [Apply any additional logic for privilegeEntityFactory before the main body here] off begin
		// % protected region % [Apply any additional logic for privilegeEntityFactory before the main body here] end

		PrivilegeEntityFactory entityFactory = new PrivilegeEntityFactory(
				// % protected region % [Apply any additional constructor arguments for PrivilegeEntityFactory here] off begin
				// % protected region % [Apply any additional constructor arguments for PrivilegeEntityFactory here] end
				injector
		);

		// % protected region % [Apply any additional logic for privilegeEntityFactory after the main body here] off begin
		// % protected region % [Apply any additional logic for privilegeEntityFactory after the main body here] end

		log.trace("Created PrivilegeEntityFactory");

		return entityFactory;
	}

	/**
	 * Return an empty Privilege entity with no references set.
	 */
	@Provides
	@Named("privilegeEntityWithNoRef")
	public PrivilegeEntity privilegeEntityWithNoRef(
			// % protected region % [Apply any additional constructor parameters for privilegeEntityWithNoRef here] off begin
			// % protected region % [Apply any additional constructor parameters for privilegeEntityWithNoRef here] end
			MockNeat mock
	) {
		log.trace("Creating entity of type PrivilegeEntity with no reference");

		// % protected region % [Apply any additional logic for privilegeWithNoRef before the main body here] off begin
		// % protected region % [Apply any additional logic for privilegeWithNoRef before the main body here] end

		PrivilegeEntity newEntity = new PrivilegeEntity();
		newEntity.setId(UUID.randomUUID());
		newEntity.setCreated(OffsetDateTime.now());
		newEntity.setModified(OffsetDateTime.now());
		// % protected region % [Add customisation for name here] off begin
		String randomStringforName = mock.strings().get().substring(0,10);
		newEntity.setName(randomStringforName);
		// % protected region % [Add customisation for name here] end
		// % protected region % [Add customisation for target entity here] off begin
		String randomStringforTargetEntity = mock.strings().get().substring(0,10);
		newEntity.setTargetEntity(randomStringforTargetEntity);
		// % protected region % [Add customisation for target entity here] end
		// % protected region % [Add customisation for allow create here] off begin
		newEntity.setAllowCreate(mock.bools().get());
		// % protected region % [Add customisation for allow create here] end
		// % protected region % [Add customisation for allow read here] off begin
		newEntity.setAllowRead(mock.bools().get());
		// % protected region % [Add customisation for allow read here] end
		// % protected region % [Add customisation for allow update here] off begin
		newEntity.setAllowUpdate(mock.bools().get());
		// % protected region % [Add customisation for allow update here] end
		// % protected region % [Add customisation for allow delete here] off begin
		newEntity.setAllowDelete(mock.bools().get());
		// % protected region % [Add customisation for allow delete here] end

		// % protected region % [Apply any additional logic for privilegeWithNoRef after the main body here] off begin
		// % protected region % [Apply any additional logic for privilegeWithNoRef after the main body here] end

		log.trace("Created entity of type PrivilegeEntity with no reference");

		return newEntity;
	}

	/**
	 * Return a collection of Privilege entities with no reference at all.
	 */
	@Provides
	@Named("privilegeEntitiesWithNoRef")
	public Collection<PrivilegeEntity> privilegeEntitiesWithNoRef(
		// % protected region % [Apply any additional constructor parameters for privilegeEntitiesWithNoRef here] off begin
		// % protected region % [Apply any additional constructor parameters for privilegeEntitiesWithNoRef here] end
		PrivilegeEntityFactory privilegeEntityFactory
	) {
		log.trace("Creating entities of type PrivilegeEntity with no reference");

		// % protected region % [Apply any additional logic for privilegeEntitiesWithNoRef before the main body here] off begin
		// % protected region % [Apply any additional logic for privilegeEntitiesWithNoRef before the main body here] end

		Collection<PrivilegeEntity> newEntities = privilegeEntityFactory.createMultipleWithNoRef(10);

		// % protected region % [Apply any additional logic for privilegeEntitiesWithNoRef after the main body here] off begin
		// % protected region % [Apply any additional logic for privilegeEntitiesWithNoRef after the main body here] end

		log.trace("Created entities of type PrivilegeEntity with no reference");

		return newEntities;
	}

	/**
	 * Return a Privilege entity with all references set.
	 */
	@Provides
	@Named("privilegeEntityWithRefs")
	public PrivilegeEntity privilegeEntityWithRefs(
			// % protected region % [Apply any additional constructor parameters for privilegeEntityWithRefs here] off begin
			// % protected region % [Apply any additional constructor parameters for privilegeEntityWithRefs here] end
			Injector injector
	) {
		log.trace("Creating entity of type PrivilegeEntity with references");

		// % protected region % [Apply any additional logic for privilegeEntityWithRefs before the main body here] off begin
		// % protected region % [Apply any additional logic for privilegeEntityWithRefs before the main body here] end

		PrivilegeEntity privilegeEntity = injector.getInstance(Key.get(PrivilegeEntity.class, Names.named("privilegeEntityWithNoRef")));

		// % protected region % [Apply any additional logic for privilegeEntityWithRefs after the main body here] off begin
		// % protected region % [Apply any additional logic for privilegeEntityWithRefs after the main body here] end

		log.trace("Created entity of type PrivilegeEntity with references");

		return privilegeEntity;
	}

	/**
	 * Return a collection of Privilege entities with all references set.
	 */
	@Provides
	@Named("privilegeEntitiesWithRefs")
	public Collection<PrivilegeEntity> privilegeEntitiesWithRefs(
		// % protected region % [Apply any additional constructor parameters for privilegeEntitiesWithRefs here] off begin
		// % protected region % [Apply any additional constructor parameters for privilegeEntitiesWithRefs here] end
		PrivilegeEntityFactory privilegeEntityFactory
	) {
		log.trace("Creating entities of type PrivilegeEntity with references");

		// % protected region % [Apply any additional logic for privilegeEntitiesWithNoRef before the main body here] off begin
		// % protected region % [Apply any additional logic for privilegeEntitiesWithNoRef before the main body here] end

		Collection<PrivilegeEntity> newEntities = privilegeEntityFactory.createMultipleWithRefs(10);

		// % protected region % [Apply any additional logic for privilegeEntitiesWithNoRef after the main body here] off begin
		// % protected region % [Apply any additional logic for privilegeEntitiesWithNoRef after the main body here] end

		log.trace("Created entities of type PrivilegeEntity with references");

		return newEntities;
	}

	// % protected region % [Apply any additional class methods here] off begin
	// % protected region % [Apply any additional class methods here] end
}
