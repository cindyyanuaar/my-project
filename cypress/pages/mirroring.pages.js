var MirroringPage = {
    btnAddAccount: '#btnAddAccount', 
    accountDetails: 'form > .text-xl', 
    inputNameField: '#companyName', 
    inputTypeDropdown: '#type', 
    inputFromDropdown: '#from', 
    inputToDropdown: '#to', 
    inputRequestInterval: '#requestInterval', 
    btnCancel: 'form > .flex-row > .text-gray-700', 

    // Fungsi add account baru
    addAccount: function() {
        cy.get(this.btnAddAccount).click();  
    },

    // Fungsi pilih dropdown Type
    selectType: function(typeOption) {
        cy.get(this.inputTypeDropdown).click({ force: true });
        cy.contains(typeOption).click({ force: true }); 
    },

    // Fungsi pilih dropdown From 
    selectFrom: function(fromOption) {
        cy.get(this.inputFromDropdown).click({ force: true }); // buka drd
       cy.contains(fromOption).click({ force: true }); 
    },

    // Fungsi pilih dropdown To 
    selectTo: function(toOption) {
        cy.get(this.inputToDropdown).click({ force: true }); 
        cy.contains(toOption).click({ force: true }); 
    },

    // Fungsi klik 'Cancel'
    clickCancel: function() {
        cy.get(this.btnCancel).click(); 
    },

    clickContinue: function() {
        cy.get('#btnContinue').click();
    },
    
};

export default MirroringPage;
