var config = require ('../../nightwatch.conf.js');

module.exports = {

    'Can locate navigation bar and its elements' : function(browser) {
        var nav = browser.page.navbarPage();
        var navbar = nav.section.navigationBar;

        nav.navigate();
        browser
            .url('https://stage.pvdgeeks.org')
            .waitForElementVisible('body', 'Successfully launched the landing page');
        
        nav.expect.section('@navigationBar').to.be.visible;
       
        navbar.
            assert.visible('@eventsTab', 'Events tab is visible')
            .assert.visible('@blogsTab', 'Blog Posts tab is visible');

        },
    'Can toggle between Events and Blog Posts tab and respective components are displayed' : function(browser) {
        var nav = browser.page.navbarPage();   
        var navbar = nav.section.navigationBar;

        navbar.
            clickEventsTab();
        navbar.
            assert.visible('@eventsPane', 'Shows Events List pane') //clicking on Events tab displays events list content
            .clickBlogsTab();
        navbar.assert.visible('@postsPane', 'Shows Blog Posts pane'); //clicking on Blog Posts tab displays blog posts content
    },

    'Can see the bold letter and underline on the active tab' : function(browser) {
        var nav = browser.page.navbarPage();   
        var navbar = nav.section.navigationBar;

        navbar.getCssProperty('@activeTab', 'border-bottom-style', function(result) {
                this.assert.equal(result.value, 'solid', 'Blog Posts tab active and shows with underline');
            }); 
        navbar.getCssProperty('@activeTab', 'font-weight', function(result) {
                this.assert.equal(result.value, '700', 'Blog Posts tab active and shows solid letter'); 
            }); 
        
        navbar.clickEventsTab();
        navbar.getCssProperty('@activeTab', 'border-bottom-style', function(result) {
                this.assert.equal(result.value, 'solid', 'Events tab active and shows with underline');
            }); 
        navbar.getCssProperty('@activeTab', 'font-weight', function(result) {
                this.assert.equal(result.value, '700', 'Events tab active and shows solid letter'); //inactive weight is set to 400 for non-bold letters
            }); 
     
        browser.end();
    }
};
 
    

