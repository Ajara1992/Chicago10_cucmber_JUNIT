package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import pages.DatatablePage;
import utilities.Driver;

public class newdatatables_steps {
    DatatablePage dtp = new DatatablePage();


    @Given("User is on the datatables homepage")
    public void user_is_on_the_datatables_homepage() throws InterruptedException {
        Driver.getDriver().get("https://editor.datatables.net/");
        Thread.sleep(2000);
    }

    @Given("User clicks to New Button")
    public void user_clicks_to_New_Button() {
        dtp.newButton.click();

    }

    @Then("User should see Create New Entry Box")
    public void user_should_see_Create_New_Entry_Box() {
        dtp.createButton.isDisplayed();
    }

    @Then("User should enter firstname {string}")
    public void user_should_enter_firstname(String firstname) {
        dtp.firstnameButton.sendKeys(firstname);
    }

    @Then("User should enter lastname {string}")
    public void user_should_enter_lastname(String lastname) {

        dtp.lastNameButton.sendKeys(lastname);
    }

    @Then("User should enter position {string}")
    public void user_should_enter_position(String position) {
        dtp.positionButton.sendKeys(position);
    }

    @Then("User should enter office {string}")
    public void user_should_enter_office(String office) {
        dtp.officeButton.sendKeys(office);
    }

    @Then("User should enter extension {string}")
    public void user_should_enter_extension(String extention) {
       dtp.extentionButton.sendKeys(extention);
    }

    @Then("User should enter start date {string}")
    public void user_should_enter_start_date(String date) throws InterruptedException {
        Thread.sleep(500);
        dtp.dateButton.sendKeys(date);
    }

    @Then("User should enter salary {string}")
    public void user_should_enter_salary(String salary) throws InterruptedException {
        dtp.salaryButton.sendKeys(salary);
        Thread.sleep(500);
    }

    @Then("User should click to create button")
    public void user_should_click_to_create_button() {
        dtp.createButton.click();
    }

    @Then("User enters first name {string} to search box")
    public void user_enters_first_name_to_search_box(String enterfirstname) {
        dtp.insertedname.sendKeys(enterfirstname);
    }

    @Then("User should see first name {string} is inserted in the table")
    public void user_should_see_first_name_is_inserted_in_the_table(String expected) throws InterruptedException {
        String expectedName = expected;
        String actual = dtp.firstnameButton.getText();
        Thread.sleep(500);
        Assert.fail();
        Assert.assertTrue("name was not found", actual.contains(expected));
    }
}
