@500x700
Feature: Cross-Device Elements Test for 500x700 (IPhone X) viewport

        Background:
            Given I navigate to main page

        Scenario: Logo is present on the center
             Then I see the image with id IMG____9
     
        Scenario Outline: I can see <menuLinkName> menu link contains correct text
             Then I see the element with id <menuLinkId> contains <menuLinkName>
        
        Examples:
                  | menuLinkName | menuLinkId        |
                  | HOME         | A__showsubmen__23 |
                  | MEN          | A__showsubmen__25 |
                  | WOMEN        | A__showsubmen__27 |
                  | RUNNING      | A__showsubmen__29 |
                  | TRAINING     | A__showsubmen__31 |

        Scenario:  Search bar is not present on the page
             Then I cannot see the bar with id INPUTtext____42

        Scenario: Header access link is present on the page
             Then I see the button with id A__accesslink__56
        
        Scenario: Favourite link is not present on the page
             Then I cannot see the button with id A__wishlist__52

        Scenario: Shopping cart link is present on the page
             Then I see the button with id A__cartbt__49

        Scenario: Filter icon is present on the page
             Then I see the image with id A__openfilter__206
        
        Scenario: Filter icon description is not present on the page
             Then I cannot see the selector with id SPAN____208

        Scenario: Keep in touch is present on the page
             Then I see the selector with id H3____447

        Scenario: Quick links is present on the page
             Then I see the selector with id H3____421

        Scenario: Contacts link is present on the page
             Then I see the selector with id H3____437
          
        Scenario Outline: Contacts links text is not visible
             Then I cannot see the selector with id <elementId>

        Examples:
                  | elementId |
                  | LI____440 |
                  | LI____443 |
                  
        Scenario: Email field is not present on the page
             Then I cannot see the selector with id email_newsletter



     
       
    
            
    