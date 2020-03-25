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
import lombok.EqualsAndHashCode;
import lombok.ToString;

import java.util.UUID;
import java.time.OffsetDateTime;

// % protected region % [Import any additional imports here] off begin
// % protected region % [Import any additional imports here] end

/**
 * This class represents the entity.
 */
@EqualsAndHashCode(callSuper = true)
@ToString
public class PrivilegeEntityAudit extends AbstractEntityAudit<PrivilegeEntity> {

	// % protected region % [Import any additional class fields here] off begin
	// % protected region % [Import any additional class fields here] end

	public PrivilegeEntityAudit(
			// % protected region % [Import any additional constructor parameters here] off begin
			// % protected region % [Import any additional constructor parameters here] end
			PrivilegeEntity entity,
			OffsetDateTime timestamp,
			AuditQueryType type,
			UUID authorId,
			String authorFirstName,
			String authorLastName
	) {
		super(
				// % protected region % [Import any additional parameter arguments here] off begin
				// % protected region % [Import any additional parameter arguments here] end
				entity,
				timestamp,
				type,
				authorId,
				authorFirstName,
				authorLastName
		);
	}
}