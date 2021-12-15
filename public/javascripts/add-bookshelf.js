window.addEventListener('DOMContentLoaded', e => {

    const addBookshelfBtn = document.getElementById("add-button");

    addBookshelfBtn.addEventListener("click", async (e) => {

        const addButton = document.getElementById("add-button")
        addButton.style.display = "none"

        const p = document.createElement('p')
        const header = document.getElementById("header")
        header.appendChild(p)
        p.innerText = 'Add a shelf:'

        const form = document.getElementById("form")
        form.style.display = "block"
    })


    const submitBtn = document.getElementById("submit-button");
    submitBtn.addEventListener('click', async(e) => {
        e.preventDefault();

        const res = await fetch('/bookshelves', {
            method: "POST"
        });

        const data = res.json();

        if (data.message === "Success") {
            const bookshelf = document.getElementById()
        }

    })
})
