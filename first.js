const inputBox = document.querySelector("#input-box1");
// Assuming you have a button with id="btn"
const btns = document.querySelectorAll("button");
const listContainer = document.querySelector(".list-container");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("Button was clicked");

        if(inputBox.value === '') {
            alert("Please enter a task into the list!");
        } else {
            addTask(inputBox.value)
            inputBox.value = ''; // Clear input after adding task
        }
    });

    /*
    Here are using forEach loop to for btn to add eventListener on the button
    After that we are checking where the input feild is empty oor with some contained

    if it's empty we are going to show alert with msg

    or if there is contained inside input it will add into li tag

    using fuction name addtask()


    */
});

function addTask(task) {
    let li = document.createElement("li");
    li.innerText = task;
    listContainer.appendChild(li);

    // Here we are define addTask fucntion were we will create one li tag 
    // whether we are stroinmg the input value 

    // after that we appendChild into the last 

    // so task will add into end of the prevois task
};

