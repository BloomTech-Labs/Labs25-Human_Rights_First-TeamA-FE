/// <reference types="cypress" />

const { default: greystyle } = require("../../src/components/pages/Incidents/Map/snazzymapGreyscale");

context('timeline', () => {
    beforeEach(function () {
      cy.visit('http://localhost:3000/timeline');
    });
    describe('Testing map component', function (){
        it('Should be able to view a twitter feed', () => {
            cy.get('[data-cy=continue]').click();
            cy.get('[data-cy=choose-visual]').trigger('mouseover');
            cy.get('[data-cy=timeline]').click();
            cy.get('.ant-timeline-item-content').contains('Aug 30').click();
            cy.get('[aria-busy="true"]');
            cy.get('[data-icon="close"]').click();
            cy.get('[data-cy=start-date]').click();
            cy.get('.ant-picker-header-prev-btn').click();
            cy.get('[title="2020-08-27"]').click();
            cy.get('[data-cy=end-date]').click();
            cy.get('[title="2020-09-01"]:visible').click();


        })
    })
  });
  
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  