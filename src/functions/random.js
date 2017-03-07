function randomNumbers(num){
  let randNumbers = []
  let givenNumber = num
  let min = 0
  let randNumber = Math.floor(Math.random() * (givenNumber - min) + min);
  if(randNumbers.length < 10){
    randNumbers.push(randNumber)
  }
  return randNumber
}
randomNumbers(9)

export default randomNumbers;
