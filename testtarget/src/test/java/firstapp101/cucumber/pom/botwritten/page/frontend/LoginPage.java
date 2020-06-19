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
package firstapp101.cucumber.pom.botwritten.page.frontend;

import com.google.inject.Inject;
import cucumber.runtime.java.guice.ScenarioScoped;
import lombok.extern.slf4j.Slf4j;
import lombok.NonNull;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import firstapp101.cucumber.pom.botwritten.page.AbstractPage;


import java.util.Properties;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@Slf4j
@ScenarioScoped
public class LoginPage extends AbstractPage {

	@FindBy(how = How.XPATH, using = "//form[contains(@class,'login')]//input[@type='email']")
	private WebElement usernameField;

	@FindBy(how = How.XPATH, using = "//form[contains(@class,'login')]//input[@type='password']")
	private WebElement passwordField;

	@FindBy(how = How.XPATH, using = "//form[contains(@class,'login')]//button[text()='Login']")
	private WebElement loginButton;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	@Inject
	public LoginPage(
			// % protected region % [Add any additional constructor parameters here] off begin
			// % protected region % [Add any additional constructor parameters here] end
			WebDriver webDriver,
			Properties properties
	) {
		super(
				// % protected region % [Add any additional constructor arguments here] off begin
				// % protected region % [Add any additional constructor arguments here] end
				webDriver,
				properties,
				"login"
		);

		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end

		log.trace("Initialised {}", this.getClass().getSimpleName());
	}

	/**
	 * Insert the given username into the username text field.
	 *
	 * @param username the username string to be inserted into the text field.
	 */
	public void insertUsername(@NonNull String username) {
		log.debug("Inserting {} into username text field", username);

		// % protected region % [Add any additional logic for insertUsername before the main body here] off begin
		// % protected region % [Add any additional logic for insertUsername before the main body here] end

		usernameField.sendKeys(username);

		// % protected region % [Add any additional logic for insertUsername after the main body here] off begin
		// % protected region % [Add any additional logic for insertUsername after the main body here] end

		log.debug("Inserted {} into username text field", username);
	}

	/**
	 * Insert the given password into the password text field.
	 *
	 * @param password the password string to be inserted into the text field.
	 */
	public void insertPassword(@NonNull String password) {
		log.debug("Inserting {} into password text field", password);

		// % protected region % [Add any additional logic for insertPassword before the main body here] off begin
		// % protected region % [Add any additional logic for insertPassword before the main body here] end

		passwordField.sendKeys(password);

		// % protected region % [Add any additional logic for insertPassword after the main body here] off begin
		// % protected region % [Add any additional logic for insertPassword after the main body here] end

		log.debug("Inserted {} into password text field", password);
	}

	/**
	 * Simply click on the login button.
	 */
	public void clickLogin() {
		log.debug("Clicking on the login button");

		// % protected region % [Add any additional logic for clickLogin before the main body here] off begin
		// % protected region % [Add any additional logic for clickLogin before the main body here] end

		loginButton.click();

		// % protected region % [Add any additional logic for clickLogin after the main body here] off begin
		// % protected region % [Add any additional logic for clickLogin after the main body here] end

		log.debug("Clicked on the login button");
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}