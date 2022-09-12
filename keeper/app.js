const form = document.querySelector("form")
const textArea = document.querySelector("#text-area")
const noteArea = document.querySelector("#note-area")

let note = []

if (localStorage.getItem("notes") == null) {
    console.log("Does not exist");

    const data = JSON.stringify([])
    localStorage.setItem("notes", data)
    console.log("Database created 🛢️");
}
else {
    // Get what is in local storage
    const rawLocalstorage = localStorage.getItem("notes")
    // convert local storage to string
    const data = JSON.parse(rawLocalstorage);
    // Update to sync local storage and notes array
    note = data
    for (let index = 0; index < data.length; index++) {
        const p = document.createElement("p")
        p.innerText = data[index]
        noteArea.appendChild(p)
    }
}



form.addEventListener("submit", function (e) {
    e.preventDefault()

    const p = document.createElement("p")
    p.innerText = textArea.value
    noteArea.appendChild(p)

    // Put inside the array
    note.push(textArea.value)

    // Add to localstorage
    const data = JSON.stringify(note)
    localStorage.setItem("notes", data)

    // Clear the text area
    textArea.value = ""
})
