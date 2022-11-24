const container = document.querySelector(".container");

let seats = new Array;
seats = document.querySelectorAll(".box");
let selectedSeats = new Array;

function loadSelected(){
    if(localStorage.getItem("selectedItems") !="undefined")
    {
        selectedSeats = JSON.parse(localStorage.getItem("selectedItems"));
        if(selectedSeats!=null && selectedSeats.length>0)
        {
            selectedSeats.forEach((item) =>{
                seats[item].classList.add("reserved");
            } )
        }
    }
}
loadSelected();

container.addEventListener("click", (event) => {
    if(event.target.classList.contains("box") && !event.target.classList.contains("reserved"))
    {
        event.target.classList.toggle("clicked");
        saveSelected();
    }
})

function saveSelected(){
    selectedSeats = [];
    seats.forEach((seat, index) => {
        if(seat.classList.contains("clicked") || seat.classList.contains("reserved"))
        {
            selectedSeats.push(index);
        }
    })
    localStorage.setItem("selectedItems", JSON.stringify(selectedSeats));
}

// -kordinatları verilen bir yerin hava durumu bilgisini anlık olarak çekelim.
// API , fetch