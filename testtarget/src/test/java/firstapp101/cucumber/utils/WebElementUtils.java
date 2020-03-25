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

public class WebElementUtils {

	public static By getElementAsBy(String identifier, String path) throws Exception {
		By elementBy;

		switch (identifier.toLowerCase()) {
			case "xpath":
				elementBy = By.xpath(path);
				break;
			case "css":
			case "cssselector":
				elementBy = By.cssSelector(path);
				break;
			case "classname":
				elementBy = By.className(path);
				break;
			case "id":
				elementBy = By.id(path);
				break;
			default:
				throw new Exception(String.format("Cannot find Identifier named '%s', please check you are using a valid selector name", identifier));
		}
		return elementBy;
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}

