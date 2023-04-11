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

console.log({
h1:h1,
li:li,
div:div,
p:p,
ol:ol
  
  });
  // console.log(result);


// dop dz
