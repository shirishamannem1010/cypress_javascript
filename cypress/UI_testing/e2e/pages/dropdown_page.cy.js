export class DropDown{
    constructor(cy,it){
        this.cy=cy
        this.it=it
        this.dropdownBtn='a[href="/dropdowns"]'
        this.mangoFruit='#fruits'
        this.selectHero='#superheros'
        this.lastOption='#lang'
        this.country='#country'
    }

    navigateToDropDown(){
        this.cy.get(this.dropdownBtn).click();
    }
    selectOperations(){
        cy.get(this.mangoFruit).select('1'); 
        cy.get(this.selectHero).select('im');
    }
    selectLastOption(){
        cy.get(this.lastOption).select('sharp'); 
        cy.get('#lang option').each(($option) => {
          const text = $option.text().trim();
          cy.log(`Option: ${text}`);
        });
    }
    selectCountry(){
        cy.get(this.country).select('India'); 
        cy.get('#country').invoke('val').then((selectedValue) => {
        cy.log(`Selected country: ${selectedValue}`);
    });
    }


}