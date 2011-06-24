class Point
  x: 30
  y: 40
  clear: ->
    @x = @y = null
  toArray: -> [@x,@y]

class Point3D extends Point
  z: 50
  clear: ->
    @z = null
    super

point = new Point3D();

[x,y] = point.toArray()
