function convertToRoman(num) {
//Model
let toRest = num ;
let roman = {I:1, IV:4, V:5, IX:9,  X:10, XL: 40, L:50, XC:90,  C:100, CD:400, D:500, CM: 900, M:1000};
let romanVal = (Object.values(roman));
let romanKey = (Object.keys(roman));
let count = romanVal.length-1
let romanNum =[]

//Controller
while(count >= 0){
  if(romanVal[count] > toRest){
    count--;
    } else {
      romanNum.push(romanKey[count])
        toRest -=romanVal[count]
        }
    }
  return romanNum.join("");
}

let result = convertToRoman(7);

console.log(result);
