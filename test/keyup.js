var test = require('tape');
var window = require('global/window');

var createEvent = require('../');

test('keyup - has correct defaults', function(t) {
  t.plan(9);
  var e = createEvent('keyup');
  t.ok(e.bubbles);
  t.ok(e.cancelable);
  t.equal(e.view, window);
  t.notOk(e.ctrlKey);
  t.notOk(e.altKey);
  t.notOk(e.shiftKey);
  t.notOk(e.metaKey);
  t.equal(e.keyCode, 0);
  t.equal(e.charCode, 0);
});

test('keyup - can set options', function(t) {
  t.plan(9);
  var e = createEvent('keyup', {
    bubbles: false,
    cancelable: false,
    ctrl: true,
    alt: true,
    shift: true,
    meta: true,
    key: 42
  });
  t.notOk(e.bubbles);
  t.notOk(e.cancelable);
  t.equal(e.view, window);
  t.ok(e.ctrlKey);
  t.ok(e.altKey);
  t.ok(e.shiftKey);
  t.ok(e.metaKey);
  t.equal(e.keyCode, 42);
  t.equal(e.charCode, 42);
});

test('keyup - can pass a string keyname', function(t) {
  t.plan(1);
  var e = createEvent('keyup', { key: 'enter' });
  t.equal(e.keyCode, 13);
});
