describe('This test is to check if my server working', () => {
    it('Visits the localhost of my site', () => {
        cy.visit('http://localhost:3080')
        cy.get('h1').should('contain', 'Hacker Escape Rooms')
    })
}) 