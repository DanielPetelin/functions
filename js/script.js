var number = function(num) {
var chot = 0, nechot = 0;
    for (var i = 0; i < num.length; i++) {
        if(num[i] % 2 == 0) {
            chot++
        } else {
            nechot++
        }
    }
    return[chot, nechot];
}

var a = number("3148216");
console.log(a);