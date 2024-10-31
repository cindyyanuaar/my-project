var LogoutPage = {
    profileDropdown: '#dropdown-profile-activator > .flex-row', 
    btnLogout: '.w-60 > :nth-child(3)', 

    // Fungsi klik dropdown profile
    clickProfileDropdown: function() {
        cy.get(this.profileDropdown).click(); 
    },

    // Fungsi klik tombol Logout
    clickLogout: function() {
        cy.get(this.btnLogout).click(); 
    }
};

export default LogoutPage;
