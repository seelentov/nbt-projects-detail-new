export default () => {
  const videoBtn = document.querySelector('[data-attr="video__thumb-btn"]')
  const videoThumb = document.querySelector('[data-attr="video__thumb"]')
  const video = document.querySelector('[data-attr="video__video"]')

  if (!videoBtn || !videoThumb || !video) return

  videoBtn.addEventListener('click', () => {
    videoThumb.style.display = 'none'
    video.play()
  })

}