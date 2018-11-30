$(function () {
			$('#content .text').css('color', 'red')
			$('#first ~ .item').css('color', 'blue')
			$('h1').html('<h1 style="color: blue">Huhuhu</h1>')
			$('input').val('888')
			$('input').css({'height': '50px', 'color': 'red'})
			/*$('input').before('<h2>Football League</h2>')
			$('p').removeClass('text')*/
/*
			$('button').on('click', function(){
				alert('KhâmBlue')
			})*/

			/*$('body').on('click', 'button', function(){
				alert('Welcome U')
			})*/

			$('#btn').on('click', function(){
				alert('Welcome U')
			})

			$('#add').click(function(){
				var input = $('#input').val ()
				$('table').prepend(`<tr>
					<td><input type="checkbox"></td>
					<td> ` + input +` 
					</td>
					<td><button class="edit">Edit</button></td>
					<td><button class="delete">Delete</button></td>
				</tr>`
					)
				$('#input').val('')
			})
			$('body').on('click', 'del', function(){
				$(this).parent().parent().remove();
			})

		})