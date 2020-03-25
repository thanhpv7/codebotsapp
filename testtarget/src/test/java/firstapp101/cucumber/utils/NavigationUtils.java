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
import org.openqa.selenium.WebDriver;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

public class NavigationUtils {

	public static void goToUrl(@NonNull WebDriver driver ,@NonNull String path) {
		driver.navigate().to(path);
		WaitUtils.waitForPage(driver);
	}

	public static boolean urlEndsWith(@NonNull WebDriver driver, @NonNull String url, String... alternativeUrls) {
		if (driver.getCurrentUrl().endsWith(url)) {
			return true;
		}

		for (String alternativeUrl : alternativeUrls) {
			if (driver.getCurrentUrl().endsWith(alternativeUrl)) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Refresh page in web driver
	 * @param driver Web driver
	 */
	public static void refreshPage(@NonNull WebDriver driver) {
		driver.navigate().refresh();
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
