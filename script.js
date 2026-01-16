let toDoList=[{
  item: '',
  duedate:''
}
];

Onload() 
function Onload(){
  let toDoElemet = localStorage.getItem('toDoList');
  toDoList= toDoElemet? JSON.parse(toDoElemet):[];
  dispalyTodoList();
}
function addTODO(){
  let inputToDo = document.getElementById('todo-input');
  let inputDate = document.querySelector('.input-date');
  let todoitems = inputToDo.value;
   let todoDates= inputDate.value;
  toDoList.push({item: todoitems , duedate: todoDates});
  inputToDo.value='';
  inputDate.value='';
  localStorage.setItem('toDoList',JSON.stringify(toDoList));
  dispalyTodoList();
  let year = todoitems.slice(0,3);
  console.log(year);
}

function deleteItem(indexTobeDelete){
  toDoList = toDoList.filter((deleteElement,index) => index !== indexTobeDelete);
   localStorage.setItem('toDoList',JSON.stringify(toDoList))
  dispalyTodoList();
}

function doneItem(index) {
  toDoList[index].done = !toDoList[index].done;
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
  dispalyTodoList();
}
function dispalyTodoList()
{
 let displayElement = document.querySelector('.todo-container')
 let innerHTML = '';
 for (let i = 0; i < toDoList.length; i++) {
  let itemDate = toDoList[i].duedate;

    let formattedDate = '';
    if (itemDate) {
      let dateParts = itemDate.split("-");  
      formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`; 

    } else {
      formattedDate = '';
    }

  let decorationClass = toDoList[i].done ? 'todo-list-click' : '';
  let btnClass = toDoList[i].done ? ' Undone' : ' Done';


  innerHTML +=   ` <div class="to-list">
              <h3 class="todo-list ${decorationClass}">${toDoList[i].item}</h3>
              <h3 class="todo-date ${decorationClass}">${formattedDate}</h3>
              <button class="btn" id="belete-button" onclick="deleteItem(${i})">Delete</button> 
              <button class="btn " id="done-button" onclick="doneItem(${i})">${btnClass} </button> 
              </div>
              <hr>`;
 }
  displayElement.innerHTML = innerHTML;
 }