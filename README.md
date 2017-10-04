# bytepushers-js-test-utils
Byte Pushers Core JavaScript library that supports core object extensions and general utilities that can be used as base
fundamental classes.

## Installation

**npm install bytepushers-js-test-utils**
**npm install karma**
**npm install bower**
- Install Karma
- Install Bower

## Synopsis
[comment]: <Want to be able UNIT test classes>
Byte Pushers Core JavaScript library that supports common object extensions and general utilities that can be used as base
fundamental classes.


## Code Example

[comment]: <Show what the library does as concisely as possible, developers should be able to figure out how your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.>
In this test we have made an employee class for all the test cases as an example. You can replace the employee class with what ever you want. You can reference that class in the **Employee.js** file.

In order to use the tester you have to create an instance then you call your class reference like this:

```javascript
var emp = (new BytePushers.Tester()).getInstance(Employee)

//Now we are going to create a new instance with values that are different from the default values stored within the employee constructor.


var emp = new Employee(null, "M", undefined, actualBirthDate, null , "part-time", undefined);

```

To call the private methods:
```javascript
emp._privates.getFirstName()  //returns "Sally" by default

```

To call public methods:
```javascript
emp.getFullName()   //returns "Sally Mae Sue" by default
```
Use these to test the methods within your constructor. These examples can also be found in the **Tester.spec.js file**.

[comment]: <Example you have employee class and you want to test that class, this is how you test those methods.>
## Motivation

[comment]: <The motivation behind this project is to create a collection of common base functionality that can be extended and resused in larger projects.>
The test ran should show you whether your methods are public or private. This helps you keep all your methods within the correct scope which in hindsight lets you know whether you can call a certain method.

## API Reference

[comment]: <Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.>

## Tests

[comment]: <Describe and show how to run the tests with code examples.>
When running test within this module, we use Jasmine. For beginners, use this link right [here](https://jasmine.github.io/pages/getting_started.html). This will show you the documenation on how Jasmine works for testing. Now, this is an example in our **Tester.spec.js** file.
```javascript
define(['bytepushers', 'Employee'], function(BytePushers) {
    describe("Tester", function(){
        it('should be able to call private methods', function () {
            var emp = (new BytePushers.Tester()).getInstance(Employee);
            expect(emp).toBeDefined();
        });
     });
});
//In this example we make sure that "emp" is defined after declaring "emp" as a variable.
```
## Contributors

[comment]: <Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.>

## License

[comment]: <A short snippet describing the license (MIT, Apache, etc.)>



In order to build successfully, ensure the following:
  1.  Use either minified version of modules or normal version of modules in the Gruntfile.js and Karma.conf.js files;
      but not both and not mixed matched.