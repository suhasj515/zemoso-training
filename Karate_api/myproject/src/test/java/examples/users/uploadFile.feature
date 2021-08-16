@debug
Feature: Upload File in FileBin

    Background: Set url
        * url "https://filebin.net"
    
    Scenario: Upload a Jpeg file
        Given path "/"
        And header Content-type = "image/png"
        And request karate.read("file:src/test/java/examples/resource/pic.JPG")
        When method POST
        Then status 201