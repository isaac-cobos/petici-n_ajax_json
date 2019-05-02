//Importamos el JSON

$(document).ready(function (){
	$("botonMostrar").click(function (){
		let url = "http://localhost:8080//autos.json";
		$.ajax({
			dataType:"json",
			url: url,
			type: "GET",
	
			success: function(data) {
				$("#listCar").html()
			} 
		})
	})


})




    




