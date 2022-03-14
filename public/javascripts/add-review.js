window.addEventListener('DOMContentLoaded', e => {

  const submitReviewBtn = document.querySelector(".submitReview");

  // When we submit a review, fetch the api to make POST a new review
  submitReviewBtn?.addEventListener("click", async (e) => {
    e.preventDefault();
    const form = document.getElementById("addReviewForm");

    let reviewValue = document.getElementById('review').value;
    let mangaId = document.getElementById('reviewMangaId').value;
    let userId = document.getElementById('reviewUserId').value;

    if (reviewValue !== "") {
      const res = await fetch('/api/reviews', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ review: reviewValue, mangaId, userId })
      })

      const data = await res.json();

      if (data.message === "Create Successful") {
        // update review counter
        const reviewCount = document.getElementById("review-counter");
        reviewCount.innerText = parseInt(reviewCount.innerText, 10) + 1;

        form.reset();

        // If the review was created, create the review html elements and show it on the screen
        const editReviewBtn = document.createElement("button");
        editReviewBtn.innerText = "edit";
        editReviewBtn.setAttribute("class", "editReview");
        editReviewBtn.setAttribute("type", "submit");

        const reviewsContainer = document.getElementById("reviewsContainer");
        const reviewBoxEle = document.createElement("li");
        reviewBoxEle.setAttribute("class", "reviewBox");

        const reviewEle = document.createElement("p");
        reviewEle.setAttribute("class", "actualReview");
        reviewEle.setAttribute("id", `review-${data.review.id}`);
        reviewEle.innerText = data.review.review;

        const userEle = document.createElement("p");
        userEle.setAttribute("class", "reviewUsernameDate");
        userEle.innerText = data.user.username;

        const updatedAtEle = document.createElement("span");
        updatedAtEle.setAttribute("class", "reviewDate");

        const reviewDate = new Date(data.review.updatedAt);

        updatedAtEle.innerText = reviewDate.toLocaleString();
        // create delete review button
        const deleteReviewBtn = document.createElement("button");
        deleteReviewBtn.setAttribute("name", data.reviewId);
        deleteReviewBtn.setAttribute("class", "deleteReview");
        deleteReviewBtn.innerText = "delete";


        const editDeleteReviewDiv = document.createElement("div");
        editDeleteReviewDiv.setAttribute("class", "edit-delete-review-btns");
        editDeleteReviewDiv.appendChild(editReviewBtn);
        editDeleteReviewDiv.appendChild(deleteReviewBtn);

        reviewsContainer.prepend(reviewBoxEle);
        reviewBoxEle.appendChild(userEle);
        userEle.appendChild(updatedAtEle);
        reviewBoxEle.appendChild(reviewEle);
        reviewBoxEle.appendChild(editDeleteReviewDiv);

        // event listener for delete review button
        deleteReviewBtn.addEventListener('click', async(e) => {
          const reviewId = e.target.name;
          const res = await fetch(`/api/reviews/${reviewId}`, {
            method: "DELETE"
          });

          const data = await res.json();

          if (data.message === "Delete Successful") {
            // update review count
            const reviewCount = document.getElementById("review-counter");
            reviewCount.innerText = parseInt(reviewCount.innerText, 10) - 1;
            reviewBoxEle.remove();
            editReviewBtn.remove();
            deleteReviewBtn.remove();
          }
        });


        // On the edit review button
        editReviewBtn.addEventListener("click", async (e) => {
          // Create a form with textarea, submit and cancel buttons to edit our review
          const editForm = document.createElement("form");
          editForm.setAttribute("id", `editForm-${data.reviewId}`);

          const theReview = document.getElementById(`review-${data.reviewId}`);
          const editReviewArea = document.createElement("textarea");
          editReviewArea.setAttribute("class", "editReviewArea");
          editReviewArea.setAttribute("name", "review");
          editReviewArea.setAttribute("value", reviewEle.innerText)

          editReviewArea.innerText = reviewEle.innerText;

          const submitEditBtn = document.createElement("button");
          submitEditBtn.setAttribute("type", "submit");
          submitEditBtn.setAttribute("class", "submitEditReview");
          submitEditBtn.innerText = "Submit"

          const reviewId = data.reviewId;

          submitEditBtn.addEventListener("click", async(e) => {
            e.preventDefault();
            const res = await fetch(`/api/reviews/${reviewId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ review: editReviewArea.value, mangaId, userId })
            });

            const data = await res.json();
            if (data.message === "Edit Successful") {
              theReview.innerText = data.review;
              editForm.remove();
              editReviewBtn.style.display = "inline-block";
              deleteReviewBtn.style.display = "inline-block";
            }
        });

          const cancelEditBtn = document.createElement("button");
          cancelEditBtn.setAttribute("class", "cancelEditReview");
          cancelEditBtn.setAttribute("name", data.reviewId);
          cancelEditBtn.innerText = "Cancel";

          // cancel edit review button
          cancelEditBtn.addEventListener("click", async (e) => {
            // remove the form we just created
            e.preventDefault();

            const editFormDelete = document.getElementById(`editForm-${data.reviewId}`);

            editFormDelete.remove();
            editReviewBtn.style.display = "inline-block"
            deleteReviewBtn.style.display = "inline-block";
          })

          const submitCancelDiv = document.createElement("div");
          submitCancelDiv.setAttribute("class", "submitCancelDiv");

          submitCancelDiv.appendChild(cancelEditBtn);
          submitCancelDiv.appendChild(submitEditBtn);
          editForm.appendChild(editReviewArea);
          editForm.appendChild(submitCancelDiv);
          reviewBoxEle.appendChild(editForm);

          editReviewBtn.style.display = "none";
          deleteReviewBtn.style.display = "none";
        })
      }

      if (form.childNodes[form.childNodes.length-1].textContent === "* Review cannot be empty!") {
        form.removeChild(form.childNodes[form.childNodes.length-1]);
      }

    } else {
      const message = document.createElement("p");
      message.setAttribute("class", "empty-error-msg");
      message.innerHTML = "* Review cannot be empty!"
      if (form.childNodes[form.childNodes.length-1].textContent !== "* Review cannot be empty!") {
        form.appendChild(message);
      }
    }

  });
});
