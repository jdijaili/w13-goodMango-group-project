window.addEventListener('DOMContentLoaded', e => {
    const editReviewBtn = document.querySelectorAll('.editReview');
    // console.log(editReviewBtn);
    for (let i = 0; i < editReviewBtn.length; i++) {
        const btn = editReviewBtn[i];

        btn.addEventListener('click', async (e) => {
            const editForm = document.createElement("form");
            const reviewId = btn.name;

            const reviewBoxEle = document.getElementById(`box-${reviewId}`)
            const theReview = document.getElementsByClassName("actualReview")[0].innerText;

            // editForm.setAttribute("method", "put");
            editForm.setAttribute("id", `editForm-${reviewId}`);
            // editForm.setAttribute("action", `/api/reviews/${reviewId}`);

            const editReviewArea = document.createElement("textarea");
            editReviewArea.setAttribute("name", "review");
            editReviewArea.setAttribute("value", theReview)

            const submitEditBtn = document.createElement("button");
            submitEditBtn.setAttribute("type", "submit");
            submitEditBtn.innerText = "Submit"

            const cancelEditBtn = document.createElement("button");
            cancelEditBtn.setAttribute("class", "cancelEditReview");
            cancelEditBtn.setAttribute("name", reviewId);
            cancelEditBtn.innerText = "Cancel"

            editForm.appendChild(editReviewArea);
            editForm.appendChild(submitEditBtn);
            editForm.appendChild(cancelEditBtn);
            reviewBoxEle.appendChild(editForm);

            btn.style.display = "none";
        })

    }

    const cancelReviewBtn = document.querySelectorAll('.cancelEditReview');
    // console.log(editReviewBtn);
    for (let i = 0; i < cancelReviewBtn.length; i++) {
        const btn = cancelReviewBtn[i];

        btn.addEventListener("click", async(e) => {
            const reviewId = btn.name;
            const editFormDelete = document.getElementById(`editForm-${reviewId}`);

            editFormDelete.remove();
        })
    }
})
