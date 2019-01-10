
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    let inputs = input.split('\n');
    let t = +inputs[0];
    for(let i = 1; i <= 2*(t)-1 ; i+=2 ){
        let params = inputs[i].split(' ').map((a)=> +a);
        //console.log(params);
        let arrA = inputs[i+1].split(' ').map((a)=> +a);
        let arrB = [];
        for(let k = 0;k<params[1];k++) arrB = arrB.concat(arrA);
        console.log(countSubarr(arrB,arrB.length,params[2]));
    }
}
function countSubarr(arr,n,k){
    //console.log(arr,n,k);
	let start = 0,end = 0,count = 0,sum = arr[0];
	while(start < n && end < n){
	    //console.log(start);
		if(sum<=k){
			end++;
			if(end>=start) count+=end-start;
			if(end<n) sum+=arr[end];
		}
		else{
			sum -= arr[start];
			start++;
		}
	}
	return count%((Math.pow(10,9))+7);
}
