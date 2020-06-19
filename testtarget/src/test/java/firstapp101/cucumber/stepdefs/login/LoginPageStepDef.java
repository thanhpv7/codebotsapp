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
package firstapp101.cucumber.stepdefs.login;

import firstapp101.cucumber.pom.botwritten.page.frontend.LoginPage;
import firstapp101.cucumber.stepdefs.botwritten.AbstractStepDef;
import com.google.inject.Inject;
import io.cucumber.java.en.*;
import lombok.extern.slf4j.Slf4j;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@Slf4j
public class LoginPageStepDef extends AbstractStepDef {

	@Inject
	private LoginPage loginPage;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	@Given("^I navigate to the login page$")
	public void navigate() {
		loginPage.navigate();
	}

	@When("I login with username {string} with password {string}")
	public void iLoginWithUsernameWithPassword(String username, String password) throws InterruptedException {
		loginPage.insertUsername(username);
		loginPage.insertPassword(password);
		loginPage.clickLogin();
	}

	@Then("I should see the homepage")
	public void iShouldSeeTheHomepage() {
			webDriverWait.until(webDriver -> webDriver.getCurrentUrl().contains(properties.getProperty("selenium.url") + "/") &&
					!webDriver.getCurrentUrl().contains("login"));
	}

	@When("I login with admin account")
	public void iLoginWithAdminAccount() throws InterruptedException {
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
