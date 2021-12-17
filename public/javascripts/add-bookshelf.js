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
            bookshelf.setAttribute("class", "bookshelfBox");

            const li = document.createElement("li");
            li.setAttribute("id", `bookshelfName-${data.bookshelfId}`);
            li.style.listStyle = "none";

            const ulParent = document.getElementById("bookshelves-container");

            li.innerText = val;

            bookshelf.appendChild(li);
            ulParent.prepend(bookshelf);

            const input = document.createElement('input');
            input.setAttribute("id", `input-${data.bookshelfId}`);
            input.style.display = "none";

            const submitBtn = document.createElement('button');
            submitBtn.setAttribute("id", `submit-${data.bookshelfId}`);
            submitBtn.setAttribute("name", `${data.bookshelfId}`);
            submitBtn.setAttribute("class", "submit-btn");
            submitBtn.style.display = "none";
            submitBtn.innerText = "Submit";

            const editBtn = document.createElement('button');
            editBtn.setAttribute("id", `edit-${data.bookshelfId}`);
            editBtn.setAttribute("name", `${data.bookshelfId}`);
            editBtn.innerText = 'Edit Bookshelf';

            editBtn.addEventListener("click", async (e) => {
                console.log(data);
                const idForSubmit = data.bookshelfId;

                const input = document.getElementById(`input-${data.bookshelfId}`);
                input.style.display = "block";

                const submitBtn = document.getElementById(`submit-${data.bookshelfId}`);
                submitBtn.style.display = "inline";

                submitBtn.addEventListener("click", async (e) => {
                    const val = document.getElementById(`input-${idForSubmit}`).value;

                    const res = await fetch(`/api/bookshelves/${idForSubmit}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ name: val })
                    })

                    const data = await res.json();
                    console.log(data)
                    if (data.message === "Edit Successful") {
                        const bookshelf = document.getElementById(`bookshelfName-${data.bookshelfId}`);
                        console.log(bookshelf);
                        bookshelf.innerText = val;
                    }
                })
            })

            console.log(data);
            // create event listener for dynamically rendered submit button


            bookshelf.appendChild(editBtn);
            bookshelf.appendChild(input);
            bookshelf.appendChild(submitBtn);
        }

    })
})
