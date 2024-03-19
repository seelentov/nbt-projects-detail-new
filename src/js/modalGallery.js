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
    let initialScale = 1
    let currentScale = 1
    let initialX = 0
    let initialY = 0
    let currentX = 0
    let currentY = 0

    const container = item
    const img = item.querySelector('img')

    let isPinching = false

    container.addEventListener('touchstart', function (event) {
      if (event.touches.length === 2) {
        isPinching = true
        initialScale = currentScale
      } else {
        isPinching = false
        initialX = currentX
        initialY = currentY
      }
    })

    container.addEventListener('touchmove', function (event) {
      if (isPinching && event.touches.length === 2) {
        let pinchDistance = Math.hypot(
          event.touches[0].clientX - event.touches[1].clientX,
          event.touches[0].clientY - event.touches[1].clientY
        )
        currentScale = initialScale + (pinchDistance / 100)
        img.style.transform = scale(`${currentScale}`)
      } else if (!isPinching && event.touches.length === 1) {
        event.preventDefault()
        let touch = event.touches[0]
        currentX = initialX + touch.clientX - touch.clientX
        currentY = initialY + touch.clientY - touch.clientY
        img.style.transform = `translate(${currentX}px, ${currentY}px)`
      }
    })

    container.addEventListener('touchend', function (event) {
      isPinching = false
      initialX = currentX
      initialY = currentY
    })
  })
}