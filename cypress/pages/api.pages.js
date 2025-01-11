var ApiPage = {
    menuApi: '#menuApiManagement', 
    btnFilter: '#btnFilter',
    checkboxStatus: '#active',
    btnApply: '.p-4 > .flex-row > .text-white',
    btnReset: '.p-4 > .flex-row > .text-gray-700',
    searchInput: '#searchUser', 
    clearButton: '#searchUserClear', 
    sortByNameButton: ':nth-child(2) > .flex > a', 
    downloadButton: '.underline',


    // Fungsi klik menu device
    clickMenuApi: function() {
        cy.get(this.menuApi).click();
        cy.url().should('include', '/api');
    },

    // Fungsi search 
    searchDevice: function(query) {
        cy.get(this.searchInput).type(query); 
        cy.wait(2000);
        cy.get(this.clearButton).click(); 
    },

    // Fungsi sorting by name
    sortByName: function() {
        cy.get(this.sortByNameButton).click(); 
    },

    // Fungsi untuk mendownload file
    downloadFile: function() {
        cy.get(this.downloadButton).click({ multiple: true }); // Klik tombol download
    },
};

export default ApiPage;
