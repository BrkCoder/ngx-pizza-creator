context('create pizza order', () => {
    before(() => {
        cy.visit('http://localhost:4200');
    })
    context('fill registration details:', () => {
        it('.type() - type into a DOM element', () => {
            cy.get('#name-input').type('John Doe').should('have.value', 'John Doe')
            cy.get('#email-input').type('John@gmail.com').should('have.value', 'John@gmail.com')
            cy.get('#verify-email-input').type('John@gmail.com').should('have.value', 'John@gmail.com')
            cy.get('#address-input').type('20 Pizza street').should('have.value', '20 Pizza street')
            cy.get('#postcode-input').type('4244').should('have.value', '4244')
            cy.get('#phone-input').type('091234567').should('have.value', '091234567')
        });
    });

    context('choose size of pizza:', () => {
        it('should choose large size', () => {
            cy.get('.pizza-size__pizza--large').click();
        });
    });

    context('choose the right toppings for pizza:', () => {
        it('should choose anchovy', () => {
            cy.get('.pizza-toppings > :nth-child(1)').click().should('have.class', 'pizza-topping--active');
        });

        it('should choose bacon', () => {
            cy.get('.pizza-toppings > :nth-child(2)').click().should('have.class', 'pizza-topping--active');
        });

        it('should choose basil', () => {
            cy.get('.pizza-toppings > :nth-child(3)').click().should('have.class', 'pizza-topping--active');
        });

        it('should choose chily', () => {
            cy.get('.pizza-toppings > :nth-child(4)').click().should('have.class', 'pizza-topping--active');
        });
    });

    context('check bill', () => {
        it('should be $22.15', () => {
            cy.get('.pizza-summary__total-price').contains('$22.15');
        });
    });

    context('place an order', () =>{
        it('should be successfull', () => {
            const stub = cy.stub(); 
            cy.on ('window:alert', stub);
            cy.get('.pizza-summary__button').click().then(() => {
                expect(stub.getCall(0)).to.be.calledWith('thanks for your order :)')
            })
        });
    })
});