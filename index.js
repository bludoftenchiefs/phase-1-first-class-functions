 function receivesAFunction(spy) {
        console.log(spy());
 }

 function returnsANamedFunction() {
      let fn = function() {
            console.log('name');
      }
      return fn;
 }

function returnsAnAnonymousFunction() {
      return function(){
      }
}
// returnsAnAnonymousFunction(function () {return 'name'});
