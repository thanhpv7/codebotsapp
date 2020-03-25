package firstapp101.cucumber.pom.botwritten.page;

import firstapp101.cucumber.pom.botwritten.factories.AdminPageFactory;
import lombok.extern.slf4j.Slf4j;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.List;
import java.util.Properties;

@Slf4j
public abstract class CrudListPage extends AbstractPage {

	@FindBy(how = How.XPATH, using = "//button[normalize-space()='Create']")
	public WebElement createButton;

	@FindBy(how = How.CSS, using = "button.icon-look")
	public List<WebElement> ViewButtons;

	@FindBy(how = How.CSS, using = "button.icon-edit")
	public List<WebElement> EditButtons;

	@FindBy(how = How.CSS, using = ".collection__edit-actions.collection__edit-actions > cb-button-group > button.icon-bin-delete")
	public List<WebElement> DeleteButtons;

	@FindBy(how = How.CSS, using = "tbody > tr.collection__item")
	public List<WebElement> CrudListItems;

	protected CrudListPage(
			WebDriver webDriver,
			Properties properties,
			AdminPageFactory adminPageFactory,
			String pageUrlSlug
	) {
		super(
			webDriver,
			properties,
			adminPageFactory,
			pageUrlSlug
		);

	}

	public abstract CrudPage getCreatePage();
}
