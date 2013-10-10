var Table = require('./index.js')


var t = new Table()

t.push([1, 2, 3, 4, 5, 6, 7])
t.push([1, 2, 3, 4, 5, 6, 7])

t.pipe(process.stdout)
t.render()


setTimeout(function(){
  t.push(["foo", "bar", "baz"])
  t.render()
}, 1000)


var i = 0;
setInterval(function(){
  t.update(0, 1, i++)
}, 500)
