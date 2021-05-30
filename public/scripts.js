
/* Show menu mobile */
const iconmenu = document.querySelector('#icon-menu')
const menumobile = document.querySelector('#menu-mobile')

iconmenu.addEventListener('click', () => {
    menumobile.classList.toggle('hidden')
})


/* Show error message about input empty */
const buttoninput = document.querySelector('#btn-shorten')
const inputBox = document.querySelector('#input-link')
const msgerror = document.querySelector('#msg-input')
const newlinks = document.querySelector('#list-links')

let links = []


buttoninput.addEventListener('click', () => {
   console.log('boton funcionando')
   VerifyInputEmpty()

})


function VerifyInputEmpty() {
    if (inputBox.value == "") {
        console.log('vacio')
        AddingAndRemovingClass()

        setTimeout(function() {
            AddingAndRemovingClass()
            
       }, 2000)


       // Getting Link
    } else {
        
        console.log(inputBox.value + "< Valor recibido")
        links.push(inputBox.value)
        console.log(links)
    }
}
    

function AddingAndRemovingClass() {
    inputBox.classList.toggle('colorError')
    msgerror.classList.toggle('hidden')
}


// Consuming API ShrtCode
const urlShrtCode = 'https://api.shrtco.de/v2/'

fetch(urlShrtCode)
.then (response => response.json() )
.then(data => {
    console.log(data)
})
.catch (err => console.log(err))

/*Create a short link for a given URL. Requires a `url` parameter. 
 https://api.shrtco.de/v2/shorten?url=    */