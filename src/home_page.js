import image from './home-numbers.jpg'

const drawHomePage = () => {
    document.getElementById('content').innerHTML = `
    <h3 align="center">Mathematical Restaurant</h3>
    <div id="home-image">
        <img src="${image}" alt="numbers"/>
    </div>
    <div class="container">
        The math restaurant serves unusual dishes and drinks, their recipe, method of preparation or theme is based on
        certain patterns from the exact sciences.
    </div>
    <div class="container">
        <b>Restaurant opening hours</b><br>
        From the big bang to the thermal death of the universe.<br>
        <small>* Sunday is a day off</small>
    </div>
    <div class="container">
        <b>Location</b><br>
        Objective reality. Perhaps you are already at the restaurant.
    </div>
    `
}

export {drawHomePage as default}