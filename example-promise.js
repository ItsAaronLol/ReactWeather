// function getTempPromise (location) {
//   return new Promise(function(resolve, reject){
//     resolve(79);
//     reject('City not found');
//   });
// }
//
// //first then is the success case
// getTempPromise('Philadelphia').then(function(temp){
//   console.log('promise success', temp);
// }, function (err){
//   console.log('promise success', err);
// })

function addPromise(a, b){
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    } else {
      reject('you must add two numbers')
    }
  });

}

addPromise(3,4).then(function(sum){
  console.log(sum);
}, function (err){
  console.log(err)
})
