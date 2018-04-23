// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {

  // store results
  var results = [];
  // if the node has the classname then add it to results

  var recurse = function(node) {
    if (node.className && node.classList.contains(className)) {
      results.push(node);
    }

    // check if the node has children
    //if it has children recurse on children
    if (node.children) {
      for (var i = 0; i < node.childNodes.length; i++) {
        recurse(node.childNodes[i]);
      }
    }
  };

  recurse(document.body);

  return results;
};