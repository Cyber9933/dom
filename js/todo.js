const formDOM=document.forms[0];
const inputDOM=document.getElementById('task');
const listDOM=document.querySelector('.list');

formDOM.addEventListener('submit', (event)=>{
    event.preventDefault();
    listDOM.innerHTML+=`
    <div class="item">
            <div class="header">
                <div class="index">$(++count}</div>
                <button class="btn" type="button">Delete</button>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quas.</p>
            </div>
        </div>`
    const deleteBtnListDOM=document.querySelectorAll('.btn');
    console.log(deleteBtnListDOM);

    for (const btnDOM of deleteBntListDOM) {
        btnDOM.addEventListener('click', (event)=>{
            btnDOM.parenNode.parenNode.remove();
        });
    }
    
});