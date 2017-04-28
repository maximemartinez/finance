session_start();
$(document).ready(function() {
	$.ajax({
		url : "https://bitcoin.mubiz.com/blocks",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$_SESSION['block'] = $('#bitcoin_block_number').append(data.blocks);

		},

		error : function(xhr, status, err) {
			$('#bitcoin_block_number').append(err+" N/A");
		}
	});
});

//https://api.blockcypher.com/v1/btc/main/blocks/0000000000000000017801388a87de2e58ad2194f06fdf0a0a58f9f8bc0662f3
$(document).ready(function() {
	$.ajax({
		url : "https://api.blockcypher.com/v1/btc/main/blocks/000000000000000001b86fb650e15e0848aa3466c87baa9e72d72d6f9131559c",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout: "5000",
		async : false,

		success : function(data) {
			$('#bitcoin_network_hash').append(data.hash);
		},

		error : function(xhr, status, err) {
			$('#bitcoin_network_hash').append(err+" N/A");
		}
	});
});

$(document).ready(function() {
	$.ajax({
		url : "https://api.blockcypher.com/v1/btc/main/blocks/463433?txstart=1&limit=1",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:"100000",
		async : false,

		success : function(data) {
			$('#bitcoin_blocks').append(data.height);
		},

		error : function(xhr, status, err) {
			$('#bitcoin_blocks').append(err+" N/A");
		}
	});
});

$(document).ready(function() {
	$.ajax({
		url : "https://api.blockcypher.com/v1/btc/main/blocks/463433?txstart=1&limit=1",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:"100000",
		async : false,

		success : function(data) {
			$('#bitcoin_prev').append(data.prev_block);
		},

		error : function(xhr, status, err) {
			$('#bitcoin_prev').append(err+" N/A");
		}
	});
});