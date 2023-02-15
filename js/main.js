const username = document.getElementById('usuario')
const password = document.getElementById('contraseña')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        usuario: username.value,
        contraseña: password.value
    }

    console.log(data)
})