context('Pizza App Visual Test', () => {
    before(() => {
        cy.visit('http://localhost:4200/');
    });

    beforeEach(() => {
        // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            appName: 'Pizza App',
            testName: 'Visual Test Demo'
        })
    })

    it(`Visual Test Demo`, () => {

        // check the login page with fluent api, see more info here
        // https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html
        cy.get('.pizza-toppings > :nth-child(1)').click();
        cy.get('.pizza-toppings > :nth-child(2)').click();
        cy.eyesCheckWindow({
            tag: "Pizza Order Window",
            target: 'window',
            fully: true
        });
    });

    afterEach(() => {
        // Call Close on eyes to let the server know it should display the results
        cy.eyesClose();
    });
})