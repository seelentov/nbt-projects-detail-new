export default () => {
  const openBtn = document.querySelectorAll('[data-attr="modal-gallery__open"]');
  const closeBtn = document.querySelector('[data-attr="modal-gallery__close"]');
  const modalGallery = document.querySelector('#modal-gallery');
  const modalGalleryContent = modalGallery.querySelector('.gallery');
  const html = document.querySelector('html');

  if (!openBtn || !closeBtn || !modalGallery) return;

  openBtn.forEach(button => button.addEventListener('click', (e) => {
      e.preventDefault();
      modalGallery.classList.add('active');
      html.style.overflow = 'hidden';
  }));

  closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modalGallery.classList.remove('active');
      html.style.overflow = 'auto';
  });

  modalGallery.addEventListener('click', (e) => {
      if (e.target === modalGallery) {  // Проверка, был ли клик на самом модальном окне
          modalGallery.classList.remove('active');
          html.style.overflow = 'auto';
      }
  });

  modalGalleryContent.addEventListener('click', (e) => {
      e.stopPropagation();
  });
}