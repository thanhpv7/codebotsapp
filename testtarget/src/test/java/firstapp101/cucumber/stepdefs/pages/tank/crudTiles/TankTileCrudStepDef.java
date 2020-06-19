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
package firstapp101.cucumber.stepdefs.pages.tank.crudTiles;

import firstapp101.cucumber.pom.pages.tank.crudTiles.edit.TankCrudTileEdit;
import firstapp101.cucumber.pom.pages.tank.crudTiles.list.TankCrudTileList;
import firstapp101.entities.AbstractEntity;
import firstapp101.entities.EntityReference;
import firstapp101.cucumber.stepdefs.botwritten.AbstractStepDef;
import firstapp101.cucumber.utils.AlertBoxUtils;
import firstapp101.inject.factories.*;
import org.testng.Assert;
import com.google.inject.Inject;
import firstapp101.cucumber.pom.botwritten.factories.AdminPageFactory;
import cucumber.runtime.java.guice.ScenarioScoped;
import io.cucumber.java.en.*;
import org.openqa.selenium.TimeoutException;
import lombok.extern.slf4j.Slf4j;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@Slf4j
@ScenarioScoped
public class TankTileCrudStepDef extends AbstractStepDef {

	@Inject
	TankCrudTileEdit tankCrudTileEdit;

	@Inject
	TankCrudTileList tankCrudTileList;

	@Inject
	AdminPageFactory adminPageFactory;

	/**
	 * Entity to be used in crud tile testing
	 */
	private AbstractEntity tankEntity;

	@Inject
	private SpeciesEntityFactory speciesEntityFactory;

	@Inject
	private TankEntityFactory tankEntityFactory;

	@Inject
	private FishEntityFactory fishEntityFactory;

	@Inject
	private AdminEntityFactory adminEntityFactory;

	@Inject
	private FishnaticEntityFactory fishnaticEntityFactory;


	// % protected region % [Add any additional fields here] off begin
	// % protected region % [Add any additional fields here] end

	@When("I create references for crud tile Tank in page Tank")
	public void Tank() throws Exception {
		tankEntity = getEntityFactory("Tank").createWithNoRef();
		for (EntityReference reference : tankEntity.References) {
			if (!reference.optional) {
				createValidEntityInBackend(reference.entityName);
			}
		}
	}

	@When("I click on create button in crud tile Tank in page Tank")
	public void clickCreateButton() throws Exception {
		tankCrudTileList.createButton.click();
	}

	@Then("I create a valid entity in crud tile Tank in page Tank")
	public void createValidEntityInTile() throws Exception {
		tankCrudTileEdit.applyEntity(tankEntity);
	}

	@Then("I verify Tank list in page Tank")
	public void verifyCrudTileList() throws Exception {
		webDriverWait.until(x -> tankCrudTileList.CrudListItems.size() > 0);
	}

	@When("I update an existing entity in crud tile Tank of page Tank")
	public void updateEntityInFrontend() throws Exception {
		// % protected region % [Add any additional steps before editing entity here] off begin
		// % protected region % [Add any additional steps before editing entity here] end

		// wait for the list to be populated with values
		webDriverWait.until(x -> tankCrudTileList.CrudListItems.size() > 0);
		tankCrudTileList.EditButtons.get(0).click();
		tankEntity = getEntityFactory("Tank").createWithNoRef();
		tankCrudTileEdit.applyEntity(tankEntity);

		// % protected region % [Add any additional steps after editing entity here] off begin
		// % protected region % [Add any additional steps after editing entity here] end
	}

	@When("I view an existing entity in crud tile Tank of page Tank")
	public void viewEntityInFrontend() throws Exception {
		// % protected region % [Add any additional steps before main process of viewing entity here] off begin
		// % protected region % [Add any additional steps before main process of viewing entity here] end

		// wait for the list to be populated with values
		webDriverWait.until(x -> tankCrudTileList.CrudListItems.size() > 0);
		tankCrudTileList.ViewButtons.get(0).click();

		// % protected region % [Add any additional steps before viewing entity here] off begin
		// % protected region % [Add any additional steps before viewing entity here] end

		// TODO add more logic for viewing here

		// % protected region % [Add any additional steps after viewing entity here] off begin
		// % protected region % [Add any additional steps after viewing entity here] end
	}

	@When("I delete an existing entity in crud tile Tank of page Tank")
	public void deleteEntityInFrontend() throws Exception {
		// % protected region % [Add any additional steps before main process of deleteing entity here] off begin
		// % protected region % [Add any additional steps before main process of deleteing entity here] end

		tankCrudTileList.DeleteButtons.get(0).click();
		AlertBoxUtils.alertBoxHandler(webDriver, true);

		// % protected region % [Add any additional steps after deleting entity here] off begin
		// % protected region % [Add any additional steps after deleting entity here] end
	}

	/**
	 * Given the name of entity, recursively create entities in backend
	 * @param entityName Name of the type of entity
	 * @return Created entity
	 * @throws Exception
	 */
	private AbstractEntity createValidEntityInBackend(String entityName) throws Exception{
		AbstractEntity entity = getEntityFactory(entityName).createWithNoRef();

		var createPage = adminPageFactory.createCrudEditPage(entityName);
		// for each of the required references we will create it
		for (EntityReference reference : entity.References) {
			if (!reference.optional) {
				createValidEntityInBackend(reference.entityName);
			}
		}
		createPage.navigate();
		createPage.applyEntity(entity);
		return entity;
	}

	private BaseFactory getEntityFactory(String entityName) throws Exception {
		BaseFactory baseFactory;
		switch (entityName) {
			case "Species":
				baseFactory = speciesEntityFactory;
				break;
			case "Tank":
				baseFactory = tankEntityFactory;
				break;
			case "Fish":
				baseFactory = fishEntityFactory;
				break;
			case "Admin":
				baseFactory = adminEntityFactory;
				break;
			case "Fishnatic":
				baseFactory = fishnaticEntityFactory;
				break;
			default:
				throw new Exception(String.format("Unexpected entityName %s", entityName));
		}
		return baseFactory;
	}

	// % protected region % [Add any additional methods here] off begin
	// % protected region % [Add any additional methods here] end
}