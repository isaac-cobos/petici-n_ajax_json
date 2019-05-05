window.onload = function() {
	var btn = document.getElementById('boton');
	btn.addEventListener('click', traerDatos);
}


//Traemos los datos desde el Json
function traerDatos() {
var request = new XMLHttpRequest();
request.open('GET', './data/autos.json', true);
request.send();

request.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200){
		let datos = JSON.parse(this.responseText);
		
		//Metemos datos en listCars
		let res = document.querySelector('#listCars');
		res.innerHTML = '';

		//Iteramos datos
		for(let item of datos) {
			//Calculamos el iva y lo sumamos al precio
			precioConIva = {};
			var precioSinIva = item.precio;
			var precioConiva = precioSinIva *1.21; 
			//Creamos nuestro Html dinamico con los elementos del json
			res.innerHTML += `
			<div class="row">
            <div class="card-container p-3 col-12 col-sm-4">
                <div class="card border-info m-0" style="max-width: 18rem;">
                    <div id="marca" class="card-header">${item.marca}</div>
                    <div class="card-body text-info">
                        <h5 id="modelo" class="card-title">${item.modelo}</h5>
						<p id="precioIva" class="card-text">${precioConiva} iva Incluido</p>
						<p id="precio" class="card-text">${item.lanzamiento}</p>
                    </div>
                </div>
            </div>
			
			`

		}
	}
 } 
}













    




