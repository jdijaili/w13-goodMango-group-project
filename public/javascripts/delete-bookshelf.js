window.addEventListener("DOMContentLoaded", e => {
    const deleteBtns = document.querySelectorAll(".delete-bookshelf-btn");

    // for all delete bookshelf buttons, add event listener to delete bookshelf
    for (let i = 0; i < deleteBtns.length; i++) {
        const btn = deleteBtns[i];
        btn.setAttribute("class", "deleteBookshelf");

        btn.addEventListener('click', async (e) => {
            const bookshelfId = e.target.name;

            const res = await fetch(`/api/bookshelves/${bookshelfId}`, {
                method: "DELETE"
            });

            const data = await res.json();

            if (data.message === "Delete Successful") {

                const bookshelf = document.getElementById(`bookshelf-container-${bookshelfId}`);
                bookshelf.remove();
            }
        })
    }
})
