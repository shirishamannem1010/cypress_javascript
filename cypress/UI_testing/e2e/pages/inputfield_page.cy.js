export class InputFieldPage {
    constructor(cy, it) {
        this.cy = cy;
        this.it = it;
        this.editBtn = 'a.card-footer-item[href="/edit"]';
        this.enterName='#fullName';
        this.appendText='input#join.input[type="text"][value="I am good"][placeholder="Enter "]'
        this.readText='input#getMe.input[type="text"][value="ortonikc"][placeholder="Enter "]'

    }

    navigateInputField() {
        this.cy.get(this.editBtn).click();
    }
    inputOperations(name, append_text){
        this.cy.get(this.enterName).type(name)
        this.cy.get(this.appendText).type(append_text)
    }

    inputTextOperations(){
        this.cy.get('input#clearMe').clear()
        
    }


}
