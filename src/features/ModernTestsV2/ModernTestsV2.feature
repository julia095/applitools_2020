@visual2
Feature: Modern Test

        Background:
            Given I navigate to main page

        Scenario: Cross-Device Elements Test
             Then I observe elements are correct on all devices for task 1

        Scenario: Filter Results
             When I click the button with id LI____103
             When I click the button with id filterBtn
             Then I observe elements are correct on all devices for task 2

        Scenario: Product details test
             When I click the button with id LI____103
             When I click the button with id filterBtn
             When I click the button with id product_1
             Then I observe elements are correct on all devices for task 3

        