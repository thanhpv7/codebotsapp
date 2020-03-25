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
import firstapp101.cucumber.utils.MouseClickUtils;
import firstapp101.cucumber.utils.WebElementUtils;
import io.cucumber.java.en.Then;
import lombok.extern.slf4j.Slf4j;
import org.openqa.selenium.By;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@Slf4j
public class ClickingSteps extends AbstractStepDef {

	@Then("I click on the element with (.*) of (.*)")
	public void click_on_element_by(String selector, String path) throws Exception {
		By elementBy = WebElementUtils.getElementAsBy(selector, path);
		MouseClickUtils.clickOnElement(webDriver, elementBy);
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
