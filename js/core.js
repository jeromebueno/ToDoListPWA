import {save,remove} from './database.js'
import {saveLocal} from './local.js'
import {openDB} from 'idb'

function addTask() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("task").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Merci de remplir le champs");
    } else {
      document.getElementById("taskList").appendChild(li);
    
    document.getElementById("task").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (var i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
    var task = {
      description:inputValue,
      synchronised:false,
      deleted:false
      }
    
    saveLocal(task)
  }
}

async function deleteTask(taskElement,task){
    taskElement.remove();

    /*
    const database = await openDB('app-store', 1, {
      upgrade(db) {
        db.createObjectStore('tasks');
      }
    });
    var localTasks = await database.getAll('tasks')
    for (var i = 0; i < localTasks.length; i++) {
      console.log(localTasks[i])
      if(task.task.description == localTasks[i].description && localTask.synchronised){
        localTasks[i].synchronised = true
        localTasks[i].deleted = true
        database.put('tasks',task,index);
        break;
      }
    }*/
}

async function synchronize(){
  console.log('synchronize')
  const database = await openDB('app-store', 1, {
    upgrade(db) {
      db.createObjectStore('tasks');
    }
  });
  var localTasks = await database.getAll('tasks')
  localTasks.forEach(function(task,index) {
    if(!task.synchronised){
      if(task.deleted){
        //task.deleted = true;
      }
      task.synchronised = true
      database.put('tasks',task,index);
      save(task)
    }
  })
}

async function feed(){
  const data = await fetch('http://localhost:5000/tasks/');
  const tasks = await data.json();
  //feed data at application start
}

export {addTask,deleteTask,synchronize,feed}
