describe('Prueba E2E', () => {

    it('Debería mostrar el título correcto', () => {
        cy.visit('/');
        cy.contains('ion-title', 'Iniciar Sesión').should('be.visible');
    });

    it('Debería permitir ingresar al Home con credenciales válidas', () => {
        cy.visit('/login');

        cy.get('#user').type('admin');
        cy.get('#pass').type('1234');

        cy.get('#btnLogin').click();

        cy.url().should('include', '/home');
    });

});
