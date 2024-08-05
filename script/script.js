const btn = document.querySelector('.button')
const input = document.querySelector('#inputs')
const items = document.querySelector('#items')
btn.addEventListener("click",()=>{
    if(input.value == ''){
        input.style.border = "5px solid red"
    }else{
input.style.border = "none"
        const li =
 document.createElement('li')
        li.innerText = input.value
        const x = document.createElement('span')
        x.innerHTML = '\u00d7'
        li.appendChild(x)
        const ul = document.createElement('ul')
        ul.appendChild(li)
        items.appendChild(ul)
        input.value = ''
        Store()
    }
})

items.addEventListener('click',(tag)=>{
    if(tag.target.tagName === 'LI'){
        tag.target.classList.toggle('click')
        Store()
    }else if(tag.target.tagName === 'SPAN'){
        tag.target.parentElement.remove()
        Store()
    }
})

function Store(){
    localStorage.setItem("data",items.innerHTML)
}
function display(){
    items.innerHTML = localStorage.getItem("data")
}
display()