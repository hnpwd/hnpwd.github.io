function shuffle (items) {
  console.log(items)
  items = items.slice()
  for (let n = items.length - 1; n >= 1; n--) {
    const m = Math.floor(Math.random() * (n + 1));
    [items[m], items[n]] = [items[n], items[m]]
  }
  return items
}

function shuffleCards () {
  let cards = Array.from(document.querySelectorAll('section'))
  document.querySelector('main').replaceChildren(...shuffle(cards))
}

window.addEventListener('load', shuffleCards)
