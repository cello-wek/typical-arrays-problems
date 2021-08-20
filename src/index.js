exports.min = function min(array) {
	if(array === undefined){
		return 0;
	}
	let mn = array.length > 0 ? array[0] : 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] < mn) {
			mn = array[i];
		}
	}
	return mn;
}

exports.max = function max(array) {
	if(array === undefined){
		return 0;
	}
	let mx = array.length > 0 ? array[0] : 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] > mx) {
			mx = array[i];
		}
	}
	return mx;
}

exports.avg = function avg(array) {
	if(array === undefined){
		return 0;
	}
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	let average = array.length ? sum / array.length : 0;
	return average;
}
