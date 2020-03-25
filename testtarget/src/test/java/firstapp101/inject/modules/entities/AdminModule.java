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
 * Guice module for Admin used to register providers for dependency injection.
 */
@Slf4j
@AllArgsConstructor
public class AdminModule extends AbstractModule {
	// % protected region % [Apply any additional class fields here] off begin
	// % protected region % [Apply any additional class fields here] end

	@Override
	protected void configure() {
		log.trace("Configuring AdminModule");

		super.configure();

		// % protected region % [Apply any additional configure steps here] off begin
		// % protected region % [Apply any additional configure steps here] end

		log.trace("Configured AdminModule");
	}

	/**
	 * Return a factory for mass data generation.
	 */
	@Provides
	public AdminEntityFactory adminEntityFactory(
			// % protected region % [Apply any additional injected arguments for adminEntityFactory here] off begin
			// % protected region % [Apply any additional injected arguments for adminEntityFactory here] end
			Injector injector
	) {
		log.trace("Creating AdminEntityFactory");

		// % protected region % [Apply any additional logic for adminEntityFactory before the main body here] off begin
		// % protected region % [Apply any additional logic for adminEntityFactory before the main body here] end

		AdminEntityFactory entityFactory = new AdminEntityFactory(
				// % protected region % [Apply any additional constructor arguments for AdminEntityFactory here] off begin
				// % protected region % [Apply any additional constructor arguments for AdminEntityFactory here] end
				injector
		);

		// % protected region % [Apply any additional logic for adminEntityFactory after the main body here] off begin
		// % protected region % [Apply any additional logic for adminEntityFactory after the main body here] end

		log.trace("Created AdminEntityFactory");

		return entityFactory;
	}

	/**
	 * Return an empty Admin entity with no references set.
	 */
	@Provides
	@Named("adminEntityWithNoRef")
	public AdminEntity adminEntityWithNoRef(
			// % protected region % [Apply any additional constructor parameters for adminEntityWithNoRef here] off begin
			// % protected region % [Apply any additional constructor parameters for adminEntityWithNoRef here] end
			MockNeat mock
	) {
		log.trace("Creating entity of type AdminEntity with no reference");

		// % protected region % [Apply any additional logic for adminWithNoRef before the main body here] off begin
		// % protected region % [Apply any additional logic for adminWithNoRef before the main body here] end

		AdminEntity newEntity = new AdminEntity();
		newEntity.setId(UUID.randomUUID());
		newEntity.setCreated(OffsetDateTime.now());
		newEntity.setModified(OffsetDateTime.now());
		// % protected region % [Add customisation for first name here] off begin
		newEntity.setFirstName(mock.strings().get());
		// % protected region % [Add customisation for first name here] end
		// % protected region % [Add customisation for last name here] off begin
		newEntity.setLastName(mock.strings().get());
		// % protected region % [Add customisation for last name here] end
		// % protected region % [Add customisation for username here] off begin
		newEntity.setUsername(mock.strings().get());
		// % protected region % [Add customisation for username here] end
		// % protected region % [Add customisation for password here] off begin
		newEntity.setPassword(mock.strings().get());
		// % protected region % [Add customisation for password here] end
		// % protected region % [Add customisation for Gender here] off begin
		newEntity.setGender(GenderEnum.MALE);
		// % protected region % [Add customisation for Gender here] end
		// % protected region % [Add customisation for Email here] off begin
		newEntity.setEmail(mock.strings().get());
		// % protected region % [Add customisation for Email here] end
		// % protected region % [Add customisation for Is Archived here] off begin
		newEntity.setIsArchived(mock.bools().get());
		// % protected region % [Add customisation for Is Archived here] end

		// % protected region % [Apply any additional logic for adminWithNoRef after the main body here] off begin
		// % protected region % [Apply any additional logic for adminWithNoRef after the main body here] end

		log.trace("Created entity of type AdminEntity with no reference");

		return newEntity;
	}

	/**
	 * Return a collection of Admin entities with no reference at all.
	 */
	@Provides
	@Named("adminEntitiesWithNoRef")
	public Collection<AdminEntity> adminEntitiesWithNoRef(
		// % protected region % [Apply any additional constructor parameters for adminEntitiesWithNoRef here] off begin
		// % protected region % [Apply any additional constructor parameters for adminEntitiesWithNoRef here] end
		AdminEntityFactory adminEntityFactory
	) {
		log.trace("Creating entities of type AdminEntity with no reference");

		// % protected region % [Apply any additional logic for adminEntitiesWithNoRef before the main body here] off begin
		// % protected region % [Apply any additional logic for adminEntitiesWithNoRef before the main body here] end

		Collection<AdminEntity> newEntities = adminEntityFactory.createMultipleWithNoRef(10);

		// % protected region % [Apply any additional logic for adminEntitiesWithNoRef after the main body here] off begin
		// % protected region % [Apply any additional logic for adminEntitiesWithNoRef after the main body here] end

		log.trace("Created entities of type AdminEntity with no reference");

		return newEntities;
	}

	/**
	 * Return a Admin entity with all references set.
	 */
	@Provides
	@Named("adminEntityWithRefs")
	public AdminEntity adminEntityWithRefs(
			// % protected region % [Apply any additional constructor parameters for adminEntityWithRefs here] off begin
			// % protected region % [Apply any additional constructor parameters for adminEntityWithRefs here] end
			Injector injector
	) {
		log.trace("Creating entity of type AdminEntity with references");

		// % protected region % [Apply any additional logic for adminEntityWithRefs before the main body here] off begin
		// % protected region % [Apply any additional logic for adminEntityWithRefs before the main body here] end

		AdminEntity adminEntity = injector.getInstance(Key.get(AdminEntity.class, Names.named("adminEntityWithNoRef")));

		// % protected region % [Apply any additional logic for adminEntityWithRefs after the main body here] off begin
		// % protected region % [Apply any additional logic for adminEntityWithRefs after the main body here] end

		log.trace("Created entity of type AdminEntity with references");

		return adminEntity;
	}

	/**
	 * Return a collection of Admin entities with all references set.
	 */
	@Provides
	@Named("adminEntitiesWithRefs")
	public Collection<AdminEntity> adminEntitiesWithRefs(
		// % protected region % [Apply any additional constructor parameters for adminEntitiesWithRefs here] off begin
		// % protected region % [Apply any additional constructor parameters for adminEntitiesWithRefs here] end
		AdminEntityFactory adminEntityFactory
	) {
		log.trace("Creating entities of type AdminEntity with references");

		// % protected region % [Apply any additional logic for adminEntitiesWithNoRef before the main body here] off begin
		// % protected region % [Apply any additional logic for adminEntitiesWithNoRef before the main body here] end

		Collection<AdminEntity> newEntities = adminEntityFactory.createMultipleWithRefs(10);

		// % protected region % [Apply any additional logic for adminEntitiesWithNoRef after the main body here] off begin
		// % protected region % [Apply any additional logic for adminEntitiesWithNoRef after the main body here] end

		log.trace("Created entities of type AdminEntity with references");

		return newEntities;
	}

	// % protected region % [Apply any additional class methods here] off begin
	// % protected region % [Apply any additional class methods here] end
}
