const popups = document.querySelectorAll('.missing-container');
const popupScreen = document.querySelector('.popupScreen');
const overlay = document.querySelector('.overlay');
const popupDetails = document.querySelector('.popupDetails');
const popupImg = document.querySelector('.popupImg img'); // Select the img element within .popupImg

console.log('gsdfjsd');

const showPopup = function() {
  console.log('aaaaa');
  popupScreen.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  const container = this;
  const img = container.querySelector('img');
  const imgSrc = img.getAttribute('src');
  console.log(imgSrc);

  const details = container.querySelector('.details').textContent;

  // Set the src attribute of the img element within .popupImg
  popupImg.src = imgSrc;
  popupDetails.textContent = details;
  console.log(popupImg.src);
  console.log('ssss');
};

popups.forEach(popup => {
  popup.addEventListener('click', showPopup);
});

const hidePopup = function() {
  popupScreen.classList.add('hidden');
  overlay.classList.add('hidden');
  document.body.style.overflow = '';
};

overlay.addEventListener('click', hidePopup);
