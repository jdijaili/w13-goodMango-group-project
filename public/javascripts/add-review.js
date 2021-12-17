window.addEventListener('DOMContentLoaded', e => {

  const submitReviewBtn = document.querySelector(".submitReview");

  submitReviewBtn.addEventListener("click", async(e) => {
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

      const reviewsContainer = document.getElementById("reviewsContainer");
      console.log(reviewsContainer);

      const reviewBoxEle = document.createElement("li");
      reviewBoxEle.setAttribute("class", "reviewBox");

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

    }

  });
});
