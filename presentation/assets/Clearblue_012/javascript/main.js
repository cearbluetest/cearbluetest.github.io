(function() {
	$('#slider').on('ready', '.Clearblue_012', function(e, el) {
		var slide = $('#container', el);


		if(isAnimation)
		{
			$('.img',slide).delay(200).fadeIn(600);
			$('.bub_1',slide).delay(800).fadeIn(600);
			$('.bub_2',slide).delay(1400).fadeIn(600);
			$('.bub_3',slide).delay(2000).fadeIn(600);
			$('.bub_4',slide).delay(2600).fadeIn(600);
			$('.text1',slide).delay(3500).fadeIn(600);
			$('.text2',slide).delay(4000).fadeIn(1000);
			$('#box_1',slide).delay(4500).fadeIn(1000);
			$('#box_2',slide).delay(5000).fadeIn(1000);
			$('#box_3',slide).delay(5500).fadeIn(1000);
		
			
			
		}
	else
		{
			
			$('.img',slide).show();
			$('.bub_1',slide).show();
			$('.bub_2',slide).show();
			$('.bub_3',slide).show();
			$('.bub_4',slide).show();
			$('.text1',slide).show();
			$('.text2',slide).show();
			$('#box_1',slide).show();
			$('#box_2',slide).show();
			$('#box_3',slide).show();
			

		}
		
/*control ref	*/

			function setUpRef(el){
			$('.next_btn').bind('click',function(){
				if($('#refCo'+el+'_orange').css('display')=="block")
					$(".ref"+el).controller().hide();
			});
			
			$('.pre_btn').bind('click',function(){
				if($('#refCo'+el+'_orange').css('display')=="block")
					$(".ref"+el).controller().hide();
			});
			$(".ref"+el).each(function () {
				if ($(this).attr("rel") != null) {

					$(this).drcom_customizepopup({
						closeInside : false,
						effect : "split",
						duration : 1000,
						effectOptions : {
							row : 3,
							col : 6,
							direction : "leftbottom"
						}
					});
				} else {
					$(this).bind("click", function () {
						$($(this).attr("related")).controller().toggle();
					});
				}
			});
			$("#refCo"+el+"_orange").show().css("visibility", "hidden");

			var number = Math.ceil($(".ref"+el+" .ref_content>div").height() / $(".ref"+el+" .ref_content").height());
			$("#refCo"+el+"_orange").hide().css("visibility", "visible");

			$(".ref"+el+" .ref_prev").addClass("ref_button_disable");
			if (number == 1) {
				$(".ref"+el+" .ref_next").addClass("ref_button_disable");
				return;
			}

			var pageCurrent = 0;
			$(".ref"+el+" .ref_button").click(function (ev) {
				if ($(this).hasClass("ref_button_disable")) {
					ev.stopImmediatePropagation();
					return false;
				}
			});
			$(".ref"+el+" .ref_next").click(function () {
				pageCurrent++;
				$(".ref"+el+" .ref_content>div").animate({
					transform : "translate3d(0px,-" + pageCurrent * $(".ref"+el+" .ref_content").height() + "px,0px)"
				}, 800);

				if (pageCurrent == number - 1)
					$(this).addClass("ref_button_disable");
				$(".ref"+el+" .ref_prev").removeClass("ref_button_disable");

			});
			$(".ref_prev").click(function () {
				pageCurrent--;
				$(".ref"+el+" .ref_content>div").animate({
					transform : "translate3d(0px,-" + pageCurrent * $(".ref"+el+" .ref_content").height() + "px,0px)"
				}, 800);
				if (pageCurrent == 0)
					$(this).addClass("ref_button_disable");
				$(".ref"+el+" .ref_next").removeClass("ref_button_disable");

			});	
			
			$(".refCo"+el+" .close_ref").bind('tapone',function(){
				$(".ref"+el).controller().hide();	
			});
		}
/*control ref	*/				
		
		
	});
})();