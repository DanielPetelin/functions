//Функция, которая высчитывает количество четных и нечетныых цыфр.

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

//var a = number("3148216");
//console.log(a);

var numbers = function(chisla) {
var fi = [];
    for (var i = 0; i < chisla; i++) {
        if(i == 0) {
            fi[i] = 1;
        } else if (i == 1) {
            fi[i] = 2;
        } else {
            fi[i] = fi[i - 2] + fi[i - 1];
        }
    }
    return fi;
}
var b = numbers(11);
console.log(b);