var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
var  tagCount = {};
tags.forEach(tag => {
  if (tagCount[tag]) {
    tagCount[tag] ++;
  } else {
    tagCount[tag] = 1;
  }
});

var sortedTags = Object.entries(tagCount).sort((a, b) => b[1] - a[1]);
var  result = {};

sortedTags.forEach(tag => {
  result[tag[0]] = tag[1];
});

  console.log(result);

  var numbers = ['h1', 'li', 'div', 'p', 'ol']
numbers.sort((a, b) =>{
     return  a - b
})
console.log(numbers);