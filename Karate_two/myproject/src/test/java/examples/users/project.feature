@debug
Feature: Project to do

Background:
    * url 'https://api.todoist.com/rest/'

Scenario: Tasks related 

    Given path "/v1/tasks"
    And header Content-type = "application/json"
    And header Authorization = "Bearer 4bba2e493b6bde7c64fb52cba00af9bb9577498f"
    And request
    """
    {
        "content": "Buy Milk",
        "due_string": "tomorrow at 12:00",
        "due_lang": "en",
        "priority": 4
    }
    """
    When method POST
    Then status 200
    Then match response == "#object"
    * def taskid = response.id


    Given path "v1/tasks/"+taskid
    And header Content-type = "application/json"
    And header Authorization = "Bearer 4bba2e493b6bde7c64fb52cba00af9bb9577498f"
    And request
    """
    {
        "due_string": "tomorrow"
    }
    """
    When method POST
    Then status 204


    Given path 'v1/tasks/'+taskid+'/close'
    And header Authorization = "Bearer 4bba2e493b6bde7c64fb52cba00af9bb9577498f"
    When method POST
    Then status 204

    Given path 'v1/tasks/'+taskid+'/reopen'
    And header Authorization = "Bearer 4bba2e493b6bde7c64fb52cba00af9bb9577498f"
    When method POST
    Then status 204

    Given path 'v1/tasks/'+taskid
    And header Authorization = "Bearer 4bba2e493b6bde7c64fb52cba00af9bb9577498f"
    When method DELETE
    Then status 204


Scenario: Labels related
    Given path "v1/labels"
    And header Content-type = "application/json"
    And header Authorization = "Bearer 4bba2e493b6bde7c64fb52cba00af9bb9577498f"
    And request
    """
    {
        "name": "Electronics"
    }
    """
    When method POST
    Then status 200
    Then match response == "#object"
    * def labelId = response.id


    Given path "v1/labels/"+labelId
    And header Content-type = "application/json"
    And header Authorization = "Bearer 4bba2e493b6bde7c64fb52cba00af9bb9577498f"
    And request
    """
    {
        "name": "Food items"
    }
    """
    When method POST
    Then status 204



    Given path "v1/labels/"+labelId
    And header Content-type = "application/json"
    And header Authorization = "Bearer 4bba2e493b6bde7c64fb52cba00af9bb9577498f"
    When method DELETE
    Then status 204

    
