// WRITE TEST HERE
import positiveResponses from 'constants/positiveResponses'

describe('positiveResponses', () => {
  it('should be an Array', () => {
    expect(positiveResponses).toEqual(jasmine.any(Array));
  });
  it('should include the following positive sentences', () => {
    expect(positiveResponses).toContain("that's great to hear!");
    expect(positiveResponses).toContain("So glad for you because that ROCKS")
  })
})
