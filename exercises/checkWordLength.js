function checkWordLength(word) {
  const wordLength = word.length;
  if (wordLength < 5) {
    console.log(`${word} is a short word`);
  } else {
    console.log(`${word} is a long word`);
  }
}
