Feature: Working with menu and cart

  Background:
    When I open ClearEat page

  Scenario: Adding/removing dishes to/from cart
    When I click on plus btn on dish "Італійські сири"
    Then I see 1 added dish in cart
    And I see 1 added item on dish "Італійські сири"
    When I click on plus btn on dish "Карбонара"
    And I click on plus btn on dish "Карбонара"
    Then I see 3 added dishes in cart
    And I see 2 added items on dish "Карбонара"
    When I click on plus btn on dish "Італійські сири"
    And I click on minus btn on dish "Італійські сири"
    And I click on minus btn on dish "Карбонара"
    Then I see 2 added dishes in cart
    And I see 1 added item on dish "Італійські сири"
    And I see 1 added item on dish "Карбонара"
