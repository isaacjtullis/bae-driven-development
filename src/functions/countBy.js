function countBy(words){
  let word;
  let counter = 1;
  let wordCount = {}
  for(let i = 0; i < words.length; i++){
    if(word === words[i]){
      counter++
    } else {
      word = words[i]
      counter = 1
    }
    wordCount[words[i]] = counter
  }
  return wordCount;
}

let wordsArray = ['I', 'really', 'really', 'really', 'love', 'nachos'];
countBy(wordsArray)

export default countBy;
