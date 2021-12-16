window.addEventListener('DOMContentLoaded', e => {
    const editBtn = document.querySelectorAll('.edit-btn');
    for(let i = 0; i < editBtn.length; i++) {
        const btn = editBtn[i];
        btn.addEventListener('click', async (e) => {
            const input = document.createElement('input')
            const editBtn = document.createElement('button')

            const 
        })

        .addEventListener('click', async (e) => {
            e.preventDefault()

            const bookshelfId = e.target.id
            const val = document.getElementById('add-bookshelf').value;

            const res = await fetch(`/api/${bookshelfId}`, {
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
