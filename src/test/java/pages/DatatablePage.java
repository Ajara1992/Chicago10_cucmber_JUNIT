package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class DatatablePage {

 WebDriver driver;

    public DatatablePage() {

        driver = Driver.getDriver();
        PageFactory.initElements(driver, this);
    }


    @FindBy(xpath = "//button[@class='dt-button buttons-create']")
    public WebElement newButton;


    @FindBy(className = "DTE_Form_Content")
    public WebElement databaseNewButton;

    @FindBy(id = "DTE_Field_first_name")
    public WebElement firstnameButton;

    @FindBy(id = "DTE_Field_last_name")
    public WebElement lastNameButton;

    @FindBy(id = "DTE_Field_position")
    public WebElement positionButton;

    @FindBy(id = "DTE_Field_office")
    public WebElement officeButton;

    @FindBy(id = "DTE_Field_extn")
    public WebElement extentionButton;

    @FindBy(id = "DTE_Field_start_date")
    public WebElement dateButton;

    @FindBy(id = "DTE_Field_salary")
    public WebElement salaryButton;

    @FindBy(xpath = "//button[@class='btn']")
    public  WebElement createButton;

    @FindBy(xpath = "//input[@type='search']")
    public WebElement SearchBoxButton;

    @FindBy(xpath = "//table[@id='example']//td[@class='sorting_1']")
    public WebElement insertedname;

    }

