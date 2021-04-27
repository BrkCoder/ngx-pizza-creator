import { initEnv, mount } from 'cypress-angular-unit-test';
import { PizzaToppingsComponent } from './pizza-toppings.component';

describe('PizzaToppingsComponent', () => {
  beforeEach(() => {
    initEnv(PizzaToppingsComponent);
    mount(PizzaToppingsComponent);
  })
  it('select all toppings', () => {
    // Init Angular stuff
    // component + any inputs object
    // use any Cypress command afterwards
    cy.get('.pizza-topping').each(($el) => {
      cy.wrap($el).click().should('have.class', 'pizza-topping--active');
    })
  });

  it('select all toppings again', () => {
    // Init Angular stuff
    // component + any inputs object
    // use any Cypress command afterwards
    cy.get('.pizza-topping').each(($el) => {
      cy.wrap($el).click().then(() => {
        expect($el).to.have.class('pizza-topping--active');
      })
    })
  });
});