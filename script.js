// Hints
//
// Each tile should be a div
// Each tile's width is 11.1%
// Set each tile's float property to left
// Each tile's paddingBottom is 11.1%
// function that runs several times
for (let i = 0; i < 4; i++) {
  function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
  for (let i = 0; i < 9; i++) {
    var div = document.createElement('div')
    var body = document.getElementsByTagName('body')[0]
    body.appendChild(div)
    div.style.width = '11.1%'
    div.style.float = 'left'
    div.style.paddingBottom = '11.1%'
    div.style.backgroundColor = getRandomColor()

  }
  for (let i = 0; i < 9; i++) {
    var div = document.createElement('div')
    var body = document.getElementsByTagName('body')[0]
    body.appendChild(div)
    div.style.width = '11.1%'
    div.style.float = 'left'
    div.style.paddingBottom = '11.1%'
    div.style.backgroundColor = getRandomColor()
  }
}
