document.addEventListener('DOMContentLoaded', () => {
  const stories = document.querySelectorAll('.story');
  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');
  let currentIndex = 0;

  function showStory(index) {
    stories.forEach((story, i) => {
      story.classList.toggle('active', i === index);
    });
  }

  function nextStory() {
    currentIndex = (currentIndex + 1) % stories.length;
    showStory(currentIndex);
  }

  function prevStory() {
    currentIndex = (currentIndex - 1 + stories.length) % stories.length;
    showStory(currentIndex);
  }

  nextButton.addEventListener('click', nextStory);
  prevButton.addEventListener('click', prevStory);

  // Initialize the slider
  showStory(currentIndex);
});

const hide = document.querySelector('.hide');
const pop = document.querySelector('.thankyou');
const openModal = document.querySelector('.submit');
const closeModal = document.querySelector('.ok');

openModal.addEventListener('click', function() {
  hide.style.display = 'none';
  pop.classList.remove('hideit');
})
closeModal.addEventListener('click', function() {
  hide.style.display = '';
  pop.classList.add('hideit');
})
