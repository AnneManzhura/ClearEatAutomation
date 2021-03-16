Feature: Login to ClearEat and logout

  Background:
    When I open ClearEat page

  @skip()
  Scenario: Logging in to ClearEat with unregistered email
    When I click on Login Btn in header
    And I enter "vkolt@com.ua" into email field
    And I enter "Qwerty123456" into password field
    And I click on Login button on Login Page
    Then I see alert with text "No such user"

  @skip()
  Scenario: Logging in to ClearEat as client (Happy Path) and logging out
    When I click on Login Btn in header
    And I enter "jaane.smith1983@gmail.com" into email field
    And I enter "Qwerty123456" into password field
    And I click on Login button on Login Page
    Then I am at home page
    And I see History and Logout buttons in header
    And I see menu with dishes
    When I click on Logout Btn
    Then I do not see menu
    And I do not see History and Logout buttons in header
    And I see login form

  @skip()
  Scenario: Logging in to ClearEat as admin (Happy Path)
    When I click on Login Btn in header
    And I enter "admin@admin.com" into email field
    And I enter "Qwerty123456" into password field
    And I click on Login button on Login Page
    Then I am at home page
    And I see menu with dishes
    And I see Add and Orders buttons in header
    Then I click on Logout Btn
