package runners;

import cucumber.api.CucumberOptions;
        import cucumber.api.junit.Cucumber;
        import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = "html:target/cucumber", //this plugin for reports, coz we will be executing differ test
        features = "src/test/resources/features", //this is the path , so it can find features files to read from
        glue = "steps",   //connects the features and the code. and we glue throgh package, coz everyting under this package will run
        tags = "@amazon",  //will run everything under the specific tag , we can have multiple tags
        dryRun = false //runs without executing
)
public class Runner {


}
