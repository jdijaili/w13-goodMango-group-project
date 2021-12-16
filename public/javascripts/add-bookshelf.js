window.addEventListener('DOMContentLoaded', e => {
    const addBookshelfBtn = document.getElementById("add-button");
    addBookshelfBtn.addEventListener("click", (e) => {

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
    submitBtn.addEventListener('click', async (e) => {
        e.preventDefault();

        const val = document.getElementById('add-bookshelf').value;

        const res = await fetch('/api/bookshelves', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: val })
        })

        const data = await res.json();

        if (data.message === "Create Successful") {
            const bookshelf = document.createElement("div");
            const li = document.createElement("li");
            const ulParent = document.getElementById("bookshelves-container");

            li.innerText = val;

            bookshelf.appendChild(li);
            ulParent.appendChild(bookshelf);

        }

    })
})
