$('#js-shopping-list-form').submit(function (event) {
  event.preventDefault()
  function createListItem (item) {
    return `
    <li>
      <span class="shopping-item">${item}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>
    `
  }
  const input = $('#shopping-list-entry')
  const item = input.val()
  input.val('')
  $('ul.shopping-list').append(createListItem(item))
})

$('ul').on('click', '.shopping-item-delete', function (event){
  this.closest('li').remove();
})

$('ul').on('click', '.shopping-item-toggle', function (event) {
  $(event.target)
    .closest('li')
    .find('.shopping-item')
    .toggleClass('shopping-item__checked')
})
