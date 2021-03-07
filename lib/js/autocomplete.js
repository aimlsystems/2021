const DEFAULTS = {
  treshold: 2,
  maximumItems: 5,
  highlightTyped: true,
  highlightClass: 'text-primary',
};

class Autocomplete {
  constructor(field, options) {
    this.field = field;
    this.options = Object.assign({}, DEFAULTS, options);
    this.dropdown = null;
    this.selectedIndex = -1;
    this.lastLookup = "";
    this.lastCount = 0
    this.selectedPair = null

    field.parentNode.classList.add('dropdown');
    field.setAttribute('data-toggle', 'dropdown');
    field.classList.add('dropdown-toggle');

    const dropdown = ce(`<div class="dropdown-menu" ></div>`);
    if (this.options.dropdownClass)
      dropdown.classList.add(this.options.dropdownClass);

    insertAfter(dropdown, field);

    this.dropdown = new bootstrap.Dropdown(field, this.options.dropdownOptions)

    field.addEventListener('click', (e) => {
      if (this.createItems() === 0) {
        e.stopPropagation();
        this.dropdown.hide();
        this.selectedPair = null
      }
    });

    field.addEventListener('input', () => {
      if (this.options.onInput)
        this.options.onInput(this.field.value);
      this.renderIfNeeded();
    });

    field.addEventListener('keydown', (e) => {
      var keyCode = e.code || e.key;
      if (e.keyCode === 27) {
        this.dropdown.hide();
        this.selectedPair = null
        return;
      }
      var keyCode = e.code || e.key;
      if(keyCode === "ArrowDown") {
        this.selectedIndex += 1
        if(this.lastCount > 0 && this.selectedIndex == this.lastCount){
          this.selectedIndex = 0
        }
        console.log("selectedIndex", this.selectedIndex)
        this.renderIfNeeded()
      }
      if(keyCode === "ArrowUp"){
        this.selectedIndex -= 1
        if(this.selectedIndex < 0){
          this.selectedIndex = this.lastCount - 1
        }
        console.log("selectedIndex", this.selectedIndex)
        this.renderIfNeeded()
      }
      console.log(e)
    });

    field.addEventListener('keypress', (e) => {
      if (!e) e = window.event;
      var keyCode = e.code || e.key;
      if (keyCode == 'Enter'){
        if (this.options.onSelectItem && this.selectedPair)
          this.options.onSelectItem(this.selectedPair);
        return false;
      }
    })
  }

  setData(data) {
    this.options.data = data;
  }

  renderIfNeeded() {
    if (this.createItems() > 0)
      this.dropdown.show();
    else
      this.field.click();
  }

  createItem(lookup, item, i) {
    let label;
    if (this.options.highlightTyped) {
      const idx = item.label.toLowerCase().indexOf(lookup.toLowerCase());
      const className = Array.isArray(this.options.highlightClass) ? this.options.highlightClass.join(' ')
        : (typeof this.options.highlightClass == 'string' ? this.options.highlightClass : '')
      label = item.label.substring(0, idx)
        + `<span class="${className}">${item.label.substring(idx, idx + lookup.length)}</span>`
        + item.label.substring(idx + lookup.length, item.label.length);
    } else
      label = item.label;
    var active_class = ""
    if(i === this.selectedIndex) {
      active_class = " active"
      this.selectedPair = {
        value: item.value,
        label: label,
      }
    }
    return ce(`<button type="button" class="dropdown-item${active_class}" data-value="${item.value}">${label}</button>`);
  }

  createItems() {
    const lookup = this.field.value;
    if(this.lastLookup != lookup){
      this.selectedIndex = -1
    }
    this.lastLookup = lookup
    if (lookup.length < this.options.treshold) {
      this.dropdown.hide();
      this.selectedPair = null
      return 0;
    }

    const items = this.field.nextSibling;
    items.innerHTML = '';

    let count = 0;
    for (let i = 0; i < this.options.data.length; i++) {
      const {label, value} = this.options.data[i];
      const item = {label, value};
      if (item.label.toLowerCase().indexOf(lookup.toLowerCase()) >= 0) {
        items.appendChild(this.createItem(lookup, item, count));
        if (this.options.maximumItems > 0 && ++count >= this.options.maximumItems)
          break;
      }
    }
    this.lastCount = count

    this.field.nextSibling.querySelectorAll('.dropdown-item').forEach((item) => {
      item.addEventListener('click', (e) => {
        let dataValue = e.target.getAttribute('data-value');
        this.field.value = e.target.innerText;
        if (this.options.onSelectItem)
          this.options.onSelectItem({
            value: e.target.dataset.value,
            label: e.target.innerText,
          });
        this.dropdown.hide();
        this.selectedPair = null
      })
    });

    return items.childNodes.length;
  }
}

/**
 * @param html
 * @returns {Node}
 */
function ce(html) {
  let div = document.createElement('div');
  div.innerHTML = html;
  return div.firstChild;
}

/**
 * @param elem
 * @param refElem
 * @returns {*}
 */
function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling)
}