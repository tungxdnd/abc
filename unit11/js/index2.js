$(function () {

	$('#add').click(function(){
					var input = $('#input').val()
					$('table').prepend(`<tr>
						<td><input type="checkbox" class="checkbox"></td>
						<td> ` + input +` 
						</td>
						<td><button content =`+ input +` class="edit">Edit</button></td>
						<td><button class="delete">Delete</button></td>
					</tr>`
						)
					$('#input').val('')
				})
				$('body').on('click', '.delete', function(){
					$(this).parent().parent().remove();
				})

		$('#toggle-check').click(function(){
			var checkbox = $('.checkbox');
			for (var i = checkbox.length - 1; i >= 0; i--){
				checkbox[i].checked = !checkbox[i].checked;
			}

			/*if ($a == 1) {
				$b == 0;
			}
			else {

			}*/

		})

		$('body').on('click', '.edit', function(){
			var content = $(this).attr('content');

			$('#input').val(content)
			$('#add').text('Update').attr('id', 'update')
		})


		
	})