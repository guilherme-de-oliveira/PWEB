
var domElementFromStringHtml = function(stringHtml,id) {
    // Agrego un elemento ficticio, con el html del modal y lo pongo en el body
    var template = document.createElement('div');
    template.innerHTML = stringHtml;		
    document.body.appendChild(template);

    // Copio el los hijos de ese elemento ficticio, directamente en el body
    document.body.appendChild(document.getElementById(id));
    
    // Borro del body el elemento ficticio
    template.parentNode.removeChild(template);

  
var modalHtml = document
			.getElementById('container2')
			.innerHTML
            .replace(/{{modal-header}}/gi,'test');
            
document.body.appendChild(domElementFromStringHtml(modalHtml,'modal'));

  return document.getElementById(id);
}