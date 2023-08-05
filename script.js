const $ = (selector) => document.getElementById(selector) //Para traer cualquier elemento con su id

const input = $("newItemInput");
const button = $("addButton");
const formList = $("listForm");

let list = [];

const addItem = () => {
    let newItem = input.value.toUpperCase();
    list.push(newItem);
    createList(list);
    formList.reset();
}

input.addEventListener("keydown", (e) => {
    if (e.keyCode === 13 || e.value === "Enter") {
        addItem();
    } 
})

button.addEventListener("click", addItem);

const createList = (list) => {
    $("list").innerHTML = "";
    list.forEach((item, index) => {
        let li = document.createElement("li");
        $("list").appendChild(li);
        let liContent = document.createTextNode(`${item}`);
        li.classList.add("list-item");
        li.appendChild(liContent);
        let editBtn = document.createElement("button");
        editBtn.classList.add("btn");
        editBtn.innerText = "✍";
        li.appendChild(editBtn);
        editBtn.addEventListener("click", () => editItem(index));
        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn");
        deleteBtn.innerText = "❌";
        li.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", () => deleteItem(index));
    });
}

const deleteItem = (i) => {
    list.splice(i, 1);
    createList(list)
}

const editItem = (i) => {
    const newItem = prompt("Escriba su nuevo item").toUpperCase();
    list[i] = newItem;
    createList(list)
}



const changeMode = () => {
    if($("body").getAttribute("data-theme") === "light") {
        $("body").setAttribute("data-theme", "dark");
        $("modeBtn").innerText = "🌞"
    } else {
        $("body").setAttribute("data-theme", "light");
        $("modeBtn").innerText = "🌑"
    }
}

$("modeBtn").addEventListener("click", changeMode);
