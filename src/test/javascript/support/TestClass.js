/**
 * Created by tonte on 9/19/17.
 */
function TestClass(){
    var someArray = new Array();
    var someProperty = "property";
    var someOtherProperty = "hi";

    this.someAttribute = "Some Attribute";
    this.someOtherAttribute;

    this.monthNames = [{"name": "January", "abbr": "Jan", "maxDays": "31"},
        {"name": "February", "abbr": "Feb", "maxDays": null},
        {"name": "March", "abbr": "Mar", "maxDays": "31"},
        {"name": "April", "abbr": "Apr", "maxDays": "30"},
        {"name": "May", "abbr": "May", "maxDays": "31"},
        {"name": "June", "abbr": "Jun", "maxDays": "30"},
        {"name": "July", "abbr": "Jul", "maxDays": "31"},
        {"name": "August", "abbr": "Aug", "maxDays": "31"},
        {"name": "September", "abbr": "Sept", "maxDays": "30"},
        {"name": "October", "abbr": "Oct", "maxDays": "31"},
        {"name": "November", "abbr": "Nov", "maxDays": "30"},
        {"name": "December", "abbr": "Dec", "maxDays": "31"}];

    this.getName = function(){
        return "TestClass";
    };

    this.getName2 = function(){
        return "TestClass";
    };

    var getType = function(){
        return "JavaScript";
    };

    function doTest(){
        return "doing test";
    }

    getType();
    someArray;
    someProperty;
    someOtherProperty;
}