var qmlib = (function () {
   return {
      extend: function fn(target,source) {
          if(typeof source === 'object'){
             for(var item in source){
                target[item] = source[item];
                if(typeof source[item] === 'object'){
                     target[item] = fn({},source[item])
                }
             }
          } 
          return target;
      },
   };

})();
target={
   a:5,
   b:'ccc'
}
source={
   a:6,
   c:true,
   d : {
      e:'bbb'
   }
}

var newTarget = qmlib.extend(target,source)
source.d.e = 'ccc'
// console.log(newTarget)
