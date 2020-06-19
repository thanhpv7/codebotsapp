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
package firstapp101.cucumber.pom.tiles.crudTile.edit;

import firstapp101.cucumber.utils.NavigationUtils;
import firstapp101.entities.*;
import firstapp101.cucumber.pom.botwritten.page.*;
import firstapp101.cucumber.pom.botwritten.factories.AdminPageFactory;
import com.google.inject.Inject;
import lombok.NonNull;
import lombok.extern.slf4j.Slf4j;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import java.util.List;
import java.util.Properties;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Base class for all page object models in the application.
 */
@Slf4j
public abstract class CrudTileEdit extends AbstractPage {

	@FindBy(how = How.XPATH, using = "//button[normalize-space()='Create']")
	public WebElement createButton;

	@FindBy(how = How.XPATH, using = "//button[normalize-space()='Save']")
	public WebElement saveButton;

	@FindBy(how = How.XPATH, using = "//button[normalize-space()='Cancel']")
	public WebElement cancelButton;

	@FindBy(how = How.CSS, using = "button.icon-look")
	public List<WebElement> ViewButtons;

	@FindBy(how = How.CSS, using = "button.icon-edit")
	public List<WebElement> EditButtons;

	@FindBy(how = How.CSS, using = ".collection__edit-actions.collection__edit-actions > cb-button-group > button.icon-bin-delete")
	public List<WebElement> DeleteButtons;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	protected CrudTileEdit(
			// % protected region % [Add any additional constructor parameters here] off begin
			// % protected region % [Add any additional constructor parameters here] end
			@NonNull WebDriver webDriver,
			@NonNull Properties properties
	) {
		// % protected region % [Add any additional constructor logic before the main body here] off begin
		// % protected region % [Add any additional constructor logic before the main body here] end
		super(
			// % protected region % [Add any additional constructor arguments here] off begin
			// % protected region % [Add any additional constructor arguments here] end
			webDriver,
			properties
		);

		// % protected region % [Add any additional constructor logic after the main body here] off begin
		// % protected region % [Add any additional constructor logic after the main body here] end
	}

	public void applyEntity(AbstractEntity entity) throws Exception
	{
		fillInEntityInformation(entity);
	}

	protected abstract void fillInEntityInformation(AbstractEntity entity);
}