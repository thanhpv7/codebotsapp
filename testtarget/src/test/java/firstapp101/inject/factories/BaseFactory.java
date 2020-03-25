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
package firstapp101.inject.factories;

import firstapp101.entities.AbstractEntity;
import com.google.inject.Injector;
import com.google.inject.Key;
import com.google.inject.name.Names;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;

import java.util.Collection;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

// % protected region % [Apply any additional imports here] off begin
// % protected region % [Apply any additional imports here] end

/**
 * Factory class used to generate mass data for testing purposes. Note that this factory is not meant to be initialised
 * directly via the <code>new</code> keyword. Instead it's meant to be injected via Guice. Internally it uses Guice to
 * handle the normal dependency wiring and exposes convenient methods to produce mass data.
 */
@Slf4j
@RequiredArgsConstructor
public class BaseFactory<E extends AbstractEntity> {
	@NonNull
	private final Class<E> entityClass;

	@NonNull
	private final Injector injector;

	// % protected region % [Apply any additional class fields here] off begin
	// % protected region % [Apply any additional class fields here] end

	/**
	 * Create data by generating one entity with no references.
	 *
	 * @return one entity with its references not set recursively
	 */
	public E createWithNoRef() {
		log.trace("Creating new entity of type {} with no references", entityClass.getSimpleName());

		// % protected region % [Apply any additional logic for createWithNoRef before the main body here] off begin
		// % protected region % [Apply any additional logic for createWithNoRef before the main body here] end

		E newEntity = injector.getInstance(Key.get(entityClass, Names.named(StringUtils.uncapitalize(entityClass.getSimpleName()) + "WithNoRef")));

		// % protected region % [Apply any additional logic for createWithNoRef after the main body here] off begin
		// % protected region % [Apply any additional logic for createWithNoRef after the main body here] end

		log.trace("Created new entity of type {} with no references", entityClass.getSimpleName());

		return newEntity;
	}

	/**
	 * Create mass data by generating multiple entities with no references of the given size.
	 *
	 * @param size the amount of entities to be created
	 * @return multiple entities with their references not set recursively of the given size
	 */
	public Collection<E> createMultipleWithNoRef(int size) {
		log.trace("Creating {} new entities of type {} with no references", size, entityClass.getSimpleName());

		// % protected region % [Apply any additional logic for createMultiple before the main body here] off begin
		// % protected region % [Apply any additional logic for createMultiple before the main body here] end

		Collection<E> newEntities = IntStream.range(0, size).mapToObj((i) -> {
			E newEntity = createWithNoRef();

			// % protected region % [Add any additional logic for createMultipleWithNoRef before the returning the new entity here] off begin
			// % protected region % [Add any additional logic for createMultipleWithNoRef before the returning the new entity here] end

			return newEntity;
		}).collect(Collectors.toSet());

		// % protected region % [Apply any additional logic for createMultiple after the main body here] off begin
		// % protected region % [Apply any additional logic for createMultiple after the main body here] end

		log.trace("Created {} new entities of type {} with no references", size, entityClass.getSimpleName());

		return newEntities;
	}

	/**
	 * Create data by generating one entity with unique references.
	 *
	 * @return one entity with its references not set recursively
	 */
	public E createWithRefs() {
		log.trace("Creating new entity of type {} with references", entityClass.getSimpleName());

		// % protected region % [Apply any additional logic for createWithNoRef before the main body here] off begin
		// % protected region % [Apply any additional logic for createWithNoRef before the main body here] end

		E newEntity = injector.getInstance(Key.get(entityClass, Names.named(StringUtils.uncapitalize(entityClass.getSimpleName()) + "WithRefs")));

		// % protected region % [Apply any additional logic for createWithNoRef after the main body here] off begin
		// % protected region % [Apply any additional logic for createWithNoRef after the main body here] end

		log.trace("Created new entity of type {} with references", entityClass.getSimpleName());

		return newEntity;
	}

	/**
	 * Create mass data by generating multiple entities with unique references of the given size.
	 *
	 * @param size the amount of entities to be created
	 * @return multiple entities with their references set recursively properly of the given size
	 */
	public Collection<E> createMultipleWithRefs(int size) {
		log.trace("Creating {} new entity of type {} with references", size, entityClass.getSimpleName());

		// % protected region % [Apply any additional logic for createMultiple before the main body here] off begin
		// % protected region % [Apply any additional logic for createMultiple before the main body here] end

		Collection<E> newEntities = IntStream.range(0, size).mapToObj((i) -> {
			E newEntity = createWithRefs();

			// % protected region % [Add any additional logic for createMultipleWithNoRef before the returning the new entity here] off begin
			// % protected region % [Add any additional logic for createMultipleWithNoRef before the returning the new entity here] end

			return newEntity;
		}).collect(Collectors.toSet());

		// % protected region % [Apply any additional logic for createMultiple after the main body here] off begin
		// % protected region % [Apply any additional logic for createMultiple after the main body here] end

		log.trace("Created {} new entity of type {} with references", size, entityClass.getSimpleName());

		return newEntities;
	}

	// % protected region % [Apply any additional class methods here] off begin
	// % protected region % [Apply any additional class methods here] end
}
