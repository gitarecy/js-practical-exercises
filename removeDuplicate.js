let duplicate = [1,1,1,1,2,2,2,3,3,3,3];

function removeDuplicates(duplicate) {
	let unique = [];
	duplicate.forEach(element => {
		if (!unique.includes(element)) {
			unique.push(element);
		}
	});
    console.log(unique);
	return unique;
}
removeDuplicates(duplicate);
