for (let i = 0; i < 4; i++) {
  for (let i = 0; i < 9; i++) {
    var div = document.createElement('div')
    var body = document.getElementsByTagName('body')[0]
    body.appendChild(div)
    div.style.width = '11.1%'
    div.style.float = 'left'
    div.style.paddingBottom = '11.1%'
      if (i % 2 === 0) {
        div.style.backgroundColor = 'black'
      } else {
        div.style.backgroundColor = 'red'
      }
  }
  for (let i = 0; i < 9; i++) {
    var div = document.createElement('div')
    var body = document.getElementsByTagName('body')[0]
    body.appendChild(div)
    div.style.width = '11.1%'
    div.style.float = 'left'
    div.style.paddingBottom = '11.1%'
    if (i % 2 === 0) {
      div.style.backgroundColor = 'red'
    } else {
      div.style.backgroundColor = 'black'
    }
  }
}
