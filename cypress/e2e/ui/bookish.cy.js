describe('Bookish application', function () {
    it('Visits the bookish', function () {
        cy.visit('http://localhost:3000/');
        cy.get('h2[data-test="heading"]').contains('Bookish');
    });
    it('Shows a book list', () => {
        cy.visit('http://localhost:3000/');
        cy.get('div[data-test="book-list"]').should('exist');
        cy.get('div.book-item').should('have.length', 3);
        cy.get('div.book-item').should((books) => {
            expect(books).to.have.length(3);
            const titles = [...books].map(x => x.querySelector('h2').innerHTML);
            expect(titles).to.deep.equal(['Refactoring',
                'Domain-driven design',
                'Building Microservices']);
        });
    });

    it('Goes to the detail page', () => {
        cy.visit('http://localhost:3000');
        cy.get('div.book-item').contains('View Details').eq(0).click();
        cy.url().should('include', '/books/1');
        cy.get('h2.book-title').contains('Reactoring')
    });
});