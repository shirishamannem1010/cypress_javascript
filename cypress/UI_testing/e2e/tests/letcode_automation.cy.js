import { Alerts } from "../pages/alerts_page.cy";
import { ButtonsPage } from "../pages/buttons_page.cy";
import { DropDown } from "../pages/dropdown_page.cy";
import { InputFieldPage } from "../pages/inputfield_page.cy"
const data=require('../../../fixtures/cypress.json')
describe('Different operations',()=>{
    const inputfieldpage= new InputFieldPage(cy,it)
    const buttons= new ButtonsPage(cy,it);
    const dropdown= new DropDown(cy,it);
    const alerts= new Alerts(cy,it);

    beforeEach(() => {
        cy.navigateToHomepage(); 
    });

    it("Inputfield Operations",()=>{
        inputfieldpage.navigateInputField();
        cy.url().should('eq', 'https://letcode.in/edit');
        inputfieldpage.inputOperations(data.inputfiled_data.fullName, data.inputfiled_data.append_text)
        cy.get('input#getMe').invoke('val').then(value => {
            cy.log('Current value:', value);
        });
        cy.get('input#getMe').invoke('val').should('eq', 'ortonikc'); 
        inputfieldpage.inputTextOperations();
        cy.get('input#noEdit').should('be.disabled');
        cy.get('input#dontwrite').should('have.attr', 'readonly');
    })
    it("Buttons Operations", ()=>{
        buttons.navigateToButtons()
        cy.url().should('eq', 'https://letcode.in/buttons');
        cy.get('button#home').click();
        cy.go('back');
        buttons.buttonsOperation()
        buttons.checkButtonColor()
        buttons.findHeightofButton()
        cy.get('#isDisabled.button.is-info').should('be.disabled');
        buttons.click_holdButton()
    })

    it("Drop Down Operations",()=>{
        dropdown.navigateToDropDown()
        cy.url().should('eq', 'https://letcode.in/dropdowns');
        dropdown.selectOperations()
        dropdown.selectLastOption()
        dropdown.selectCountry()
    })
    it("Alert Functions",()=>{
        alerts.navigateToAlerts()
        cy.url().should('eq', 'https://letcode.in/alert');
        alerts.acceptAlerts()
        alerts.cancelTheAlert();


    })
});