window.addEventListener('DOMContentLoaded', e => {
    const addBookshelfBtn = document.getElementById("add-button");
    addBookshelfBtn.addEventListener("click", (e) => {

        const addButton = document.getElementById("add-button")
        addButton.style.display = "none"

        // const addShelfText = document.createElement('p')
        // addShelfText.setAttribute("id", "addShelf-text");
        // const header = document.getElementById("header")
        // header.appendChild(addShelfText)
        // addShelfText.innerText = 'Add a shelf:'

        const form = document.getElementById("form")
        form.style.display = "block"

        // const cancelBookshelfBtn = document.createElement("button");
        // cancelBookshelfBtn.setAttribute("id", "cancelAddBookshelf");
        // cancelBookshelfBtn.innerText = "Cancel";

        // header.appendChild(cancelBookshelfBtn);

        const addShelfText = document.getElementById("addShelf-text");
        addShelfText.style.display = "block";
        const cancelBookshelfBtn = document.getElementById("cancelAddBookshelf");
        cancelBookshelfBtn.style.display = "inline-block";

        // cancel add bookshelf button
        cancelBookshelfBtn.addEventListener("click", async (e) => {
            form.style.display = "none";
            addShelfText.style.display = "none";
            cancelBookshelfBtn.style.display = "none";
            addButton.style.display = "block";

            // clear user input after submitting new bookshelf
            form.reset();
        })

    })

    const submitBtn = document.getElementById("submit-button");
    submitBtn.addEventListener('click', async (e) => {
        e.preventDefault();

        // hide add bookshelf elements: add a shelf text and cancel buttons
        const cancelBookshelfBtn = document.getElementById("cancelAddBookshelf");
        cancelBookshelfBtn.style.display = "none";

        const addShelfText = document.getElementById("addShelf-text");
        addShelfText.style.display = "none";

        let val = document.getElementById('add-bookshelf').value;

        const res = await fetch('/api/bookshelves', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: val })
        })

        const data = await res.json();

        if (data.message === "Create Successful") {
            // create a new container div
            const bookshelfContainerDiv = document.createElement("div");
            bookshelfContainerDiv.setAttribute("id", `bookshelf-container-${data.bookshelfId}`)

            // create a new h2 for the bookshelf title
            const bookshelfTitleH2 = document.createElement("h2");
            bookshelfTitleH2.setAttribute("id", `bookshelfName-${data.bookshelfId}`);
            bookshelfTitleH2.innerText = val;

            // create div to hold the edit bookshelf, delete bookshelf, edit input box, and submit edit buttons
            const bookshelf = document.createElement("div");
            bookshelf.setAttribute("class", "bookshelfBox");
            bookshelf.setAttribute("id", `bookshelfBox-${data.bookshelfId}`);

            // get the parent element to append newly create eles
            const ulParent = document.getElementById("manga-list");

            // append the eles to dynamically render on the browser
            bookshelfTitleH2.appendChild(bookshelf);
            bookshelfContainerDiv.appendChild(bookshelfTitleH2);
            bookshelfContainerDiv.appendChild(bookshelf);
            ulParent.prepend(bookshelfContainerDiv);

            // create edit input and hide it at the time of creation
            const input = document.createElement('input');
            input.setAttribute("id", `input-${data.bookshelfId}`);
            input.setAttribute("class", "input-field");
            input.style.display = "none";

            // create submit button and hide it at the time of creation
            const submitBtn = document.createElement('button');
            submitBtn.setAttribute("id", `submit-${data.bookshelfId}`);
            submitBtn.setAttribute("name", `${data.bookshelfId}`);
            submitBtn.setAttribute("class", "submit-btn");
            submitBtn.style.display = "none";
            submitBtn.innerText = "Submit";

            // create edit button and hide it at the time of creation
            const editBtn = document.createElement('button');
            editBtn.setAttribute("id", `edit-${data.bookshelfId}`);
            editBtn.setAttribute("class", "edit-btn");
            editBtn.setAttribute("name", `${data.bookshelfId}`);
            editBtn.innerText = 'Edit';

            // create delete button and hide it at the time of creation
            const delteBtn = document.createElement('button');
            delteBtn.setAttribute("id", `delete-${data.bookshelfId}`);
            delteBtn.setAttribute("class", "delete-btn");
            delteBtn.setAttribute("name", `${data.bookshelfId}`);
            delteBtn.setAttribute("class", "delete-btn");
            delteBtn.innerText = "Delete";

            const bookshelfId = data.bookshelfId;

            // add event listener to the newly created bookshelf so that it can have the dynamic edit functionality as well
            editBtn.addEventListener("click", async (e) => {
                input.value = bookshelfTitleH2.innerText;
                input.setAttribute("class", "input-field");
                input.style.display = "block";

                submitBtn.style.display = "inline";

                delteBtn.style.display = "none";

                editBtn.style.display = "none";

                // add event listener to the newly created bookshelf so that it can have the dynamic submit functionality as well
                submitBtn.addEventListener("click", async (e) => {
                    const val = document.getElementById(`input-${bookshelfId}`).value;

                    const res = await fetch(`/api/bookshelves/${bookshelfId}`, {
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

                        console.log(data.bookshelfId);
                        console.log(input)
                        input.style.display = "none";
                        submitBtn.style.display = "none";

                        editBtn.style.display = "inline"
                        delteBtn.style.display = "inline";

                        // clear user input after submitting new bookshelf
                        const form = document.getElementById("form");
                        form.reset();
                    }
                });

            });

            // append the newly created eles to the new bookshelf
            bookshelf.appendChild(editBtn);
            bookshelf.appendChild(input);
            bookshelf.appendChild(submitBtn);
            bookshelf.appendChild(delteBtn);

            // add event listener to the newly created bookshelf so that it can have the dynamic delete functionality as well
            delteBtn.addEventListener('click', async (e) => {
                console.log("-------------", bookshelfId)
                const res = await fetch(`/api/bookshelves/${bookshelfId}`, {
                    method: "DELETE"
                });

                const data = await res.json();

                if (data.message === "Delete Successful") {
                    console.log(bookshelfId);
                    const bookshelf = document.getElementById(`bookshelfBox-${bookshelfId}`);

                    bookshelf.remove();
                    bookshelfContainerDiv.remove();
                }
            })

            // hide these eles so that they don't automatically appear when a new bookshelf is created
            const addShelfText = document.getElementById('addShelf-text');
            const formEle = document.getElementById("form");
            formEle.style.display = "none"
            addShelfText.style.display = "none";
            submitBtn.style.display = "none";
            addBookshelfBtn.style.display = "block";

            // clear user input after submitting new bookshelf
            const form = document.getElementById("form");
            form.reset();
        }

    })
})
