@debug
Feature: JSON Schema Validation 3rd

    Background:
        * url 'https://reqres.in/api/users/'
    Scenario: Validate with the Third Party
        Given url '2'
        When method GET
        Then match response == '#object'
        * string jsonSchemaExpected = read('file:src/test/java/examples/resource/my-schema.json')
        * string jsonData = response
        * def SchemaUtils = Java.type('scrolltest.JSONSchemaUtil')
        * assert SchemaUtils.isValid(jsonData, jsonSchemaExpected)