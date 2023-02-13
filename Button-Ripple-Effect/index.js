const buttonEl = document.getElementById('button')

buttonEl.addEventListener('mouseover', (event) => {
    // event.pageX/pageY gives position w.r.t body of the page.To get the position w.r.t button we must subtract offset distance
    const x = event.pageX - buttonEl.offsetLeft;
    const y = event.pageY - buttonEl.offsetTop;

    buttonEl.style.setProperty('--xPos', x + 'px')
    buttonEl.style.setProperty('--yPos', y + 'px')
})