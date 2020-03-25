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

import firstapp101.entities.PrivilegeEntity;
import org.springframework.stereotype.Repository;

import javax.validation.constraints.NotNull;
import java.util.Optional;
import java.util.List;

// % protected region % [Import any additional imports here] off begin
// % protected region % [Import any additional imports here] end

/**
 * Repository used to handle any data access operations against an entity.
 */
@Repository
public interface PrivilegeRepository extends AbstractRepository<PrivilegeEntity> {
	/**
	 * Return an entity or a list of entities that have the given attribute name.
	 *
	 * @param name the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute name
	 */
	Optional<PrivilegeEntity> findByName(@NotNull String name);

	/**
	 * Return an entity or a list of entities that have the given attribute target entity.
	 *
	 * @param targetEntity the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute target entity
	 */
	List<PrivilegeEntity> findByTargetEntity(@NotNull String targetEntity);

	/**
	 * Return an entity or a list of entities that have the given attribute allow create.
	 *
	 * @param allowCreate the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute allow create
	 */
	List<PrivilegeEntity> findByAllowCreate(@NotNull Boolean allowCreate);

	/**
	 * Return an entity or a list of entities that have the given attribute allow read.
	 *
	 * @param allowRead the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute allow read
	 */
	List<PrivilegeEntity> findByAllowRead(@NotNull Boolean allowRead);

	/**
	 * Return an entity or a list of entities that have the given attribute allow update.
	 *
	 * @param allowUpdate the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute allow update
	 */
	List<PrivilegeEntity> findByAllowUpdate(@NotNull Boolean allowUpdate);

	/**
	 * Return an entity or a list of entities that have the given attribute allow delete.
	 *
	 * @param allowDelete the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute allow delete
	 */
	List<PrivilegeEntity> findByAllowDelete(@NotNull Boolean allowDelete);

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}