const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});
const slider = document.getElementById('slider');
    const cards = slider.children;
    const totalCards = cards.length;
    let index = 0;

    setInterval(() => {
      index = (index + 1) % totalCards;
      slider.style.transform = `translateX(-${index * (cards[0].offsetWidth + 20)}px)`;
    }, 2000);
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('sidebar').classList.add('active');
  document.getElementById('overlay').classList.add('active');
});

document.getElementById('close-btn').addEventListener('click', function () {
  document.getElementById('sidebar').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
});

document.getElementById('overlay').addEventListener('click', function () {
  document.getElementById('sidebar').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
});


function scrollSlider(direction) {
  const slider = document.getElementById('slider');
  const scrollAmount = 320; 
  slider.scrollLeft += direction * scrollAmount;
}
