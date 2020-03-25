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
package firstapp101.cucumber.pom.botwritten.page;

import firstapp101.cucumber.utils.NavigationUtils;
import firstapp101.cucumber.pom.botwritten.factories.AdminPageFactory;
import lombok.extern.slf4j.Slf4j;
import lombok.NonNull;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;
import java.util.Properties;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Base class for all page object models in the application.
 */
@Slf4j
public abstract class AbstractPage {
	protected final WebDriver webDriver;
	protected final Properties properties;
	protected final AdminPageFactory adminPageFactory;
	public final String pageUrl;

	// This is used to track circular cascade dependencies and prevent infinite recursion
	protected static final Stack<String> pageRedirectStack = new Stack<>();

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	protected AbstractPage(
			// % protected region % [Add any additional constructor parameters here] off begin
			// % protected region % [Add any additional constructor parameters here] end
			@NonNull WebDriver webDriver,
			@NonNull Properties properties,
			AdminPageFactory adminPageFactory,
			@NonNull String pageUrlSlug
	) {
		// % protected region % [Add any additional constructor logic before the main body here] off begin
		// % protected region % [Add any additional constructor logic before the main body here] end

		this.webDriver = webDriver;
		this.properties = properties;
		this.adminPageFactory = adminPageFactory;
		this.pageUrl = properties.get("selenium.url") + "/" + pageUrlSlug;

		PageFactory.initElements(webDriver, this);

		// % protected region % [Add any additional constructor logic after the main body here] off begin
		// % protected region % [Add any additional constructor logic after the main body here] end
	}

	protected AbstractPage(
			@NonNull WebDriver webDriver,
			@NonNull Properties properties,
			@NonNull String pageUrlSlug
	) {

		this(webDriver, properties, null, pageUrlSlug);

		PageFactory.initElements(webDriver, this);

		// % protected region % [Add any additional constructor logic after the main body here for constructor with three params] off begin
		// % protected region % [Add any additional constructor logic after the main body here for constructor with three params] end
	}

	protected AbstractPage(
			@NonNull WebDriver webDriver,
			@NonNull Properties properties
	) {

		this(webDriver, properties, null, "");

		// % protected region % [Add any additional constructor logic after the main body here for constructor with two params] off begin
		// % protected region % [Add any additional constructor logic after the main body here for constructor with two params] end
	}

	public void navigate() {
		log.debug("Navigating to url: " + pageUrl);

		// % protected region % [Add any additional logic for navigate before the main body here] off begin
		// % protected region % [Add any additional logic for navigate before the main body here] end

		NavigationUtils.goToUrl(webDriver, pageUrl);

		// % protected region % [Add any additional logic for navigate after the main body here] off begin
		// % protected region % [Add any additional logic for navigate after the main body here] end

		log.debug("Navigated to: " + pageUrl);
	}

	public void navigate(String referrerUrl) {
		pageRedirectStack.push(referrerUrl);
		navigate();
	}

	public void navigateBack() {
		NavigationUtils.goToUrl(webDriver, pageRedirectStack.pop());
	}

	protected boolean isCurrentPageInStack() {
		return this.pageRedirectStack.contains(this.pageUrl);
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}

