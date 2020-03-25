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

public class AlertBoxUtils {

	public static boolean alertBoxIsPresent(@NonNull WebDriver webDriver) {
		try{
			Alert alertBox = webDriver.switchTo().alert();
			return true;
		}
		catch (Exception e) {
			return false;
		}
	}

	public static String readAlertBoxMessage(@NonNull WebDriver webDriver) throws NoAlertPresentException {
		Alert alertBox = webDriver.switchTo().alert();
		return alertBox.getText();
	}

	public static void writeToAlertBox(@NonNull WebDriver webDriver,@NonNull String message) throws NoAlertPresentException {
		var alertBox = webDriver.switchTo().alert();
		alertBox.sendKeys(message);
	}

	public static void alertBoxHandler(@NonNull WebDriver webDriver, boolean confirm) throws NoAlertPresentException {
		var alertBox = webDriver.switchTo().alert();
		if (confirm) {
			alertBox.accept();
		}
		else {
			alertBox.dismiss();
		}
		webDriver.switchTo().defaultContent();
	}
	
	// % protected region % [Add any additional class methods here] end
}
