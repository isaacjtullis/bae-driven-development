// WRITE TEST HERE
import sample from 'functions/sample'

describe('sample', () => {
  let randomNumber;

  beforeAll(() => {
    randomNumber = sample([1,2,3,4,5]);
  });

  it('should return a Number', () => {
    expect(randomNumber).toEqual(jasmine.any(Number));
  });
  it('should return a Whole Number', () =>{
    expect(randomNumber % 1).toBe(0);
  })
  it('should not be a number with decimals', () =>{
    expect(randomNumber % 1).not.toBe(1);
  })
})
