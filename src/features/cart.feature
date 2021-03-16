Feature: Proceeding with order

  Background:
    When I open ClearEat page

  Scenario: Creating order with payment after delivery
    When I click on Login Btn in header
    And I enter "jaane.smith1983@gmail.com" into email field
    And I enter "Qwerty123456" into password field
    And I click on Login button on Login Page
    And I click on plus btn on dish "Італійські сири"
    And I click on cart
    Then I am at cart page
    And I see 1 item of dish "Італійські сири" in cart
    And I see total sum equals to 187
    When I click on Next Btn
    And I click on Payment tab
    And I click on Pay after delivery Btn
    Then I see success screen with View Order Btn