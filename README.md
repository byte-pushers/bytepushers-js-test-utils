# bytepushers-js-test-utils
Byte Pushers Core JavaScript library that supports core object extensions and general utilities that can be used as base
fundamental classes.
## Installation
**npm install bytepushers-js-test-utils**

- Install Karma
- Install Bower

## Synopsis
Byte Pushers Core JavaScript library that supports common object extensions and general utilities that can be used as base
fundamental classes.
## Code Example
In this example, we are testing our Employee class. You can see a reference to that class in the **Employee.js** file.
In order to use the tester, you have to create an instance of the Tester and then reference the test class Employee like this:
```javascript
var emp = (new BytePushers.Tester()).getInstance(Employee)
```
This will return an instance of the Employee class that exposes the private methods in the "_privates" variable.  To call the private methods on the Employee Class, do the following:
```javascript
emp._privates.getFirstName()  //returns "Sally" by default
```
To call public methods on the Employee class do the following:
```javascript
emp.getFullName()   //returns "Sally Mae Sue" by default
```
To see a working examples of how to use the Tester class see the **Tester.spec.js** file located in project.
## Motivation
The motivation behind the creation of the Tester.js file was to be able to unit test both public and private methods of a JavaScript Custom Class.
The test ran should show you whether your methods are public or private. This helps you keep all your methods within the correct scope which in hindsight lets you know whether you can call a certain method.
## API Reference

|                          Method                         |                                             Function                                            |
|:--------------------------------------------------------|:------------------------------------------------------------------------------------------------|
| getInstance(ClassReference) method                     | Returns an instance of the ClassReference with exposed private methods in the "_privates" object|
| getInstance(ClassReference, [ ] );                     | Creates new instance via constructor parameters                                                 |
| ClassReferenceInstance._privates.somePrivateMethodName()| Calls the private method somePrivateMethodName                                                  |


Use dot notation to access private methods. Class content goes inside of the array for the second parameter.
## Tests
When running test within this module, we use Jasmine. For beginners, use this link right [here](https://jasmine.github.io/pages/getting_started.html). This will show you the documenation on how Jasmine works for testing. Now, this is an example in our **Tester.spec.js** file.
```javascript
define(['bytepushers', 'Employee'], function(BytePushers) {
    describe("Tester", function(){
        it('should be able to call private methods', function () {
            var emp = (new BytePushers.Tester()).getInstance(Employee);
            expect(emp).toBeDefined();
            expect(emp._privates).toBeDefined();
            expect(emp._privates["getFirstName"]).toBeDefined();
        });

//In this example we make sure that "emp" is defined after declaring "emp" as a variable.

        it('should be able to create instance via constructor parameters', function () {
            var actualBirthDate = "07/2/1970";
            var expectedAge = new Date().getFullYear() - new Date(actualBirthDate).getFullYear();
            var emp = (new BytePushers.Tester()).getInstance(Employee, ["Tim", "M", "Jones", actualBirthDate, null, "full-time", undefined]);

            expect(emp.getFullName).toBeDefined();
            expect(emp.getFullName()).toEqual("Tim M Jones");
        });

//In this example, we are making sure that we can put in an array as the second parameter and create the new instance

     });
});
```



## Contributors
Byte Pushers
## License
In order to build successfully, ensure the following:
  1.  Use either minified version of modules or normal version of modules in the Gruntfile.js and Karma.conf.js files;
      but not both and not mixed matched.