function init() {
	$.post (
		"core.php",
		{
			"action" : "init"
		},
		showGoods
	);
}

function showGoods(data) {
	data = JSON.parse(data);
	console.log(data);
	var out = '<select>';
	out += '<option data-id="0">Новый товар</option>';
	for (var id in data) {
		out += `<option data-id="${id}">${data[id].name}</option>`;
	}
	out += '</select>';
	$('.allgoods-out').html(out);
	$('.allgoods-out select').on('change', selectGoods); 
	 
}
function selectGoods() {
	var id = $('.allgoods-out select option:selected').attr('data-id');
	console.log(id);
	$.post(
		"core.php",
		{
			"action": "selectOneGoods",
			"gid" : id
		},
		function(data) {
			data = JSON.parse(data);
			console.log(data);
			$('#gname').val(data.name);
			$('#gprice').val(data.price);
			$('#gimg').val(data.img);
			$('#ggallery').val(data.gallery);
			$('#gid').val(data.id);
			$('#gdescription1').val(data.description1);
			$('#gdescription2').val(data.description2);
			$('.content__img').attr('src', data.img).attr('alt', data.name);
		}
	)
}

function saveToDb() {
	var id = $('#gid').val();
	if (id!="") {
		$.post(
			"core.php",
			{
				"action": "updateGoods",
				"id": id,
				"gname": $('#gname').val(),
				"gprice": $('#gprice').val(),
				"ggallery": $('#ggallery').val(),
				"gimg": $('#gimg').val(),
				"gdescription1": $('#gdescription1').val(),
				"gdescription2": $('#gdescription2').val()
			},
			function(data) {
				if (data==1) {
					alert('запись добавлена');
					init();
				} else {
					console.log(data);
				}
			}
		)
	} else {
		$.post(
			"core.php",
			{
				"action": "newGoods",
				"id": 0,
				"gname": $('#gname').val(),
				"gprice": $('#gprice').val(),
				"ggallery": $('#ggallery').val(),
				"gimg": $('#gimg').val(),
				"gdescription1": $('#gdescription1').val(),
				"gdescription2": $('#gdescription2').val()
			},
			function(data) {
				if (data==1) {
					alert('запись добавлена');
					init();
				} else {
					console.log(data);
				}
			}
		)
	}
}
function deleteInDb() {
	var id = $('#gid').val();
	if (id!="") {
		$.post(
			"core.php",
			{
				"action": "deleteGoods",
				"id": id,
				"gname": $('#gname').val(),
				"gprice": $('#gprice').val(),
				"ggallery": $('#ggallery').val(),
				"gimg": $('#gimg').val(),
				"gdescription1": $('#gdescription1').val(),
				"gdescription2": $('#gdescription2').val()
			},
			function(data) {
				if (data==1) {
					alert('запись удалена');
					init();
				} else {
					console.log(data);
				}
			}
		)
	}
}	


$(document).ready(function () {
	init();
	$('.add-to-db').on('click', saveToDb);
	$('.delete-in-db').on('click', deleteInDb);

});
