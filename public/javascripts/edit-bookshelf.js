window.addEventListener('DOMContentLoaded', e => {
    const editBtn = document.querySelectorAll('.edit-btn');

    // for all edit bookshelf buttons
    for (let i = 0; i < editBtn.length; i++) {
        const btn = editBtn[i];
        btn.setAttribute("class", "editBookshelf");
        btn.addEventListener('click', async (e) => {
            e.preventDefault();

            const bookshelfId = e.target.name;

            const input = document.getElementById(`input-${bookshelfId}`);
            input.value = document.getElementById(`bookshelfName-${bookshelfId}`).innerText;
            input.setAttribute("class", "input-field");
            input.style.display = "block";

            const submitBtn = document.getElementById(`submit-${bookshelfId}`);

            submitBtn.style.display = "block";

            const deleteBtn = document.getElementById(`delete-${bookshelfId}`);

            btn.style.display = "none";
            deleteBtn.style.display = "none";

        })
    }

    // for all submit edit bookshelf buttons
    const submits = document.querySelectorAll('.submit-btn');
    for (let i = 0; i < submits.length; i++) {
        const btn = submits[i];
        btn.setAttribute("class", "submitEditBookshelf");


        btn.addEventListener('click', async (e) => {
            e.preventDefault();

            const bookshelfId = e.target.name;
            const val = document.getElementById(`input-${bookshelfId}`).value;
            const input = document.getElementById(`input-${bookshelfId}`);

            if (val !== "") { // only update bookshelf if name is not empty
                const res = await fetch(`/api/bookshelves/${bookshelfId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: val })
                })

                const data = await res.json();
                if (data.message === "Edit Successful") {
                    const bookshelf = document.getElementById(`bookshelfName-${bookshelfId}`);
                    bookshelf.innerText = val;

                    const inputEle = document.getElementById(`input-${bookshelfId}`);
                    inputEle.setAttribute("class", 'input-field');
                    inputEle.style.display = "none";

                    const submitBtnEle = document.getElementById(`submit-${bookshelfId}`);
                    submitBtnEle.style.display = "none";

                    const editBtnEle = document.getElementById(`edit-${bookshelfId}`);
                    editBtnEle.style.display = "inline";

                    const deleteBtnEle = document.getElementById(`delete-${bookshelfId}`);
                    deleteBtnEle.style.display = "inline";
                }
            }

        })
    }
})
