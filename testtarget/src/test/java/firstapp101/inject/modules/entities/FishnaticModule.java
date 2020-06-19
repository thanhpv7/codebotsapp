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
 * Guice module for Fishnatic used to register providers for dependency injection.
 */
@Slf4j
@AllArgsConstructor
public class FishnaticModule extends AbstractModule {
	// % protected region % [Apply any additional class fields here] off begin
	// % protected region % [Apply any additional class fields here] end

	@Override
	protected void configure() {
		log.trace("Configuring FishnaticModule");

		super.configure();

		// % protected region % [Apply any additional configure steps here] off begin
		// % protected region % [Apply any additional configure steps here] end

		log.trace("Configured FishnaticModule");
	}

	/**
	 * Return a factory for mass data generation.
	 */
	@Provides
	public FishnaticEntityFactory fishnaticEntityFactory(
			// % protected region % [Apply any additional injected arguments for fishnaticEntityFactory here] off begin
			// % protected region % [Apply any additional injected arguments for fishnaticEntityFactory here] end
			Injector injector
	) {
		log.trace("Creating FishnaticEntityFactory");

		// % protected region % [Apply any additional logic for fishnaticEntityFactory before the main body here] off begin
		// % protected region % [Apply any additional logic for fishnaticEntityFactory before the main body here] end

		FishnaticEntityFactory entityFactory = new FishnaticEntityFactory(
				// % protected region % [Apply any additional constructor arguments for FishnaticEntityFactory here] off begin
				// % protected region % [Apply any additional constructor arguments for FishnaticEntityFactory here] end
				injector
		);

		// % protected region % [Apply any additional logic for fishnaticEntityFactory after the main body here] off begin
		// % protected region % [Apply any additional logic for fishnaticEntityFactory after the main body here] end

		log.trace("Created FishnaticEntityFactory");

		return entityFactory;
	}

	/**
	 * Return an empty Fishnatic entity with no references set.
	 */
	@Provides
	@Named("fishnaticEntityWithNoRef")
	public FishnaticEntity fishnaticEntityWithNoRef(
			// % protected region % [Apply any additional constructor parameters for fishnaticEntityWithNoRef here] off begin
			// % protected region % [Apply any additional constructor parameters for fishnaticEntityWithNoRef here] end
			MockNeat mock
	) {
		log.trace("Creating entity of type FishnaticEntity with no reference");

		// % protected region % [Apply any additional logic for fishnaticWithNoRef before the main body here] off begin
		// % protected region % [Apply any additional logic for fishnaticWithNoRef before the main body here] end

		FishnaticEntity newEntity = new FishnaticEntity();
		newEntity.setId(UUID.randomUUID());
		newEntity.setCreated(OffsetDateTime.now());
		newEntity.setModified(OffsetDateTime.now());
		// % protected region % [Add customisation for first name here] off begin
		String randomStringforFirstName = mock.strings().get().substring(0,10);
		newEntity.setFirstName(randomStringforFirstName);
		// % protected region % [Add customisation for first name here] end
		// % protected region % [Add customisation for last name here] off begin
		String randomStringforLastName = mock.strings().get().substring(0,10);
		newEntity.setLastName(randomStringforLastName);
		// % protected region % [Add customisation for last name here] end
		// % protected region % [Add customisation for username here] off begin
		String randomStringforUsername = mock.strings().get().substring(0,10);
		newEntity.setUsername(randomStringforUsername);
		// % protected region % [Add customisation for username here] end
		// % protected region % [Add customisation for password here] off begin
		String randomStringforPassword = mock.strings().get().substring(0,10);
		newEntity.setPassword(randomStringforPassword);
		// % protected region % [Add customisation for password here] end
		// % protected region % [Add customisation for Gender here] off begin
		newEntity.setGender(GenderEnum.MALE);
		// % protected region % [Add customisation for Gender here] end
		// % protected region % [Add customisation for Email here] off begin
		String randomStringforEmail = mock.strings().get().substring(0,10);
		newEntity.setEmail(randomStringforEmail);
		// % protected region % [Add customisation for Email here] end
		// % protected region % [Add customisation for Is Archived here] off begin
		newEntity.setIsArchived(mock.bools().get());
		// % protected region % [Add customisation for Is Archived here] end

		// % protected region % [Apply any additional logic for fishnaticWithNoRef after the main body here] off begin
		// % protected region % [Apply any additional logic for fishnaticWithNoRef after the main body here] end

		log.trace("Created entity of type FishnaticEntity with no reference");

		return newEntity;
	}

