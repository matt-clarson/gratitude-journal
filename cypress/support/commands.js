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

Cypress.Commands.add("beUser", function({ username, password }) {
  cy.request("POST", `http://localhost:8000/graphql/`, {
    query: `
      mutation {
        tokenAuth(username: "${username}", password: "${password}") {
          token
        }
      }
    `
  })
    .then(response => response.body.data.tokenAuth.token)
    .as("authToken");
  cy.window().then(window =>
    window.localStorage.setItem(
      "user",
      JSON.stringify({ authorised: true, token: this.authToken })
    )
  );
});
