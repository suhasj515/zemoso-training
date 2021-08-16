@debug
Feature: Get the deatils of students

Background: Set url
    * url 'https://reqres.in'
    * def eval1 = call read('eval.feature')

Scenario: Get details of Users
    Given path "/api/users?page=2"
    When method GET
    Then status 200
    * def userId = response.page
    * def callOnce = callonce read('JsonValidation.feature')

Scenario: Update users Job
    Given path "/api/users/2"
    And request
    """
    {
      "name": "manoj",
      "job": "zion resident"
    }
    """
    When method PATCH
    Then status 200
    Then match response.job == "zion resident"
    * def callonce2 = callonce read('JsonValidation.feature')

@tagn1
Scenario: 1st one
    * print 'calling 1st one'

@tagn2
Scenario: 2nd one
    * print 'this is 2nd scenario'
    * def result = call read('getCall.feature@tagn1')