@debug
Feature: Make apointemnt with Doc
Scenario: Login 
    * fullscreen()
    Given driver 'https://katalon-demo-cura.herokuapp.com/'
    And click('#btn-make-appointment')
    And input('#txt-username','John Doe')
    And input('#txt-password','ThisIsNotAPassword')
    When click('#btn-login')
    Then match driver.url == 'https://katalon-demo-cura.herokuapp.com/#appointment'