package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.dependency.com.fasterxml.jackson.annotation.JsonTypeInfo;
import javafx.scene.input.Dragboard;
import org.junit.Assert;
import utilities.Driver;

public class AmazonTitle_steps {
    @When("user goes to amazon  application")
    public void user_goes_to_amazon_application() {
        Driver.getDriver().get("https://amazon.com");

    }

    @Then("user should be able to see the title of application")
    public void user_should_be_able_to_see_the_title_of_application() {
        String title = "Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more";
        Assert.fail();
        Assert.assertEquals(Driver.getDriver().getTitle(), title);


    }

        @Then("user should validate url")
        public void user_should_validate_url() {
         Assert.assertTrue(Driver.getDriver().getCurrentUrl().contains("amazon.com"));
         Driver.closeDriver();





    }

}
