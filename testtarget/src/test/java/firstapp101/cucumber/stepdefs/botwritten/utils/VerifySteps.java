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

import firstapp101.cucumber.stepdefs.botwritten.AbstractStepDef;
import firstapp101.cucumber.utils.WebElementUtils;
import io.cucumber.java.en.Then;
import lombok.extern.slf4j.Slf4j;
import org.openqa.selenium.By;
import org.testng.Assert;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@Slf4j
public class VerifySteps extends AbstractStepDef {

	@Then("I expect the element with (.*) of (.*) to contain the text '(.*)'")
	public void expect_element_by_to_contain_text(String selector, String path, String expectedText) throws Exception {
		By elementBy = WebElementUtils.getElementAsBy(selector, path);
		String elementText = webDriver.findElement(elementBy).getText();
		Assert.assertEquals(expectedText, elementText);
	}

	@Then("I expect the element with (.*) of (.*) to contain the date (.*)")
	public void expect_an_element_to_be_present_by(String selector, String path, String expectedDate) throws Exception {
		By elementBy = WebElementUtils.getElementAsBy(selector, path);
		String elementText = webDriver.findElement(elementBy).getText();
		Assert.assertEquals(expectedDate, elementText);
	}

	@Then("I expect the element with (.*) of (.*) to be visible")
	public void expect_an_element_to_be_present_by(String selector, String path) throws Exception {
		By elementBy = WebElementUtils.getElementAsBy(selector, path);
		Assert.assertTrue(webDriver.findElement(elementBy).isDisplayed());
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}

