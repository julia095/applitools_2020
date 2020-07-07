@1200x700
Feature: Cross-Device Elements Test for 1200x700 viewport

        Background:
            Given I navigate to main page

        Scenario: Logo is present on the page
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

        Scenario: Search bar is present on the page
             Then I see the bar with id INPUTtext____42

        Scenario: Search bar contains 'Search over 10,000 shoes'
             Then I see the search bar with id INPUTtext____42 contains Search over 10,000 shoes!

        Scenario: Search bar icon is present on the page
             Then I see the image with id I__headericon__44

        Scenario: Header access link is present on the page
             Then I see the button with id A__accesslink__56
        
        Scenario: Favourite link is present on the page
             Then I see the button with id A__wishlist__52

        Scenario: Shopping cart link is present on the page
             Then I see the button with id A__cartbt__49

        Scenario: Filter block is present on the page
             Then I see the bar with id filter_col

        Scenario: Filter button is present on the page
             Then I see the button with id filterBtn

        Scenario: Reset button is present on the page
             Then I see the button with id resetBtn

        Scenario: Filter icon is not present on the page
             Then I cannot see the image with id A__openfilter__206
     
        Scenario: Filter icon description is not present on the page
             Then I cannot see the selector with id SPAN____208

        Scenario: Tileview grid button is present on the page
             Then I see the button with id I__tiviewgrid__202

        Scenario: Tileview list button is present on the page
             Then I see the button with id I__tiviewlist__204

        Scenario: Keep in touch is present on the page
             Then I see the selector with id H3____447

        Scenario: Quick links is present on the page
             Then I see the selector with id H3____421

        Scenario Outline: Quick links contains correct links
             Then I see the element with id <quickLinkId> contains <quickLinkName>

        Examples:
                  | quickLinkName | quickLinkId |
                  | About us      | A____425    |
                  | Faq           | A____427    |
                  | Help          | A____429    |
                  | My account    | A____431    |
                  | Blog          | A____433    |
                  | Contacts      | A____435    |


        Scenario: Contacts link is present on the page
             Then I see the selector with id H3____437

        Scenario: Email field is present on the page
             Then I see the selector with id email_newsletter

        Scenario: Email field contains correct text
             Then I see the email input with id email_newsletter has Your email placeholder

 