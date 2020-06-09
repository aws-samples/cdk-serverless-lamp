<?php

require __DIR__.'/vendor/autoload.php';

lambda(function (array $event) {
 // Do anything you want here
 // For example:
 return 'Hello ' . ($event['name'] ?? 'world');
});

?>
