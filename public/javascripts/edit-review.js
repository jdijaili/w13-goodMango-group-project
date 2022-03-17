window.addEventListener('DOMContentLoaded', e => {

    // For all the edit review buttons, add a click event listener
    // to create a form with textarea, submit, and cancel buttons
    const editReviewBtn = document.querySelectorAll('.editReview');
    for (let i = 0; i < editReviewBtn.length; i++) {
        const btn = editReviewBtn[i];

        btn.addEventListener('click', async (e) => {
            const reviewId = btn.name;

            const deleteReviewBtn = document.getElementById(`delete-${reviewId}`);
            const reviewBoxEle = document.getElementById(`box-${reviewId}`);
            const theReview = document.getElementById(`review-${reviewId}`);

            const editForm = document.createElement("form");
            editForm.setAttribute("class", "editReviewForm");
            editForm.setAttribute("id", `editForm-${reviewId}`);

            const editReviewArea = document.createElement("textarea");
            editReviewArea.setAttribute("class", "editReviewArea");
            editReviewArea.setAttribute("name", "review");
            editReviewArea.setAttribute("value", theReview.innerText);
            editReviewArea.innerText = theReview.innerText;

            const submitEditBtn = document.createElement("button");
            submitEditBtn.setAttribute("type", "submit");
            submitEditBtn.setAttribute("class", "submitEditReview");
            submitEditBtn.innerText = "Submit";

            // submit edit event listener
            submitEditBtn.addEventListener("click", async(e) => {
                e.preventDefault();
                let mangaId = document.getElementById('reviewMangaId').value;
                let userId = document.getElementById('reviewUserId').value;
                let actualReview = editReviewArea.value;

                if (actualReview !== "") { // only edit review if review is not empty
                    const res = await fetch(`/api/reviews/${reviewId}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ review: actualReview, mangaId, userId })
                    });

                    const data = await res.json();

                    if (data.message === "Edit Successful") {
                        theReview.style.display = "block";
                        theReview.innerText = actualReview;
                        btn.style.display = "inline-block";
                        deleteReviewBtn.style.display = "inline-block";
                        const editFormDelete = document.getElementById(`editForm-${reviewId}`);
                        editFormDelete.remove();
                    }

                    if (editForm.childNodes[editForm.childNodes.length-1].textContent === "* Review cannot be empty!") {
                        editForm.removeChild(editForm.childNodes[editForm.childNodes.length-1]);
                    }
                } else { // error message for empty review
                    const message = document.createElement("p");
                    message.setAttribute("class", "empty-error-msg");
                    message.innerHTML = "* Review cannot be empty!"
                    if (editForm.childNodes[editForm.childNodes.length-1].textContent !== "* Review cannot be empty!") {
                        editForm.appendChild(message);
                    }

                }

            });

            const cancelEditBtn = document.createElement("button");
            cancelEditBtn.setAttribute("class", "cancelEditReview");
            cancelEditBtn.setAttribute("name", reviewId);
            cancelEditBtn.innerText = "Cancel";

            // cancel edit event listener
            cancelEditBtn.addEventListener("click", async(e) => {
                e.preventDefault();
                theReview.style.display = "block";
                btn.style.display = "inline-block";
                deleteReviewBtn.style.display = "inline-block";
                const editFormDelete = document.getElementById(`editForm-${reviewId}`);
                editFormDelete.remove();
            });

            const submitCancelDiv = document.createElement("div");
            submitCancelDiv.setAttribute("class", "submitCancelDiv");

            theReview.style.display = "none";

            submitCancelDiv.appendChild(cancelEditBtn);
            submitCancelDiv.appendChild(submitEditBtn);
            editForm.appendChild(editReviewArea);
            editForm.appendChild(submitCancelDiv);
            reviewBoxEle.appendChild(editForm);

            // when edit button is clicked, hide the edit and delete buttons
            deleteReviewBtn.style.display = "none";
            btn.style.display = "none";
        });

    }
});
