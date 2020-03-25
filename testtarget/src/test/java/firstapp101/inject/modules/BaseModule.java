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
package firstapp101.inject.modules;

import firstapp101.cucumber.suites.TestSuite;
import com.google.inject.AbstractModule;
import com.google.inject.Provides;
import com.google.inject.Singleton;
import com.google.inject.Inject;
import cucumber.runtime.java.guice.ScenarioScoped;
import io.github.bonigarcia.wdm.WebDriverManager;
import net.andreinc.mockneat.MockNeat;
import lombok.extern.slf4j.Slf4j;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.MutableCapabilities;
import org.openqa.selenium.UnexpectedAlertBehaviour;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.ie.InternetExplorerDriverLogLevel;
import org.openqa.selenium.ie.InternetExplorerOptions;
import org.openqa.selenium.opera.OperaDriver;
import org.openqa.selenium.opera.OperaOptions;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.safari.SafariDriver;
import org.openqa.selenium.safari.SafariOptions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.net.MalformedURLException;
import java.util.Properties;
import java.net.URL;
import java.util.Map;
import java.io.*;

// % protected region % [Apply any additional imports here] off begin
// % protected region % [Apply any additional imports here] end

/**
 * Mainly used for anything that is generic by nature such as {@link MockNeat}.
 */
@Slf4j
public class BaseModule extends AbstractModule {

	private static final int WAIT_TIME = 10;

	static {
		WebDriverManager.chromedriver().setup();
		WebDriverManager.firefoxdriver().setup();
	}

	// % protected region % [Apply any additional class fields here] off begin
	// % protected region % [Apply any additional class fields here] end

	@Override
	protected void configure() {
		log.trace("Configuring BaseModule");

		super.configure();

		// % protected region % [Apply any additional configure steps here] off begin
		// % protected region % [Apply any additional configure steps here] end

		log.trace("Configured BaseModule");
	}

	@Provides
	public MockNeat mockNeat() {
		log.trace("Creating MockNeat");

		// % protected region % [Customise MockNeat here] off begin
		MockNeat mockNeat = MockNeat.threadLocal();
		// % protected region % [Customise MockNeat here] end

		log.trace("Created MockNeat");

		return mockNeat;
	}

	@Provides
	@Singleton
	public Properties properties() {
		log.trace("Creating properties file");

		// % protected region % [Add any additional logic for properties before the main body here] off begin
		// % protected region % [Add any additional logic for properties before the main body here] end

		Properties properties = new Properties();

		try (InputStream input = new FileInputStream(new File("src/test/resources/cucumber.properties"))) {
			properties.load(input);
		} catch (IOException e) {
			log.error("Unable to load properties file");
			e.printStackTrace();
		}

		// Handle default values if not defined in the properties file.
		properties.putIfAbsent("isLocal", "true");
		properties.putIfAbsent("selenium.url", "http://localhost:4200");

		// % protected region % [Add any additional logic for properties after the main body here] off begin
		// % protected region % [Add any additional logic for properties after the main body here] end

		log.trace("Created properties file");

		return properties;
	}

	@Inject
	@Provides
	@ScenarioScoped
	public WebDriverWait webDriverWait(WebDriver webDriver) {
		return new WebDriverWait(webDriver, WAIT_TIME);
	}

	@Provides
	@ScenarioScoped
	public WebDriver webDriver(
			Properties properties
	) throws MalformedURLException {
		log.trace("Creating web driver");

		// % protected region % [Add any additional logic for webDriver before the main body here] off begin
		// % protected region % [Add any additional logic for webDriver before the main body here] end

		WebDriver webDriver;

		if (properties.getOrDefault("isLocal", "true").equals("true")) {
			// % protected region % [Add any additional logic before local driver configuration here] off begin
			// % protected region % [Add any additional logic before local driver configuration here] end

			webDriver = setupLocalDriver(properties);

			// % protected region % [Add any additional logic after local driver configuration here] off begin
			// % protected region % [Add any additional logic after local driver configuration here] end
		} else {
			// % protected region % [Add any additional logic before remote driver configuration here] off begin
			// % protected region % [Add any additional logic before remote driver configuration here] end

			DesiredCapabilities capabilities = new DesiredCapabilities();
			capabilities.setCapability("browserName", TestSuite.getBrowser().get());

			Map<String, Object> browserstackOptions = Map.of(
					"os", TestSuite.getPlatform().get(),
					"osVersion", TestSuite.getPlatformVersion().get(),
					"local", "true",
					"networkLogs", "true"
			);

			// % protected region % [Add any additional configuration for browserstack here] off begin
			// % protected region % [Add any additional configuration for browserstack here] end

			capabilities.setCapability("bstack:options", browserstackOptions);

			URL browserstack = new URL((String) properties.get("browserstack.url"));

			// % protected region % [Add any additional logic before remote driver configuration here] off begin
			// % protected region % [Add any additional logic before remote driver configuration here] end

			webDriver = new RemoteWebDriver(browserstack, capabilities);

			// % protected region % [Add any additional logic after remote driver configuration here] off begin
			// % protected region % [Add any additional logic after remote driver configuration here] end
		}

		webDriver.manage().window().maximize();

		// % protected region % [Apply any additional logic for webDriver after the main body here] off begin
		// % protected region % [Apply any additional logic for webDriver after the main body here] end

		log.trace("Created web driver");

		return webDriver;
	}

