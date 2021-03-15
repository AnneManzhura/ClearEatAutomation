Feature: Login to ClearEat

  Scenario: Logging in to ClearEat with unregistered email
    When I open ClearEat page
    And I click on Login Btn in header
    And I enter "vkolt@com.ua" into email field
    And I enter "Qwerty123456" into password field
    And I click on Login button on Login Page
    Then I see alert with text "No such user"