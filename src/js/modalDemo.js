export default () => {
  const openBtn = document.querySelector('[data-attr="modal-demo__open"]')
  const closeBtn = document.querySelector('[data-attr="modal-demo__close"]')
  const submitBtn = document.querySelector('[data-attr="modal-demo__submit"]')
  const modal = document.querySelector('#modal-demo')
  const html = document.querySelector('html')

  if (!openBtn || !closeBtn || !modal) return

  openBtn.addEventListener('click', (e) => {
    e.preventDefault()
    modal.classList.add('active')
    html.style.overflow = 'hidden'
  })

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault()
    modal.classList.remove('active')
    html.style.overflow = 'auto'
  })

  if(!submitBtn) return

  submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()

    //Валидация + отправка
  })
}