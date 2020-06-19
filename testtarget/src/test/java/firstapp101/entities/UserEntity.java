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
package firstapp101.entities;

import firstapp101.entities.enums.*;
import lombok.*;
import javax.validation.constraints.NotNull;

import java.util.*;

// % protected region % [Import any additional imports here] off begin
// % protected region % [Import any additional imports here] end

@Data
@EqualsAndHashCode(callSuper = true, onlyExplicitlyIncluded = true)
@ToString(callSuper = true, onlyExplicitlyIncluded = true)
public class UserEntity extends AbstractEntity {

	public UserEntity() {
		initialiseReferences();
	}

	private void initialiseReferences() {


		var RolesManyMany = new EntityReference();
			RolesManyMany.entityName = "Role";
			RolesManyMany.oppositeName = "Users";
			RolesManyMany.name = "Roles";
			RolesManyMany.optional = true;
			RolesManyMany.type = "Many";
			RolesManyMany.oppositeType = "Many";

		References.add(RolesManyMany);
	}
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// Attributes
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// % protected region % [Modify attribute annotation for first name here] off begin
	@ToString.Include
	// % protected region % [Modify attribute annotation for first name here] end
	private String firstName;

	// % protected region % [Modify attribute annotation for last name here] off begin
	@ToString.Include
	// % protected region % [Modify attribute annotation for last name here] end
	private String lastName;

	// % protected region % [Modify attribute annotation for username here] off begin
	@ToString.Include
	// % protected region % [Modify attribute annotation for username here] end
	private String username;

	// % protected region % [Modify attribute annotation for password here] off begin
	@ToString.Include
	// % protected region % [Modify attribute annotation for password here] end
	private String password;

	// % protected region % [Modify attribute annotation for Gender here] off begin
	@ToString.Include
	// % protected region % [Modify attribute annotation for Gender here] end
	private GenderEnum gender;

	// % protected region % [Modify attribute annotation for Email here] off begin
	@ToString.Include
	// % protected region % [Modify attribute annotation for Email here] end
	private String email;

	// % protected region % [Modify attribute annotation for Is Archived here] off begin
	@ToString.Include
	// % protected region % [Modify attribute annotation for Is Archived here] end
	private Boolean isArchived;

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// Outgoing one-to-one
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// Incoming one-to-one
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// Outgoing one-to-many
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// Incoming one-to-many
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// Outgoing many-to-many
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	private Set<RoleEntity> roles = new HashSet<>();

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// Incoming many-to-many
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// Outgoing reference methods
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	/**
	 * Similar to {@link this#addRoles(RoleEntity, boolean)} but
	 * default to true for reverse add.
	 *
	 * @param entity the given RoleEntity to be added to this entity
	 */
	public void addRoles(@NotNull RoleEntity entity) {
		addRoles(entity, true);
	}

	/**
	 * Add a new RoleEntity to roles in this entity.
	 *
	 * @param entity the given RoleEntity to be added to this entity
	 * @param reverseAdd whether this entity should be added to the given entity
	 */
	public void addRoles(@NonNull RoleEntity entity, boolean reverseAdd) {
		if (!this.roles.contains(entity)) {
			this.roles.add(entity);
			if (reverseAdd) {
				entity.addUsers(this, false);
			}
		}
	}

	/**
	 * Similar to {@link this#addRoles(Collection, boolean)} but
	 * default to true for reverse add.
	 *
	 * @param entities the given entities to be added to this entity
	 */
	public void addRoles(@NotNull Collection<RoleEntity> entities) {
		addRoles(entities, true);
	}

	/**
	 * Add new collection of RoleEntity to roles in this entity.
	 *
	 * @param entities the given entities to be added to this entity
	 * @param reverseAdd whether this entity should be added to the given entities
	 */
	public void addRoles(@NonNull Collection<RoleEntity> entities, boolean reverseAdd) {
		entities.forEach(entity -> addRoles(entity, reverseAdd));
	}

	/**
	 * Similar to {@link this#removeRoles(RoleEntity, boolean)} but
	 * default to true for reverse add.
	 *
	 * @param entity the given RoleEntity to be set to this entity
	 */
	public void removeRoles(@NotNull RoleEntity entity) {
		this.removeRoles(entity, true);
	}

	/**
	 * Remove the given RoleEntity from this entity.
	 *
	 * @param entity the give RoleEntity to be removed from this entity
	 * @param reverse whether this entity should be removed from the given entity
	 */
	public void removeRoles(@NotNull RoleEntity entity, boolean reverse) {
		if (reverse) {
			entity.removeUsers(this, false);
		}
		this.roles.remove(entity);
	}

	/**
	 * Similar to {@link this#removeRoles(Collection, boolean)} but
	 * default to true for reverse remove.
	 *
	 * @param entities the given entities to be removed to this entity
	 */
	public void removeRoles(@NotNull Collection<RoleEntity> entities) {
		this.removeRoles(entities, true);
	}

	/**
	 * Remove the given collection of RoleEntity in roles from  to this entity.
	 *
	 * @param entities the given entities to be removed to this entity
	 * @param reverseAdd whether this entity should be added to the given entities
	 */
	public void removeRoles(@NonNull Collection<RoleEntity> entities, boolean reverseAdd) {
		entities.forEach(entity -> this.removeRoles(entity, reverseAdd));
	}

	/**
	 * Similar to {@link this#setRoles(Collection, boolean)} but
	 * default to true for reverse add.
	 *
	 * @param entities the given entities to be set to this entity
	 */
	public void setRoles(@NotNull Collection<RoleEntity> entities) {
		this.setRoles(entities, true);
	}

	/**
	 * Replace the current entities in roles with the given ones.
	 *
	 * @param entities the given entities to replace the old ones
	 * @param reverseAdd whether this entity should be added to the given entities
	 */
	public void setRoles(@NotNull Collection<RoleEntity> entities, boolean reverseAdd) {
		this.unsetRoles();
		this.roles = new HashSet<>(entities);
		if (reverseAdd) {
			this.roles.forEach(entity -> entity.addUsers(this, false));
		}
	}

	/**
	 * Similar to {@link this#unsetRoles(boolean)} but
	 * default to true for reverse unset
	 */
	public void unsetRoles() {
		this.unsetRoles(true);
	}

	/**
	 * Remove all entities in roles from this entity.
	 * @param doReverse whether this entity should be removed from the given entities
	 */
	public void unsetRoles(boolean doReverse) {
		if (doReverse) {
			this.roles.forEach(entity -> entity.removeUsers(this, false));
		}
		this.roles.clear();
	}
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// Incoming references methods
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



	// % protected region % [Add any additional class methods  here] off begin
	// % protected region % [Add any additional class methods  here] end
}
