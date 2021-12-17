window.addEventListener('DOMContentLoaded', e => {
    const editBtn = document.querySelectorAll('.edit-btn');
    for (let i = 0; i < editBtn.length; i++) {
        const btn = editBtn[i];

        btn.addEventListener('click', async (e) => {
            e.preventDefault();

            const bookshelfId = e.target.name;

            const input = document.getElementById(`input-${bookshelfId}`);
            console.log(input);

            input.style.display = "block";

            const submitBtn = document.getElementById(`submit-${bookshelfId}`);
            console.log(submitBtn)
            submitBtn.style.display = "block";
        })

    }


    const submits = document.querySelectorAll('.submit-btn');
    for (let i = 0; i < submits.length; i++) {
        const btn = submits[i];

        btn.addEventListener('click', async (e) => {
            e.preventDefault();

            const bookshelfId = e.target.name;
            console.log(bookshelfId);
            const val = document.getElementById(`input-${bookshelfId}`).value;

            const res = await fetch(`/api/bookshelves/${bookshelfId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: val })
            })

            const data = await res.json();

            if (data.message === "Edit Successful") {
                const bookshelf = document.getElementById(`bookshelfName-${bookshelfId}`)
                bookshelf.innerText = val
            }
        })
    }
})
