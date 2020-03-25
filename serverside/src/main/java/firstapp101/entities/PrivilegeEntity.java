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

import firstapp101.entities.listeners.PrivilegeEntityListener;
import firstapp101.serializers.PrivilegeSerializer;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;
import org.springframework.lang.Nullable;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.hibernate.envers.Audited;

import java.util.*;
import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.UUID;

// % protected region % [Import any additional imports here] off begin
// % protected region % [Import any additional imports here] end

@Data
@EqualsAndHashCode(callSuper = true, onlyExplicitlyIncluded = true)
@ToString(callSuper = true, onlyExplicitlyIncluded = true)
@NoArgsConstructor
@Entity
@Audited
@ApiModel(description = "Privilege of a role")
@ExcludeSuperclassListeners
@EntityListeners({PrivilegeEntityListener.class, AuditingEntityListener.class})
@JsonSerialize(using = PrivilegeSerializer.class)
@Table(
	uniqueConstraints = {
		@UniqueConstraint(columnNames = {"name"}, name = "name"),
	}
)
public class PrivilegeEntity extends AbstractEntity {
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// Attributes
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// % protected region % [Modify attribute annotation for name here] off begin
	@NotNull
	@Column(name = "name")
	@ApiModelProperty(notes = "The name of this entity.")
	@ToString.Include
	// % protected region % [Modify attribute annotation for name here] end
	private String name;

	// % protected region % [Modify attribute annotation for target entity here] off begin
	@NotNull
	@Column(name = "target_entity")
	@ApiModelProperty(notes = "The target entity of this entity.")
	@ToString.Include
	// % protected region % [Modify attribute annotation for target entity here] end
	private String targetEntity;

	// % protected region % [Modify attribute annotation for allow create here] off begin
	@NotNull
	@Column(name = "allow_create")
	@ApiModelProperty(notes = "The allow create of this entity.")
	@ToString.Include
	// % protected region % [Modify attribute annotation for allow create here] end
	private Boolean allowCreate;

	// % protected region % [Modify attribute annotation for allow read here] off begin
	@NotNull
	@Column(name = "allow_read")
	@ApiModelProperty(notes = "The allow read of this entity.")
	@ToString.Include
	// % protected region % [Modify attribute annotation for allow read here] end
	private Boolean allowRead;

	// % protected region % [Modify attribute annotation for allow update here] off begin
	@NotNull
	@Column(name = "allow_update")
	@ApiModelProperty(notes = "The allow update of this entity.")
	@ToString.Include
	// % protected region % [Modify attribute annotation for allow update here] end
	private Boolean allowUpdate;

	// % protected region % [Modify attribute annotation for allow delete here] off begin
	@NotNull
	@Column(name = "allow_delete")
	@ApiModelProperty(notes = "The allow delete of this entity.")
	@ToString.Include
	// % protected region % [Modify attribute annotation for allow delete here] end
	private Boolean allowDelete;

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// Outgoing references
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// Incoming references
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// % protected region % [Update the annotation for roles here] off begin
	@ApiModelProperty(notes = "The roles entities that are related to this entity.")
	@ManyToMany(mappedBy = "privileges", fetch = FetchType.LAZY)
	// % protected region % [Update the annotation for roles here] end
	private Set<RoleEntity> roles = new HashSet<>();

	@Transient
	private Set<UUID> rolesIds = new HashSet<>();

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
