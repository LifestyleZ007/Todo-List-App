const form = document.querySelector(".part1");
const msg = document.querySelector('#msg');
const todoDetails = document.querySelector('.todoInput');
const content = document.querySelector('.contents');

window.addEventListener('load',()=>{todoDetails.focus()})

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    todoDetails.focus()
    const details = todoDetails.value
    console.log(details);
    if(!details){
        msg.innerHTML = 'Please enter a Task!';
        msg.classList.add('forMsg');
        setTimeout(()=>{msg.remove()},3000)
        }else{
        
        const todo = document.createElement('div');
        todo.classList.add('backgrd')
        const todoData = document.createElement('div')
        
    
    
        todo.appendChild(todoData);
    
        const todoInput = document.createElement('input');
        todoInput.classList.add('infoInput');
        todoInput.type = 'text';
        todoInput.value = details;
        todoInput.setAttribute('readonly','readonly');
        todoData.appendChild(todoInput);
    
        const choices = document.createElement('div');
    
        const editChoice = document.createElement('button');
        editChoice.classList.add('ed');
        editChoice.innerHTML = 'Edit';
    
        const delChoice = document.createElement('button');
        delChoice.classList.add('ts');
        delChoice.innerHTML = '<i class="fa fa-trash ts"></i>'
    
        choices.appendChild(editChoice);
        choices.appendChild(delChoice);
    
        todo.appendChild(choices);
    
        content.appendChild(todo);

        todoDetails.value = '';
        
        editChoice.addEventListener('click', ()=>{
            if(editChoice.innerHTML.toLowerCase() == 'edit'){
                todoInput.removeAttribute('readonly','readonly');
                todoInput.focus()
                editChoice.innerHTML = 'Save';
            }else{
                todoInput.setAttribute('readonly','readonly');
                editChoice.innerHTML = 'Edit';
            }
        })
    
        delChoice.addEventListener('click',()=>{
            content.removeChild(todo);
        })}

    

})
