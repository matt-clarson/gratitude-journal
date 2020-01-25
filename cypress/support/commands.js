const fillForm = (fields, data) => {
  let form = cy.get("form");
  for (const [labelName, fieldName] of fields) {
    form = form
      .contains("label", labelName)
      .invoke("attr", "id")
      .then(labelId =>
        cy.get(`input[aria-labelledby="${labelId}"]`).type(data[fieldName])
      )
      .parents()
      .filter("form");
  }
  return form;
};

Cypress.Commands.add("signUp", userInfo =>
  fillForm(
    [
      ["Email", "email"],
      ["Username", "username"],
      ["Password", "password"],
      ["Password (Again)", "repeatPassword"]
    ],
    userInfo
  )
    .contains("button", "Sign Up")
    .click()
);

Cypress.Commands.add("logIn", userInfo =>
  fillForm(
    [
      ["Username", "username"],
      ["Password", "password"]
    ],
    userInfo
  )
    .contains("button", "Log In")
    .click()
);
