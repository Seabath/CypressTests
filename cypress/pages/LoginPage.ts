export class LoginPage {

  submitButtonSelector: string;
  loginFieldSelector: string;
  passwordFieldSelector: string;

  constructor(cypress) {
    this.submitButtonSelector = "button[type=submit]";
    this.loginFieldSelector = "#login-username";
    this.passwordFieldSelector = "#login-password";
  }

  fillLogin(login) {
    cy.get(this.loginFieldSelector).type(login)
    return this;
  }

  fillPassword(password) {
    cy.get(this.passwordFieldSelector).type(password)
    return this;
  }

  verifyLoginButton(should) {
    cy.get(this.submitButtonSelector).should(should)
    return this
  }

}