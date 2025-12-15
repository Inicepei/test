<<<<<<< Updated upstream
console.log('changed sth');
=======
<<<<<<< Updated upstream
=======
export function add(a, b) {
	return a + b;
}

export function isEven(n) {
	return typeof n === 'number' && n % 2 === 0;
}

export function capitalize(s) {
	if (typeof s !== 'string') return '';
	return s.charAt(0).toUpperCase() + s.slice(1);
}

// keep a simple default export for compatibility
export default { add, isEven, capitalize };
>>>>>>> Stashed changes
>>>>>>> Stashed changes
