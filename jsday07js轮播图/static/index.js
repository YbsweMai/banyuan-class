window.onload = function (){
    
    var index = 1;

    var container = document.getElementsByClassName("container")[0];
    var banner = document.getElementsByClassName("banner")[0];
    var img = document.getElementsByClassName("banner_img")[0];
    var li = document.getElementsByClassName("banner_li");
    var arrows = document.getElementsByClassName("arrow");

    var buttonContainer = document.getElementsByClassName("button_container")[0];

    var buttons = document.getElementsByClassName("button_container_circle");

    // 左
    var prev = document.getElementsByClassName("prev")[0];
    // 右
    var next = document.getElementsByClassName("next")[0];

    var timer;

    stopAnimation();

    starAnimation();

    controlMouse();

    blindClickButton();

    //offset
    var offset = img.offsetWidth ;

    container.style.width = offset + "px";
    container.style.height = img.offsetHeight + "px";
    container.style.overflow = "hidden";


    // 给banner 设置宽高
    banner.style.height = img.offsetHeight + "px";
    banner.style.width = offset * li.length + "px";
    banner.style.left = -offset + "px"; /*默认位移设置*/

    // 初始化arrow高度
    for(var i = 0; i < arrows.length; i++){
        arrows[i].style.top = parseInt(img.offsetHeight)/2 - parseInt(arrows[i].offsetHeight)/2 + 'px';
    }

    //初始化button位置
    buttonContainer.style.top = img.offsetHeight - 40 + "px";
    buttonContainer.style.left = (offset - buttonContainer.offsetWidth) / 2 + 'px'; 

    // 箭头向左
    prev.onclick = function(){
        index  --;
        animate();
    }
    // 箭头向右
    next.onclick = function(){
        index ++;
        animate();
    }
    // 轮播动画
    function animate(){
        banner.style.transition = "0.3s";
        banner.style.left = -parseInt(offset) * index + "px";

        // 无限循环
        if(index === 0){
            index = li.length-2;
            reLocation();
        } else if(index === li.length-1){
            index = 1;
            reLocation();
        }
        controlButton();
    }

    function reLocation(){
        setTimeout(()=>{
            banner.style.transition = "0s";
            banner.style.left = -parseInt(offset) * index + "px";
        },300)
    }
    
    // 控制button
    function controlButton(){
        var key;
        if(index == 0){
            key = 5;
        }else if (index == li.length-1){
            key = 1;
        }else {
            key = index;
        }
        
        for(var i = 0; i < buttons.length;i++){
            if(key == buttons[i].getAttribute("index")){
                buttons[i].className = 'button_container_circle on'
            }else {
                buttons[i].className = 'button_container_circle'
            }
        }
    }

    // 绑定button
    function blindClickButton(){
        for(var i = 0;i < buttons.length; i++){
            (function(ii){
                buttons[ii].onclick = function(){
                    index = buttons[ii].getAttribute("index")
                    animate();
                }
            })(i);          
        }
    }

    // 设置播放时间
    function starAnimation(){
        timer = setInterval(function(){
            next.onclick();
        },2000)
    }

    function stopAnimation(){
        if(timer){
            clearInterval(timer);
        }
    }

    // 控制动画开始结束
    function controlMouse(){
        container.onmousemove = function(){
            stopAnimation();
        }

        container.onmouseout = function(){
            starAnimation();
        }
    }
}
