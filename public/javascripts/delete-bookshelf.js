window.addEventListener("DOMContentLoaded", e => {
    const deleteBtns = document.querySelectorAll(".delete-btn");

    for (let i = 0; i < deleteBtns.length; i++) {
        const btn = deleteBtns[i];

        btn.addEventListener('click', async (e) => {
            const bookshelfId = e.target.name;
            console.log(bookshelfId);

            const res = await fetch(`/api/bookshelves/${bookshelfId}`, {
                method: "DELETE"
            });

            const data = await res.json();

            if (data.message === "Delete Successful") {
                const bookshelf = document.getElementById(`bookshelfBox-${bookshelfId}`);
                bookshelf.remove();
            }
        })

    }

})
