@500x700
Feature: Shopping Experience Test for 1200x700 viewport

        Background:
            Given I navigate to main page
            Given I click the button with id A__openfilter__206
            Given I click the button with id LI____103
            Given I click the button with id filterBtn

        Scenario: I see black shoes when filter for black shoes
             Then I see the image with id IMG__imgfluid__215
              And I see the image with id IMG__imgfluid__215

        Scenario Outline: I see correct names for filtered shoes
             Then I see the element with id <descriptionId> contains <descriptionText>
        Examples:
                  | descriptionId | descriptionText   |
                  | H3____218     | Appli Air x Night |
                  | H3____241     | Appli Air 720     |

        Scenario Outline: I see correct new prices for filtered shoes
             Then I see the element with id <priceId> contains <priceValue>
        Examples:
                  | priceId       | priceValue |
                  | SPAN__newprice__220 | $33.00          |
                  | SPAN__newprice__243 | $200.00         |

        Scenario: I see correct old price for the first filtered shoe
             Then I see the element with id SPAN__oldprice__221 contains $48.00
       
        Scenario: I see the discount label for the first filtered shoe
             Then I see the selector with id SPAN__ribbonoff__212
        
        Scenario: I see the 1 day left label for the first filtered shoe
             Then I see the selector with id DIV__countdown__216
      
        