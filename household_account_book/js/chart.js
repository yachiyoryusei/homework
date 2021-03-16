"use strict";
$(function(){
    ///////////////report.html//////////////
    $('.simple-pie-chart').each( function(){

		// 要素を回転させる角度を算出する（ data-chart-valの値 * 360度/100% ）
		var value = $(this).data('chart-val');
		var angle = value * 3.6;

		// 中心のテキストに「〇〇%」を表示させる
		$(this).find('.percent-val').append( value );

		// 180度より大きい場合は背景色を反転する
		if( angle > 180 ){
			$(this).find('.chart-meter').addClass('inversion');
		}
		// 算出した角度を要素に反映する
		$(this).find('.chart-meter').css('transform','rotate('+ angle +'deg)');
	});
});