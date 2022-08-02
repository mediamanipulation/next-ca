/// <refrence types="Cypress" />

context('Points', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/points')
    }
    )
    // it('should have a title', () => {
    //     cy.title().should('eq', 'Customer Point System')
    // }
    // )
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
    it('should have a Customer Points By Month section header', () => {
        cy.get('h1').should('contain', 'Customer Points By Month')
    }
    )
    it('should have a Customer Points By Month - Customer table header', () => {
        cy.get('div').should('contain', 'Customer')
    }
    )
    it('should have a Customer Points By Month - Month table header', () => {
        cy.get('div').should('contain', 'Month')
    }
    )
    it('should have a Customer Points By Transactions - Month table header', () => {
        cy.get('div').should('contain', 'Transactions')
    }
    )
    it('should have a Customer Points By Points - Month table header', () => {
        cy.get('div').should('contain', 'Points')
    }
    )
    it('should have a Customer Reward Totals section header', () => {
        cy.get('h1').should('contain', 'Customer Reward Totals')
    }
    )
    it('should have a Customer Reward Totals - Customer table header', () => {
        cy.get('div').should('contain', 'Customer')
    }
    )
    it('should have a Customer Reward Totals - Rewards table header', () => {
        cy.get('div').should('contain', 'Rewards')
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