/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URL', function() {
            for(i=0;i<allFeeds.length;i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toEqual("");
            }    
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name', function() {
            for(i=0;i<allFeeds.length;i++) {
            expect(allFeeds[i].name).toBeDefined();
            expect(allFeeds[i].name).not.toEqual("");
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('hidden by default', function() {
            expect($('body').hasClass("menu-hidden")).toBeTruthy();
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('visibility when menu icon is clicked', function() {
            $('.menu-icon-link').click();         // initiate a click on the menu icon
            expect($('body').hasClass("menu-hidden")).toBeFalsy();
            $('.menu-icon-link').click();         // initiate the second click on the menu icon
            expect($('body').hasClass("menu-hidden")).toBeTruthy();
        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, function(){
                done();
            }); 
        });
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('at least one entry', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);     
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var initFeed;
        var newFeed;
        beforeEach(function(done) {
            loadFeed(0, function() {
                initFeed = document.querySelector(".feed").innerHTML;          // load the first feed and save the data as initFeed
                loadFeed(1, function() {
                    newFeed = document.querySelector(".feed").innerHTML;       // load the updated feed and save the data as newFeed
                    done();
                });
            }); 
        });
        it('changes its content after reload', function(){
            expect(newFeed).not.toEqual(initFeed);        // check if the two feeds' contents are the same
        });
    });
});