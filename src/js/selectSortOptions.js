export default () => {
  const inputFilterSort = document.querySelector('[data-attr="filter-sort"]')

  const optionsFilterSort = document.querySelectorAll('[data-attr="filter-sort_option"]')

  if(!inputFilterSort || !optionsFilterSort) return

  optionsFilterSort.forEach(optionFilterSort => {
    
    optionFilterSort.addEventListener('click', ()=> {
      optionsFilterSort.forEach(optionFilterSort => {
        optionFilterSort.classList.remove('active')
      })

      optionFilterSort.classList.add('active')

      inputFilterSort.value = optionFilterSort.getAttribute('value')
    })
  })
}