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

import firstapp101.deserializers.DateTimeDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.LastModifiedBy;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.OffsetDateTime;
import java.util.UUID;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Base class of all entity classes. It provides a handful of common properties out-of-the-box.
 */
@Data
@NoArgsConstructor
@MappedSuperclass
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public abstract class AbstractEntity implements Serializable {
	/**
	 * The id of this entity in form of UUID.
	 */
	@ApiModelProperty(notes = "The ID", example = "554eb86f-5eb9-4514-9859-837719e7f504", required = true)
	@Id
	@EqualsAndHashCode.Include
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", columnDefinition = "uuid")
	private UUID id;

	/**
	 * When this entity was created.
	 */
	@ApiModelProperty(notes = "The created datetime of the entity.", example = "", required = true, position = 1)
	@Column(name = "created", updatable = false, nullable = false)
	@JsonDeserialize(using = DateTimeDeserializer.class)
	@CreationTimestamp
	private OffsetDateTime created;

	/**
	 * When this entity was modified.
	 */
	@ApiModelProperty(notes = "The modified date time of the entity.", example = "", required = true, position = 2)
	@Column(name = "modified", nullable = false)
	@JsonDeserialize(using = DateTimeDeserializer.class)
	@UpdateTimestamp
	private OffsetDateTime modified;

	/**
	 * Last modified email address of the user that did the change
	 */
	@ApiModelProperty(notes = "The author of the last change.")
	@Column(name = "modified_by")
	@LastModifiedBy
	private UUID modifiedBy;

	/**
	 * Last modified email address of the user that did the change
	 */
	@ApiModelProperty(notes = "The author of initial creation.")
	@Column(name = "created_by")
	@CreatedBy
	private UUID createdBy;

	/**
	 * Check whether two entity are same with the id.
	 * @param former Former entity
	 * @param current Current entity
	 * @return Whether two entities are same
	 */
	protected boolean sameAsFormer(AbstractEntity former, AbstractEntity current) {
		return (former == null && current == null) || (former != null && current != null && former.getId().equals(current.getId()));
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}