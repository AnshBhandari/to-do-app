const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


// addTask() will add tasks in the list
function addTask() {
    if (inputBox.value === '') {
        // alert("You must write something!");
        createToast("You must write something!");
    }    
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}


// function will create a toast for clicking add button without writting any text in input field 
function createToast(message) {
    
    let toast = document.createElement('div');
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.left = '20px';
    toast.style.padding = '10px';
    toast.style.backgroundColor = 'red';
    toast.style.color = 'white';
    document.body.appendChild(toast);
    setTimeout(function() {
        toast.remove();
    }, 3000);
}

// on pressing enter addTask() will execute
inputBox.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// toggles checkbox, removes tasks from list
listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


// save data in the browser
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);    
}

// get saved data from the browser
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();