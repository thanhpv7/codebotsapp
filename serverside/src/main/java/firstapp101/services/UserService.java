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
package firstapp101.services;

import firstapp101.entities.UserEntity;
import firstapp101.entities.AbstractEntityAudit;
import firstapp101.entities.RoleEntity;
import firstapp101.repositories.UserRepository;
import com.google.common.collect.Lists;
import org.springframework.context.ApplicationContext;
import org.springframework.security.access.prepost.PreAuthorize;

import java.util.Optional;
import java.util.List;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

public abstract class UserService<E extends UserEntity, R extends UserRepository<E>, T extends AbstractEntityAudit<E>> extends AbstractService<E, R, T> {
	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	public UserService(
			// % protected region % [Add any additional constructor parameters here] off begin
			// % protected region % [Add any additional constructor parameters here] end
			R repository
	) {
		super(
				// % protected region % [Add any additional superclass constructor arguments here] off begin
				// % protected region % [Add any additional superclass constructor arguments here] end
				repository
		);

		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end
	}

	/**
	 * Return an entity or a list of entities that have the given attribute first name.
	 *
	 * @param firstName the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute first name
	 */
	@PreAuthorize("hasPermission('UserEntity', 'read')")
	public List<E> findByFirstName(String firstName) {
		// % protected region % [Add any additional logic for findByFirstName here] off begin
		// % protected region % [Add any additional logic for findByFirstName here] end

		return Lists.newArrayList(repository.findByFirstName(firstName));
	}

	/**
	 * Return an entity or a list of entities that have the given attribute last name.
	 *
	 * @param lastName the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute last name
	 */
	@PreAuthorize("hasPermission('UserEntity', 'read')")
	public List<E> findByLastName(String lastName) {
		// % protected region % [Add any additional logic for findByLastName here] off begin
		// % protected region % [Add any additional logic for findByLastName here] end

		return Lists.newArrayList(repository.findByLastName(lastName));
	}

	/**
	 * Return an entity or a list of entities that have the given attribute username.
	 *
	 * @param username the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute username
	 */
	@PreAuthorize("hasPermission('UserEntity', 'read')")
	public Optional<E> findByUsername(String username) {
		// % protected region % [Add any additional logic for findByUsername here] off begin
		// % protected region % [Add any additional logic for findByUsername here] end

		return repository.findByUsername(username);
	}

	/**
	 * Return an entity or a list of entities that have the given attribute password.
	 *
	 * @param password the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute password
	 */
	@PreAuthorize("hasPermission('UserEntity', 'read')")
	public List<E> findByPassword(String password) {
		// % protected region % [Add any additional logic for findByPassword here] off begin
		// % protected region % [Add any additional logic for findByPassword here] end

		return Lists.newArrayList(repository.findByPassword(password));
	}

	/**
	 * Return an entity or a list of entities that have the given attribute Gender.
	 *
	 * @param gender the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute Gender
	 */
	@PreAuthorize("hasPermission('UserEntity', 'read')")
	public List<E> findByGender(String gender) {
		// % protected region % [Add any additional logic for findByGender here] off begin
		// % protected region % [Add any additional logic for findByGender here] end

		return Lists.newArrayList(repository.findByGender(gender));
	}

	/**
	 * Return an entity or a list of entities that have the given attribute Email.
	 *
	 * @param email the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute Email
	 */
	@PreAuthorize("hasPermission('UserEntity', 'read')")
	public Optional<E> findByEmail(String email) {
		// % protected region % [Add any additional logic for findByEmail here] off begin
		// % protected region % [Add any additional logic for findByEmail here] end

		return repository.findByEmail(email);
	}

	/**
	 * Return an entity or a list of entities that have the given attribute Is Archived.
	 *
	 * @param isArchived the attribute against which the entities will be retrieved
	 * @return a list of entities that have the given attribute Is Archived
	 */
	@PreAuthorize("hasPermission('UserEntity', 'read')")
	public List<E> findByIsArchived(Boolean isArchived) {
		// % protected region % [Add any additional logic for findByIsArchived here] off begin
		// % protected region % [Add any additional logic for findByIsArchived here] end

		return Lists.newArrayList(repository.findByIsArchived(isArchived));
	}

	/**
	 * Return the default roles for this user entity type.
	 *
	 * @return the default roles for this user entity type
	 */
	abstract public List<RoleEntity> getDefaultRoles();

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}