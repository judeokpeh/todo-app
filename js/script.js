
let inputBox = document.querySelector('input');

let ulContaioner = document.getElementById('list-container')


function addTask(){
   if(inputBox.value === ''){
    return;
   } else{
    let listItem = document.createElement('li');
    let createdAt = new Date().toLocaleString();
    console.log(createdAt)
    listItem.innerHTML = inputBox.value + `<p>Created at: ${createdAt}</p>`;
    let trash = document.createElement('img');
    trash.src = 'image/trash.svg';

    listItem.appendChild(trash)
    ulContaioner.appendChild(listItem)
   }

   inputBox.value = '';
   saveData()
}

ulContaioner.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData()
    } else if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        saveData()
    }
});

function saveData(){
    localStorage.setItem('task', ulContaioner.innerHTML)
}

function showData(){
    ulContaioner.innerHTML = localStorage.getItem('task')
}

showData();

let toggleBtn = document.querySelector('.toggle-icon');
toggleBtn.addEventListener('click', ()=>{
    document.body.classList.toggle("dark-theme");
    // if(document.body.classList.contains('dark-theme')){
    //     toggleBtn.src = 'image/sun.png'
    // } else{
    //     toggleBtn.src = "image/moon.png"
    // }
    let darkThemeIcon  = document.body.classList.contains('dark-theme')
    darkThemeIcon ? toggleBtn.src = 'image/sun.png' : toggleBtn.src = "image/moon.png"
})