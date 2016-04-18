			
			function addListItem() {
				var text = $("#new-text").val();
				$("#todolist").append('<li> <input type="checkbox" class="done" />' + text + ' <button class="delete"> - </button> </li>');
				$("#new-text").val('');
				

			}

			function deleteItem () {
				$(this).parent().remove();
			



			}


			function finishItem() {
				
				if ( $(this).parent().css('textDecoration') == 'line-through' ) {
					$(this).parent().css({
						'color': '#F57200',
						'textDecoration' : 'none'
					});

				} else {
					$(this).parent().css("color", "rgb(29,138,171)").css("textDecoration","line-through");

				}


			}


			$(function() {
				$("#add").on('click', addListItem);

				$(document).on('click', ".delete", deleteItem);
				$(document).on('click', ".done", finishItem);
			});

		
  				
			

