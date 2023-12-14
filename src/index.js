
const tasks = document.getElementById('tasks')
const windowPaid = document.getElementById('windowPaid')


tasks.addEventListener('click',(e)=>{
    if (e.target.closest('[data-task="greenTask"]')) {
        windowPaid.classList.add('window--active')
    }
})


// cerrar Window Paid

windowPaid.addEventListener('click',(e)=>{
    if (e.target.closest('#cancel')) {
        windowPaid.classList.remove('window--active')
    }
})

