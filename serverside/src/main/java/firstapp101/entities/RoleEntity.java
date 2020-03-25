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

import firstapp101.entities.listeners.RoleEntityListener;
import firstapp101.serializers.RoleSerializer;
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
@ApiModel(description = "Role of a user type")
@ExcludeSuperclassListeners
@EntityListeners({RoleEntityListener.class, AuditingEntityListener.class})
@JsonSerialize(using = RoleSerializer.class)
@Table(
	uniqueConstraints = {
		@UniqueConstraint(columnNames = {"name"}, name = "name"),
	}
)
public class RoleEntity extends AbstractEntity {
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

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// Outgoing references
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// % protected region % [Update the annotation for privileges here] off begin
	@ApiModelProperty(notes = "The Privilege entities privileges that are related to this entity.")
	@ManyToMany(cascade = {CascadeType.MERGE}, fetch = FetchType.LAZY)
	// % protected region % [Update the annotation for privileges here] end
	private Set<PrivilegeEntity> privileges = new HashSet<>();

	@Transient
	private Set<UUID> privilegesIds = new HashSet<>();

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// Incoming references
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// % protected region % [Update the annotation for users here] off begin
	@ApiModelProperty(notes = "The users entities that are related to this entity.")
	@ManyToMany(mappedBy = "roles", fetch = FetchType.LAZY)
	// % protected region % [Update the annotation for users here] end
	private Set<UserEntity> users = new HashSet<>();

	@Transient
	private Set<UUID> usersIds = new HashSet<>();

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// Outgoing reference methods
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	/**
	 * Similar to {@link this#addPrivileges(PrivilegeEntity, boolean)} but
	 * default to true for reverse add.
	 *
	 * @param entity the given PrivilegeEntity to be added to this entity
	 */
	public void addPrivileges(@NotNull PrivilegeEntity entity) {
		addPrivileges(entity, true);
	}

	/**
	 * Add a new PrivilegeEntity to privileges in this entity.
	 *
	 * @param entity the given PrivilegeEntity to be added to this entity
	 * @param reverseAdd whether this entity should be added to the given entity
	 */
	public void addPrivileges(@NonNull PrivilegeEntity entity, boolean reverseAdd) {
		if (!this.privileges.contains(entity)) {
			this.privileges.add(entity);
			if (reverseAdd) {
				entity.addRoles(this, false);
			}
		}
	}

	/**
	 * Similar to {@link this#addPrivileges(Collection, boolean)} but
	 * default to true for reverse add.
	 *
	 * @param entities the given entities to be added to this entity
	 */
	public void addPrivileges(@NotNull Collection<PrivilegeEntity> entities) {
		addPrivileges(entities, true);
	}

	/**
	 * Add new collection of PrivilegeEntity to privileges in this entity.
	 *
	 * @param entities the given entities to be added to this entity
	 * @param reverseAdd whether this entity should be added to the given entities
	 */
	public void addPrivileges(@NonNull Collection<PrivilegeEntity> entities, boolean reverseAdd) {
		entities.forEach(entity -> addPrivileges(entity, reverseAdd));
	}

	/**
	 * Similar to {@link this#removePrivileges(PrivilegeEntity, boolean)} but
	 * default to true for reverse add.
	 *
	 * @param entity the given PrivilegeEntity to be set to this entity
	 */
	public void removePrivileges(@NotNull PrivilegeEntity entity) {
		this.removePrivileges(entity, true);
	}

	/**
	 * Remove the given PrivilegeEntity from this entity.
	 *
	 * @param entity the give PrivilegeEntity to be removed from this entity
	 * @param reverse whether this entity should be removed from the given entity
	 */
	public void removePrivileges(@NotNull PrivilegeEntity entity, boolean reverse) {
		if (reverse) {
			entity.removeRoles(this, false);
		}
		this.privileges.remove(entity);
	}

	/**
	 * Similar to {@link this#removePrivileges(Collection, boolean)} but
	 * default to true for reverse remove.
	 *
	 * @param entities the given entities to be removed to this entity
	 */
	public void removePrivileges(@NotNull Collection<PrivilegeEntity> entities) {
		this.removePrivileges(entities, true);
	}

	/**
	 * Remove the given collection of PrivilegeEntity in privileges from  to this entity.
	 *
	 * @param entities the given entities to be removed to this entity
	 * @param reverseAdd whether this entity should be added to the given entities
	 */
	public void removePrivileges(@NonNull Collection<PrivilegeEntity> entities, boolean reverseAdd) {
		entities.forEach(entity -> this.removePrivileges(entity, reverseAdd));
	}

	/**
	 * Similar to {@link this#setPrivileges(Collection, boolean)} but
	 * default to true for reverse add.
	 *
	 * @param entities the given entities to be set to this entity
	 */
	public void setPrivileges(@NotNull Collection<PrivilegeEntity> entities) {
		this.setPrivileges(entities, true);
	}

