Cypress.Commands.add("signUp", userInfo => {
  cy.get("form")
    .contains("label", "Email")
    .invoke("attr", "id")
    .then(labelId =>
      cy.get(`input[aria-labelledby="${labelId}"]`).type(userInfo.email)
    )
    .parents()
    .filter("form")
    .contains("label", "Username")
    .invoke("attr", "id")
    .then(labelId =>
      cy.get(`input[aria-labelledby="${labelId}"]`).type(userInfo.username)
    )
    .parents()
    .filter("form")
    .contains("label", "Password")
    .invoke("attr", "id")
    .then(labelId =>
      cy.get(`input[aria-labelledby="${labelId}"]`).type(userInfo.password)
    )
    .parents()
    .filter("form")
    .contains("label", "Password (Again)")
    .invoke("attr", "id")
    .then(labelId =>
      cy
        .get(`input[aria-labelledby="${labelId}"]`)
        .type(userInfo.repeatPassword || userInfo.password)
    )
    .parents()
    .filter("form")
    .contains("button", "Sign Up")
    .click();
});
