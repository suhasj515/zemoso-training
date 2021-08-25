package com.hubspot.login;

import com.hubspot.engine.KeyworkEngine;
import org.testng.annotations.Test;

public class LoginTest {
    public KeyworkEngine keywordengine;
    @Test
    public void loginTest(){

        keywordengine =new KeyworkEngine();

        keywordengine.startExecution("HubspotKeydriven4");

    }
}
