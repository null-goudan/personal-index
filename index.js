function load2D_bg(){
    var background = document.getElementById("background");
    var range = 40;
    var calcValue = function calcValue(a, b) {
        return (a / b * range - range / 2).toFixed(1);
    };
    var timeout = void 0;
    document.addEventListener('mousemove',
        function(_ref) {
            var x = _ref.x,
                y = _ref.y;
            if (timeout) {
                window.cancelAnimationFrame(timeout);
            }
            timeout = window.requestAnimationFrame(function() {
                var yValue = calcValue(y, window.innerHeight);
                var xValue = calcValue(x, window.innerWidth);


                background.style.backgroundPositionX = xValue * 1 -200+ "px ";
                background.style.backgroundPositionY =  (-yValue * 0.75-50 ) + "px";
            })
        },false);

}

function load2D_bg2(){
    var background = document.getElementById("background2");
    var range = 40;
    var calcValue = function calcValue(a, b) {
        return (a / b * range - range / 2).toFixed(1);
    };
    var timeout = void 0;
    document.addEventListener('mousemove',
        function(_ref) {
            var x = _ref.x,
                y = _ref.y;
            if (timeout) {
                window.cancelAnimationFrame(timeout);
            }
            timeout = window.requestAnimationFrame(function() {
                var yValue = calcValue(y, window.innerHeight);
                var xValue = calcValue(x, window.innerWidth);

                background.style.backgroundPositionX = xValue *1 -200+ "px ";
                background.style.backgroundPositionY =  (-yValue * 0.75-50 ) + "px";
            })
        },false);

}

function load2D_bg2_2(){
    var background = document.getElementById("background2");
    document.onmousemove=function(){
        console.log(window.outerHeight);
        background.style.opacity=1-(getMousePos()/window.outerHeight*2.5);
    }
}

function getMousePos(event) {
    var e = event || window.event;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var y = e.pageY || e.clientY + scrollY;
    return y;
}

function load2D_lihui(){
    var background = document.getElementById("lihui");
    var range = 40;
    var calcValue = function calcValue(a, b) {
        return (a / b * range - range / 2).toFixed(1);
    };
    var timeout = void 0;
    document.addEventListener('mousemove',
        function(_ref) {
            var x = _ref.x,
                y = _ref.y;
            if (timeout) {
                window.cancelAnimationFrame(timeout);
            }
            timeout = window.requestAnimationFrame(function() {
                var xValue = calcValue(x, window.innerWidth);

                background.style.left = xValue * 0.7-100 + "px";

            })
        },false);

}

function load2D_yinghua(){
    var background = document.getElementById("yinghua");
    var range = 40;
    var calcValue = function calcValue(a, b) {
        return (a / b * range - range / 2).toFixed(1);
    };
    var timeout = void 0;
    document.addEventListener('mousemove',
        function(_ref) {
            var x = _ref.x,
                y = _ref.y;
            if (timeout) {
                window.cancelAnimationFrame(timeout);
            }
            timeout = window.requestAnimationFrame(function() {
                var yValue = calcValue(y, window.innerHeight);
                var xValue = calcValue(x, window.innerWidth);
                background.style.backgroundPositionX = xValue * 1.5 -200+ "px ";
                background.style.backgroundPositionY =  (-yValue * 1-50 ) + "px";
            })
        },false);

}
var i=0;

function aboutMe(){
    var slogan = document.getElementById("slogan");
    var slogan2 = document.getElementById("slogan2");
    if(i==0){
        i=1;
        slogan.style.height="150px";
        slogan2.innerHTML="小学六年级接触易语言开始，我和计算机就结上不解之缘，正式学习编程是在初三，学习的C语言，高二开始学习java，但是现" +
            "在忘光了，大学主攻C++和python，主走计算机视觉方向，虽在生物工程呆了一年，但是我相信我不比计算机的差。目前技术栈：C语言，C++ qt mfc" +
            "、OpenCV、深度学习、51单片机、stm32、树莓派、jetson nano KIT等软硬兼施";
    } else {
        i=0;
        slogan.style.height="50px";
        slogan2.innerHTML="\"唯有爱和科技不可辜负\"";
    }

}
