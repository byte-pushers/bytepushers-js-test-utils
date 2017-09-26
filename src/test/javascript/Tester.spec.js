/**
 * Created by tonte on 9/19/17.
 */
define(['bytepushers', 'TestClass'], function(BytePushers) {
    describe("Tester", function(){
        it('should be able to call private methods', function () {
            var tester = (new BytePushers.Tester()).getInstance(TestClass);
            expect(tester).toBeDefined();
            expect(tester._privates).toBeDefined();
            expect(tester._privates["doTest"]).toBeDefined();
            expect(tester._privates.doTest()).toEqual("doing test");
            expect(tester._privates["getType"]).toBeDefined();
            expect(tester._privates.getType()).toEqual("JavaScript");
        });


        it('should be able to call public methods', function () {
            var testClass = new TestClass();

            expect(testClass).toBeDefined();

        });

        it('should not be able to call private methods', function () {

        });


    });
});