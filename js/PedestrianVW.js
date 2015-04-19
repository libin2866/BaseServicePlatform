/**
 * Created by libin on 15/4/19.
 */


function AdustWindowHeight(){

    var winHeight=$(window).height();
    //$("body").height(winHeight-20);
    //$("#pedesrtian").height(winHeight);
    console.log(winHeight);

    $("body").stop(true,false).animate({
        height:winHeight
    },250)
    $("#pedestrian-left").height(winHeight-10);
    $("#pedestrian-right").height(winHeight-10);


}

$(window).load(AdustWindowHeight());//网页所有的内容加载完毕后才执行

//$(window).resize(AdustWindowHeight());

window.onresize= function (){
    AdustWindowHeight();
};//改变窗口大小时执行