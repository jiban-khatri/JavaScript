console.log("Project : Task Manager");

const writeTask = document.getElementById("input-task");
const addTaskBtn = document.getElementById("add-task");
const searchTask = document.getElementById("search-task");

const taskLists = document.querySelector(".tasks-list");

// Add tasks
addTaskBtn.addEventListener("click", () => {
    let taskToAdd = writeTask.value;
    
    const li = document.createElement("li");
    li.innerText = taskToAdd;
    taskLists.appendChild(li);

    writeTask.value = "";
});


// Search Values
searchTask.addEventListener("input", (e) => {
    
    const userSearchedValue = (e.target.value).toLowerCase();

    const allTasks = taskLists.children;
    
    [...allTasks].forEach((task) => {
        task.innerText.toLowerCase().includes(userSearchedValue) ? task.style.display = "" : task.style.display = "none";
    });

});


