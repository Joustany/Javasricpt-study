<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/Xhtml11/DTD/xhtml11-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>基于iframe的远程脚本</title>
<body>
<?php

$color = $_GET['color'];
if($color == 'red'){
	print("<div id='val1'>Rose</div>");
	print("<div id='val2'>Apple</div>");
}
else if($color == 'blue'){
	print("<div id='val1'>Berry</div>");
	print("<div id='val2'>Sky</div>");
}
?>
</body>
</html>