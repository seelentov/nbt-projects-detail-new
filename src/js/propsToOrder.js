export default () => {
  const detailOptions = document.querySelector('[data-attr="func__checks"]');
  
  const modalOrderOptions = document.querySelector('[data-attr="modal-order__options"]');
  
  if (!detailOptions || !modalOrderOptions) return;
  
  detailOptions.addEventListener('change', (e) => {
    const checkedCheckboxes = Array.from(detailOptions.querySelectorAll('input[type="checkbox"]:checked'));
    const checkedCheckboxesNames = checkedCheckboxes.map((chechbox)=> {
      return chechbox.parentElement.querySelector('label').innerText
    })
    
    const modalOrderOptionItems = checkedCheckboxesNames.map((item) => {
      return `
      <li class="order-form-item">
          ${item}
      </li>
      `
    }).join('')

    console.log(modalOrderOptionItems)

    modalOrderOptions.innerHTML = modalOrderOptionItems
  });
}