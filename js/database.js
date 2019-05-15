function save(task){
    const url = "http://localhost:5000/tasks/";
    fetch(url, {
        headers: {'Content-Type':'application/json'},
        method : "POST",
        body: JSON.stringify({task})
    }).then(
        response => response.text()
    )
}

function remove(task){
    const url = "http://localhost:5000/tasks/"+task;
    fetch(url, {
        method : "DELETE",
    }).then(
        response => response.text()
    )
}

export {save,remove}