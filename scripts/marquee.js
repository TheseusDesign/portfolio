function check(input) {
    console.log(input)
}

function target(input) {
    output = document.querySelector(input)
    return output
}

function targets(input) {
    output = document.querySelectorAll(input)
    return output
}

let companies = [
    `Black Snap`,
    `Georgia Tech`,
    `Soapbox Star`,
    `AWA`,
    `Stetson`,
    `MusicMob`,
    `Stetson`,
    `iFOLIO`,
    `UNLV`,
]

let spacing = 275;

class List {
    constructor(label, position, targeting) {
        this.label = label
        this.position = position
        this.target = target(targeting)
        this.element = document.createElement("li")
    }

    create() {
        let content = document.createTextNode(this.label)
        this.element.appendChild(content)
        this.target.appendChild(this.element)
        this.element.setAttribute(`style`, `left: ${this.position}px`)
    }
    move(rate) {
        this.position += rate;
        this.element.setAttribute(`style`, `left: ${this.position}px`)
        if (this.position <= this.element.offsetWidth * -3) {
            this.element.setAttribute(`style`, `transition: 0s all; `)
            this.position += spacing * companies.length
            this.element.setAttribute(`style`, `transition: 0s all; left: ${this.position}px`)
        }
    }
}


const myList = []

function create(){
    companies.forEach((elem, index) => {
        myList[index] = new List(elem, index * spacing, ".marquee")
        myList[index].create()
    })
    
    setInterval(() => {
        companies.forEach((elem, index) => {
            myList[index].move(-100)
        })
    }, 1000);
}

function populate() {
    marqueespace = target(`#marquee`)
    check(marqueespace)
}



// Below is script manager, please be careful editing
function scriptmanager() {
    check(companies)
    create()
    populate()
}

scriptmanager()