	/**
	 * Replace the current entities in privileges with the given ones.
	 *
	 * @param entities the given entities to replace the old ones
	 * @param reverseAdd whether this entity should be added to the given entities
	 */
	public void setPrivileges(@NotNull Collection<PrivilegeEntity> entities, boolean reverseAdd) {
		this.unsetPrivileges();
		this.privileges = new HashSet<>(entities);
		if (reverseAdd) {
			this.privileges.forEach(entity -> entity.addRoles(this, false));
		}
	}

	/**
	 * Similar to {@link this#unsetPrivileges(boolean)} but
	 * default to true for reverse unset
	 */
	public void unsetPrivileges() {
		this.unsetPrivileges(true);
	}

	/**
	 * Remove all entities in privileges from this entity.
	 * @param doReverse whether this entity should be removed from the given entities
	 */
	public void unsetPrivileges(boolean doReverse) {
		if (doReverse) {
			this.privileges.forEach(entity -> entity.removeRoles(this, false));
		}
		this.privileges.clear();
	}
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	// Incoming references methods
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	/**
	 * Similar to {@link this#addUsers(UserEntity, boolean)} but
	 * default to true for reverse add.
	 *
	 * @param entity the given UserEntity to be added to users
	 */
	public void addUsers(@NotNull UserEntity entity) {
		this.addUsers(entity, true);
	}

	/**
	 * Add a new UserEntity to users in this entity.
	 *
	 * @param entity the given UserEntity to be added to users
	 * @param reverseAdd whether this entity should be added to the given entity
	 */
	public void addUsers(@NotNull UserEntity entity, boolean reverseAdd) {
		if (!this.users.contains(entity)) {
			this.users.add(entity);
			if (reverseAdd) {
				entity.addRoles(this, false);
			}
		}
	}

	/**
	 * Similar to {@link this#addUsers(Collection, boolean)} but
	 * default to true for reverse add.
	 *
	 * @param entities the given collection of UserEntity to be added into users
	 */
	public void addUsers(@NotNull Collection<UserEntity> entities) {
		this.addUsers(entities, true);
	}

	/**
	 * Add new collection of UserEntity to users in this entity.
	 *
	 * @param entities the given collection of UserEntity to be added into users in this entity
	 * @param reverseAdd whether this entity should be added to the given entities
	 */
	public void addUsers(@NonNull Collection<UserEntity> entities, boolean reverseAdd) {
		entities.forEach(entity -> this.addUsers(entity, reverseAdd));
	}

	/**
	 * Similar to {@link this#removeUsers(UserEntity, boolean)} but
	 * default to true for reverse add.
	 *
	 * @param entity the given UserEntity to be set to users in this entity
	 */
	public void removeUsers(@NotNull UserEntity entity) {
		this.removeUsers(entity, true);
	}

	/**
	 * Remove the given UserEntity from users in this entity.
	 *
	 * @param entity the given UserEntity to be removed from users
	 * @param reverse whether this entity should be removed from the given entity
	 */
	public void removeUsers(@NotNull UserEntity entity, boolean reverse) {
		if (reverse) {
			entity.removeRoles(this, false);
		}
		this.users.remove(entity);
	}

	/**
	 * Similar to {@link this#removeUsers(Collection, boolean)} but
	 * default to true for reverse add.
	 *
	 * @param entities the given collection of UserEntity to be removed from users in this entity
	 */
	public void removeUsers(@NotNull Collection<UserEntity> entities) {
		this.removeUsers(entities, true);
	}

	/**
	 * Remove the given collection of UserEntity from users in this entity.
	 *
	 * @param entities the given collection of UserEntity to be removed from users
	 * @param reverseRemove whether this entity should be removed to the given entities
	 */
	public void removeUsers(@NonNull Collection<UserEntity> entities, boolean reverseRemove) {
		entities.forEach(entity -> this.removeUsers(entity, reverseRemove));
	}

	/**
	 * Similar to {@link this#setUsers(Collection, boolean)} but
	 * default to true for reverse add.
	 *
	 * @param entities the given collection of UserEntity to replace the old ones in users
	 */
	public void setUsers(@NotNull Collection<UserEntity> entities) {
		this.setUsers(entities, true);
	}

	/**
	 * Replace the current collection of UserEntity in users with the given ones.
	 *
	 * @param entities the given collection of UserEntity to replace the old ones in users
	 * @param reverseAdd whether this entity should be added to the given entities
	 */
	public void setUsers(@NotNull Collection<UserEntity> entities, boolean reverseAdd) {
		unsetUsers();
		this.users = new HashSet<>(entities);
		if (reverseAdd) {
			this.users.forEach(usersEntity -> usersEntity.addRoles(this, false));
		}
	}

	/**
	 * Remove all entities in users from this entity.
	 */
	public void unsetUsers() {
		this.users.forEach(entity -> entity.removeRoles(this, false));
		this.users.clear();
	}
	// % protected region % [Add any additional class methods  here] off begin
	// % protected region % [Add any additional class methods  here] end
}
