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
package firstapp101.cucumber.hooks;

import com.google.inject.Inject;
import cucumber.runtime.java.guice.ScenarioScoped;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import java.io.File;
import java.io.IOException;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Cucumber hook used to handle teardown of browser windows once done.
 */
@Slf4j
@ScenarioScoped
public class SeleniumHook {
	@Inject
	private WebDriver webDriver;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	@After(order = 0)
	public void tearDown(Scenario scenario) {
		log.debug("Tearing down Selenium web driver");

		// % protected region % [Add any additional logic for tearDown before the main body here] off begin
		// % protected region % [Add any additional logic for tearDown before the main body here] end

		if (scenario.isFailed()) try {
			var screenshotDirectory = System.getProperty("user.dir") + "/src/test/resources/output/screenshot/";
			var testName = scenario.getName();

			var screenshot = ((TakesScreenshot) webDriver).getScreenshotAs(OutputType.FILE);
			var dest = new File(screenshotDirectory + testName + ".png");
			FileUtils.copyFile(screenshot, dest);
		} catch (ClassCastException | IOException cce) {
			cce.printStackTrace();
		}

		if (webDriver != null) {
			webDriver.quit();
		}

		// % protected region % [Add any additional logic for tearDown after the main body here] off begin
		// % protected region % [Add any additional logic for tearDown after the main body here] end

		log.debug("Tore down Selenium web driver");
	}
}
