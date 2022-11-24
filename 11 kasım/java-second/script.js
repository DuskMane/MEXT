function findSquare(num)
{
    return num **2;
}

function rectangleArea(edge1, edge2){
    return 2*(Number(edge1)+Number(edge2));
}

console.log(findSquare(findSquare(10)));

var selector = document.querySelectorAll(".icerik");

selector.forEach(e => {
    e.style.color="blue";
});

var firstEdge = document.getElementById("firstEdge").value;
var secondEdge = document.getElementById("secondEdge").value;
document.getElementById("result0").innerHTML = rectangleArea(firstEdge, secondEdge);
function rectangleClick(){
    let firstEdge = document.getElementById("firstEdge").value;
    let secondEdge = document.getElementById("secondEdge").value;
    document.getElementById("result0").innerHTML = rectangleArea(firstEdge, secondEdge);
}


let dollarInput = document.getElementById("dollarInput").value;

function calculateTl(){
    let dollarInput = document.getElementById("dollarInput").value;
    document.getElementById("result").innerHTML=dollarInput*18.75;
}

var todoList= [
    {
        title:"work",
        content:"Study JS",
        isDone:"checked"
    },
    {
        title:"fun",
        content:"Watch Star Wars",
        isDone:"checked"
    },
]

var todo = document.getElementById("todo");

function showList(){
    todo.innerHTML = "";
    todoList.forEach((activity) => {
        todo.innerHTML += `<li><input type="checkbox" ${activity.isDone}>${activity.title} => ${activity.content}</input></li>`
    })
}
showList();

function addTodo(){
    var addNewItem = new Object;
    addNewItem.title = "new";
    addNewItem.content = document.getElementById("newTodo").value;
    addNewItem.isDone= "";
    todoList.push(addNewItem);
    showList();
}