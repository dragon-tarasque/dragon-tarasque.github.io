<?php

use Stevebauman\Location\Facades\Location;

require __DIR__ . '/../vendor/autoload.php';

use ipinfo\ipinfo\IPinfo;

if (isset($_GET['ip'])) {
    $access_token = 'a3fb35b3183b5d';
    $client = new IPinfo($access_token);

    $ip_address = $_GET['ip'];
    $details = $client->getDetails($ip_address);

    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($details);
    exit;
}
