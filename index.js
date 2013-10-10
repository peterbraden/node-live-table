var charm = require('charm')();
var Table = require('cli-table')


Table.prototype.render = function(){
  charm.reset();
  var str = this.toString().split('\n')
  for (var i = 0; i< str.length; i++){
    for (var j = 0; j < str[i].length; j++){
      charm.position(1+j, 1+i).write(str[i][j])
    }
  }
}


Table.prototype.pipe = function(){
  charm.pipe.apply(charm, arguments);
}


Table.prototype.update = function(x, y, val){
  this[x][y] = val
  this.render()
}

module.exports = Table



