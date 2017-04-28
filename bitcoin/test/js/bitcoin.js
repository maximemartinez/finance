$(document).ready(function() {
	$.ajax({
		url : "https://api.blockcypher.com/v1/btc/main/",
		dataType : "json",
		type : "GET",
		timeout: "5000",
		async : true,

		success : function(data) {
			$('#bitcoin_block_height').append(data.height);
		},

		error : function(xhr, status, err) {
			$('#bitcoin_block_hash').append(err+" N/A");
		}
	});
});

