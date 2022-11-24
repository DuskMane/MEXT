let dollarTo;
let dollars;
let whichCurrency;
function bringData(){

    fetch(`http://www.floatrates.com/daily/usd.json`).then((Response) => Response.json()).then((data) => {
        whichCurrency = document.getElementById("currencies").value;
        dollars = document.getElementById("amount").value;
        dollarTo = data[whichCurrency].rate;
        document.getElementById("result").innerHTML = dollarTo * dollars;
        console.log(dollarTo);
    })
}