window.addEventListener('DOMContentLoaded', e => {
  const deleteReviewBtn = document.querySelectorAll('.deleteReview');
  for (let i = 0; i < deleteReviewBtn.length; i++) {
    const btn = deleteReviewBtn[i];

    // Add event listeners to all the delete review buttons
    btn.addEventListener('click', async(e) => {
      const reviewId = e.target.name;
      const res = await fetch(`/api/reviews/${reviewId}`, {
        method: "DELETE"
      });

      const data = await res.json();

      if (data.message === "Delete Successful") {
          const reviewBox = document.getElementById(`box-${reviewId}`);
          const editReviewBtn = document.getElementById(`edit-${reviewId}`);
          reviewBox.remove();
          editReviewBtn.remove();
          btn.remove();
      }
    });
  }


});
