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

import firstapp101.entities.UserEntity;
import org.springframework.data.repository.NoRepositoryBean;

import javax.validation.constraints.NotNull;
import java.util.Optional;
import java.util.List;

// % protected region % [Import any additional imports here] off begin
// % protected region % [Import any additional imports here] end

/**
 * Repository used to handle any data access operations against an entity.
 */
@NoRepositoryBean
public interface UserRepository<E extends UserEntity> extends AbstractRepository<E> {
	/**
	 * Return a list of entities that have the given attribute first name.
	 *
	 * @param firstName the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute first name
	 */
	List<E> findByFirstName(@NotNull String firstName);

	/**
	 * Return a list of entities that have the given attribute last name.
	 *
	 * @param lastName the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute last name
	 */
	List<E> findByLastName(@NotNull String lastName);

	/**
	 * Return a list of entities that have the given attribute username.
	 *
	 * @param username the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute username
	 */
	Optional<E> findByUsername(@NotNull String username);

	/**
	 * Return a list of entities that have the given attribute password.
	 *
	 * @param password the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute password
	 */
	List<E> findByPassword(@NotNull String password);

	/**
	 * Return a list of entities that have the given attribute Gender.
	 *
	 * @param gender the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute Gender
	 */
	List<E> findByGender(@NotNull String gender);

	/**
	 * Return a list of entities that have the given attribute Email.
	 *
	 * @param email the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute Email
	 */
	Optional<E> findByEmail(@NotNull String email);

	/**
	 * Return a list of entities that have the given attribute Is Archived.
	 *
	 * @param isArchived the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute Is Archived
	 */
	List<E> findByIsArchived(@NotNull Boolean isArchived);

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}