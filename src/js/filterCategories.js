export default () => {
  const categories = document.querySelectorAll('[data-attr="filter-category"]')

  if(!categories) return

  categories.forEach(category => {
    
    const header = category.querySelector('[data-attr="filter-category__header"]')

    header.addEventListener('click', ()=>{
      category.classList.toggle('active')
    })
  })
}