import {HomePage} from "../pages/HomePage";
import cypress = require("cypress");



describe("Login test", () => {

  it("Should have login button enabled", () => {
    new HomePage()
    .navigate()
    .goToLoginPage()
    .verifyLoginButton("be.disabled")
    .fillLogin("username that exists")
    .verifyLoginButton("be.disabled")
    .fillPassword("password that exists")
    .verifyLoginButton("be.enabled")


  });

});