function reverseString(str){
	let newStr = str.split('');
	let reversedStr = newStr.reverse();
	str=reversedStr.join("");
	console.log(str);
	return str;
};

reverseString('I am the good boy');




