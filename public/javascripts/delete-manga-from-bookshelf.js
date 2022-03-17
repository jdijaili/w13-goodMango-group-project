window.addEventListener('DOMContentLoaded', e => {
    const deletebtns = document.querySelectorAll(".manga-delete-btn");

    // for all delete manga from bookshelf buttons
    for (let i = 0; i < deletebtns.length; i++) {
        const btn = deletebtns[i];

        btn.addEventListener('click', async(e) => {
            const bookshelfId = e.target.value;
            const mangaId = e.target.name;

            const res = await fetch(`/api/bookshelves/${bookshelfId}/mangas/${mangaId}`, {
                method: "DELETE"
            });

            const data = await res.json();

            if (data.message === "Delete Successful") {
                const mangaBox = document.getElementById(`bookshelf-${bookshelfId}-manga-box-${mangaId}`);
                mangaBox.remove();

                const mangaContainer = document.getElementById(`manga-container-${bookshelfId}`);
                if (!mangaContainer.hasChildNodes()) {
                    mangaContainer.remove();
                }
            }
        })

    }
})
