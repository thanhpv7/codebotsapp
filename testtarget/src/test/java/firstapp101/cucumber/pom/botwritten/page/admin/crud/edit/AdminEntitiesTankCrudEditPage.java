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
package firstapp101.cucumber.pom.botwritten.page.admin.crud.edit;

import com.google.inject.Inject;
import com.google.inject.name.Named;
import firstapp101.cucumber.pom.botwritten.page.admin.crud.edit.CrudEditPage;
import firstapp101.cucumber.utils.*;
import firstapp101.entities.AbstractEntity;
import cucumber.runtime.java.guice.ScenarioScoped;
import lombok.extern.slf4j.Slf4j;
import lombok.NonNull;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.interactions.Actions;
import firstapp101.cucumber.pom.botwritten.factories.AdminPageFactory;
import firstapp101.entities.TankEntity;
import java.util.Properties;
import java.util.Collection;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * TankPage is a Page POM that is associated with the admin/entities/tank url.
 *
 */
@Slf4j
@ScenarioScoped
public class AdminEntitiesTankCrudEditPage extends CrudEditPage {

	// % protected region % [Add any additional fields here] off begin
	// % protected region % [Add any additional fields here] end

	@FindBy(how = How.XPATH, using = "//input[@id='name-field']")
	private WebElement nameField;
	// TODO default handling dataAttribute widthField;
	@FindBy(how = How.XPATH, using = "//input[@id='width-field']")
	private WebElement widthField;
	// TODO default handling dataAttribute lengthField;
	@FindBy(how = How.XPATH, using = "//input[@id='length-field']")
	private WebElement lengthField;
	// TODO default handling dataAttribute heightField;
	@FindBy(how = How.XPATH, using = "//input[@id='height-field']")
	private WebElement heightField;
	// TODO default handling dataAttribute lastCleanedField;
	@FindBy(how = How.XPATH, using = "//input[@id='lastCleaned-field']")
	private WebElement lastCleanedField;
	@FindBy(how = How.XPATH, using = "//ng-select[@id='clean-field']")
	private WebElement cleanField;

	// Outgoing one-to-one

	// Incoming one-to-one

	// Outgoing one-to-many
	@FindBy(how = How.XPATH, using = "//ng-select[@id='fishTankIds-field']")
	private WebElement fishTankField;

	// Incoming one-to-many

	// Outgoing many-to-many

	// Incoming many-to-many

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	@Inject
	public AdminEntitiesTankCrudEditPage(
			// % protected region % [Add any additional constructor parameters here] off begin
			// % protected region % [Add any additional constructor parameters here] end
			@NonNull WebDriver webDriver,
			@NonNull Properties properties
	) {
		super(
			// % protected region % [Add any additional constructor arguments here] off begin
			// % protected region % [Add any additional constructor arguments here] end
			webDriver,
			properties,
			"admin/entities/tank/create"
		);

		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end

		log.trace("Initialised {}", this.getClass().getSimpleName());
	}

	@Override
	protected void fillInEntityInformation(AbstractEntity abstractEntity)
	{
		var entity = (TankEntity) abstractEntity;
		nameField.sendKeys(entity.getName());
		// TODO default handling for dataAttribute widthField
		widthField.sendKeys(entity.getWidth().toString());

		// TODO default handling for dataAttribute lengthField
		lengthField.sendKeys(entity.getLength().toString());

		// TODO default handling for dataAttribute heightField
		heightField.sendKeys(entity.getHeight().toString());

		// TODO default handling for dataAttribute lastCleanedField
		lastCleanedField.sendKeys(entity.getLastCleaned().toString());

		DropdownUtils.selectOptionByName(webDriver, cleanField, entity.getClean().getLiteralValue());

		saveButton.click();
	}

	// % protected region % [Add any additional methods here] off begin
	// % protected region % [Add any additional methods here] end
}