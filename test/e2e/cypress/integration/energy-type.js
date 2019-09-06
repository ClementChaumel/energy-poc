describe('Energy type tests', () => {
  it('Displays the Hero correctly and has a table with at least 3 loans as well as a footer', () => {
    cy.visit('/');
    cy.contains('Your energy profile');
    cy.contains('What type of energy do you use?');
    cy.get('[data-cy=radio-button').should('have.length', 3);
  });
});
