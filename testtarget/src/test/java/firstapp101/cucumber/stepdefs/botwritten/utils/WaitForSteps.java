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
package firstapp101.cucumber.stepdefs.botwritten.utils;

import firstapp101.cucumber.pom.botwritten.enums.VisibilityEnum;
import firstapp101.cucumber.stepdefs.botwritten.AbstractStepDef;
import firstapp101.cucumber.utils.WaitUtils;
import firstapp101.cucumber.utils.WebElementUtils;
import io.cucumber.java.en.Then;
import lombok.extern.slf4j.Slf4j;
import org.openqa.selenium.By;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@Slf4j
public class WaitForSteps extends AbstractStepDef {

	@Then("I wait for the element with (.*) of (.*) to be present")
	public void wait_for_an_element_to_be_present_by (String selector, String path) throws Exception {
		By elementBy = WebElementUtils.getElementAsBy(selector, path);
		WaitUtils.waitForElement(webDriver, elementBy, VisibilityEnum.EXISTS);
	}

	@Then("I wait for the element with (.*) of (.*) to not be present")
	public void wait_for_an_element_to_not_be_present_by(String selector, String path) throws Exception {
		By elementBy = WebElementUtils.getElementAsBy(selector, path);
		WaitUtils.waitForElement(webDriver, elementBy, VisibilityEnum.NOT_EXISTS);
	}

	@Then("I wait for the element with (.*) of (.*) to be visible")
	public void wait_for_an_element_to_be_visible_by (String selector, String path) throws Exception {
		By elementBy = WebElementUtils.getElementAsBy(selector, path);
		WaitUtils.waitForElement(webDriver, elementBy, VisibilityEnum.VISIBLE);
	}

	@Then("I wait for the element with (.*) of (.*) to not be visible")
	public void wait_for_an_element_to_not_be_visible_by(String selector, String path) throws Exception {
		By elementBy = WebElementUtils.getElementAsBy(selector, path);
		WaitUtils.waitForElement(webDriver, elementBy, VisibilityEnum.NOT_VISIBLE);
	}

	@Then("I wait for the url to be (.*)")
	public void wait_for_url(String url) {
		WaitUtils.waitForUrl(webDriver, url);
	}

	@Then("I wait for (.*) seconds")
	public void wait_for_seconds(Float seconds) throws Exception {
		Thread.sleep((int)(Math.floor(seconds * 1000)));
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}



