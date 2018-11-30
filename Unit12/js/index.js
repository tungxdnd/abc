$(document).ready(function() {
			$('#section').on('mouseenter',function(){
				$('#section').css('background-color','yellow');
				/*$(this).css('background-color','yellow');*/
			})
			$('#section').on('mouseleave',function(){
				$(this).css('background-color','black');
			})

			$('#size').on('change',function(){
				var value = $(this).val();
				if (value ==16) {
					$('#price').text('Giá 5.000.000 VNĐ');
				}
				if (value == 32) {
					$('#price').text('Giá 6.000.000 VNĐ');
				}
				if (value ==64) {
					$('#price').text('Giá 7.000.000 VNĐ');
				}
			})

			$('#show').on('click',function(){
				$('#section').show(1000);
			})

			$('#hide').on('click',function(){
				$('#section').hide(1000);
			})
			$('#toggle').on('click',function(){
				$('#section').toggle(1000);
			})
			/*$('#slidedown').on('click',function(){
				$('#section').slidedown(22);
			})*/


			
			$('input').on('click',function(){
				$('#content').children().eq(1).css('color','red');
				// $('#content1').parent().next().css('color','blue');
				$('#content1').children('.choose').css('color','orange');

			});
		})
		