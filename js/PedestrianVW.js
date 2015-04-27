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

$(window).load(
		AdustWindowHeight()//,getConnectionAj()
		);//网页所有的内容加载完毕后才执行,
		//

//$(window).resize(AdustWindowHeight());

window.onresize= function (){
    AdustWindowHeight();
};//改变窗口大小时执行

//jQuery(document).ready(function($)
function PicAdjustforplugin(){
    // We only want these styles applied when javascript is enabled
    $("#thumbs").hide();
    $('div.navigation').css({'width' : '30%', 'float' : 'left'});
    $('div.content').css('display', 'block');

    // Initially set opacity on thumbs and add
    // additional styling for hover effect on thumbs
    var onMouseOutOpacity = 0.67;
   /* $('#thumbs ul.thumbs li').opacityrollover({
        mouseOutOpacity:   onMouseOutOpacity,
        mouseOverOpacity:  1.0,
        fadeSpeed:         'fast',
        exemptionSelector: '.selected'
    });*/

    // Initialize Advanced Galleriffic Gallery
    var gallery = $('#thumbs').galleriffic({
        delay:                     1500,
        numThumbs:                 15,
        preloadAhead:              10,
        enableTopPager:            true,
        enableBottomPager:         true,
        maxPagesToShow:            6,
        imageContainerSel:         '#slideshow',
        controlsContainerSel:      '#controls',
        captionContainerSel:       '#caption',
        loadingContainerSel:       '#loading',
        renderSSControls:          true,
        renderNavControls:         true,
        playLinkText:              '',
        pauseLinkText:             '',
        prevLinkText:              '&lsaquo; 上一张',
        nextLinkText:              '下一张 &rsaquo;',
        nextPageLinkText:          ' &rsaquo;',
        prevPageLinkText:          '&lsaquo;',
        enableHistory:             false,
        autoStart:                 false,
        syncTransitions:           true,
        defaultTransitionDuration: 900,
        onSlideChange:             function(prevIndex, nextIndex) {
            // 'this' refers to the gallery, which is an extension of $('#thumbs')
            this.find('ul.thumbs').children()
                .eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()
                .eq(nextIndex).fadeTo('fast', 1.0);
        },
        onPageTransitionOut:       function(callback) {
            this.fadeTo('fast', 0.0, callback);
        },
        onPageTransitionIn:        function() {
            this.fadeTo('fast', 1.0);
        }
    });

    $("#thumbs").show();
}

/*);*/


function  AddPicturesToDOM(surl,burl,picTitle){

    //var htmlcode='<li><a class="thumb" href="'+burl+'"title="'+picTitle+'"><img src="'+surl+'" alt="'+picTitle+'/></a><div class="image-title">'+picTitle+'</div></div> </li>';
    var htmlcode='<li><a class="thumb" href="'+burl+'"title="'+picTitle+'"><img class="img-size-control" src="'+surl+'" alt="'+picTitle+'"/></a></li>';
    //console.log(htmlcode);
    $("#thumbsUl").append(htmlcode);
}

function renderPics(jsonStr){
	//var json= $.parseJSON(jsonStr.toString());
	console.log(jsonStr.toString());
	var surl,burl,picTitle;
    var thumbUl=$("#thumbsUl");

	for(var i=0;i<jsonStr.length;++i){
		var path=jsonStr[i];
		surl="img/"+path['img'];
		//console.log(jsonStr[i]['img'])
		burl="img/"+path['img'];
		picTitle=path['img'];
      //  var htmlcode='<li><a class="thumb" href="'+burl+'"title="'+picTitle+'"><img src="'+surl+'" alt="'+picTitle+'/></a><div class="image-title"></div></div> </li>';
        var htmlcode='<li><a class="thumb" href="'+burl+'"title="'+picTitle+'"><img class="img-size-control" src="'+surl+'" alt="'+picTitle+'"/></a><div class="caption"><div class="image-title"></div><div class="image-desc"></div></div></li>';
        thumbUl.append(htmlcode);
		//AddPicturesToDOM(surl,burl,picTitle);

	}

    PicAdjustforplugin();

	//
}



(function fillUpImg(){
    function fill() {
       // var surl = "css/images/s1.gif";
        var surl = "css/images/b1.jpg";
        var burl = "css/images/b1.jpg";
        var picTitle = "TestImage";

        for (var i = 1; i < 100; ++i) {
            var j=i%5;
            surl="css/images/"+j+".jpg";
            burl=surl;
            AddPicturesToDOM(surl, burl, picTitle);
        }
        PicAdjustforplugin();
    }
    setTimeout(fill,5000);
})();

 /*/*
$(function(){
    $("#demo1").fancybox({
        'transitionIn'	: 'elastic',
        'transitionOut'	: 'elastic',
        'titlePosition' : 'inside'
    })
    $("a[rel=group]").fancybox({
        'titlePosition' : 'over',
        'cyclic'        : false,//是否循环显示
        'centerOnScroll':true,//弹出窗口始终浏览器居中
        'transitionIn' : 'elastic',
        'transitionOut' : 'elastic',
        'titleFormat'	: function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    });;*/
   /* $("#showdiv").fancybox({'centerOnScroll':true});
    $("#ajax").fancybox({'width':400});
    $("#iframe").fancybox({
        'width':'75%',
        'height':'75%',
        'autoScale':false
    });
    $("#swf").fancybox({
        'autoScale':false
    });
    $("#modal").fancybox({
        'modal':false,
        'overlayShow':true,
        'hideOnOverlayClick':false,
        'hideOnContentClick':false,
        'enableEscapeButton':false,
        'showCloseButton':false,
        'centerOnScroll':true,
        'autoScale':false,
        'width':540,
        'height':360
    });


});*/