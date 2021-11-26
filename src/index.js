import './stylesheet.css'
import drawHomePage from './home_page'
import drawMenuPage from './menu_page'
import drawContactPage from './contact_page'

class Page {
    constructor(name, drawMethod) {
        this.name = name
        this.drawMethod = drawMethod
    }

    getName() {
        return this.name
    }

    draw() {
        this.drawMethod()
        return this.getName()
    }
}

let pages = [
    new Page('Home', drawHomePage),
    new Page('Menu', drawMenuPage),
    new Page('Contact', drawContactPage),
]
let currentPage = pages[0]

const drawNavBar = () => {
    document.getElementById('navbar').innerHTML = ''
    for (let i = 0; i < pages.length; i++) {
        let div = document.createElement('div')
        div.classList.add('navbar-item')
        if (pages[i] === currentPage) div.classList.add('navbar-item-selected')
        div.dataset.id = i.toString()
        div.innerText = pages[i].getName()
        div.addEventListener('click', (event) => {
            currentPage = pages[event.target.dataset.id]
            drawNavBar()
            currentPage.draw()
        })
        document.getElementById('navbar').append(div)
    }
}
//----------- Initialize ----------------
document.addEventListener("DOMContentLoaded", function () {
    drawNavBar()
    currentPage.draw()
});