	private static WebDriver setupLocalDriver(Properties properties) {
		WebDriver webDriver;

		MutableCapabilities options;
		switch (TestSuite.getBrowser().get().toLowerCase()) {
			case "chrome":
			case "chrome-edge":
				log.info("Requesting Chrome browser...");
				ChromeOptions chromeOptions = new ChromeOptions();
				options = chromeOptions;

				if (Boolean.parseBoolean((String)properties.get("webdriver.chrome.headless"))) {
					chromeOptions.addArguments("--silent-launch");
					chromeOptions.addArguments("--no-startup-window");
					chromeOptions.addArguments("--no-sandbox");
					chromeOptions.addArguments("--headless");
					chromeOptions.addArguments("--allow-insecure-localhost");
					chromeOptions.addArguments("--disable-gpu");
					chromeOptions.setAcceptInsecureCerts(true);
					chromeOptions.addArguments("--start-maximized");
				}

				// % protected region % [Change chrome options here] off begin
				// Fix problem in jenkins instance for docker
				// The problem is caused by the limited size of docker memory.
				// See more details in https://developers.google.com/web/tools/puppeteer/troubleshooting
				chromeOptions.addArguments("--disable-dev-shm-usage");
				// % protected region % [Change chrome options here] end

				// % protected region % [Add any additional logic for chrome driver here] off begin
				// % protected region % [Add any additional logic for chrome driver here] end
				webDriver = new ChromeDriver((ChromeOptions) options);
				break;
			case "firefox":
				log.info("Requesting Firefox browser...");
				options = new FirefoxOptions();
				// % protected region % [Add any additional logic for firefox driver here] off begin
				// % protected region % [Add any additional logic for firefox driver here] end
				webDriver = new FirefoxDriver((FirefoxOptions) options);
				break;
			case "ie":
				log.info("Requesting Internet Explorer browser...");
				options = new InternetExplorerOptions();
				options.setCapability(InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS, true);
				options.setCapability(InternetExplorerDriver.UNEXPECTED_ALERT_BEHAVIOR, true);
				options.setCapability(InternetExplorerDriver.NATIVE_EVENTS, true);
				options.setCapability(CapabilityType.UNHANDLED_PROMPT_BEHAVIOUR, UnexpectedAlertBehaviour.IGNORE);
				options.setCapability(InternetExplorerDriver.IGNORE_ZOOM_SETTING, false);
				options.setCapability(InternetExplorerDriver.ELEMENT_SCROLL_BEHAVIOR, true);
				options.setCapability(InternetExplorerDriver.LOG_LEVEL, InternetExplorerDriverLogLevel.TRACE.toString());
				options.setCapability(InternetExplorerDriver.LOG_FILE, "iedriverserver.log");
				// % protected region % [Add any additional logic for ie driver here] off begin
				// % protected region % [Add any additional logic for ie driver here] end
				webDriver = new InternetExplorerDriver((InternetExplorerOptions) options);
				break;
			case "edge":
				log.info("Requesting Edge browser...");
				options = new EdgeOptions();
				// % protected region % [Add any additional logic for edge driver here] off begin
				// % protected region % [Add any additional logic for edge driver here] end
				webDriver = new EdgeDriver((EdgeOptions) options);
				break;
			case "opera":
				log.info("Requesting Opera browser...");
				options = new OperaOptions();
				// % protected region % [Add any additional logic for opera driver here] off begin
				// % protected region % [Add any additional logic for opera driver here] end
				webDriver = new OperaDriver((OperaOptions) options);
				break;
			case "safari":
				log.info("Requesting Safari browser...");
				options = new SafariOptions();
				// % protected region % [Add any additional logic for safari driver here] off begin
				// % protected region % [Add any additional logic for safari driver here] end
				webDriver = new SafariDriver((SafariOptions) options);
				break;
			default:
				throw new RuntimeException("Unknown browser type...");
		}
		// % protected region % [Add any additional logic for web driver here] off begin
		// % protected region % [Add any additional logic for web driver here] end

		return webDriver;
	}

	// % protected region % [Apply any additional class methods here] off begin
	// % protected region % [Apply any additional class methods here] end
}
