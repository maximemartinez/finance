<!DOCTYPE html>
<?php
session_start();

	if(isset($_POST['address']) && $_POST['address'] != null)
	{
		
	} else { $error_address = "l'adresse n'est pas valide"; }

	if(isset($_POST['block']) && $_POST['block'] != null)
	{
		/*if($_POST['block'] < $blockmax)
		{
			echo "ok";
		} else { $error_block = "le numero entré est superieur au nombre total de blocks"; }*/

	} else { $error_block = "le numero de block n'est pas valide";}

	if(isset($_POST['hash']) && $_POST['hash'] != null) {
		?><script type="text/javascript">
		$(document).ready(function() {
		$.ajax({
		url : "https://api.blockcypher.com/v1/btc/main/blocks/"+<?php echo $_POST['hash'];?>,
		dataType : "json",
		type : "GET",
		timeout: "5000",
		async : true,

		success : function(data) {
			$('#bitcoin_block_hash').append(data.hash);
		},

		error : function(xhr, status, err) {
			printf(erreur);
			$('#bitcoin_block_hash').append(err+" N/A");
		}
	});
});
		</script><?php
	}

?>
<html>
<head>
	<title>TP Finance Cedric et Maxime</title>

	<script type="text/javascript" src="../js/bitcoin.js" defer></script>
</head>
<body>
	<form method="POST" action="">
		<table>
			<tr>
				<td>entrez une adresse :</td>
				<td><input type="address" name="address" placeholder="address"></td>
				<td><input type="submit" name="address"></td>
			</tr></br>
			<tr>
				<td>entrez un numero de block :</td>
				<td><input type="block" name="block" placeholder="block"></td>
				<td><input type="submit" name="block"></td>
			</tr></br>
			<tr>
				<td>entrez un hash :</td>
				<td><input type="hash" name="hash" placeholder="hash"></td>
				<td><input type="submit" name="hash"></td>
			</tr>
		</table>

		
	</form>

</body>
</html>