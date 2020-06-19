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

import lombok.*;
import javax.validation.constraints.NotNull;

import java.util.*;

// % protected region % [Import any additional imports here] off begin
// % protected region % [Import any additional imports here] end

@Data
@EqualsAndHashCode(callSuper = true, onlyExplicitlyIncluded = true)
@ToString(callSuper = true, onlyExplicitlyIncluded = true)
public class PrivilegeEntity extends AbstractEntity {

	public PrivilegeEntity() {
		initialiseReferences();
	}

	private void initialiseReferences() {


		var RolesManyMany = new EntityReference();
			RolesManyMany.entityName = "Role";
			RolesManyMany.oppositeName = "Roles";
			RolesManyMany.name = "Privileges";
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

	// % protected region % [Modify attribute annotation for name here] off begin
	@ToString.Include
	// % protected region % [Modify attribute annotation for name here] end
	private String name;

	// % protected region % [Modify attribute annotation for target entity here] off begin
	@ToString.Include
	// % protected region % [Modify attribute annotation for target entity here] end
	private String targetEntity;

	// % protected region % [Modify attribute annotation for allow create here] off begin
	@ToString.Include
	// % protected region % [Modify attribute annotation for allow create here] end
	private Boolean allowCreate;

	// % protected region % [Modify attribute annotation for allow read here] off begin
	@ToString.Include
	// % protected region % [Modify attribute annotation for allow read here] end
	private Boolean allowRead;

	// % protected region % [Modify attribute annotation for allow update here] off begin
	@ToString.Include
	// % protected region % [Modify attribute annotation for allow update here] end
	private Boolean allowUpdate;

	// % protected region % [Modify attribute annotation for allow delete here] off begin
	@ToString.Include
	// % protected region % [Modify attribute annotation for allow delete here] end
	private Boolean allowDelete;

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

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// Incoming many-to-many
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	private Set<RoleEntity> roles = new HashSet<>();

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// Outgoing reference methods
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// Incoming references methods
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	/**
	 * Similar to {@link this#addRoles(RoleEntity, boolean)} but
	 * default to true for reverse add.
	 *
	 * @param entity the given RoleEntity to be added to roles
	 */
	public void addRoles(@NotNull RoleEntity entity) {
		this.addRoles(entity, true);
	}

	/**
	 * Add a new RoleEntity to roles in this entity.
	 *
	 * @param entity the given RoleEntity to be added to roles
	 * @param reverseAdd whether this entity should be added to the given entity
	 */
	public void addRoles(@NotNull RoleEntity entity, boolean reverseAdd) {
		if (!this.roles.contains(entity)) {
			this.roles.add(entity);
			if (reverseAdd) {
				entity.addPrivileges(this, false);
			}
		}
	}

	/**
	 * Similar to {@link this#addRoles(Collection, boolean)} but
	 * default to true for reverse add.
	 *
	 * @param entities the given collection of RoleEntity to be added into roles
	 */
	public void addRoles(@NotNull Collection<RoleEntity> entities) {
		this.addRoles(entities, true);
	}

	/**
	 * Add new collection of RoleEntity to roles in this entity.
	 *
	 * @param entities the given collection of RoleEntity to be added into roles in this entity
	 * @param reverseAdd whether this entity should be added to the given entities
	 */
	public void addRoles(@NonNull Collection<RoleEntity> entities, boolean reverseAdd) {
		entities.forEach(entity -> this.addRoles(entity, reverseAdd));
	}

	/**
	 * Similar to {@link this#removeRoles(RoleEntity, boolean)} but
	 * default to true for reverse add.
	 *
	 * @param entity the given RoleEntity to be set to roles in this entity
	 */
	public void removeRoles(@NotNull RoleEntity entity) {
		this.removeRoles(entity, true);
	}

	/**
	 * Remove the given RoleEntity from roles in this entity.
	 *
	 * @param entity the given RoleEntity to be removed from roles
	 * @param reverse whether this entity should be removed from the given entity
	 */
	public void removeRoles(@NotNull RoleEntity entity, boolean reverse) {
		if (reverse) {
			entity.removePrivileges(this, false);
		}
		this.roles.remove(entity);
	}

	/**
	 * Similar to {@link this#removeRoles(Collection, boolean)} but
	 * default to true for reverse add.
	 *
	 * @param entities the given collection of RoleEntity to be removed from roles in this entity
	 */
	public void removeRoles(@NotNull Collection<RoleEntity> entities) {
		this.removeRoles(entities, true);
	}

	/**
	 * Remove the given collection of RoleEntity from roles in this entity.
	 *
	 * @param entities the given collection of RoleEntity to be removed from roles
	 * @param reverseRemove whether this entity should be removed to the given entities
	 */
	public void removeRoles(@NonNull Collection<RoleEntity> entities, boolean reverseRemove) {
		entities.forEach(entity -> this.removeRoles(entity, reverseRemove));
	}

	/**
	 * Similar to {@link this#setRoles(Collection, boolean)} but
	 * default to true for reverse add.
	 *
	 * @param entities the given collection of RoleEntity to replace the old ones in roles
	 */
	public void setRoles(@NotNull Collection<RoleEntity> entities) {
		this.setRoles(entities, true);
	}

	/**
	 * Replace the current collection of RoleEntity in roles with the given ones.
	 *
	 * @param entities the given collection of RoleEntity to replace the old ones in roles
	 * @param reverseAdd whether this entity should be added to the given entities
	 */
	public void setRoles(@NotNull Collection<RoleEntity> entities, boolean reverseAdd) {
		unsetRoles();
		this.roles = new HashSet<>(entities);
		if (reverseAdd) {
			this.roles.forEach(rolesEntity -> rolesEntity.addPrivileges(this, false));
		}
	}

	/**
	 * Remove all entities in roles from this entity.
	 */
	public void unsetRoles() {
		this.roles.forEach(entity -> entity.removePrivileges(this, false));
		this.roles.clear();
	}

	// % protected region % [Add any additional class methods  here] off begin
	// % protected region % [Add any additional class methods  here] end
}
