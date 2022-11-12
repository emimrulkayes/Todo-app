// import { uuid } from "../node_modules/uuidv4/build/lib/uuidv4";
import { v4 as uuidv4 } from 'uuid';
const list = document.querySelector("#list");
const form = document.getElementById("task_form");
const input = document.querySelector("task_title");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value == "" || input.value == null) {
        alert("Please enter a task title");
        return;
    }
    const task = {
        id: uuidv4(),
        title: input.value,
        completed: false,
        createdAt: new Date(),
    };
});
