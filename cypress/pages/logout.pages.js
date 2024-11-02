var LogoutPage = {
    profileDropdown: '#dropdown-profile-activator > .flex-row', 
    btnLogout: '.w-60 > :nth-child(3)', 

    // Fungsi klik dropdown 
    clickProfileDropdown: function() {
        cy.get(this.profileDropdown).click(); 
    },

    // Fungsi klik button Logout
    clickLogout: function() {
        cy.get(this.btnLogout).click({ force: true }); 
    }
};

export default LogoutPage;