@debug
Feature: Graphql

    Background: Set url
        * url "https://api.graphql.jobs/"
    
    Scenario: get title and id of jobs
        Given path "/"
        Given text query =
        """
        query{
            jobs{
                id,title
            }
        }
        """
        And request { query: '#(query)'}
        When method POST
        Then status 200
        Then match response == "#object"