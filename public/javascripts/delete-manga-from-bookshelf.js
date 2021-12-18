window.addEventListener('DOMContentLoaded', e => {
    const deletebtns = document.querySelectorAll(".manga-delete-btn");
    console.log(deletebtns)

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
                const mangaBox = document.getElementById(`manga-box-${mangaId}`);
                console.log(mangaBox);


                mangaBox.remove();
            }
        })

    }
})
