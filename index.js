function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

module.exports = function(){
	var args = Array.prototype.slice.call(arguments);

	var e = new Error(args.length === 2 ? args[1] : 'An error came up');
	e.code = isNumber(args[0]) ? args[0] : 500;

	return e;
}