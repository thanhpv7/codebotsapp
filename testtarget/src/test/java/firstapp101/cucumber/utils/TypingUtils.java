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
package firstapp101.cucumber.utils;

import lombok.NonNull;
import firstapp101.cucumber.pom.botwritten.enums.VisibilityEnum;
import org.openqa.selenium.By;
import lombok.extern.slf4j.Slf4j;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

@Slf4j
// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

public class TypingUtils {

	public static void inputEntityAttributeByClass(WebDriver driver, String className, String inputString, boolean isFastText) {
		WebElement element = driver.findElement(By.xpath(String.format("//div[contains(@class, '%s')]/input", className)));
		element.clear();

		if (isFastText) {
			JavascriptExecutor js = (JavascriptExecutor)driver;
			StringBuilder script = new StringBuilder();
			script.append(String.format("var input = document.getElementsByClassName('%s')[0].lastElementChild;", className));
			script.append("var setValue = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;");
			script.append(String.format("setValue.call(input, '%s');", inputString));
			script.append("var e = new Event('input',  {bubbles: true} );");
			script.append("input.dispatchEvent(e);");
			js.executeScript(script.toString());
		}
		else {
			element.sendKeys(inputString);
		}
	}

	public static void type(@NonNull WebDriver driver, By elementBy, String text) throws Exception {
		type(driver, driver.findElement(elementBy), text);
	}

	public static void type(@NonNull WebDriver driver, WebElement webElement, String text) {
		try {
			WaitUtils.waitForElement(driver, webElement, VisibilityEnum.VISIBLE);
			ScrollingUtils.scrollToElement(driver, webElement);
			webElement.sendKeys(text);
		} catch (Exception except) {
			log.error("Could not find element to type", except);
		}
	}

	public static void clearAndType(@NonNull WebDriver driver, By elementBy, String text) {
		clearAndType(driver, driver.findElement(elementBy), text);
	}

	public static void clearAndType(@NonNull WebDriver driver, WebElement webElement, String text) {
		try {
			WaitUtils.waitForElement(driver, webElement, VisibilityEnum.VISIBLE);
			ScrollingUtils.scrollToElement(driver, webElement);
			webElement.clear();
			webElement.sendKeys(text);
		} catch (Exception except) {
			log.error("Could not find element to clear and type", except);
		}
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
