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
package firstapp101.cucumber.stepdefs.botwritten.crud;

import firstapp101.entities.AbstractEntity;
import firstapp101.entities.EntityReference;
import firstapp101.cucumber.stepdefs.botwritten.AbstractStepDef;
import firstapp101.cucumber.utils.AlertBoxUtils;
import firstapp101.inject.factories.*;
import org.testng.Assert;
import com.google.inject.Inject;
import firstapp101.cucumber.pom.botwritten.factories.AdminPageFactory;
import cucumber.runtime.java.guice.ScenarioScoped;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.TimeoutException;
import lombok.extern.slf4j.Slf4j;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@Slf4j
@ScenarioScoped
public class CrudStepDef extends AbstractStepDef {

	@Inject
	private AdminEntityFactory adminEntityFactory;
	@Inject
	private FishnaticEntityFactory fishnaticEntityFactory;
	@Inject
	private TankEntityFactory tankEntityFactory;
	@Inject
	private SpeciesEntityFactory speciesEntityFactory;
	@Inject
	private FishEntityFactory fishEntityFactory;

	@Inject
	private AdminPageFactory adminPageFactory;

	@Given("I navigate to the {string} backend page")
	public void crud_backend_navigate(String entityName) throws Exception {
		adminPageFactory.createCrudPage(entityName).navigate();
	}

	@Then("I am on the {string} backend page")
	public void crud_assert_on_backend_page(String entityName) throws Exception {
		var pageUrl = adminPageFactory.createCrudPage(entityName).pageUrl;
		webDriverWait.until(webDriver -> webDriver.getCurrentUrl().equals(pageUrl));
	}

	@Given("I click to create a {string}")
	public void crud_backend_click_create(String entityName) throws Exception {
		adminPageFactory.createCrudPage(entityName).createButton.click();
	}

	@Given("I {string} an existing {string}")
	public void crud_backend_click_create(String crudAction, String entityName) throws Exception {
		var page = adminPageFactory.createCrudPage(entityName);

		// wait for the list to be populated with values
		webDriverWait.until(x -> page.CrudListItems.size() > 0);
		// perform an action on the first entity in the list
		switch (crudAction.toLowerCase()) {
			case "update":
				page.EditButtons.get(0).click();
				var createPage = adminPageFactory.createCrudPage(entityName).getCreatePage();
				var entity = getEntityFactory(entityName).createWithNoRef();
				createPage.applyEntity(entity);
				break;
			case "view":
				page.ViewButtons.get(0).click();
				break;
			case "delete":
				page.DeleteButtons.get(0).click();
				AlertBoxUtils.alertBoxHandler(webDriver, true);
				break;
			default:
				throw new Exception(String.format("Unexpected crud action: %s", crudAction));
		}
	}

	@Given("I create an {string} if not exists")
	public void create_entity_if_not_exist(String entityName) throws Exception {
		var page = adminPageFactory.createCrudPage(entityName);

		try {
			// wait for the list to be populated with values
			webDriverWait.until(x -> page.CrudListItems.size() > 0);
		} catch (TimeoutException e) {
			// Create a new entity if no one exists
			page.createButton.click();
			createValidEntity(entityName);
		}
	}

	@Given("I create a valid {string}")
	public void crud_backend_fill_in_and_save(String entityName) throws Exception {
		createValidEntity(entityName);
	}

	/**
	 * Given the name of entity, recursively create entities in backend
	 * @param entityName Name of the type of entity
	 * @return Created entity
	 * @throws Exception
	 */
	private AbstractEntity createValidEntity(String entityName) throws Exception{
		AbstractEntity entity = getEntityFactory(entityName).createWithNoRef();

		var createPage = adminPageFactory.createCrudPage(entityName).getCreatePage();
		// for each of the required references we will create it
		for (EntityReference reference : entity.References) {
			if (!reference.optional) {
				crud_backend_fill_in_and_save(reference.entityName);
			}
		}
		createPage.navigate();
		createPage.applyEntity(entity);
		return entity;
	}

	private BaseFactory getEntityFactory(String entityName) throws Exception
	{
		BaseFactory baseFactory;
		switch (entityName)
		{
			case "Admin":
				baseFactory = adminEntityFactory;
				break;
			case "Fishnatic":
				baseFactory = fishnaticEntityFactory;
				break;
			case "Tank":
				baseFactory = tankEntityFactory;
				break;
			case "Species":
				baseFactory = speciesEntityFactory;
				break;
			case "Fish":
				baseFactory = fishEntityFactory;
				break;
			default:
				throw new Exception(String.format("Unexpected entityName %s", entityName));
		}
		return baseFactory;
	}
}