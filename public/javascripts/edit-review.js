window.addEventListener('DOMContentLoaded', e => {

    // For all the edit review buttons, add a click event listener
    // to create a form with textarea, submit, and cancel buttons
    const editReviewBtn = document.querySelectorAll('.editReview');
    // console.log(editReviewBtn);
    for (let i = 0; i < editReviewBtn.length; i++) {
        const btn = editReviewBtn[i];

        btn.addEventListener('click', async (e) => {
            const reviewId = btn.name;
            const editForm = document.createElement("form");
            editForm.setAttribute("id", `editForm-${reviewId}`);

            const reviewBoxEle = document.getElementById(`box-${reviewId}`)
            const theReview = document.getElementById(`review-${reviewId}`);


            const editReviewArea = document.createElement("textarea");
            editReviewArea.setAttribute("name", "review");
            editReviewArea.setAttribute("value", theReview.innerText)
            editReviewArea.innerText = theReview.innerText;


            const submitEditBtn = document.createElement("button");
            submitEditBtn.setAttribute("type", "submit");
            submitEditBtn.setAttribute("class", "submitEditReview");

            submitEditBtn.innerText = "Submit"

            submitEditBtn.addEventListener("click", async(e) => {
                e.preventDefault();
                let mangaId = document.getElementById('reviewMangaId').value;
                let userId = document.getElementById('reviewUserId').value;

                const res = await fetch(`/api/reviews/${reviewId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ review: editReviewArea.value, mangaId, userId })
                });

                const data = await res.json();

                if (data.message === "Edit Successful") {

                    theReview.innerText = editReviewArea.value;
                    const editFormDelete = document.getElementById(`editForm-${reviewId}`);
                    editFormDelete.remove();
                    btn.style.display = "block";

                }
            });


            const cancelEditBtn = document.createElement("button");
            cancelEditBtn.setAttribute("class", "cancelEditReview");
            cancelEditBtn.setAttribute("name", reviewId);
            cancelEditBtn.innerText = "Cancel"

            cancelEditBtn.addEventListener("click", async(e) => {
                e.preventDefault();
                const editFormDelete = document.getElementById(`editForm-${reviewId}`);

                editFormDelete.remove();
                btn.style.display = "block"
            })

            editForm.appendChild(editReviewArea);
            editForm.appendChild(submitEditBtn);
            editForm.appendChild(cancelEditBtn);
            reviewBoxEle.appendChild(editForm);

            btn.style.display = "none";
        })

    }

    // const cancelReviewBtn = document.querySelectorAll('.cancelEditReview');
    // // console.log(editReviewBtn);
    // for (let i = 0; i < cancelReviewBtn.length; i++) {
    //     const btn = cancelReviewBtn[i];

    //     btn.addEventListener("click", async(e) => {
    //         const reviewId = btn.name;
    //         const editFormDelete = document.getElementById(`editForm-${reviewId}`);

    //         editFormDelete.remove();
    //     })
    // }
})
