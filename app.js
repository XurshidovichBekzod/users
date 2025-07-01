const API_URL = "https://jsonplaceholder.typicode.com"
const tableBadyEl = document.querySelector(".table__body")
const tableTrEl = document.querySelector(".table__tr")

async function fetchData(endpoint, calback) {
    try {
        const res = await fetch(`${API_URL}${endpoint}`)
        const data = await res.json()
        calback(data)
    } catch (err) {
        console.log(err);
    }
}

window.onload = () => {
    fetchData("/users", createUser)
}

function createUser(data) {
    const fr = document.createDocumentFragment()
    data.forEach((user) => {
        
        const tr = document.createElement("tr")
        tr.classList.add("tableTrEl")
        tr.innerHTML = `
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.address.city}</td>
        <td>${user.phone}</td>
        `
        fr.appendChild(tr)
    })
    tableBadyEl.appendChild(fr)
}