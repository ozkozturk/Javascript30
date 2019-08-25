-What I've learned
-

<strong>-Object.assgin() : </strong> Actually I had a little bit knowledge of Object.assign() method. But I didn't know "deep clone". I've read an <a href="https://scotch.io/bar-talk/copying-objects-in-javascript">article</a> about copying objects. What`JSON.parse(JSON.stringify(object))` is used allows us to deep clone object's properties but If one of the properties is a "method" which includes a function, this way can't be used. 
```
let obj = {
  name: 'scotch.io',
  exec: function exec() {
    return true;
  },
}

let method1 = Object.assign({}, obj);
let method2 = JSON.parse(JSON.stringify(obj));

console.log(method1); //Object.assign({}, obj)
/* result
{
  exec: function exec() {
    return true;
  },
  name: "scotch.io"
}
*/

console.log(method2); // JSON.parse(JSON.stringify(obj))
/* result
{
  name: "scotch.io"
}
*/
```

On the other hand, some built-in functions are also available in various libraries. For example <a href="https://lodash.com/docs/4.17.15#clone"> Lodash</a>.