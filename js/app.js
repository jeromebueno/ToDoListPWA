import { openDB } from 'idb';
import checkConnectivity from '/js/connection.js';
import init from '/js/init.js'
import {deleteTask,synchronize} from '/js/core.js'

(async function(document) {
  const app = document.querySelector('#app');

  init();
  checkConnectivity(3, 1000);
  
  document.addEventListener('connection-changed', ({ detail }) => {
    let status = localStorage.getItem("connection")
      if(detail.online){
        synchronize();
      }
    localStorage.setItem('connection', detail.online);
  });

  try {
    const data = await fetch('http://localhost:5000/tasks/');
    const tasks = await data.json();

    tasks.forEach(task => {
      injectTask(task)
    });

    if (navigator.onLine) {
      //synchronize idb with json-server
    }
  } 
  catch (error) {
    console.error(error, ':(');
  }
})(document);

function injectTask(task){
  var li = document.createElement("li");
  var t = document.createTextNode(task.task.description);
  li.appendChild(t);
  document.getElementById("taskList").appendChild(li);

  var span = document.createElement("SPAN");
  span.className = "close";
  span.appendChild(document.createTextNode("\u00D7"));
  li.appendChild(span);

  span.addEventListener('click', () => deleteTask(span.parentElement,task.id))
}