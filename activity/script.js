let menu = document.getElementById('bar')

let content = document.getElementById('content')

let fade = document.getElementById('logo')

menu.addEventListener('click', function() {
    content.classList.add('display')
})

fade.addEventListener('click', function() {
    content.classList.remove('display')
})