const chatIcon = document.querySelector('.chat-icon');
const ratings = ['😡', '👎', '🤔', '👍', '😍'];

function showRatingPrompt() {
  const rating = prompt('How would you rate my profile?\n\n😡 = Terrible\n👎 = Poor\n🤔 = Average\n👍 = Good\n😍 = Excellent');
  
  if (rating && ratings.includes(rating)) {
    alert(`Thank you for your rating: ${rating}`);
  } else {
    alert('Invalid rating, please try again.');
  }
}

chatIcon.addEventListener('click', showRatingPrompt);
