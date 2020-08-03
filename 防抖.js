

    function debounce(func, time) {
        var timer;
        return function() {
            clearTimeout(timer);
            var args = arguments
            timer = setTimeout(function() {
                func.apply(null, args);
            },time)
        }
    }
    var handle = debounce(function() {
        console.log(11)
    }, 1000)
    window.onresize = function() {
        handle()
    }
