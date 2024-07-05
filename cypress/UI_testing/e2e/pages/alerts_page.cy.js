export class Alerts{
    constructor(cy,it){
        this.cy=cy
        this.it=it
        this.alertBtn='a[href="/alert"]'
        this.simpleAlertBtn='#accept'
        this.cancenAlertBtn='#confirm'
        this.promptAlertBtn='#prompt'
    }
    navigateToAlerts(){
        this.cy.get(this.alertBtn).click();
    }
    acceptAlerts(){
        this.cy.get(this.simpleAlertBtn).click()
        cy.window().then((window) => {
            cy.stub(window, 'confirm').returns(true);
        });
    }
    cancelTheAlert(){
        this.cy.get(this.cancenAlertBtn).click()
        this.cy.on('window:confirm', (str) => {
            expect(str).to.equal('Are you happy with LetCode?'); 
            return false; 
        });
    }
    promptAlert(){
        this.cy.get(this.promptAlertBtn).click()
        cy.window().then((window) => {
            cy.stub(window, 'prompt').returns('Shirisha Mannem'); 
          });
        cy.contains('Submitted: Shirisha Mannem').should('be.visible');
    }
    

}