class Wall
  constructor: (@el) ->
    _.extend @, Backbone.Events
    
    @width = @el.width()
    @height = @el.height()
    
    @bind 'build', -> 
      @buildRow(row) for row in [ @rows .. 0]
    @bind 'destroy', -> 
      _.delay @destroyRow, row * 50, row for row in [ 0 .. @rows]
  buildRow: (idx) =>
    @bricks[idx] = []
    [w,h] = [parseInt(@width / @cols), parseInt(@height / @rows)]
    fw = 0
    for col in [0 .. @cols]
      tint = parseInt(200+(Math.random()*55)).toString 16
      os = if col == 0 then w/(idx%2+1) else w
      brick = $("<div class='brick'></div>")
        .width(os)
        .height(h)
        .css
          backgroundColor: "##{tint}5b35"
          left:fw
          top:h*idx
      fw+=os
      @el.append brick
      @bricks[idx].push brick
  destroyRow: (idx) =>
    for brick in @bricks[idx]
      brick.animate
        top: @height
        Math.random() * 1000
        
  rows: 40
  cols: 15
  bricks: []

$ ->
  wall = new Wall $('#me')
  wall.trigger 'build'
  $('#me').click -> wall.trigger 'destroy'
  
  