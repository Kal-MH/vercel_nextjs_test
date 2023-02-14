describe('Navgation', () => {
  it('네비게이션 페이지 테스트', () => {
    cy.visit('http://localhost:3000/');
    cy.get('a[href*="/pages/About"]').click();

    cy.url().should('include', '/About');
    cy.get('h1').contains('AboutPage');
  });
});
