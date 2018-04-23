// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  if (json[0] === '[') {
    //arrays
    var tempString = json.slice(1, json.length - 1);
    var arrayOfValues = tempString.split(',');
    var result = arrayOfValues.map(function(element) {
      return parseJSON(element);
    });

    return result;
  } else if (json[0] === '{') {
    //objs
    
  } else if (json[0] === '"') {
    //strings   
    return json.slice(1, json.length - 1);
  } else {
    //keywords
    return json;
  }
};
