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
package firstapp101.configs.security.auditing;

import firstapp101.entities.UserEntity;
import lombok.*;
import org.hibernate.envers.RevisionEntity;
import org.hibernate.envers.RevisionNumber;
import org.hibernate.envers.RevisionTimestamp;

import java.time.OffsetDateTime;
import javax.persistence.*;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@Entity
@RevisionEntity(value = CustomRevisionEntityListener.class)
@Data
@NoArgsConstructor
public class CustomRevisionEntity {
	/**
	 * Simply the ID of this revision.
	 */
	@RevisionNumber
	@Id
	@SequenceGenerator(name = "revisionSeq", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "revisionSeq")
	private int id;

	/**
	 * When this revision was modified but in Unix timestamp.
	 */
	@RevisionTimestamp
	private long modifiedAtTimestamp;

	/**
	 * When this revision was modified.
	 */
	private OffsetDateTime modifiedAt;

	/**
	 * The author of this revision.
	 */
	@OneToOne
	private UserEntity author;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}