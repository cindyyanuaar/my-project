var DevicePage = {
    menuDevice: '#menuDevice', // Selector untuk menu perangkat
    btnFilter: '#btnFilter', 
    checkboxStatus: '#active', // Elemen checkbox untuk status
    btnApply: '.p-4 > .flex-row > .text-white',
    btnReset: '.p-4 > .flex-row > .text-gray-700',
    searchInput: '#searchDevice', 
    clearButton: '#searchDeviceClear', 
    sortByNameButton: 'tr > :nth-child(3) > .flex > a',
    startRunInterval: '#startRunInterval',
    endRunInterval: '#endRunInterval',
    startStopInterval: '#startStopInterval',
    endStopInterval: '#endStopInterval',

    // Fungsi klik menu device
    clickMenuDevice: function() {
        cy.get(this.menuDevice).click().should('have.attr', 'href').and('include', '/device');
        cy.wait(3000);
    },

    // Fungsi filter 
    filterByStatusAndInterval: function(status, startRun, endRun, startStop, endStop) {
        cy.get(this.btnFilter).click();

        // checkbox status aktif
        if (status) {
            cy.get(this.checkboxStatus).check(); 
            cy.wait(1000);
        }
        // Set interval run
        cy.get(this.startRunInterval).type(startRun); 
        cy.get(this.endRunInterval).type(endRun);
        cy.wait(2000);
        // Set interval stop
        cy.get(this.startStopInterval).type(startStop); 
        cy.get(this.endStopInterval).type(endStop);
        cy.wait(2000);
        cy.get(this.btnApply).click(); 
        cy.wait(3000);
        cy.get(this.btnReset).click({force: true});

    },

    // Fungsi search perangkat
    searchDevice: function(query) {
        cy.get(this.searchInput).type(query); 
        cy.wait(3000);
        cy.get(this.clearButton).click(); 
    },

    // Fungsi sorting by name
    sortByName: function() {
        cy.get(this.sortByNameButton).click(); 
        cy.wait(2000);
        cy.get(this.sortByNameButton).click(); 
        cy.wait(2000);

    },
};

export default DevicePage;
