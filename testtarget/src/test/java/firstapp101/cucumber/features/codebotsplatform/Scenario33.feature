###
# WARNING: This file is written by the Codebots Platform.
# Any changes to this file will be overwritten.
#
# @author Codebots
###

@CodebotsPlatform
Feature: Scenario33 - Fishnatics Login

@scenario33
Scenario: Fishnatics Login
Given I navigate to url http://localhost:4200/login
When I type admin@example.com into the element with XPath of //*[@id="username-field"]
  And I type password into the element with XPath of //*[@id="password-field"]
  And I click on the element with XPath of //button[text()='Login']
Then I wait for the url to be http://localhost:4200/
  And I wait for the element with XPath of //h2[text()='Fish'] to be present
