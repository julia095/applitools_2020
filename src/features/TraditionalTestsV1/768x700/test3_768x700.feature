@768x700
Feature: Product details Test for 768x700 viewport

        Background:
            Given I navigate to main page
            Given I click the button with id SPAN____208
            Given I click the button with id LI____103
            Given I click the button with id filterBtn
            Given I click the button with id IMG__imgfluid__215
             
        Scenario: The shoe has correct title
             Then I see the element with id shoe_name contains Appli Air x Night

        Scenario: I see the big picture for the shoe
             Then I see the image with id shoe_img

        Scenario: I see reviews bar
             Then I see the bar with id SPAN__rating__76
        
        Scenario: I see description bar
             Then I see the selector with id P____83

        Scenario: I see correct new price
             Then I see the element with id new_price contains $33.00

        Scenario: I see correct old price
             Then I see the element with id old_price contains $48.00

        Scenario: I see the discount label
             Then I see the selector with id discount

        Scenario: I see the discount label has correct description
             Then I see the element with id discount contains -30% discount

        Scenario: I see the size selector contains small(s)
             Then I see the size selector with id SELECTselect-one__wide__93 contains current text Small (S)

        Scenario: I see the quantity selector
             Then I see the selector with id DIV__colxlcollg__101

        Scenario: I see the quantity selector input contains 1
             Then I see the quantity selector with id quantity_1 contains value 1
             
        Scenario: I see the add to cart button
             Then I see the selector with id A__btn__114
  

        