describe("My first test", () => {
    it("Does not much", () => {
        expect(true).to.equal(true)
    })
    it.only("successfully loads", () => {
        cy.visit('http://localhost:3000')
        // cy.visit("/")
    })
})