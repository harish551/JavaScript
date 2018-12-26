/* Given an array A and number x, find sum of any two numbers in array is equals to given number x print True if not print False
 *–Note: (Time Complexity less than O(n square)).
*/
function hasPair(arr, x) {

  let first = 0;
  let last = arr.length - 1;
  arr.sort((a, b) => a - b)

  while (first < last) {
    if (arr[first] + arr[last] == x) {
      return `True has pair (${arr[first]}, ${arr[last]})`;
	} else if (arr[first] + arr[last] < x) {
	  first++;
	} else {
	  last--;
	}
  }	

  return false;
}

arr = [-4, 7, 5, 6, 1, 9, 2, 4, 5]
x = 13
console.log(hasPair(arr, x));
