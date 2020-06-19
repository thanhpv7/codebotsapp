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
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.*;
import org.testng.Assert;
import java.util.List;

public class DropdownUtils {

	/**
	 * The xpath of a single option in drodown
	 * Has Name as %s for string format
	 */
	private final static String DROPDOWN_OPTION_XPATH_WITH_NAME = "//div[contains(@class, 'ng-option')]/span[contains(text(), '%s')]/..";

	/**
	 * XPATH for selected options to display
	 */
	private final static String SELECTED_OPTION_XPATH = "//div[contains(@class, 'ng-value')]/span[contains(@class, 'ng-value-label')]";

	/**
	 * Class for expanded dropdown component
	 */
	private final static String DROPDOWN_OPEN_CLASS = "ng-select-opened";

	/**
	 * Class for selected option
	 */
	private final static String SELECTED_CLASS = "ng-option-selected";

	private static final long WEBDRIVER_WAIT_TIMEOUT_SECONDS = 5;
	private static final long WEBDRIVER_WAIT_INTERVAL_MILLIS = 100;

	/**
	 * Whether option is selected
	 * @param option option to check
	 * @return whether option is selected
	 */
	private static boolean isOptionSelected(WebElement option) {
		return option.getAttribute("class").contains(DropdownUtils.SELECTED_CLASS);
	}

	/**
	 * Find option by option name from dropdown dlement
	 * @param driver Web driver
	 * @param element Dropdown element to select
	 * @param name Displayed name of option
	 * @return Option of dropdown
	 */
	private static WebElement findOptionByName(@NonNull WebDriver driver, @NonNull WebElement element, @NonNull String name) {
		ScrollingUtils.scrollToElement(driver, element);

		// Element of ng select
		WebElement selectElement = element;
		// Find ng select if passed in a wrapper component
		if (!element.getTagName().equals("ng-select")) {
			selectElement = element.findElement(By.tagName("ng-select"));
		}

		// Click the dropdown if not expanded
		if (!selectElement.getAttribute("class").contains(DROPDOWN_OPEN_CLASS)) {
			element.click();
		}

		String dropdownOptionXpath = String.format(DropdownUtils.DROPDOWN_OPTION_XPATH_WITH_NAME, name);
		WebDriverWait webDriverWait = new WebDriverWait(driver, DropdownUtils.WEBDRIVER_WAIT_TIMEOUT_SECONDS);
		return webDriverWait.until(ExpectedConditions.presenceOfNestedElementLocatedBy(element, By.xpath(dropdownOptionXpath)));
	}

	/**
	 * Find option in dropdown according to option name, and select it if the option is not selected.
	 * @param driver Web driver
	 * @param element Dropdown element to select
	 * @param name Displayed name of option
	 */
	public static void selectOptionByName(@NonNull WebDriver driver, @NonNull WebElement element, @NonNull String name) {

		WebElement option = DropdownUtils.findOptionByName(driver, element, name);
		if (!DropdownUtils.isOptionSelected(option)) {
			option.click();
		}
		closeDropdown(driver);
	}

	/**
	 * Find option in dropdown according to option name, and unselect it if the option is selected.
	 * @param driver Web driver
	 * @param element Dropdown element to select
	 * @param name Displayed name of option
	 */
	public static void unselectOptionByName(@NonNull WebDriver driver, @NonNull WebElement element, @NonNull String name) {

		WebElement option = DropdownUtils.findOptionByName(driver, element, name);
		if (DropdownUtils.isOptionSelected(option)) {
			option.click();
		}
		closeDropdown(driver);
	}

	/**
	 * Verify Selected Options in Multi Select Dropdown
	 * @param element Dropdown Element to be verify
	 * @param values Expected Values to be select
	 */
	public static void verifyMultiSelect(@NonNull WebElement element, @NonNull List<String> values) {
		List<WebElement> selectedOptions = element.findElements(By.xpath(SELECTED_OPTION_XPATH));

		Assert.assertEquals(selectedOptions.size(), values.size());
		selectedOptions.containsAll(values);
	}

	/**
	 * Press Escape key to close the browser
	 * @param driver The web driver to apply with
	 */
	public static void closeDropdown(@NonNull WebDriver driver) {
		Actions action = new Actions(driver);
		action.sendKeys(Keys.ESCAPE).perform();
	}
}
