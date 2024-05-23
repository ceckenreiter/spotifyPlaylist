var assert = require('assert'); 
const fs = require('fs')



// 3 phase approach
describe('.pop', () => {
    it('returns the last element in the array [3phase]', () => {
      // Setup
      const knightString = 'knight';
      const jediPath = ['padawan', knightString];
  
      // Exercise
      const popped = jediPath.pop();
  
      // Verify
      assert.ok(popped === knightString);
    });
  });
  