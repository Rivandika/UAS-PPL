context('Cypress LMS Testing',() => {
    it('Login', () => {
        cy.visit('http://lms.polinema.ac.id/login/index.php')
        cy.get('.card-block').should('be.visible')
        cy.get('#username').type('1941720122').should('be.visible')
        cy.get('#password').type('1941720122').should('be.visible')
        cy.get('#loginbtn').click().should('be.visible')
    })
    it('Logout', () => {
        cy.get('#dropdown-1').should('be.visible').click({force: true})
        cy.get('#action-menu-1-menu').contains('Log out').click({force: true})
    })
})

context('Cypress LMS Testing',() => {
    it('Login', () => {
        cy.visit('http://lms.polinema.ac.id/login/index.php')
        cy.get('.card-block').should('be.visible')
        cy.get('#username').type('1941720122@lms.jti.polinema.ac.id').should('be.visible')
        cy.get('#password').type('1941720122').should('be.visible')
        cy.get('#loginbtn').click().should('be.visible')
    })
})

context('Cypress LMS Testing',() => {
    it('Login', () => {
        cy.visit('http://lms.polinema.ac.id/login/index.php')
        cy.get('.card-block').should('be.visible')
        cy.get('#username').type('1941720122').should('be.visible')
        cy.get('#password').type('1941720').should('be.visible')
        cy.get('#loginbtn').click().should('be.visible')
    })
})

context('Cypress LMS Testing',() => {
    it('Login', () => {
        cy.visit('http://lms.polinema.ac.id/login/index.php')
        cy.get('.card-block').should('be.visible')
        cy.get('#username').type('1941720').should('be.visible')
        cy.get('#password').type('1941720').should('be.visible')
        cy.get('#loginbtn').click().should('be.visible')
    })
})