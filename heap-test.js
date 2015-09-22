/*jshint:global window*/
(function heapTest(doc) {
  'use strict';

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  var b = {'grandchild-key-2': 5};
  var a = {'child-key-1': b};
  doc.child1 = a;
  doc.child1_again = a;

  doc.child1_copy = clone(a);

})(document);
