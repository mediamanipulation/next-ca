/// <refrence types="Cypress" />

context('Home', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    }
    )
    it('should have a title', () => {
        cy.title().should('eq', 'Customer Point System')
    }
    )
    it('should have a Nav', () => {
        cy.get('nav').should('exist')
    }
    )
    it('should have a Nav Logo Title', () => {
        cy.get('nav').should('contain', 'CPS')
    }
    )
    it('Nav should have a Logo link to Home', () => {
        cy.get('p').contains('CPS').click()
        cy.url().should('include', '/')
    }
    )
    it('Nav should have a link to Home', () => {
        cy.get('a').contains('Home').click()
        cy.url().should('include', '/')
    }
    )
    it('Nav should have a link to Points', () => {
        cy.get('a').contains('Points').click()
        cy.url().should('include', '/points')
    }
    )
    it('should have a header', () => {
        cy.get('h1').should('contain', 'Customer Point System')
    }
    )
    it('should have text tag line', () => {
        cy.get('p').should('contain', 'Spend More = Make More!')
    }
    )
    it('should have Welcome statement ', () => {
        cy.get('p').should('contain', 'Welcome to the Customer Point System!')
    }
    )
    it('should have a link to the points page', () => {
        cy.get('a').contains('points').click()
        cy.url().should('include', '/points')
    }
    )
    it('should have a Footer', () => {
        cy.get('footer').should('exist')
    }
    )
    it('should have company footer text', () => {
        cy.get('footer').should('contain', 'Customer Point System')
    }
    )
})