let currencyValues = new Array;
let currencyNames = new Array;
let result = new Array;

let whichCurrency;
let dollars;
let dollarTo;

let allData = new Object;
bringData();
function bringData(){

    fetch(`http://www.floatrates.com/daily/usd.json`).then((Response) => Response.json()).then((data) => {
        allData = data;
        currencyValues = (Object.keys(data));
        currencyValues.forEach((e) => {
            currencyNames.push(data[e].name);
        })
        /* eur Euro */
        $.each(currencyNames, function(index){
            result.push('<option value="' +currencyValues[index]+'">'+currencyNames[index]+'</option>');
        });
        $("#currencies").html(result.join(""));
    })
}
/*
function calculate(){

    fetch(`http://www.floatrates.com/daily/usd.json`).then((Response) => Response.json()).then((data) => {
        whichCurrency = document.getElementById("currencies").value;
        dollars = document.getElementById("amount").value;

        dollarTo = data[whichCurrency].rate;
        document.getElementById("result").innerHTML = dollarTo * dollars;
        console.log(dollarTo);
    })
}*/

function calculate(){
    whichCurrency = document.getElementById("currencies").value;
    dollars = document.getElementById("amount").value;

    dollarTo = allData[whichCurrency].rate;
    document.getElementById("result").innerHTML = dollarTo * dollars;
    console.log(dollarTo);
}