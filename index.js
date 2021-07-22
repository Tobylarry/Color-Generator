function colorChange() {
    var colors = Math.random().toString(16).substring(2, 8);

    document.getElementById('container').style.backgroundColor = "#" + colors;
    document.getElementById('color-num').innerHTML = "#" + colors;

}