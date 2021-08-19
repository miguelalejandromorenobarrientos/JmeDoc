
window.onload = init;

const webName = 'JME Manual de Usuario';
const webDeveloper = 'JME Manual del Desarrollador';
const author = 'Miguel Alejandro Moreno Barrientos';
const version = '0.6.2.0';
const versionJMS = '0.2.0';
const versionJMSGUI = '0.1.2.0';
const copyright = '2012-2021';
const homepage = 'http://morenobarrientos-jme.site44.com/';

function init()
{
	// set title
	document.title = webName + (document.title === "" ? "" : ": " + document.title);

	// set text on tags
	setTextTags( "webname", webName );
	setTextTags( "webdeveloper", webDeveloper );
	setTextTags( "author", author );
	setTextTags( "version", "v" + version );
	setTextTags( "versionJMS", "v" + versionJMS );
	setTextTags( "versionJMSGUI", "v" + versionJMSGUI );
	setTextTags( "copyright", "(C)" + copyright );
	
	// set href on special links
	var links = document.getElementsByClassName( "homepage" );
	for ( i = 0; i < links.length; i++ )
		links[i].href = homepage;
	
	// set show/hide elements
	links = document.getElementsByClassName( "hideShow" );
	for ( i = 0; i < links.length; i++ )
		links[i].onclick = onShowHideEvent;
	
	// buscador
	setBuscador();

	// index
	createIndex();	
	
}

function setTextTags( className, text )
{
	var versionElems = document.getElementsByClassName( className );
	for ( i = 0; i < versionElems.length; i++ )
		versionElems[i].textContent = text;
}

function onShowHideEvent( event )
{
	var elem = document.getElementById( event.target.dataset.id );
	var text = event.target.textContent;
	if ( elem.style.display == "none" )
	{
		elem.style.display = elem.dataset.display;
		if ( text.endsWith( "\u25B6" ) )
			event.target.textContent = text.substring(0,text.length-1) + "\u25BC";
	}
	else
	{
		elem.dataset.display = elem.style.display;
		elem.style.display = "none";
		if ( text.endsWith( "\u25BC" ) )
			event.target.textContent = text.substring(0,text.length-1) + "\u25B6";
	}
}

function createIndex()
{
	indexArray = document.getElementsByClassName("index");
	for ( i = 0; i < indexArray.length; i++ )
	{
		index = indexArray[i];
		id = index.textContent;
		ref = document.getElementById(id);
		index.href = '#' + id;
		index.textContent = ref.textContent;
	}
}

function setBuscador()
{
	var buscador = document.getElementById("search");
	if ( buscador == null )  return;

	buscador.addEventListener( "keypress", function(e) {
		var key = e.which || e.keyCode;
		if ( key == 13 )
		{
			let item = buscador.value;
			
			let candidatos = document.querySelectorAll("td > a, .operator");
			
			for ( let i = 0; i < candidatos.length; i++ )
				if ( candidatos[i].innerText.toLowerCase() == item.toLowerCase() )
				{
					let c = candidatos[i];
					if ( c.nodeName.toLowerCase() != "td" )
						c = c.parentElement;
					c.scrollIntoView();
					let bg = c.style.background;
					let rep = 14;
					let thread = setInterval( function() {
						if ( rep-- <= 0 )
						{
							clearInterval( thread );
							return;
						}
						if ( c.style.background == bg )
							c.style.background = "#8F8";
						else
							c.style.background = bg;
					}, 75 );
					return;
				}
		}
	});
}



//When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if ( document.getElementById("myBtn") !== null )
	{
	    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
	        document.getElementById("myBtn").style.display = "block";
	    } else {
	        document.getElementById("myBtn").style.display = "none";
	    }
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
