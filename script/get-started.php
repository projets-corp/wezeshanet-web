<?php

	$url = "http://wezeshanet.com/api/v1/request_demo";
	$name = $_POST['first_name'] . ' ' . $_POST['last_name'];
	$email = $_POST['email'];
	$country = $_POST['country'];
	$city = $_POST['city'];
	$comments = $_POST['comment'] ?? null;

	$curl = curl_init($url);
	$data = [
		'name' => $name,
		'email' => $email,
		'country' => $country,
		'city' => $city,
		'comments' => $comments,
	];
	
	curl_setopt_array($curl, [
		CURL_RETURNTRANSFER => true,
		CURLOPT_CUSTOMREQUEST => 'POST',
		CURLOPT_HTTPHEADER => [
			'Content-Type: application/x-www-form-urlencoded',
		],
		CURLOPT_POST => true
	]);
	curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

	$res = curl_exec($curl);

	curl_close($curl);

	header('Location: ' . $_SERVER['HTTP_REFERER']);