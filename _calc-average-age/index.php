<?php 
$file 	= fopen('registration.csv', 'r');
$cities = array();

$age = 0;
$ages = array();
while (($line = fgetcsv($file)) !== FALSE)
{
	if (2018 - date('Y', strtotime($line[0])) >= 16)
	{
		$ages[] = 2018 - date('Y', strtotime($line[0]));
	}

}
fclose($file);

$age = 0;
foreach($ages as $a)
{
	$age += $a;	
}

//var_dump($ages);
echo $age / count($ages);		
?>