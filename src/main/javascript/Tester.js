/**
 * Created by tonte on 9/19/17.
 */
/*global window*/
/* jslint bitwise: true, unparam: true, regexp: true, eval: true*/
/* jshint -W108, -W109, -W061 */


(function (window) {
    'use strict';
    var BytePushers;

    if (window.BytePushers !== undefined && window.BytePushers !== null) {
        BytePushers = window.BytePushers;
    } else {
        window.BytePushers = {};
        BytePushers = window.BytePushers;
    }

    BytePushers.Tester = function () {
        var _tester = {};

        _tester.isString = function (value) {
            return typeof value === 'string' || value instanceof String;
        };

        _tester.getConstructorParamsAsString = function (constructorParams) {
            var constructorParamsString = "";

            if (Array.isArray(constructorParams)) {
                constructorParams.forEach(function (constructorParam) {
                    if (_tester.isString(constructorParam)) {
                        constructorParamsString += "'" + constructorParam + "',";
                    } else {
                        constructorParamsString += constructorParam + ",";
                    }
                });

                constructorParamsString = constructorParamsString.substring(0, constructorParamsString.length - 1);
            }

            return constructorParamsString;
        };

        _tester.getInstance = function (classRef, constructorParams) {
            // get the functions as a string
            var classAsString = classRef.toString();

            // To expose the private functions, we create
            // a new function that goes trough the functions string
            // we could have done all string parsing in this class and
            // only associate the functions directly with string
            // manipulation here and not inside the new class,
            // but then we would have to expose the functions as string
            // in the code, which could lead to problems in the eval since
            // string might have semicolons, line breaks etc.
            var funcString = "";
            funcString += "new (";
            funcString += classAsString.substring(0, classAsString.length - 3) + ";\n";
            funcString += "\tthis._privates = {};\n";
            funcString += "\tthis._initPrivates = function(f){\n";
            funcString += "\t\tvar fs = f.toString();\n";
            funcString += "\t\tthis._privates = {};\n";
            funcString += "\t\tvar pf = fs.match(/function\\s*?(\\w.*?)\\(/g);\n";
            funcString += "\t\tif(pf != null){\n";
            funcString += "\t\t\tfor (var i = 0, ii = pf.length; i < ii; i++){\n";
            funcString += "\t\t\t\tvar fn = pf[i].replace(/function\\s+/, '').replace('(', '');\n";
            funcString += "\t\t\t\tif('" + classRef.name + "' != fn){\n";
            funcString += "\t\t\t\t\tthis._privates[fn] = eval(fn);\n";
            funcString += "\t\t\t\t}\n";
            funcString += "\t\t\t}\n";
            funcString += "\t\t}\n";
            funcString += "\t\tpf = fs.match(/var\\s*\\w.*?\\s+=\\s+function\\s*?\\(/g);\n";
            funcString += "\t\tif(pf != null){\n";
            funcString += "\t\t\tfor(var i = 0, ii = pf.length; i < ii; i++){\n";
            funcString += "\t\t\t\tvar fn = pf[i].replace(/var\\s*/, '').replace(' ', '').replace('=', '').replace(' ', '').replace('function', '').replace(' ', '').replace('(', '');\n";
            funcString += "\t\t\t\t\tthis._privates[fn] = eval(fn);\n";
            funcString += "\t\t\t}\n";
            funcString += "\t\t}\n";
            funcString += "\t};";
            funcString += "\n}";
            funcString += ")(" + _tester.getConstructorParamsAsString(constructorParams) + ")";

            var instance = eval(funcString);
            instance._initPrivates(classAsString);
            // delete the initiation functions
            delete instance._initPrivates;

            return instance;
        };

        return _tester;
    };
}(window));