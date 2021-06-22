(function($) {
	$(document).ready( function () {
		var table = $('#list_table').DataTable( {
			"language": {
                url: "https://cdn.datatables.net/plug-ins/1.10.20/i18n/Persian.json"
            },
			"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
			"dom": '<"top"i>rt<"bottom"p><"clear">'
		});
		$(document).on( 'keyup click','#search_text, #search_text', function () {
			table.search($('#search_text').val()).draw();
		});
	});
})(jQuery);