describe('Mi primera prueba de portafolio', () => {
  it('Debe entrar a SauceDemo y validar que estamos en el login', () => {
    // 1. Visitar la página
    cy.visit('https://www.saucedemo.com/')

    // 2. Verificar que el título de la página es correcto
    cy.title().should('eq', 'Swag Labs')
    
    // 3. Escribir el usuario (paso opcional para ver cómo escribe solo)
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    
    // 4. Hacer clic en el botón de login
    cy.get('[data-test="login-button"]').click()
  })
})
