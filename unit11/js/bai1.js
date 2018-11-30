
$(function() {


	$('#add').on('click',function() {
		var text = $('#input').val();
		var html = `<tr>
						<td class="check"></td>
						<td class="text">`+text+`</td>
						<td class="del"><i class="fas fa-times"></i></td>
					</tr> `;
		if (text == '' ) {
			alert("Nhập nội dung đi bạn trẻ");
		} else {
			$('#input').val('');
			$('#content').append(html);
		}
	});


	$('#content').on('click','.text',function() {
		var index = $(this);
		if (index.prev().html() == '') {
			index.css({'text-decoration': 'line-through', 'color': '#fff'});
			index.prev().html('<i class="fas fa-check"></i>');
			$(index).parent().css('background','rgba(179, 179, 179, 1)');
		} else {
			index.css({'text-decoration':'none', 'color': '#000000'});
			index.prev().html('');
			$(index).parent().css('background','#efeeee');
		}
		
	})


	$('#content').on('click','.check',function() {
		var index = $(this);
		if (index.html() == '') {
			index.next().css({'text-decoration': 'line-through', 'color': '#fff'})
			index.html('<i class="fas fa-check"></i>');
			$(index).parent().css('background','rgba(179, 179, 179, 1)');
		} else {
			index.next().css({'text-decoration':'none', 'color': '#000000'});
			index.html('');
			$(index).parent().css('background','#efeeee');
		}
		
	})


	$('#content').on('click','.del',function() { 
		var index = $(this);
		$(index).parent().remove();
	})
})