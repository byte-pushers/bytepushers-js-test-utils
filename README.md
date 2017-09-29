# bytepushers-js-test-utils
Byte Pushers Core JavaScript library that supports core object extensions and general utilities that can be used as base
fundamental classes.

## Installation

**npm install bytepushers-js-test-utils**
- Install Karma
- Install Bower

## Synopsis
[comment]: <Want to be able UNIT test classes>
Byte Pushers Core JavaScript library that supports common object extensions and general utilities that can be used as base
fundamental classes.


## Code Example

[comment]: <Show what the library does as concisely as possible, developers should be able to figure out how your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.>
In order to use the tester you have to create an instance then you call your class reference like this:

```javascript
var emp = (new BytePushers.Tester()).getInstance(Employee)
```

To call the private methods:
```javascript
emp._privates.getFirstName()  //returns "Sally"
```

To call public methods:
```javascript
emp.getFullName()   //returns "Sally Mae Sue"
```


[comment]: <Example you have employee class and you want to test that class, this is how you test those methods.>
## Motivation

[comment]: <The motivation behind this project is to create a collection of common base functionality that can be extended and resused in larger projects.>
The test ran should show you whether your methods are public or private. This helps you keep all your methods within the correct scope.

## API Reference

[comment]: <Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.>

## Tests

[comment]: <Describe and show how to run the tests with code examples.>

## Contributors

[comment]: <Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.>

## License

[comment]: <A short snippet describing the license (MIT, Apache, etc.)>



In order to build successfully, ensure the following:
  1.  Use either minified version of modules or normal version of modules in the Gruntfile.js and Karma.conf.js files;
      but not both and not mixed matched.