export class ButtonsPage {
    constructor(cy, it) {
        this.cy = cy;
        this.it = it;
        this.buttonClick = 'a.card-footer-item[href="/buttons"]'

    }

    navigateToButtons() {
        this.cy.get(this.buttonClick).click()
    }
    buttonsOperation() {
        cy.get('#position').then(($button) => {
            const offset = $button.offset();
            const x = offset.left;
            const y = offset.top;
            cy.log(`Button coordinates are x: ${x}, y: ${y}`);
            expect(x).to.be.a('number');
            expect(y).to.be.a('number');
        })
    }

    checkButtonColor(){
        cy.get('#color').then(($button) => {
            const color = $button.css('background-color');
            cy.log(`Button color is: ${color}`);
            expect(color).to.be.a('string');
          });
    }
    findHeightofButton(){
        cy.get('#property').then(($button) => {
            const height = $button.height();
            const width = $button.width();
            cy.log(`Button height is: ${height}`);
            cy.log(`Button width is: ${width}`);
            expect(height).to.be.a('number');
            expect(width).to.be.a('number');
          });
    }
    click_holdButton(){
        cy.get('#isDisabled.button.is-primary').trigger('mousedown') // Simulate mouse down event
        .wait(2000) 
        .trigger('mouseup'); // Simulate mouse up event
    }
}