	/**
	 * Return a collection of Fishnatic entities with no reference at all.
	 */
	@Provides
	@Named("fishnaticEntitiesWithNoRef")
	public Collection<FishnaticEntity> fishnaticEntitiesWithNoRef(
		// % protected region % [Apply any additional constructor parameters for fishnaticEntitiesWithNoRef here] off begin
		// % protected region % [Apply any additional constructor parameters for fishnaticEntitiesWithNoRef here] end
		FishnaticEntityFactory fishnaticEntityFactory
	) {
		log.trace("Creating entities of type FishnaticEntity with no reference");

		// % protected region % [Apply any additional logic for fishnaticEntitiesWithNoRef before the main body here] off begin
		// % protected region % [Apply any additional logic for fishnaticEntitiesWithNoRef before the main body here] end

		Collection<FishnaticEntity> newEntities = fishnaticEntityFactory.createMultipleWithNoRef(10);

		// % protected region % [Apply any additional logic for fishnaticEntitiesWithNoRef after the main body here] off begin
		// % protected region % [Apply any additional logic for fishnaticEntitiesWithNoRef after the main body here] end

		log.trace("Created entities of type FishnaticEntity with no reference");

		return newEntities;
	}

	/**
	 * Return a Fishnatic entity with all references set.
	 */
	@Provides
	@Named("fishnaticEntityWithRefs")
	public FishnaticEntity fishnaticEntityWithRefs(
			// % protected region % [Apply any additional constructor parameters for fishnaticEntityWithRefs here] off begin
			// % protected region % [Apply any additional constructor parameters for fishnaticEntityWithRefs here] end
			Injector injector
	) {
		log.trace("Creating entity of type FishnaticEntity with references");

		// % protected region % [Apply any additional logic for fishnaticEntityWithRefs before the main body here] off begin
		// % protected region % [Apply any additional logic for fishnaticEntityWithRefs before the main body here] end

		FishnaticEntity fishnaticEntity = injector.getInstance(Key.get(FishnaticEntity.class, Names.named("fishnaticEntityWithNoRef")));

		// % protected region % [Apply any additional logic for fishnaticEntityWithRefs after the main body here] off begin
		// % protected region % [Apply any additional logic for fishnaticEntityWithRefs after the main body here] end

		log.trace("Created entity of type FishnaticEntity with references");

		return fishnaticEntity;
	}

	/**
	 * Return a collection of Fishnatic entities with all references set.
	 */
	@Provides
	@Named("fishnaticEntitiesWithRefs")
	public Collection<FishnaticEntity> fishnaticEntitiesWithRefs(
		// % protected region % [Apply any additional constructor parameters for fishnaticEntitiesWithRefs here] off begin
		// % protected region % [Apply any additional constructor parameters for fishnaticEntitiesWithRefs here] end
		FishnaticEntityFactory fishnaticEntityFactory
	) {
		log.trace("Creating entities of type FishnaticEntity with references");

		// % protected region % [Apply any additional logic for fishnaticEntitiesWithNoRef before the main body here] off begin
		// % protected region % [Apply any additional logic for fishnaticEntitiesWithNoRef before the main body here] end

		Collection<FishnaticEntity> newEntities = fishnaticEntityFactory.createMultipleWithRefs(10);

		// % protected region % [Apply any additional logic for fishnaticEntitiesWithNoRef after the main body here] off begin
		// % protected region % [Apply any additional logic for fishnaticEntitiesWithNoRef after the main body here] end

		log.trace("Created entities of type FishnaticEntity with references");

		return newEntities;
	}

	// % protected region % [Apply any additional class methods here] off begin
	// % protected region % [Apply any additional class methods here] end
}
