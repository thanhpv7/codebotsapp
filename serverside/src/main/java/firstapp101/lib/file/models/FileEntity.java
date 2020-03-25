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

package firstapp101.lib.file.models;

import firstapp101.entities.AbstractEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.envers.Audited;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.annotation.Nullable;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.ExcludeSuperclassListeners;
import javax.persistence.Transient;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@Data
@EqualsAndHashCode(callSuper = true, onlyExplicitlyIncluded = true)
@ToString(callSuper = true)
@NoArgsConstructor
@Entity
@Audited
@ExcludeSuperclassListeners
@EntityListeners({AuditingEntityListener.class})
public class FileEntity extends AbstractEntity {
	/**
	 * The name of the file as uploaded by the clientside.
	 */
	@EqualsAndHashCode.Include
	private String name;

	/**
	 * The size of the file in bytes.
	 */
	@EqualsAndHashCode.Include
	private int size;

	/**
	 * The content of the file in base64 string format.
	 */
	@Nullable
	@Transient
	private String content;

	/**
	 * Assuming that this file is stored on an S3 bucket or some equivalent, this property indicates the url from which
	 * the file can be retrieved.
	 */
	@Nullable
	@Transient
	private String url;

	/**
	 * Whether to delete this file or not.
	 */
	@Nullable
	@Transient
	private Boolean doDelete = false;

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}