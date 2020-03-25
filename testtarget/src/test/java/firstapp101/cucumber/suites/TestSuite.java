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
package firstapp101.cucumber.suites;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Parameters;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@Slf4j
@CucumberOptions(
		// % protected region % [Add any additional Cucumber options here] off begin
		// % protected region % [Add any additional Cucumber options here] end
		glue = {
				// % protected region % [Add any additional glue here] off begin
				// % protected region % [Add any additional glue here] end
				"firstapp101.cucumber.registry",
				"firstapp101.cucumber.hooks",
				"firstapp101.cucumber.stepdefs"
		},
		features = {
				// % protected region % [Add any additional features here] off begin
				// % protected region % [Add any additional features here] end
				"src/test/java/firstapp101/cucumber/features"
		},
		plugin = {
				// % protected region % [Add any additional plugin here] off begin
				// % protected region % [Add any additional plugin here] end
				"html:src/test/resources/output"
		},
		strict = true
)
public class TestSuite extends AbstractTestNGCucumberTests {
	// Shared variables to the child test runners. Use inheritable thread local here so they can be accessed by child
	// threads and to prevent other parallel test suite runner to modify this.

	@Getter
	private static ThreadLocal<String> browser = new InheritableThreadLocal<>();
	@Getter
	private static ThreadLocal<String> platform = new InheritableThreadLocal<>();
	@Getter
	private static ThreadLocal<String> platformVersion = new InheritableThreadLocal<>();

	// Set parameters from TestNG and save it so they can be accessed later in the child scenario test runners. Note
	// that these parameters are essential to run the test runners.

	@Parameters({"browser"})
	@BeforeTest(alwaysRun = true)
	public static void setBrowser(String browser) {
		log.debug("Setting up browser {}", browser);

		// % protected region % [Add any additional logic for setBrowser before the main body here] off begin
		// % protected region % [Add any additional logic for setBrowser before the main body here] end

		TestSuite.browser.set(browser);

		// % protected region % [Add any additional logic for setBrowser after the main body here] off begin
		// % protected region % [Add any additional logic for setBrowser after the main body here] end

		log.debug("Finished setting up browser {}", browser);
	}

	@Parameters({"platform"})
	@BeforeSuite(alwaysRun = true)
	public static void setPlatform(String platform) {
		log.debug("Setting up platform {}", platform);

		// % protected region % [Add any additional logic for setPlatform before the main body here] off begin
		// % protected region % [Add any additional logic for setPlatform before the main body here] end

		TestSuite.platform.set(platform);

		// % protected region % [Add any additional logic for setPlatform after the main body here] off begin
		// % protected region % [Add any additional logic for setPlatform after the main body here] end

		log.debug("Finished setting up platform {}", platform);
	}

	@Parameters({"platform-version"})
	@BeforeSuite(alwaysRun = true)
	public static void setPlatformVersion(String platformVersion) {
		log.debug("Finished setting up platform version {}", platformVersion);

		// % protected region % [Add any additional logic for setPlatformVersion before the main body here] off begin
		// % protected region % [Add any additional logic for setPlatformVersion before the main body here] end

		TestSuite.platformVersion.set(platformVersion);

		// % protected region % [Add any additional logic for setPlatformVersion after the main body here] off begin
		// % protected region % [Add any additional logic for setPlatformVersion after the main body here] end

		log.debug("Finished setting up platform version {}", platformVersion);
	}

	// % protected region % [Change Annotation here if you want to disable parallel running] off begin
	// Override the super method because we want to run the scenarios in parallel.
	@DataProvider(parallel = false)
	// % protected region % [Change Annotation here if you want to disable parallel running] end
	@Override
	public Object[][] scenarios() {
		return super.scenarios();
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
