function range(start, end) {
   var start = document.getElementById("firstNumber").value;
   var end = document.getElementById("secondNumber").value;
   var ans = [];
   for (let i = start; i <= end; i++) {
    ans.push(i);
    }
    document.getElementById("result").innerHTML = ans;
}



// var zeroTo89 = range(0, 89);
// var sum = 0;
// for(var i = 0; i < zeroTo89.length; i++) {
//   sum += zeroTo89[i]
// }
// // console.log(sum);
//
