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

import firstapp101.graphql.utils.AuditQueryType;
import lombok.Data;

import java.io.Serializable;
import java.time.OffsetDateTime;
import java.util.UUID;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Base class of all entity classes. It provides a handful of common properties out-of-the-box.
 */
@Data
public abstract class AbstractEntityAudit<E extends AbstractEntity> implements Serializable {
	/**
	 * The actual entity instance at this revision number.
	 */
	private final E entity;

	/**
	 * Timestamp for this audit revision.
	 */
	private final OffsetDateTime timestamp;

	/**
	 * The type of auditing.
	 */
	private final AuditQueryType type;

	/**
	 * The author of the audit.
	 */
	private final UUID authorId;

	/**
	 * The first name of the author.
	 */
	private final String authorFirstName;

	/**
	 * The last name of the author.
	 */
	private final String authorLastName;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	protected AbstractEntityAudit(
			// % protected region % [Import any additional constructor parameters here] off begin
			// % protected region % [Import any additional constructor parameters here] end
			E entity,
			OffsetDateTime timestamp,
			AuditQueryType type,
			UUID authorId,
			String authorFirstName,
			String authorLastName
	) {
		// % protected region % [Import any additional constructor logic before the main body here] off begin
		// % protected region % [Import any additional constructor logic before the main body here] end

		this.entity = entity;
		this.timestamp = timestamp;
		this.type = type;
		this.authorId = authorId;
		this.authorFirstName = authorFirstName;
		this.authorLastName = authorLastName;

		// % protected region % [Import any additional constructor logic after the main body here] off begin
		// % protected region % [Import any additional constructor logic after the main body here] end
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}