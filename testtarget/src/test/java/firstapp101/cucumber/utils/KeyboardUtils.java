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
import org.openqa.selenium.*;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

public class KeyboardUtils{

	public static void enterKeyToWebElement(WebElement element, String keyName) throws Exception{
		switch (keyName.toLowerCase()) {
			case "enter":
				element.sendKeys(Keys.ENTER);
				break;
			case "escape":
				element.sendKeys(Keys.ESCAPE);
				break;
			case "tab":
				element.sendKeys(Keys.TAB);
				break;
			default:
				throw new Exception(String.format("Key %s is not defined in util", keyName));
		}
	}

	public static void copyFromWebElement(WebElement element) {
		element.sendKeys(getCommandControlInput("c"));
	}

	public static void pasteToWebElement(WebElement element) {
		element.sendKeys(getCommandControlInput("v"));
	}

	public static void selectAllFromWebElement(WebElement element) {
		element.sendKeys(getCommandControlInput("a"));
	}

	public static String getCommandControlInput(String commandPairedKey) {
		String os = System.getProperty("os.name");
		if (os.contains("mac")) {
			return Keys.chord(Keys.COMMAND , commandPairedKey);
		}
		else {
			return Keys.chord(Keys.CONTROL , commandPairedKey);
		}
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}

