$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/youtube.feature");
formatter.feature({
  "name": "Youtube search feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@youtube"
    }
  ]
});
formatter.background({
  "name": "User is on the homepage and is able to see searchbox and search button",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on the youtube homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "youtube_steps.user_is_on_the_youtube_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is able to see the search box",
  "keyword": "And "
});
formatter.match({
  "location": "youtube_steps.user_is_able_to_see_the_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is able to see the search button",
  "keyword": "And "
});
formatter.match({
  "location": "youtube_steps.user_is_able_to_see_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Testing youtube search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@youtube"
    }
  ]
});
formatter.step({
  "name": "User searches for FUNNY CAT VIDEOS",
  "keyword": "When "
});
formatter.match({
  "location": "youtube_steps.user_searches_for_FUNNY_CAT_VIDEOS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see results related to funny cat videos",
  "keyword": "Then "
});
formatter.match({
  "location": "youtube_steps.user_should_see_results_related_to_funny_cat_videos()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User is on the homepage and is able to see searchbox and search button",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on the youtube homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "youtube_steps.user_is_on_the_youtube_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is able to see the search box",
  "keyword": "And "
});
formatter.match({
  "location": "youtube_steps.user_is_able_to_see_the_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is able to see the search button",
  "keyword": "And "
});
formatter.match({
  "location": "youtube_steps.user_is_able_to_see_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Testing youtube search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@youtube"
    }
  ]
});
formatter.step({
  "name": "User searches for FUNNY DOG VIDEOS",
  "keyword": "When "
});
formatter.match({
  "location": "youtube_steps.user_searches_for_FUNNY_DOG_VIDEOS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see results related to funny dog videos",
  "keyword": "Then "
});
formatter.match({
  "location": "youtube_steps.user_should_see_results_related_to_funny_dog_videos()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User is on the homepage and is able to see searchbox and search button",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on the youtube homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "youtube_steps.user_is_on_the_youtube_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is able to see the search box",
  "keyword": "And "
});
formatter.match({
  "location": "youtube_steps.user_is_able_to_see_the_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is able to see the search button",
  "keyword": "And "
});
formatter.match({
  "location": "youtube_steps.user_is_able_to_see_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Testing youtube search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@youtube"
    }
  ]
});
formatter.step({
  "name": "User searches for FUNNY PET VIDEOS",
  "keyword": "When "
});
formatter.match({
  "location": "youtube_steps.user_searches_for_FUNNY_PET_VIDEOS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see results related to funny pet videos",
  "keyword": "Then "
});
formatter.match({
  "location": "youtube_steps.user_should_see_results_related_to_funny_pet_videos()"
});
formatter.result({
  "status": "passed"
});
});