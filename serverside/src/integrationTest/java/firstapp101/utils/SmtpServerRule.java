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
package firstapp101.utils;

import com.icegreen.greenmail.util.GreenMail;
import com.icegreen.greenmail.util.ServerSetup;
import org.junit.rules.ExternalResource;
import javax.mail.internet.MimeMessage;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Default SmtpServer Rule to create fake smtp for testing purpose.
 * Usage: Create a field in you testing class with
 *
 * @Rule
 * public SmtpServerRule smtpServerRule
 * 
 * Then you could use fake Smtp serve for email testing
 */
public class SmtpServerRule extends ExternalResource {

	/**
	 * Fake Smtp Server by GreenMail
	 */
	private GreenMail smtpServer;

	/**
	 * Port for Fake Smtp Server, by default using 3025
	 */
	private int port = 3025;

	private final String USERNAME = "username";

	private final String PASSWORD = "secret";

	public SmtpServerRule(int port) {
		this.port = port;

		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end
	}

	public SmtpServerRule() {
		// % protected region % [Add any additional constructor logic here with no parameters] off begin
		// % protected region % [Add any additional constructor logic here with no parameters] end
	}

	// % protected region % [Add any additional constructors here] off begin
	// % protected region % [Add any additional constructors here] end

	/**
	 * @inheritDoc
	 */
	@Override
	protected void before() throws Throwable {
		super.before();
		smtpServer = new GreenMail(new ServerSetup(port, null, "smtp"));
		smtpServer.setUser(USERNAME, PASSWORD);

		// % protected region % [Add any additional logic before stmp server starting here] off begin
		// % protected region % [Add any additional logic before stmp server starting here] end

		smtpServer.start();

		// % protected region % [Add any additional logic after stmp server starting here] off begin
		// % protected region % [Add any additional logic after stmp server starting here] end
	}

	/**
	 * Return the received emails in fake SMTP server
	 * @return Fake emails in SMTP server
	 */
	public MimeMessage[] getMessages() {
		MimeMessage[] mimeMessage = smtpServer.getReceivedMessages();

		// % protected region % [Add any additional logic before returning MimeMessages here] off begin
		// % protected region % [Add any additional logic before returning MimeMessages here] end

		return mimeMessage;
	}

	/**
	 * @inheritDoc
	 */
	@Override
	protected void after() {
		// % protected region % [Add any additional logic before stmp server stopped here] off begin
		// % protected region % [Add any additional logic before stmp server stopped here] end
		
		super.after();
		smtpServer.stop();

		// % protected region % [Add any additional logic after smtp server stopped here] off begin
		// % protected region % [Add any additional logic after smtp server stopped here] end
	}
}
