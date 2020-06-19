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
package firstapp101.cucumber.pom.pages.fish.crudTiles.edit;

import com.google.inject.Inject;
import firstapp101.cucumber.pom.tiles.crudTile.edit.CrudTileEdit;
import firstapp101.cucumber.utils.*;
import firstapp101.entities.AbstractEntity;
import firstapp101.entities.FishEntity;
import cucumber.runtime.java.guice.ScenarioScoped;
import lombok.extern.slf4j.Slf4j;
import lombok.NonNull;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import java.util.*;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * FishCrudTileList is a Page POM that is associated with list component the Fish crud tile in fish
 *
 */
@Slf4j
@ScenarioScoped
public class FishCrudTileEdit extends CrudTileEdit {

	private final String tagName = "cb-fish-tile-crud-edit";

	@FindBy(how = How.XPATH, using = "//" + tagName + "//button[normalize-space()='Create']")
	public WebElement createButton;

	@FindBy(how = How.XPATH, using = "//" + tagName + "//button[normalize-space()='Save']")
	public WebElement saveButton;

	@FindBy(how = How.XPATH, using = "//" + tagName + "//button[normalize-space()='Cancel']")
	public WebElement cancelButton;

	@FindBy(how = How.XPATH, using = "//" + tagName + "//input[@id='name-field']")
	private WebElement nameField;
	// TODO default handling dataAttribute dateOfBirthField;
	@FindBy(how = How.XPATH, using = "//" + tagName + "//input[@id='dateOfBirth-field']")
	private WebElement dateOfBirthField;
	@FindBy(how = How.XPATH, using = "//" + tagName + "//input[@id='alive-field']")
	private WebElement aliveField;
	@FindBy(how = How.XPATH, using = "//" + tagName + "//ng-select[@id='born-field']")
	private WebElement bornField;

	// Outgoing one-to-one

	// Incoming one-to-one

	// Outgoing one-to-many

	// Incoming one-to-many
	@FindBy(how = How.XPATH, using = "//" + tagName + "//ng-select[@id='speciesId-field']")
	private WebElement speciesField;
	@FindBy(how = How.XPATH, using = "//" + tagName + "//ng-select[@id='tankId-field']")
	private WebElement tankField;

	// Outgoing many-to-many

	// Incoming many-to-many

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	@Inject
	public FishCrudTileEdit(
			// % protected region % [Add any additional constructor parameters here] off begin
			// % protected region % [Add any additional constructor parameters here] end
			@NonNull WebDriver webDriver,
			@NonNull Properties properties
	) {
		super(
			// % protected region % [Add any additional constructor arguments here] off begin
			// % protected region % [Add any additional constructor arguments here] end
			webDriver,
			properties
		);

		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end

		log.trace("Initialised {}", this.getClass().getSimpleName());
	}

	@Override
	protected void fillInEntityInformation(AbstractEntity abstractEntity)
	{
		var entity = (FishEntity) abstractEntity;
		nameField.sendKeys(entity.getName());
		// TODO default handling for dataAttribute dateOfBirthField
		dateOfBirthField.sendKeys(entity.getDateOfBirth().toString());

		if (entity.getAlive()) {
			aliveField.click();
		}
		DropdownUtils.selectOptionByName(webDriver, bornField, entity.getBorn().getLiteralValue());

		saveButton.click();
	}

	// % protected region % [Add any additional methods here] off begin
	// % protected region % [Add any additional methods here] end
}