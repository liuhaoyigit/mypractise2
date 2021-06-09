function QMtechnology() {
    var oLi = document.getElementsByTagName('li')
    var oBox = document.getElementsByClassName('box')
    for (var i = 0; i < oLi.length; i++) {
        oLi[i].index = i
        oLi[i].onclick = function () {
            for (i = 0; i < oLi.length; i++) {
                oLi[i].className = 'tab'
                oBox[i].className = 'box'
            }
            this.className = 'tab active'
            oBox[this.index].className = 'box active'
        }
    }
}