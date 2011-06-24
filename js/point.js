(function() {
  var Point, Point3D, point, x, y, _ref;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Point = (function() {
    function Point() {}
    Point.prototype.x = 30;
    Point.prototype.y = 40;
    Point.prototype.clear = function() {
      return this.x = this.y = null;
    };
    Point.prototype.toArray = function() {
      return [this.x, this.y];
    };
    return Point;
  })();
  Point3D = (function() {
    __extends(Point3D, Point);
    function Point3D() {
      Point3D.__super__.constructor.apply(this, arguments);
    }
    Point3D.prototype.z = 50;
    Point3D.prototype.clear = function() {
      this.z = null;
      return Point3D.__super__.clear.apply(this, arguments);
    };
    return Point3D;
  })();
  point = new Point3D();
  _ref = point.toArray(), x = _ref[0], y = _ref[1];
}).call(this);
