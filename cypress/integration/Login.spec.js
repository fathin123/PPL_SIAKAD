describe('Login',() => {
    it('Valid Login', () => {
       //login url
       cy.visit('http://127.0.0.1:8000/login')
       cy.get('input[name=email]').type("admin@gmail.com")
       cy.get('input[name=password]').type("12345678")
       cy.get('button').contains('Login').click()
       cy.url().should('contain','http://127.0.0.1:8000/')
    })
})