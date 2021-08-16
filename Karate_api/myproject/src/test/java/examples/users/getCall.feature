@debug
Feature: Get the deatils of students

    Background: Set url
        * url 'https://reqres.in'

    Scenario: Get details of Users
        Given path "/api/users?page=2"
        When method GET
        Then status 200
        * def userId = response.page
    

    Scenario: Post the new users
        Given path "/api/users"
        And request
        """
        {
            "name": "manoj",
            "job": "blog"
        }
        """
        When method POST
        Then status 201
        Then match response == "#object"
        Then match response.name == "manoj"
    
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

    Scenario: Delete User 
        Given path "/api/users/2"
        When method DELETE
        Then status 204