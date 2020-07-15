/// <reference types="cypress" />

context('Animations', () => {
  it('open-sidenav-using-matchImageSnapshot', () => {
    cy.visit('http://localhost:4200/');
    cy.get('#open-sidenav').click();
    // matchImageSnapshot: gets a diff from initial image and test image
    cy.matchImageSnapshot('test-open-sidenav');
  });
  
  it('open-sidenav-using-screenshot', () => {
    cy.visit('http://localhost:4200/');
    cy.get('#open-sidenav').click();
    // This screenshot should wait all animations to end, right?
    cy.screenshot('test-open-sidenav-screenshot');
  });
})
