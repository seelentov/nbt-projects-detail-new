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
    let prevX = 0
    let prevY = 0

    const container = item
    const img = item.querySelector('img')

    let isPinching = false

    container.addEventListener('touchstart', function (event) {
      event.stopPropagation()
      event.preventDefault()
      if (event.touches.length === 2) {
        isPinching = true
        initialScale = currentScale
      } else {
        isPinching = false
        initialX = currentX
        initialY = currentY
        prevX = event.touches[0].clientX
        prevY = event.touches[0].clientY
      }
    })

    container.addEventListener('touchmove', function (event) {
      event.stopPropagation()
      event.preventDefault()
      if (isPinching && event.touches.length === 2) {
        let touch1 = event.touches[0]
        let touch2 = event.touches[1]
        let pinchDistance = Math.hypot(touch1.clientX - touch2.clientX, touch1.clientY - touch2.clientY)
        currentScale = initialScale + (pinchDistance / 100)
        img.style.transform = `scale(${currentScale})`
      } else if (!isPinching && event.touches.length === 1) {
        event.preventDefault()
        let touch = event.touches[0]
        currentX = initialX + touch.clientX - prevX
        currentY = initialY + touch.clientY - prevY
        img.style.left = `${currentX}px`
        img.style.top = `${currentY}px`
        prevX = touch.clientX
        prevY = touch.clientY
      }
    })

    container.addEventListener('touchend', function (event) {
      event.stopPropagation()
      event.preventDefault()
      isPinching = false
      initialX = currentX
      initialY = currentY
    })
  })
}