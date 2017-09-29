/**
 * Created by tonte on 9/19/17.
 */
define(['bytepushers', 'Employee'], function(BytePushers) {
    describe("Tester", function(){
        it('should be able to call private methods', function () {
            var emp = (new BytePushers.Tester()).getInstance(Employee);
            expect(emp).toBeDefined();
            expect(emp._privates).toBeDefined();
            expect(emp._privates["getFirstName"]).toBeDefined();
            expect(emp._privates.getFirstName()).toEqual("Sally");
            expect(emp._privates["getMiddleName"]).toBeDefined();
            expect(emp._privates.getMiddleName()).toEqual("Mae");
            expect(emp._privates["getLastName"]).toBeDefined();
            expect(emp._privates.getLastName()).toEqual("Sue");
            expect(emp._privates.calculateAge).toBeDefined();
            expect(emp._privates.calculateAge()).toEqual(20);
            expect(emp._privates.getSalary).toBeDefined();
            expect(emp._privates.getSalary()).toEqual(50000);
        });


        it('should be able to call public methods', function () {
            var emp = (new BytePushers.Tester()).getInstance(Employee);

            expect(emp.getFullName).toBeDefined();
            expect(emp.getFullName()).toEqual("Sally Mae Sue");
            expect(emp.getDepartment).toBeDefined();
            expect(emp.getDepartment()).toEqual("Human Resources");
            expect(emp.getAge).toBeDefined();
            expect(emp.getAge()).toEqual(20);
            expect(emp.getType).toBeDefined();
            expect(emp.getType()).toEqual("full-time");


       });
    });

    describe("Employee class", function () {
        it('should be able to call public methods', function () {
            var actualBirthDate = "07/2/1970";
            var expectedAge = new Date().getFullYear() - new Date(actualBirthDate).getFullYear();
            var emp = new Employee(null, "M", undefined, actualBirthDate, null , "part-time", undefined);

            expect(emp.getFullName).toBeDefined();
            expect(emp.getFullName()).toEqual("Sally M Sue");
            expect(emp.getDepartment).toBeDefined();
            expect(emp.getDepartment()).toEqual("Human Resources");
            expect(emp.getAge).toBeDefined();
            expect(emp.getAge()).toEqual(expectedAge);
            expect(emp.getType).toBeDefined();
            expect(emp.getType()).toEqual("part-time");

        });

        it('should not be able to call private methods', function () {
            var actualBirthDate = "07/2/1970";
            var emp = new Employee(null, "M", undefined, actualBirthDate, null , "part-time", undefined);

            expect(emp.getFirstName).not.toBeDefined();
            expect(emp.getMiddleName).not.toBeDefined();
            expect(emp.getLastName).not.toBeDefined();
            expect(emp.calculateAge).not.toBeDefined();
            expect(emp.getSalary).not.toBeDefined();
        });
    });
});