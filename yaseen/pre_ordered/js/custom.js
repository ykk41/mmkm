setInterval(function time() {
    var d = new Date();
    var hours = 24 - d.getHours();
    var min = 60 - d.getMinutes();
    if ((min + '').length == 1) {
        min = '0' + min;
    }
    var sec = 60 - d.getSeconds();
    if ((sec + '').length == 1) {
        sec = '0' + sec;
    }
    jQuery('#the-final-countdown div').html('<span>' + hours + '<strong>Hours</strong></span><span>' + min + '<strong>MIN</strong></span><span>' + sec + '<strong>SEC</strong></span>')
}, 1000);