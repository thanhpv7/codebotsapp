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

import lombok.Data;
import lombok.Getter;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.OffsetDateTime;
import java.util.List;
import java.util.ArrayList;
import java.util.UUID;
import java.util.HashMap;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Base class of all entity classes. It provides a handful of common properties out-of-the-box.
 */
@Data
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public abstract class AbstractEntity implements Serializable {
	/**
	 * The id of this entity in form of UUID.
	 */
	@EqualsAndHashCode.Include
	private UUID id;

	@Getter
	@Setter
	public List<EntityReference> References = new ArrayList<EntityReference>();

	@Getter
	@Setter
	public HashMap<String, UUID> ReferenceIdDictionary = new HashMap<>();

	/**
	 * When this entity was created.
	 */
	private OffsetDateTime created;

	/**
	 * When this entity was modified.
	 */
	private OffsetDateTime modified;

	/**
	 * Last modified email address of the user that did the change
	 */
	private UUID modifiedBy;

	/**
	 * Last modified email address of the user that did the change
	 */
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
