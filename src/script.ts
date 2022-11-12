// import { uuid } from "../node_modules/uuidv4/build/lib/uuidv4";

import { v4 as uuidv4 } from "uuid";

type Task = {
    id: string,
    title: string,
    completed: boolean,
    createdAt: Date,
}

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.getElementById("task_form") as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>("#task_title")
const tasks: Task[] = [];

form?.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input.value == "" || input.value == null) {
        alert("Please enter a task title");
        return;
    }

    const newTask: Task = {
        id: uuidv4(),
        title: input.value,
        completed: false,
        createdAt: new Date(),
    }
    tasks.push(newTask);
    

    addListItem(newTask)
    input.value = "";
});

function addListItem(task: Task) {
    const item = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.addEventListener("change", () => {
        task.completed = checkbox.checked;
        console.log(tasks)
    })
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    label.append(checkbox, task.title);
    item.append(label);
    list?.append(item);
    return true;
}