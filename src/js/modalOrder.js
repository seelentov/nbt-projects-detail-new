export default () => {
  const openBtn = document.querySelector('[data-attr="modal-order__open"]')
  const closeBtn = document.querySelector('[data-attr="modal-order__close"]')
  const modalOrder = document.querySelector('#modal-order')

  const form = modalOrder.querySelector('form')

  const submitBtn = document.querySelector('[data-attr="modal-order__submit"]')
  const html = document.querySelector('html')
  if (!openBtn || !closeBtn || !modalOrder) return

  openBtn.addEventListener('click', (e) => {
    e.preventDefault()
    modalOrder.classList.add('active')
    html.style.overflow = 'hidden'
  })

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault()
    modalOrder.classList.remove('active')
    html.style.overflow = 'auto'

  })

  if(!submitBtn) return

  submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()

    //Валидация + отправка
  })
  
}