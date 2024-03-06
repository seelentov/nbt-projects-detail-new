export default () => {
  const videoBtn = document.querySelector('[data-attr="video__thumb-btn"]')
  const videoThumb = document.querySelector('[data-attr="video__thumb"]')
  const video = document.querySelector('[data-attr="video__video"]')

  if (!videoBtn) return

  videoBtn.addEventListener('click', ()=>{
    videoThumb.style.display = 'none'
    video.play()
  })

}