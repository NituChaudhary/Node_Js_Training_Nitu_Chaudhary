//import { LocalStorage } from "node-localstorage";
//if (typeof localStorage === "undefined" || localStorage === null){
//localStorage = new localStorage('./scratch');
//}
//localStorage.setItem('itemname','itemvalue');
//localStorage.getItem('key','itemname');
//localStorage.removeItem('item');

import { LocalStorage } from 'node-localstorage';
var localStorage = new LocalStorage('./scratch');
var command = process.argv[2];
var argument = process.argv[3];

var todoListData = [];

function getToDoData(){
    return localStorage.getItem('tasks');
}                                       
function help(){
    console.log('Usage: todo [add|delete|help|list] [task]')

}
function listToDo(){
    todoListData = localStorage.getItem('tasks');
    if(todoListData.length > 0){
        todoListData.array.forEach(task => {
            console.log(task);
        })
    }else{
        console.log('No task added')
    }
}
function addToDo(task)
{
todoListData = getToDoData();

todoListData.push(task);
localStorage.setItem('tasks', todoListData);

listToDo();
}

function deleteToDo(id){
    localStorage.removeItem(id);
}
switch (command){
    case 'help':
        help();
        break;
    case 'add':
        addToDo(argument);
        break;
    case 'delete':
        deleteToDo(id);
        break;
    case 'list':
        listToDo();
        break;
    default:
            break;
}