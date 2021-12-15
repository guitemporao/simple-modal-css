const btn = document.getElementById('myBtn')
const modal = document.getElementById('myModal')

const span = document.getElementsByClassName('close')[0]
console.log(span)

// add event listeners

btn.onclick = () =>{
    modal.style.display = 'block'
}

span.onclick = (e) =>{
    modal.style.display = "none"
}

//close if click any where wihtout close button
window.onclick = (e) =>{
    if(e.target == modal){
        modal.style.display = "none"
    }
}

