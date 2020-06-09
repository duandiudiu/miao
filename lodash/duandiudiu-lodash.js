var duandiudiu = {
  isNull: function (val) {
    if (val === null) {
      return true
    } else {
      return false
    }
  },
  isNaN: function (val) {
    if (new Number(NaN) == val) {
      true
    }
    if (val !== val) {
      return true
    } else {
      return false
    }
  },

  chunk: function (array, size = 1) {
    var result = []
    var l = array.length
    var n = Math.floor(l / size)
    for (var i = 0; i < n; i++) {
      result.push(array.slice(i * size, i * size + size))
    }
    if (l !== size * n) {
      result.push(array.slice(size * n))
    }
    return result
  },

  compact: function (array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  },

  difference: function (array, ...value) {
    var result = []
    var b = []
    var bIdx
    var al = array.length
    for (var v = 1; v < arguments.length; v++) {
      b = b.concat(arguments[v])
    }
    for (var a = 0; a < al; a++) {
      bIdx = b.indexOf(array[a])
      if (bIdx == -1) {
        result.push(array[a])
      }
    }
    return result
  },


  drop: function (array, n = 1) {
    var result = array.slice(n)
    return result
  },

  dropRight: function (array, n = 1) {
    var result = []
    var l = array.length
    if (l > n) {
      result = array.slice(0, l - n)
      return result
    } else {
      return []
    }
  }
}