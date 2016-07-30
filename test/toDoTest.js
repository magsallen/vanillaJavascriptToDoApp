// Write tests that check you can instantiate
// a to do JavaScript object. Write tests that
// check that a to do object can store and
// retrieve a task string like Eat breakfast
// and a complete boolean.

var expect = require("chai").expect;
var toDo = require("../app/toDo");

describe("To Do App", function() {
  describe('.constructor()', function () {
    it("creates ToDo objects", function() {
      expect(new toDo('Eat Breakfast')).to.be.a('object');
    });

    it("can store and retrieve a task string", function() {
      expect(new toDo('Eat Breakfast').task).to.equal('Eat Breakfast');
    });

    it("returns a toDo's status", function() {
      expect(new toDo('Eat Breakfast').isComplete).to.equal(false);
    });
  });
});
