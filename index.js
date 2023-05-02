const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
 


//const titleCased = tutorials.map((questions) => {
//  for (let j=0; j<tutorials.length; j++){
//    let string = tutorials[j];
//   let capitalize = string.split("")
//    for (let i=0; i<capitalize.length;i++){
//      capitalize[i]=capitalize[i].charAt(0).toUpperCase() + capitalize[i].slice(1);
//       }
//    return questions
//  }})
  


//return tutorials.charAt(0).toUpperCase() + tutorials.slice(1);



console.log("start");
const titleCased = () => { 
  const result = tutorials.map((tutorial) => { 
  var capitalizeString = tutorial.split(" ");
  for(let i=0; i<capitalizeString.length; i++){
    capitalizeString[i] = capitalizeString[i].charAt(0).toUpperCase() + capitalizeString[i].slice(1);
    console.log(capitalizeString)
    
    }
  return capitalizeString.join(" ");

 })    
 console.log(result)

 return result
}
console.log(titleCased());