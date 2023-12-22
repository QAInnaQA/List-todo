let text = "Things to do today:";
let i = 0;
let speed = 80;
function type() {
    if (i < text.length) {
        document.querySelector("h1").textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}
type();


const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const toDoContainer = document.querySelector('.toDoContainer');

btn.addEventListener('click', () =>{
    const item = document.createElement('li');
    item.innerText = inputField.value;
    if (inputField.value.length === 0) {
        return false;
        }        
    item.classList.add('toDoAdded');
    toDoContainer.appendChild(item);
    inputField.value = '';

    item.addEventListener('click', () =>{
        item.classList.add('toDoCompleted');
    })

    item.addEventListener('dblclick', () => {
        toDoContainer.removeChild(item);
    })
})

