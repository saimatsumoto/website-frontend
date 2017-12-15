'use strict';

module.exports = {
	url: function () {
		return this.api.launch_url;
	},

    sections: {
    
    navigationBar: {
        selector: 'div[class="row navigation-bar"]',

        elements: {
              eventsTab: {
                selector: 'a[id="navigation-bar-tabs d-flex-tab-0"]'
              },
              blogsTab: {
                selector: 'a[id="navigation-bar-tabs d-flex-tab-1"]'
              },
              activeTab: {
                selector: 'li[class="active"]'
              },
              eventsPane: {
                selector: 'div[id="navigation-bar-tabs d-flex-pane-0"]'
              },
              postsPane: {
                selector: 'div[id="navigation-bar-tabs d-flex-pane-1"]'
              }              
        },
    
            commands:[{
                wait: function() { 
                    this.api.pause(2000); 
                },
                clickEventsTab : function() {
                    return this
                        .click('@eventsTab', function(response) {
                            this.pause(1000); 
                         }); 
                },
                clickBlogsTab : function() {
                    return this
                        .click('@blogsTab', function(response) {
                            this.pause(1000); 
                        });
                } 
            }]
        }
    }
};