module.exports = function(str) {
  str = str
    .replace(/^\s*|\s*$/g, "");

  if(str.match(/^([+-]?[0-9]+(?:\.[0-9]+)?)(s|ms)$/)) {
    var val = parseFloat(RegExp.$1, 10);
    if(RegExp.$2 === "s") {
      val *= 1000;
    }
    return val;
  }
  else {
    throw new Error("Invalid CSS time");
  }
}
