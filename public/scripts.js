
let newshorterLinks = []
let oldlinks = []


/* Show menu mobile */
const iconmenu = document.querySelector('#icon-menu')
const menumobile = document.querySelector('#menu-mobile')

iconmenu.addEventListener('click', () => {
    menumobile.classList.toggle('hidden')
})


const buttoninput = document.querySelector('#btn-shorten')
const inputBox = document.querySelector('#input-link')
const msgerror = document.querySelector('#msg-input')
const loadingElement = document.querySelector('#loadingElement')
const Divlinks = document.querySelector('#list-links')

buttoninput.addEventListener('click', () => {

 
   VerifyInputEmpty()
   document.querySelector('#input-link').value = ""
   
})



//Functions
function VerifyInputEmpty() {
    if (inputBox.value == "") {
        console.log('vacio')
        AddingAndRemovingClass()

        setTimeout(function() {
            AddingAndRemovingClass()
            
       }, 2000)
       // Getting Link
    } else {
        shorterUrl(inputBox.value)
    }
}
    

function makingNewDivElement() {

    loadingElement.style.display = "none"
    const element = document.createElement('div')

    element.innerHTML = ` 
    <div class="bg-white w-4/5 justify-between mt-3 items-center h-16 mdmax:h-40 mdmax:justify-center m-auto rounded-md flex flex-wrap">
    <p class="ml-6 lgmax:m-auto">${oldlinks[oldlinks.length - 1]}</p>

    <div class="mr-6 smmax:flex smmax:flex-col smmax:mx-auto smmax:w-93%">
    <a class="text-cyan" href="${newshorterLinks[newshorterLinks.length - 1]}">${newshorterLinks[newshorterLinks.length - 1]}</a>
    <button name="copybtn" class="buttons px-10 py-2 rounded-md smmax:mx-auto smmax:w-93%">Copy</button>
    </div>
    </div>`

    Divlinks.appendChild(element)

    savelinks() 
}

function AddingAndRemovingClass() {
    inputBox.classList.toggle('colorError')
    msgerror.classList.toggle('hidden')
}

// FETCH

async function shorterUrl(inputlink) {
    loadingElement.style.display = "flex"
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputlink}`)
    const data = await response.json()
    
    let shortLinkValue = data.result.short_link2;
   

    oldlinks.push(inputlink)
    newshorterLinks.push(shortLinkValue)
  
    makingNewDivElement()

    console.log(data)
    console.log(oldlinks)
    console.log(newshorterLinks)
}


//Button Copy the Link to the clipBoard
    Divlinks.addEventListener('click', (e) => {
        console.log(e.target)
        copytheLink(e.target)
    })

    function copytheLink(e) {
        if (e.name == "copybtn") {
            let text = e.previousElementSibling.innerText
            const element = document.createElement('textarea')
            element.value = text
            document.body.appendChild(element)
            element.select()
            document.execCommand('copy')
            document.body.removeChild(element)
            e.innerHTML = 'Copied'
            e.classList.remove('buttons')
            e.classList.add('btndarkviolet')        
        }
    }


// localStorage
function savelinks() {
    let list1 = JSON.stringify(newshorterLinks)
    let list2 = JSON.stringify(oldlinks)
    localStorage.setItem('newLinks', list1)
    localStorage.setItem('oldLinks', list2)
}


//getting data from localstorage
function getdata() {
    let list1 = localStorage.getItem('newLinks')
    let list2= localStorage.getItem('oldLinks')

    newshorterLinks = JSON.parse(list1)
    oldlinks = JSON.parse(list2)

    if (!newshorterLinks) {
        newshorterLinks = []
    }

    if (!oldlinks) {
        oldlinks = []
    }

    makingDivsFromLocalStorage()
}

// making divs on the old information from localstorage
getdata()

function makingDivsFromLocalStorage() {
    const element = document.createElement('div')

    for (let i = 0; i < newshorterLinks.length ; i++ ) {

        element.innerHTML += ` 
        <div class="bg-white w-4/5 justify-between mt-3 items-center h-16 mdmax:h-40 mdmax:justify-center m-auto rounded-md flex flex-wrap">
            <p class="ml-6 lgmax:m-auto">${oldlinks[i]}</p>

            <div class="mr-6 smmax:flex smmax:flex-col smmax:mx-auto smmax:w-93%">
            <a class="text-cyan" href="${newshorterLinks[i]}">${newshorterLinks[i]}</a>
            <button name="copybtn" class="buttons px-10 py-2 rounded-md smmax:mx-auto smmax:w-93%">Copy</button>
            </div>
        </div>`

    }

    Divlinks.appendChild(element)

}