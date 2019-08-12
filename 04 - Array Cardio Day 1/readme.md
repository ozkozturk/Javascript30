

What I've learned
-

-<strong>Array.property.sort() :</strong> 

`function(a, b){return a - b}` 

When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative a is sorted before b.

If the result is positive b is sorted before a.

If the result is 0 no changes are done with the sort order of the two values.

-<strong>Array.from() or [...] : </strong> Array.from() creates a new Array instance from an array-like object or iterable object.

In our example, querySelectorAll gives an NodeList and we want to create an Array from this NodeList because we should use some higher-order function such as map, filter. For more information: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from">MDN</a>.


