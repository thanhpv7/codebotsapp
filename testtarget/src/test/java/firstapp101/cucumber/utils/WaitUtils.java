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

import firstapp101.cucumber.pom.botwritten.enums.VisibilityEnum;
import lombok.extern.slf4j.Slf4j;
import lombok.NonNull;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.WebDriverWait;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@Slf4j
public class WaitUtils {

	private static final long WEBDRIVER_WAIT_TIMEOUT_SECONDS = 5;
	private static final long WEBDRIVER_WAIT_INTERVAL_MILLIS = 100;

	private static WebDriverWait getWaitDriver(@NonNull WebDriver webDriver) {
		return new WebDriverWait(webDriver, WEBDRIVER_WAIT_TIMEOUT_SECONDS, WEBDRIVER_WAIT_INTERVAL_MILLIS);
	}

	private static WebDriverWait getWaitDriver(@NonNull WebDriver webDriver, long timeoutSeconds, long intervalMillis) {
		return new WebDriverWait(webDriver, timeoutSeconds, intervalMillis);
	}

	public static void waitForPage(@NonNull WebDriver webDriver) {
		getWaitDriver(webDriver).until(exec -> ((JavascriptExecutor) exec).executeScript("return document.readyState").equals("complete"));
	}

	public static void waitForUrl(@NonNull WebDriver webDriver, String url) {
		waitForPage(webDriver);
		getWaitDriver(webDriver).until(driver -> driver.getCurrentUrl().equals(url));
	}

	public static void waitForElementHasText(@NonNull WebDriver webDriver, By elementBy, String text) {
		getWaitDriver(webDriver).until(driver -> driver.findElement(elementBy).getText().equals(text));
	}

	public static void waitForElement(@NonNull WebDriver webDriver, WebElement element, VisibilityEnum status) throws Exception {
		switch (status) {
			case VISIBLE:
				getWaitDriver(webDriver).until(driver -> element.isDisplayed());
				break;
			case NOT_VISIBLE:
				getWaitDriver(webDriver).until(driver -> !element.isDisplayed());
				break;
			case CLICKABLE:
				getWaitDriver(webDriver).until(driver -> element.isEnabled());
				break;
			case NOT_CLICKABLE:
				getWaitDriver(webDriver).until(driver -> !element.isEnabled());
				break;
			default:
				throw new Exception(String.format("Waiting for webElement on unsupported status: %s", status));
		}
	}

	public static void waitForElement(@NonNull WebDriver webDriver, By elementBy, VisibilityEnum status) throws Exception {
		switch (status) {
			case VISIBLE:
				getWaitDriver(webDriver).until(driver -> driver.findElement(elementBy).isDisplayed());
				break;
			case NOT_VISIBLE:
				getWaitDriver(webDriver).until(driver -> !driver.findElement(elementBy).isDisplayed());
				break;
			case EXISTS:
				getWaitDriver(webDriver).until(driver -> driver.findElement(elementBy));
				break;
			case NOT_EXISTS:
				getWaitDriver(webDriver).until(driver -> {
					try {
						driver.findElement(elementBy);
						return false;
					}
					catch (NoSuchElementException e) {
						return true;
					}
				});
				break;
			case CLICKABLE:
				getWaitDriver(webDriver).until(driver -> driver.findElement(elementBy).isEnabled());
				break;
			case NOT_CLICKABLE:
				getWaitDriver(webDriver).until(driver -> !driver.findElement(elementBy).isEnabled());
				break;
			default:
				throw new Exception(String.format("Waiting for webElement on invalid status: %s", status));
		}
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}

