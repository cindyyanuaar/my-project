var MirroringPage = {
    btnAddAccount: '#btnAddAccount', 
    accountDetails: 'form > .text-xl', 
    inputNameField: '#companyName', 
    inputTypeDropdown: '#type', 
    inputFromDropdown: '#from', 
    inputToDropdown: '#to', 
    inputRequestInterval: '#requestInterval', 
    btnCancel: 'form > .flex-row > .text-gray-700', 
    btnContinue: '#btnContinue', 

    // Fungsi add account baru
    addAccount: function() {
        cy.get(this.btnAddAccount).click();  
    },

    // Fungsi pilih dropdown Type
    selectType: function(typeOption) {
        cy.get(this.inputTypeDropdown).click({ force: true });
    },

    // Fungsi pilih dropdown From 
    selectFrom: function() {
        cy.get(this.inputFromDropdown)
          .scrollIntoView()  // Scroll ke dropdown "From"
          .click({ force: true });
    },

    // Fungsi pilih dropdown To 
    selectTo: function() {
        cy.get(this.inputToDropdown)
          .scrollIntoView()  // Scroll ke dropdown "To"
          .click({ force: true });
        cy.get(':nth-child(3) > .relative > .flex-col > .rounded-lg > #webhook').click(); // Pilih "WEBHOOK" untuk To
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
