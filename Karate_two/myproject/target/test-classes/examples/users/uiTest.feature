@debug
Feature: Make apointemnt with Doc
Scenario: Login 
    Given driver 'https://katalon-demo-cura.herokuapp.com/'
    * fullscreen()
    And click('#btn-make-appointment')
    And input('#txt-username','John Doe')
    And input('#txt-password','ThisIsNotAPassword')
    When click('#btn-login')
    And waitForUrl('https://katalon-demo-cura.herokuapp.com/#appointment')
    Then match driver.url == 'https://katalon-demo-cura.herokuapp.com/#appointment'
    Then click('#combo_facility > option:nth-child(2)')
    Then click('#chk_hospotal_readmission')
    Then input('#txt_visit_date','13/08/2021')
    Then input('#txt_comment','Corono new version symptoms')
    Then click('#btn-book-appointment')
    And waitForUrl('https://katalon-demo-cura.herokuapp.com/appointment.php#summary')
    Then match driver.url == 'https://katalon-demo-cura.herokuapp.com/appointment.php#summary'
    Then match text('#comment') == 'Corono new version symptoms'