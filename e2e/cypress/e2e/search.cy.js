describe("Search for books", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should return one book with title Agile Testing", () => {
        const title = "Agile Testing";
        const pageTitle = "Kuama-Killua";
        const count = 1;

        cy.get("#searchBar").type(title, {delay: 200});
        cy.get("li:not(.ui-screen-hidden)").should("have.length", count, `There should be exactly ${count} book(s) visible`);
        cy.get("h2").should("contain.text", title, `${title} should be visible`);
        cy.get("#page-title").should("have.text", pageTitle);
    });

    it("should return multiple books with title Test", () => {
        const title = "Test";
        const expectedBooks = [
            "Test Automation in the Real World",
            "Experiences of Test Automation",
            "Agile Testing",
            "How Google Tests Software",
            "Java For Testers"];
        const count = expectedBooks.length;

        cy.get("#searchBar").type(title, {delay: 200});
        cy.get("li:not(.ui-screen-hidden)")
        .should("have.length", count, `There should be exactly ${count} book(s) visible`);
        expectedBooks.forEach(b => cy.get("h2")
        .should("contain.text", b, `${b} should be visible`));
    });
});
