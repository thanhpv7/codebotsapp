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
package firstapp101.repositories;

import firstapp101.entities.FishEntity;
import org.springframework.stereotype.Repository;

import javax.validation.constraints.NotNull;
import firstapp101.entities.enums.*;
import java.time.*;
import java.util.Optional;
import java.util.List;

// % protected region % [Import any additional imports here] off begin
import firstapp101.entities.QFishEntity;
import com.google.common.collect.Lists;
import com.querydsl.core.types.Predicate;
// % protected region % [Import any additional imports here] end

/**
 * Repository used to handle any data access operations against an entity.
 */
@Repository
public interface FishRepository extends AbstractRepository<FishEntity> {
	/**
	 * Return an entity or a list of entities that have the given attribute Name.
	 *
	 * @param name the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute Name
	 */
	List<FishEntity> findByName(@NotNull String name);

	/**
	 * Return an entity or a list of entities that have the given attribute Date of Birth.
	 *
	 * @param dateOfBirth the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute Date of Birth
	 */
	List<FishEntity> findByDateOfBirth(@NotNull OffsetDateTime dateOfBirth);

	/**
	 * Return an entity or a list of entities that have the given attribute Alive.
	 *
	 * @param alive the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute Alive
	 */
	List<FishEntity> findByAlive(@NotNull Boolean alive);

	/**
	 * Return an entity or a list of entities that have the given attribute Born.
	 *
	 * @param born the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute Born
	 */
	List<FishEntity> findByBorn(@NotNull BornEnum born);

	// % protected region % [Add any additional class methods here] off begin
	/**
	 * Return an fish or a list of fish that have are alive and have been bought
	 *
	 * @return a list of fish with that have are alive and have been bought
	 */
	default List findByAliveAndPurchased() {
		QFishEntity fishEntity = QFishEntity.fishEntity;
		Predicate predicate = fishEntity.alive.eq(true).and(fishEntity.born.eq(BornEnum.PURCHASED));
		return Lists.newArrayList(this.findAll(predicate));
	}
	// % protected region % [Add any additional class methods here] end
}