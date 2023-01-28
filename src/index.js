module.exports = function reverse (n) {
	if (n < 0) {
		n = n * (-1);
	}
  let result = n.toString().split('').reverse().join('');
	return Number(result);
}
