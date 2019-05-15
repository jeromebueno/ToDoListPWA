import { openDB } from 'idb';

async function saveLocal(task){
  const database = await openDB('app-store', 1, {
    upgrade(db) {
      db.createObjectStore('tasks');
    }
  });
  var taskElement = await database.getAll('tasks')
  await database.put('tasks',task,taskElement.length);
}

export {saveLocal}