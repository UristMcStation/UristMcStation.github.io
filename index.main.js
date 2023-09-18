function padding(i) {
    if (i < 10) {
        return "0" + i;
    }
    return i;
}

function showTime() {
    var now = new Date();
    now.setFullYear(now.getFullYear()+560);

    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    var D = now.getDate();
    var M = now.getMonth();

    document.getElementById("local-time").innerHTML =
        now.getFullYear() + "/" +
        padding(now.getMonth()) + "/" +
        padding(now.getDay()) +
        " - " +
        padding(now.getHours()) + ":" +
        padding(now.getMinutes()) + ":" +
        padding(now.getSeconds());
    
    t = setTimeout(
        function() {
            showTime()
        }, 500);
}

showTime();