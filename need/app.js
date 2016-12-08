var btnOkay = document.getElementById('btnOkay');
// btnOkay.onclick = function() {
//     var textName = document.getElementById('textName');
//     var textNameValue = textName.value;

//     var divData = document.getElementById('divData');
//     divData.innerHTML = textNameValue;
// };

btnOkay.onclick = () => document.getElementById('divData').innerHTML = 
                                document.getElementById('textName').value; 

var sqFn  = function(x) {
    return x*x;
}
var squre = x => x*x;
console.log(''+squre(10));