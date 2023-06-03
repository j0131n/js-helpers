function isArray(str) {
	return toString.call(str) == '[object Array]';
}

function stringToArray(str) {
  return Array.from(str).map(Number);
}

function leftPadSlow(str, len, char) {
	return new Array(len - str.length).fill(!char && char !== 0 ? ' ' : char).join('') + str;
}

function leftPadFast(str, len, ch) {
	str = String(str);
  var i = -1;
  if (!ch && ch !== 0) ch = ' ';
  
  len = len - str.length;
  while(++i < len) {
  	str = ch + str;
  }
  return str;
}

function runPerf(fn, count, ...args) {
	const start = performance.now();
  
  for(let i = 0; i < count; i++) {
  	fn.apply(null, args);
  }
  
  return performance.now() - start;
}

/* sample benchmark */
[10, 100, 1000, 10000].forEach(x => {
	console.log('run leftPad', runPerf(leftPad, x, 'foo', x));
});

[10, 100, 1000, 10000].forEach(x => {
	console.log('run leftPad2', runPerf(leftPad2, x, 'foo', x));
});
