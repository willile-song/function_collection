// function throttle(func, time) {
//     var timer;
//     return function() {
//         if(timer) return;
//         var args = arguments;
//         timer = setTimeout(function() {
//             func.apply(null,args)
//             timer = null;
//         },time)
//     }
// }

// var handle_throttle = throttle(function() {
//     console.log(88)
// },1000)

// window.onscroll = function() {
//     handle_throttle()
// }

function throttle_2(func, time) {
    var timer;
    return function() {
        if(!timer || Date.now() - timer >= time) {
            func.apply(null, arguments)
            timer = Date.now()
        }
    }
}

var handle_throttle_2 = throttle_2(function() {
    console.log(99)
}, 1000)

window.onscroll = function() {
    handle_throttle_2()
}