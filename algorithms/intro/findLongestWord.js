var sentence = "The quick brown fox jumped over the lazy dog";

var splitSentence = sentence.split(" ");
var theLongestWordLen = 0;
var theLongestWord = "";
  
for (var i = 0; i < splitSentence.length; i = i + 1) {
  // console.log("Sentence word", i+1, "is:", splitSentence[i]);
  
 
  if(splitSentence[i].length > theLongestWordLen) {
      theLongestWordLen = splitSentence[i].length; //takes care of lInt
      theLongestWord = splitSentence[i];//takes care of lStr
  }
      
}

console.log("The longest word is", theLongestWord+ ", and it's length is", theLongestWordLen);

