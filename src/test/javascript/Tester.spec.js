/**
 * Created by tonte on 9/19/17.
 */
define(['bytepushers', 'Employee'], function(BytePushers) {
    describe("Tester", function(){
        it('should be able to call private methods', function () {
            var tester = (new BytePushers.Tester()).getInstance(Employee);
            expect(tester).toBeDefined();
            expect(tester._privates).toBeDefined();
            expect(tester._privates["getFirstName"]).toBeDefined();
            expect(tester._privates.getFirstName()).toEqual("Sally");
            expect(tester._privates.calculateAge).toBeDefined();
            expect(tester._privates.calculateAge()).toEqual(20);
        });


        //TODO: Create another test that shows that tester can call public metods.
    });

    describe("Test Class Employee", function () {
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
            var expectedAge = new Date().getFullYear() - new Date(actualBirthDate).getFullYear();
            var emp = new Employee(null, "M", undefined, actualBirthDate, null , "part-time", undefined);

            expect(emp.getFirstName).not.toBeDefined();
            expect(emp.getMiddleName).not.toBeDefined();
            expect(emp.getLastName).not.toBeDefined();
            expect(emp.calculateAge).not.toBeDefined();
            expect(emp.getSalary).not.toBeDefined();
        });
    });
});