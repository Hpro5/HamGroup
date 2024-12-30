<?php
$directory = 'updates';
$updates = array_diff(scandir($directory), array('..', '.'));
$updates = array_map(function($file) use ($directory) {
    return $directory . '/' . $file;
}, $updates);
echo json_encode($updates);
?>
