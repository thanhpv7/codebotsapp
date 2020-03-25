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
package firstapp101.lib.services.email;

import lombok.*;
import java.util.*;
import org.springframework.core.io.InputStreamSource;

// % protected region % [Import any additional imports here] off begin
// % protected region % [Import any additional imports here] end

/**
 * Email object used in send email
 * @author Codebots
 */
@Data
public class Email {

	private String senderEmailAddress;

	private Set<String> receiptEmailAddresses;

	private String subject;

	private String content;

	private Map<String, InputStreamSource> attachments;

	/**
	 * The file name of the template. e.g ResetPassword.Template.html
	 */
	private String templateName;

	/**
	 * Variables to be used in email template
	 */
	private Map<String, Object> emailVariables;
	
	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	public Email() {
		this.attachments = new HashMap<>();
		this.receiptEmailAddresses = new HashSet<>();
	}

	public Email(String senderEmailAddress, String receiptEmailAddress, String subject, String content) {
		this.senderEmailAddress = senderEmailAddress;
		this.receiptEmailAddresses = new HashSet<>();
		this.receiptEmailAddresses.add(receiptEmailAddress);
		this.subject = subject;
		this.content = content;
		this.attachments = new HashMap<>();
	}

	public Email(String senderEmailAddress, List<String> receiptEmailAddresses, String subject, String content) {
		this.senderEmailAddress = senderEmailAddress;
		this.receiptEmailAddresses = new HashSet<>(receiptEmailAddresses);
		this.subject = subject;
		this.content = content;
		this.attachments = new HashMap<>();
	}

	@Override
	public String toString() {
		return "Mail{" +
				"senderEmailAddress='" + senderEmailAddress + "\'" +
				", receiptEmailAddresses='" + receiptEmailAddresses + "\'" +
				", subject='" + subject + "\'" +
				", content='" + content + "\'" +
				'}';
	}

	public void addReceiptEmailAddress(String receipt) {
		this.receiptEmailAddresses.add(receipt);
	}

	public void addAttachment(String fileName, InputStreamSource file) {
		this.attachments.put(fileName, file);
	}

	public InputStreamSource getAttachment(String fileName) {
		return attachments.get(fileName);
	}
	
	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}