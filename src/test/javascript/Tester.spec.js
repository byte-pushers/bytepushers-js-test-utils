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


        /*it('should be able to call public methods', function () {
            var emp = new Employee(null, "M", undefined, "07/2/1970));

            expect(emp.getFullName).toBeDefined();


        });*/

        /*it('should not be able to call private methods', function () {
            var emp = new Employee(null, "M", undefined, "07/2/1970));

            expect(emp).toBeDefined();
        });*/


    });
});