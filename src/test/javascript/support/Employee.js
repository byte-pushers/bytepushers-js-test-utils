/**
 * Created by tonte on 9/19/17.
 */
function Employee(fName, mName, lName, bDate, dept, t, s){
    var firstName = (fName === undefined || fName === null)? "Sally": fName,
        middleName = (mName === undefined || mName === null)? "Mae": mName,
        lastName = (lName === undefined || lName === null)? "Sue": lName,
        department = (dept === undefined || dept === null)? "Human Resources": dept,
        birthDate = (bDate === undefined || bDate === null)? new Date("04/02/" + (new Date().getFullYear() - 20)) : new Date(bDate),
        type = (t === undefined || t === null)? "full-time" : t,
        salary = (s === undefined || s === null)? 50000: s;

    var getFirstName = function () {
        return firstName;
    };

    function getMiddleName() {
        return middleName;
    }

    function getLastName() {
        return lastName
    }

    this.getFullName = function () {
        return getFirstName() + " " + getMiddleName() + " " + getLastName();
    };

    this.getDepartment = function () {
        return department;
    };

    var calculateAge = function () {
        var currentYear = new Date().getFullYear(),
            birthYear = birthDate.getFullYear();

        return currentYear - birthYear;
    };

    this.getAge = function () {
        return calculateAge()
    };

    this.getType = function () {
        return type;
    };

    var getSalary = function () {
        return salary;
    }


}