let myDiv = document.querySelector('body')

myDiv.addEventListener('mouseover', () => {
  myDiv.style.backgroundImage = `url('img/777.jpg')`
})
myDiv.addEventListener('mouseleave', () => {
  myDiv.style.backgroundImage = `url('img/bg.jpg')`
})
