import data from "./data.json";
import mifuncion, {HELLO} from "./modules/modulo.js";
console.log(HELLO);
console.log(mifuncion());
console.log(data.users.filter((user) => user.age > 30));
const taskInput = document.querySelector("#taskInput");
const userlist = document.querySelector("#users");
const taskButton = document.querySelector("#taskButton");
taskButton.addEventListener("click", (e) =>{
console.log(taskInput.value);
data.users.push({
name:taskInput.value,
age:25
});
mostrarusuarios();
taskInput.value = "";
});


function mostrarusuarios(){
    userlist.innerHTML ="";
    data.users.forEach((user) => {
        userlist.insertAdjacentHTML("beforeend", `<li>${user.name}</li>`);
    });
}
const filteredUsers = data.users.filter((user) => user.age > 30);

data.users.forEach((user) => {
console.log(user.name);
userlist.insertAdjacentHTML("beforeend", `<li>${user.name}</li>`);//renderizar esto
});