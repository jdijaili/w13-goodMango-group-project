window.addEventListener('DOMContentLoaded', e => {

  const submitReviewBtn = document.querySelector(".submitReview");

  // When we submit a review, fetch the api to make POST a new review
  submitReviewBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    let reviewValue = document.getElementById('review').value;
    let mangaId = document.getElementById('reviewMangaId').value;
    let userId = document.getElementById('reviewUserId').value;
    console.log(reviewValue);

    const res = await fetch('/api/reviews', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ review: reviewValue, mangaId, userId })
    })

    const data = await res.json();
    console.log("In Event Listener", data);
    if (data.message === "Create Successful") {
      // If the review was created, create the review html elements and show it on the screen
      const editReviewBtn = document.createElement("button");
      editReviewBtn.innerText = "edit";

      editReviewBtn.setAttribute("type", "submit");

      const reviewsContainer = document.getElementById("reviewsContainer");
      console.log(reviewsContainer);
      const reviewBoxEle = document.createElement("li");
      reviewBoxEle.setAttribute("class", "reviewBox");

      // On the edit review button
      editReviewBtn.addEventListener("click", async (e) => {
        // Create a form with textarea, submit and cancel buttons to edit our review
        const editForm = document.createElement("form");
        editForm.setAttribute("id", `editForm-${data.reviewId}`);
        // editForm.setAttribute("method", "put");
        // editForm.setAttribute("action", `/api/reviews/${data.reviewId}`);

        const editReviewArea = document.createElement("textarea");
        editReviewArea.setAttribute("name", "review");
        editReviewArea.setAttribute("value", data.review)

        const submitEditBtn = document.createElement("button");
        submitEditBtn.setAttribute("type", "submit");
        submitEditBtn.innerText = "Submit"
        const cancelEditBtn = document.createElement("button");
        cancelEditBtn.setAttribute("class", "cancelEditReview");
        cancelEditBtn.setAttribute("name", data.reviewId);
        cancelEditBtn.innerText = "Cancel"

        // cancel edit review button
        cancelEditBtn.addEventListener("click", async (e) => {
          // remove the form we just created
          e.preventDefault();

          const editFormDelete = document.getElementById(`editForm-${data.reviewId}`);

          editFormDelete.remove();
          editReviewBtn.style.display = "block"
        })

        editForm.appendChild(editReviewArea);
        editForm.appendChild(submitEditBtn);
        editForm.appendChild(cancelEditBtn);
        reviewBoxEle.appendChild(editForm);

        editReviewBtn.style.display = "none";
      })

      const userEle = document.createElement("p");
      userEle.setAttribute("class", "reviewUsernameDate");
      userEle.innerText = data.user.username;

      const updatedAtEle = document.createElement("span");
      updatedAtEle.setAttribute("class", "reviewDate");

      const reviewDate = new Date(data.review.updatedAt);

      updatedAtEle.innerText = reviewDate.toDateString();

      const reviewEle = document.createElement("p");
      reviewEle.setAttribute("class", "actualReview");
      reviewEle.innerText = data.review.review;

      reviewsContainer.prepend(reviewBoxEle);
      reviewBoxEle.appendChild(userEle);
      userEle.appendChild(updatedAtEle);
      reviewBoxEle.appendChild(reviewEle);
      reviewBoxEle.appendChild(editReviewBtn);

    }
  });
});
