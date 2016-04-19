<?php
if( 
		(	isset($_POST['name']) && !empty($_POST['name'])			)
		&&
		(	isset($_POST['contact']) && !empty($_POST['contact']) 	)
		&&
		(	isset($_POST['message']) && !empty($_POST['message'])	)
	)
	{ 							
        $to = 'ndz2000@mail.ru'; 		//Почта получателя, через запятую можно указать сколько угодно адресов
		
        $subject = 'Задан вопрос'; 		//Загаловок сообщения
        $message = '
						<html>
							<head>
								<title>'.$subject.'</title>
							</head>
							<body>
								<p>Имя: '.$_POST['name'].'</p>
								<p>Контакты: '.$_POST['contact'].'</p>  
								<p>Сообщение: '.$_POST['message'].'</p> 
							</body>
						</html>'; //Текст нащего сообщения можно использовать HTML теги
						
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
};