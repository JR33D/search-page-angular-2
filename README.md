# search-page-angular-2
Sample search page done in angular 2. This project was to practice and showcase some work I've done with angular 2 to potential employers.

## To run project
clone repository or download code to your machine.

using `npm install` install node_modules needed for the application to run. After all dependencies have been downloaded `npm start` will build and watch files for changes as well as run application to view.

## To test the project
All testing for the application can be found under the `src/app/testing` folder. There are 2 options currently `e2e` or `specs` The e2e folder houses the protractor end-to-end test that can be run against the application. Where as the specs folder houses the jasmine unit tests to run against the application.

To run the e2e test run the command `npm e2e`. This will build, server and run the application, webdriver-manager and the e2e tests. Results of e2e test are output to the `_test-output` folder that isn't checked into git.

To run the unit test run the command `npm test`. This will build the application and specs folder code and run the tests against PhantomJS.

## Things to do
This code originally came from the quick-start available on Angular's website. So it does include items like testing and e2e test using protractor that are on a todo list to continue showcasing all skils around angular develop life cycle.

+ Fully configure .travis.yml for builds on check-in and PR.
+ Expand Application to show detailed page of user data
+ Expand unit test and application logic to allow searching/filtering of people table
