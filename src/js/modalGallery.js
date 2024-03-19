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

    let zoom = 0

    let prevDistance = 0

    container.addEventListener('touchmove', (event) => {
      if (event.touches.length === 2) {
        //if (true) {
        const touch1 = event.touches[0]
        const touch2 = event.touches[1]
        //const touch2 = {
        //  clientX: 0,
        //  clientY: 0
        //}

        const currentDistance = Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY)

        if (prevDistance !== 0) {
          if (currentDistance > prevDistance) {
            zoom += 1
          } else if (currentDistance < prevDistance) {
            zoom -= 1
          }
        }

        prevDistance = currentDistance


        img.style.height = `calc(100% + ${zoom > 0 ? zoom : 0}px)`
      }
    })
  })
}