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
    div.style.background = 'purple'
  } else {
    div.style.background = 'pink'
  }
}

  for (let i = 0; i < 9; i++) {
    var div = document.createElement('div')
    var body = document.getElementsByTagName('body')[0]
    body.appendChild(div)
    div.style.width = '11.1%'
    div.style.float = 'left'
    div.style.paddingBottom = '11.1%'
    div.style.zIndex= '1'
    if (i % 2 === 0) {
    div.style.background = 'pink'
    } else {
    div.style.background = 'purple'
    }
  }
  body.style.background = "linear-gradient(to bottom,black,teal,red)"
  body.style.opacity = '.4'
}
