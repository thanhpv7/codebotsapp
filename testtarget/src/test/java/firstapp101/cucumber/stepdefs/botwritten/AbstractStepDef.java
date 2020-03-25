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
package firstapp101.cucumber.stepdefs.botwritten;

import com.google.inject.Inject;
import firstapp101.cucumber.context.TestContext;
import lombok.NonNull;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.util.Properties;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

public abstract class AbstractStepDef {

	@Inject @NonNull
	protected TestContext testContext;

	@Inject @NonNull
	protected WebDriver webDriver;

	@Inject @NonNull
	protected Properties properties;

	@Inject @NonNull
	protected WebDriverWait webDriverWait;

	// % protected region % [Add any additional fields here] off begin
	// % protected region % [Add any additional fields here] end

	// % protected region % [Add any additional methods here] off begin
	// % protected region % [Add any additional methods here] end
}