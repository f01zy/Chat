const socket = io()
const messages = document.querySelector(".messages")
const form = document.querySelector(".form")
const input = document.querySelector(".message_input")
const username = document.querySelector(".name")

const user = prompt("Ваше имя:")
username.innerHTML = `${user}`

form.addEventListener("submit" , (e) => {
    e.preventDefault()

    if (input.value) {
        socket.emit("message" , {
            message: input.value,
            name: user,
        })
        input.value = ''
    }
})

socket.on("message" , (data) => {
    const item = document.createElement("li")
    item.innerHTML = `<span>${data.name}</span>: ${data.message}`
    messages.appendChild(item)
    window.scrollTo(0, document.body.scrollHeight)
})