export default () => {
  const openBtn = document.querySelectorAll('[data-attr="modal-gallery__open"]')
  const closeBtn = document.querySelector('[data-attr="modal-gallery__close"]')
  const modalGallery = document.querySelector('#modal-gallery')
  const modalGalleryContent = modalGallery.querySelector('.gallery')
  const html = document.querySelector('html')

  const galleryItems = modalGallery.querySelectorAll('.gallery__item')

  if (!openBtn || !closeBtn || !modalGallery) return

  openBtn.forEach(button => button.addEventListener('click', (e) => {
    e.preventDefault()
    modalGallery.classList.add('active')
    html.style.overflow = 'hidden'
  }))

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault()
    modalGallery.classList.remove('active')
    html.style.overflow = 'auto'
  })

  modalGallery.addEventListener('click', (e) => {
    if (e.target === modalGallery) {
      modalGallery.classList.remove('active')
      html.style.overflow = 'auto'
    }
  })

  modalGalleryContent.addEventListener('click', (e) => {
    e.stopPropagation()
  })

  galleryItems.forEach(item => {

    const container = item
    const img = item.querySelector('img')

    // Добавляем обработчик события pinch для элемента .gallery-item
    galleryItem.addEventListener('touchmove', (event) => {
      if (event.touches.length === 2) {
        // Здесь можно реагировать на масштабирование пальцами
        const touch1 = event.touches[0]
        const touch2 = event.touches[1]

        const deltaY = touch2.clientY - touch1.clientY

        const img = galleryItem.querySelector('img')
        img.style.height = `${+img.clientHeight + 1}px`

        galleryItem.scrollBy(1, 1)
      }
    })
  })
}