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

    let initialDistance = 0 // изначальное расстояние между двумя пальцами
    let scaleFactor = 0
    container.addEventListener('touchstart', (event) => {
      if (event.touches.length === 2) {
        event.preventDefault()
        event.stopPropagation()
        //if (true) {
        const touch1 = event.touches[0]
        const touch2 = event.touches[1]
        //const touch2 = {
        //  clientX: 0,
        //  clientY: 0
        //}

        initialDistance = Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY)
      }
    })

    container.addEventListener('touchmove', (event) => {
      if (event.touches.length === 2) {
        event.preventDefault()
        event.stopPropagation()
        //if (true) {


        const touch1 = event.touches[0]
        const touch2 = event.touches[1]
        //const touch2 = {
        //  clientX: 0,
        //  clientY: 0

        //}
        const currentDistance = Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY)
        if (initialDistance < currentDistance) {
          scroll = currentDistance - initialDistance
          scaleFactor += scroll

          const deltaX = container.offsetWidth / 2 // половина ширины контейнера
          const deltaY = container.offsetHeight / 2 // половина высоты контейнера

          if (scaleFactor > 0) {
            container.scrollBy(scroll / 2 + deltaX, scroll / 2 + deltaY)
          }
        } else {
          scroll = initialDistance - currentDistance
          scaleFactor -= scroll

          const deltaX = container.offsetWidth / 2 // половина ширины контейнера
          const deltaY = container.offsetHeight / 2 // половина высоты контейнера

          if (scaleFactor > 0) {
            container.scrollBy(-(scroll / 2 + deltaX), -(scroll / 2 + deltaY))
          }
        }

        initialDistance = currentDistance

        img.style.height = `calc(100% + ${scaleFactor > 0 ? scaleFactor : 0}px)`
      }
    })
  })
}