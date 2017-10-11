// Hints
//
// Each tile should be a div
// Each tile's width is 11.1%
// Set each tile's float property to left
// Each tile's paddingBottom is 11.1%
// function that runs several times
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
