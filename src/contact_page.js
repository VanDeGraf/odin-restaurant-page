const drawContactPage = () => {
    let container = document.getElementById('content')
    container.innerHTML = ''

    let header = document.createElement('h2')
    header.align = 'center'
    header.innerText = 'Contact Us'
    container.append(header)

    let contacts = document.createElement('div')
    contacts.classList.add('container')
    contacts.align = 'center'
    contacts.innerHTML = `
        <br>
        <b>Phone</b><br>
        11 digits starting from position 53467 after the decimal point of PI <br><br>

        <b>Email</b><br>
        vandegraf@example.com<br>
    `
    container.append(contacts)
}

export {drawContactPage as default}