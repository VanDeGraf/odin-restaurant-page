class MenuItem {
    constructor(title, desc, price) {
        this.title = title
        this.desc = desc
        this.price = price
    }

    draw() {
        let container = document.createElement('div')
        container.classList.add('container')

        let header = document.createElement('h3')
        header.align = 'center'
        header.innerText = this.title
        container.append(header)

        let description = document.createElement('p')
        description.innerText = this.desc
        container.append(description)

        let price = document.createElement('p')
        let priceHeader = document.createElement('b')
        priceHeader.innerText = 'Price: '
        price.append(priceHeader)
        let priceContent = document.createElement('span')
        priceContent.innerText = this.price
        price.append(priceContent)
        container.append(price)

        return container
    }
}

let menuItems = [
    new MenuItem('Fibonacci salad',
        'Salad made from yesterday\'s and the day before yesterday\'s salad',
        'the price of yesterday\'s salad + the price of the day before yesterday\'s salad'),
    new MenuItem('Fibonacci salad',
        'Salad made from yesterday\'s and the day before yesterday\'s salad',
        'the price of yesterday\'s salad + the price of the day before yesterday\'s salad'),
    new MenuItem('Fibonacci salad',
        'Salad made from yesterday\'s and the day before yesterday\'s salad',
        'the price of yesterday\'s salad + the price of the day before yesterday\'s salad'),
    new MenuItem('Fibonacci salad',
        'Salad made from yesterday\'s and the day before yesterday\'s salad',
        'the price of yesterday\'s salad + the price of the day before yesterday\'s salad'),
    new MenuItem('Fibonacci salad',
        'Salad made from yesterday\'s and the day before yesterday\'s salad',
        'the price of yesterday\'s salad + the price of the day before yesterday\'s salad'),

]

const drawMenuPage = () => {
    let container = document.getElementById('content')
    container.innerHTML = ''
    let header = document.createElement('h2')
    header.align = 'center'
    header.innerText = 'Menu'
    container.append(header)
    for (let i = 0; i < menuItems.length; i++) {
        container.append(menuItems[i].draw())
    }
}

export {drawMenuPage as default}