$(function() {
    $.fn.autoClear = function () {
        // сохраняем во внутреннюю переменную текущее значение
        $(this).each(function() {
            $(this).data("autoclear", $(this).attr("value"));
        });
        $(this)
            .bind('focus', function() {   // обработка фокуса
                if ($(this).attr("value") == $(this).data("autoclear")) {
                    $(this).attr("value", "").addClass('autoclear-normalcolor');
                }
            })
            .bind('blur', function() {    // обработка потери фокуса
                if ($(this).attr("value") == "") {
                    $(this).attr("value", $(this).data("autoclear")).removeClass('autoclear-normalcolor');
                }
            });
        return $(this);
    }
});
$(document).ready(function(){
	$('.autoclear').autoClear();
	$('.zoom, a[rel="gallery"]').fancybox();
	$('.go-box-up').bind('click',function(){
		$(this).children('a').addClass('active');
		$(this).children('a').next('.box-up').css('display','block');
		$('.clear-box-up').css('display','block');
	});
	$(".box-tabs .tab-content").hide();
	$('.box-tabs1 .tab-caption').bind("click", function(){
		$('.box-tabs1 .tab-caption').removeClass("tab-current");
		$(this).addClass("tab-current");
		$(".box-tabs1 .tab-content").hide();
		$(".box-tabs1 .tab-content:eq("+$(this).index()+")").show();
	});
	$(".box-tabs1 .tab-caption:first").trigger("click");
	$('.box-tabs2 .tab-caption').bind("click", function(){
		$('.box-tabs2 .tab-caption').removeClass("tab-current");
		$(this).addClass("tab-current");
		$(".box-tabs2 .tab-content").hide();
		$(".box-tabs2 .tab-content:eq("+$(this).index()+")").show();
	});
	$(".box-tabs2 .tab-caption:first").trigger("click");
	$('.box-tabs3 .tab-caption').bind("click", function(){
		$('.box-tabs3 .tab-caption').removeClass("tab-current");
		$(this).addClass("tab-current");
		$(".box-tabs3 .tab-content").hide();
		$(".box-tabs3 .tab-content:eq("+$(this).index()+")").show();
	});
	$(".box-tabs3 .tab-caption:first").trigger("click");
	$('.box-tabs4 .tab-caption').bind("click", function(){
		$('.box-tabs4 .tab-caption').removeClass("tab-current");
		$(this).addClass("tab-current");
		$(".box-tabs4 .tab-content").hide();
		$(".box-tabs4 .tab-content:eq("+$(this).index()+")").show();
	});
	$(".box-tabs4 .tab-caption:first").trigger("click");
	$(".CheckBoxClass").change(function(){
		if($(this).is(":checked")){
			$(this).parent("label").addClass("LabelSelected");
		}else{
			$(this).parent("label").removeClass("LabelSelected");
		}
	});
	$(".select-nice select").chosen();
	$(".chzn-container").bind('click',function(){
		$(this).parents('.select-nice').addClass("select-active");
	});
	var _height = $('.box-up').height();
	$('.clear-box-up').css('height', _height);
	$('.close').bind('click',function(){
		$('.form-position, .overlay').css('display','none');
	});
	$('.link-up').bind('click',function(){
		$('.form-position, .overlay').css('display','block');
		return false;
	});
	 $('.in-slider').nivoSlider({
		  effect:'fade'
	 });
	$('.inc-img-icons span').tooltip();
});// document.ready


