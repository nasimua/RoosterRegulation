const assert = require('assert');
const Rooster = require('../index');

describe('Rooster',() => {
  describe('.announceDawn',() => {
    it('returns a rooster call',() => {
      //setup
      const expected = 'cock-a-doodle-doo!';
      //execrcise
      const result = Rooster.announceDawn();
      //verify
      assert.equal(result, expected);
    })
  })

  describe('.timeAtDawn',() => {
    it('returns its argument as a string',() => {
      //setup
      const inputNum = 12;
      const expected = '12';
      //execrcise
      const result = Rooster.timeAtDawn(inputNum);
      //verify
      assert.equal(result, expected);
    })

    it('throws range error if number less than 0 is passed', () => {
      //setup
      const inputNum = -1;
      const expected = RangeError;
      
      //verify
      assert.throws(() => {
        Rooster.timeAtDawn(inputNum); //exercise
      }, expected);
    })

    it('throws range error if number more than 23 is passed', () => {
      //setup
      const inputNum = 24;
      const expected = RangeError;
      
      //verify
      assert.throws(() => {
        Rooster.timeAtDawn(inputNum); //exercise
      }, expected);
    })
  })
})