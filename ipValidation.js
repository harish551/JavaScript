var net = require('net');
function processData(input) {
    let addrs = input.trim().split('\n').slice(1)
    for (let ip of addrs) {
        let res = net.isIP(ip.trim());
        if (res == 4) {
            console.log(ip.trim()+': '+"IPv4")
        }
        if (res == 6) {
            console.log(ip.trim()+': '+"IPv6")
        }
        if (res == 0) {
            console.log(ip.trim()+': '+"Neither")
        }
    }
} 

process.stdin.resume();
process.stdin.setEncoding("utf-8");
_input = "";
process.stdin.on("data", function (input) {
       if(input == ''+'\n'){
        processData(_input)
        process.exit()
       }
    _input += input;
});

