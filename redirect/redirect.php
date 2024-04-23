<?php

if (!isset($_GET['name'])) {
    header( "location: https://google.com");
}

$name = $_GET['name'];
$refererUrl = $_SERVER['HTTP_REFERER'] ?? null;

$data = json_decode(file_get_contents(__DIR__ . '/data.json'), true);

function get_referal($name) {
    global $data;
    foreach ($data['referals'] as $key => $value) {
        if ($value['name'] == $name) {
            return [
                'key' => $key,
                'referal' => $value
            ];
        }
    }
    return null;
}

function get_referer($referal, $url) {
    $referers = $referal['referers'];
    $found = false;
    $lastKey = 0;
    foreach ($referers as $key => $value) {
        if ($value['url'] == $url) {
            $value['click']++;
            return [
                'key' => $key,
                'referer' => $value
            ];
        }
        $lastKey = $key;
    }
    return [
        'key' => $lastKey,
        'referer' => [
            "url" => $url,
            "click" => 1
        ]
    ];
}

if ($referal = get_referal($name)) {
    if ($refererUrl) {
        $referer = get_referer($referal['referal'], $name);
    } else {
        $referer = get_referer($referal['referal'], 'other');
    }

    $referal['referal']['referers'][$referer['key']] = $referer['referer'];
    $data['referals'][$referal['key']] = $referal['referal'];

    file_put_contents(__DIR__ . '/data.json', json_encode($data));

    header( "location: " . $referal['referal']['url']);
}