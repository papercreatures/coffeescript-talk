(function() {
  var Wall;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  Wall = (function() {
    function Wall(el) {
      this.el = el;
      this.destroyRow = __bind(this.destroyRow, this);
      this.buildRow = __bind(this.buildRow, this);
      _.extend(this, Backbone.Events);
      this.width = this.el.width();
      this.height = this.el.height();
      this.bind('build', function() {
        var row, _ref, _results;
        _results = [];
        for (row = _ref = this.rows; _ref <= 0 ? row <= 0 : row >= 0; _ref <= 0 ? row++ : row--) {
          _results.push(this.buildRow(row));
        }
        return _results;
      });
      this.bind('destroy', function() {
        var row, _ref, _results;
        _results = [];
        for (row = 0, _ref = this.rows; 0 <= _ref ? row <= _ref : row >= _ref; 0 <= _ref ? row++ : row--) {
          _results.push(_.delay(this.destroyRow, row * 50, row));
        }
        return _results;
      });
    }
    Wall.prototype.buildRow = function(idx) {
      var brick, col, fw, h, os, w, _ref, _ref2, _results;
      this.bricks[idx] = [];
      _ref = [parseInt(this.width / this.cols), parseInt(this.height / this.rows)], w = _ref[0], h = _ref[1];
      fw = 0;
      _results = [];
      for (col = 0, _ref2 = this.cols; 0 <= _ref2 ? col <= _ref2 : col >= _ref2; 0 <= _ref2 ? col++ : col--) {
        os = col === 0 ? w / (idx % 2 + 1) : w;
        brick = $("<div class='brick'></div>").width(os).height(h).css({
          left: fw,
          top: h * idx
        });
        fw += os;
        this.el.append(brick);
        _results.push(this.bricks[idx].push(brick));
      }
      return _results;
    };
    Wall.prototype.destroyRow = function(idx) {
      var brick, _i, _len, _ref, _results;
      _ref = this.bricks[idx];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        brick = _ref[_i];
        _results.push(brick.animate({
          top: this.height
        }, Math.random() * 1000));
      }
      return _results;
    };
    Wall.prototype.rows = 40;
    Wall.prototype.cols = 15;
    Wall.prototype.bricks = [];
    return Wall;
  })();
  $(function() {
    var wall;
    wall = new Wall($('#me'));
    wall.trigger('build');
    return $('#me').click(function() {
      return wall.trigger('destroy');
    });
  });
}).call(this);
