import { acceptableWordArr } from "../../Assets/acceptableWords";

const checkIsAcceptableWord = (word) =>{
  if(word.length<5){
    return false;
  }
  else{
    if (acceptableWordArr.includes(word.toLowerCase())){
      return true
    }
    else {
      return false;
    }
  }
}

let todaysWord = "AGILE";

const getObj = (type, word) =>{
  let respObj = {
    "isValid": false,
    "letterStateArr":["default","default","default","default","default"],
    "type": type
  }

  switch (type) {
    case "correct":
      respObj.isValid = true
      respObj.letterStateArr = ["exact","exact","exact","exact","exact"];
      break;

    case "incorrect":
      respObj.isValid = true
      let arr = [];
      for(let i=0;i<word.length;i++){
        if(todaysWord.includes(word[i])){
          if(word[i]===todaysWord[i]){
            arr.push("exact");
          }else{
            arr.push("present");
          }
        }else{
          arr.push("absent")
        }
      }
      respObj.letterStateArr = arr;
      break;

    default:
      respObj.isValid = false;
      break;
  }
  return respObj;
}

export const validateWord = (word) =>{
  if(checkIsAcceptableWord(word)){
    if(word === todaysWord){
      return getObj("correct", word);
    }
    else{
      return getObj("incorrect",word);
    }
  }
  else{
    return getObj("unacceptable")
  }
}