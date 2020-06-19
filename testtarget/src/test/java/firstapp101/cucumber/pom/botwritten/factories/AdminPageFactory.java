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
package firstapp101.cucumber.pom.botwritten.factories;

import firstapp101.cucumber.pom.botwritten.page.admin.crud.list.*;
import firstapp101.cucumber.pom.botwritten.page.admin.crud.edit.*;
import com.google.inject.Inject;
import cucumber.runtime.java.guice.ScenarioScoped;
import java.util.Properties;
import lombok.*;
import org.openqa.selenium.WebDriver;

@ScenarioScoped
public class AdminPageFactory {

	@Inject
	protected WebDriver webDriver;

	@Inject
	protected Properties properties;

	// Crud List Page in Admin Session
	@Inject
	AdminEntitiesSpeciesCrudListPage adminEntitiesSpeciesCrudListPage;
	@Inject
	AdminEntitiesTankCrudListPage adminEntitiesTankCrudListPage;
	@Inject
	AdminEntitiesFishCrudListPage adminEntitiesFishCrudListPage;
	@Inject
	AdminUsersAdminCrudListPage adminUsersAdminCrudListPage;
	@Inject
	AdminUsersFishnaticCrudListPage adminUsersFishnaticCrudListPage;

	// Crud Edit Page in Admin Session
	@Inject
	AdminEntitiesSpeciesCrudEditPage adminEntitiesSpeciesCrudEditPage;
	@Inject
	AdminEntitiesTankCrudEditPage adminEntitiesTankCrudEditPage;
	@Inject
	AdminEntitiesFishCrudEditPage adminEntitiesFishCrudEditPage;
	@Inject
	AdminUsersAdminCrudEditPage adminUsersAdminCrudEditPage;
	@Inject
	AdminUsersFishnaticCrudEditPage adminUsersFishnaticCrudEditPage;

	/**
	 * Create Crud Edit List based on the entity name
 	 * @param name Name of Entity. Should be in pascal case
 	*/
	 

	public CrudListPage createCrudListPage(String name) throws Exception {
		switch (name) {

			case "Species":
				return adminEntitiesSpeciesCrudListPage;
			case "Tank":
				return adminEntitiesTankCrudListPage;
			case "Fish":
				return adminEntitiesFishCrudListPage;
			case "Admin":
				return adminUsersAdminCrudListPage;
			case "Fishnatic":
				return adminUsersFishnaticCrudListPage;
			default :
				throw new Exception(String.format("Unexpected Crud list Page: %s", name));
		}
	}

	/**
	 * Create Crud Edit POM based on the entity name
 	 * @param name Name of Entity. Should be in pascal case
 	*/
	 
	public CrudEditPage createCrudEditPage(String name) throws Exception {
		switch (name) {

			case "Species":
				return adminEntitiesSpeciesCrudEditPage;
			case "Tank":
				return adminEntitiesTankCrudEditPage;
			case "Fish":
				return adminEntitiesFishCrudEditPage;
			case "Admin":
				return adminUsersAdminCrudEditPage;
			case "Fishnatic":
				return adminUsersFishnaticCrudEditPage;
			default :
				throw new Exception(String.format("Unexpected Crud list Page: %s", name));
		}
	}
}
