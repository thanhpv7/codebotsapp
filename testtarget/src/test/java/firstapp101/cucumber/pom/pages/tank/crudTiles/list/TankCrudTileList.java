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
package firstapp101.cucumber.pom.pages.tank.crudTiles.list;

import com.google.inject.Inject;
import com.google.inject.name.Named;
import firstapp101.cucumber.pom.tiles.crudTile.list.CrudTileList;
import firstapp101.cucumber.utils.TypingUtils;
import cucumber.runtime.java.guice.ScenarioScoped;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.*;
import lombok.extern.slf4j.Slf4j;
import lombok.NonNull;
import org.openqa.selenium.WebDriver;
import firstapp101.entities.TankEntity;
import java.util.*;
import firstapp101.entities.AbstractEntity;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * TankCrudTileList is a Page POM that is associated with list component the Tank crud tile in tank
 *
 */
@Slf4j
@ScenarioScoped
public class TankCrudTileList extends CrudTileList {

	private final String tagName = "cb-tank-tile-crud-list";

	@FindBy(how = How.XPATH, using = "//" + tagName + "//button[normalize-space()='Create']")
	public WebElement createButton;

	@FindBy(how = How.XPATH, using = "//" + tagName + "//button[contains(@class, 'icon-look')]")
	public List<WebElement> ViewButtons;

	@FindBy(how = How.XPATH, using = "//" + tagName + "//button[contains(@class, 'icon-edit')]")
	public List<WebElement> EditButtons;

	@FindBy(how = How.XPATH, using = "//" + tagName + "//button[contains(@class, 'icon-bin-delete')]")
	public List<WebElement> DeleteButtons;

	@FindBy(how = How.XPATH, using = "//" + tagName + "//tbody//tr[contains(@class, 'collection__item')]")
	public List<WebElement> CrudListItems;

	// % protected region % [Add any additional fields here] off begin
	// % protected region % [Add any additional fields here] end

	@Inject
	public TankCrudTileList(
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

	// % protected region % [Add any additional methods here] off begin
	// % protected region % [Add any additional methods here] end
}
