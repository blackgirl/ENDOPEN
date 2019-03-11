$(document).ready(function() { // вся магия после загрузки страницы
	
	// ОФОРМИТЬ ПОКУПКУ
	$("#ajaxform").submit(function() { // перехватываем все при событии отправки
		var form = $(this); // запишем форму, чтобы потом не было проблем с this
		var error = false; // предварительно ошибок нет
		form.find('input').each( function() { // пробежим по каждому полю в форме
			if($(this).val() == '') { // если находим пустое
				alert('Заполните поле "'+$(this).attr('placeholder')+'"!'); // говорим заполняй!
				error = true; // ошибка
			}
		});
		if(!error) { // если ошибки нет
			var data = form.serialize(); // подготавливаем данные
			console.log(data);
			$.ajax({ // инициализируем ajax запрос
			    type: 'POST', // отправляем в POST формате, можно GET
			    url: 'sender.php', // путь до обработчика, у нас он лежит в той же папке
			    dataType: 'json', // ответ ждем в json формате
			    data: data, // данные для отправки
		        beforeSend: function(data) { // событие до отправки
		            form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
		        },
		        success: function(data){ // событие после удачного обращения к серверу и получения ответа
		       		if(data['error']) { // если обработчик вернул ошибку
		       			alert(data['error']); // покажем её текст
		       		} else { // если все прошло ок
		       			$('.my-cart-modal').modal('hide').find("input:text").val('').end();
		       			alert('Спасибо!'); // пишем что все ок
		       		}
		        },
		        error: function (xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
		            alert(xhr.status); // покажем ответ сервера
		            alert(thrownError); // и текст ошибки
		        },
		        complete: function(data) { // событие после любого исхода
		            form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
		        }
		    });
		}
		return false; // вырубаем стандартную отправку формы
	});
	
	// ХОЧУ СКИДКУ
	$("#ajaxform2").submit(function() { // перехватываем все при событии отправки
		var form = $(this); // запишем форму, чтобы потом не было проблем с this
		var error = false; // предварительно ошибок нет
		form.find('input:not(#email)').each( function() { // пробежим по каждому полю в форме
			if($(this).val() == '') { // если находим пустое
				alert('Заполните FUCK "'+$(this).attr('placeholder')+'"!'); // говорим заполняй!
				error = true; // ошибка
			}
		});
		if(!error) { // если ошибки нет
			var data = form.serialize(); // подготавливаем данные
			console.log(data);
			$.ajax({ // инициализируем ajax запрос
		    type: 'POST', // отправляем в POST формате, можно GET
		    url: 'catalog/view/javascript/callback/sender2.php', // путь до обработчика, у нас он лежит в той же папке
		    dataType: 'json', // ответ ждем в json формате
		    data: data, // даINO6/нные для отправки
	        beforeSend: function(data) { // событие до отправки
	            form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
	        },
	        success: function(data){ // событие после удачного обращения к серверу и получения ответа
	       		if(data['error']) { // если обработчик вернул ошибку
	       			alert(data['error']); // покажем её текст
	       		} else { // если все прошло ок
	       			alert('Письмо отвравлено!'); // пишем что все ок
	       			$('.discount-modal').modal('hide').find("input:text").val('').end();
	       		}
	        },
	        error: function (xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
	            alert(xhr.status); // покажем ответ сервера
	            alert(thrownError); // и текст ошибки
	        },
	        complete: function(data) { // событие после любого исхода
	            form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
	        }
	    });
		}
		return false; // вырубаем стандартную отправку формы
	});
	
	// ОСТАВИТЬ АНКЕТУ ПАРТНЕРА
	$("#ajaxform3").submit(function() { // перехватываем все при событии отправки
		var form = $(this); // запишем форму, чтобы потом не было проблем с this
		var error = false; // предварительно ошибок нет
		form.find('input').each( function() { // пробежим по каждому полю в форме
			if($(this).val() == '') { // если находим пустое
				alert('Заполните поле "'+$(this).attr('placeholder')+'"!'); // говорим заполняй!
				error = true; // ошибка
			}
		});
		if(!error) { // если ошибки нет
			var data = form.serialize(); // подготавливаем данные
			console.log(data);
			$.ajax({ // инициализируем ajax запрос
		    type: 'POST', // отправляем в POST формате, можно GET
		    url: 'sender3.php', // путь до обработчика, у нас он лежит в той же папке
		    dataType: 'json', // ответ ждем в json формате
		    data: data, // даINO6/нные для отправки
	        beforeSend: function(data) { // событие до отправки
	            form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
	        },
	        success: function(data){ // событие после удачного обращения к серверу и получения ответа
	       		if(data['error']) { // если обработчик вернул ошибку
	       			alert(data['error']); // покажем её текст
	       		} else { // если все прошло ок
	       			alert('Письмо отвравлено!'); // пишем что все ок
	       			// $('.contact-modal').modal('hide').find("input:text").val('').end();
	       		}
	        },
	        error: function (xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
	            alert(xhr.status); // покажем ответ сервера
	            alert(thrownError); // и текст ошибки
	        },
	        complete: function(data) { // событие после любого исхода
	            form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
	        }
	    });
		}
		return false; // вырубаем стандартную отправку формы
	});
});