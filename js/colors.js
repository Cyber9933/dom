document.querySelector('title').textContent = 'Colors';
const ulDOM=document.querySelector('.colors');

const colors=['red','blue','green','yellow','purple','orange'];

ulDOM.innerHTML='';

for (const color of colors) {
    ulDOM.innerHTML +=`<li style="background-color: ${color}">Spalva: ${color}</li>`;
}
    