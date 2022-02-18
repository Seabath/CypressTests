import {LoginPage} from "./LoginPage";

export class HomePage {

  navigate() {
    cy.visit("/")
    return this;
  }

  goToLoginPage() {
    cy.get("#btn-navbar-login-text").click()
    return new LoginPage(cy)
  }
}