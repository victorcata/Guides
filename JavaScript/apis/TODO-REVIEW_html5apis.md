/*
* Victor Cata 2014
*	APIs HTML5
*
AUDIO/VIDEO
---------------------------------------------------------------------------------------------------------------------------------------------
	
	PROPIEDADES:

		audioTracks 			: Devuelve un objeto AudioTrackList con todos los tracks disponibles
		autoplay 				: Modifica o recupera si el audio/video debe empezar a reproducir tan pronto como sea posible
		buffered 				: Devuelve un objeto TimeRanges representado el contenido almacenado en el buffer
		controller 				: Devuelve un objeto MediaController representando el actual controlador de media
		controls 				: Modifica o recupera si el audio/video debe mostrar los controles de reproduccion
		crossOrigin 			: Modifica o recupera la configuracion CORS (cross origin) del audio/video
		currentSrc 				: Devuelve la URL del actual audio/video
		currentTime 			: Modifica o recupera la posicion actual del audio/video
		defaultMuted 			: Modifica o recupera si el audio/video esta por defecto en mute
		defaultPlaybackRate 	: Modifica o recupera la velocidad de reproduccion del audio/video
		duration 				: Devuelve la duracion en segundos del audio/video
		ended  					: Indica si el audio/video ha finalizado o no
		error 					: Devuelve un objeto MediaError con informacion del error producido
		loop 					: Modifica o recupera si el audio/video debe volver a comenzar tras terminar su reproduccion
		mediaGroup 				: Modifica o recupera a que grupo de audio/video pertenece (cuando estan relacionados multiples audio/video)
		muted 					: Modifica o recupera si el audio esta silenciado o no
		networkState 			: Devuelve el estado actual de la comunicacion con el audio/video
		paused 					: Modifica o recupera si el audio/video esta pausado
		playblackRate 			: Modifica o recupera la velocidad de reproduccion del audio/video
		played 					: Devuelve el objeto TimeRanges representando las partes reproducidas del audio/video
		preload 				: Modifica o recupera si el audio/video debe ser cargado cuando la pagina carga
		readyState 				: Devuelve el estado actual del audio/video
										0 - HAVE_NOTHING 		: No hay informacion del audio/video
										1 - HAVE_METADATA 		: Los metadatos del audio/video estan listos
										2 - HAVE_CURRENT_DATA  	: Los datos de la posicion actual del audio/video estan listos pero no del siguiente frame/milisegundo
										3 - HAVE_FUTURE_DATA  	: Tiene datos suficientes de la posicion actual y al menos del siguiente frame/milisegunto
										4 - HAVE_ENOUGH_DATA  	: Tiene datos suficientes para empezar a reproducir
		seekable 				: Devuelve un objeto TimeRanges representando las partes sobre las que se puede posicionar el audio/video
		seeking 				: Devuelve si el usuario esta actualmetne desplazandose por el video	
		src 					: Modifica o recupera el actual recurso del audio/video
		startDate 				: Devuelve un objeto Date que indica el actual offset time
		textTracks 				: Devuelve un objeto TextTrackList con los tracks(subtitulos) disponibles
		videoTracks 			: Devuelve un objeto VideoTrackList representando los tracks de video disponibles
		volume 					: Modifica o recupera el volumne del audio/video

	METODOS:

		addTextTrack() 		: Añade un nuevo track (subtitulo) al audio/video
		canPlayType() 		: Comprueba si el navegador puede reproducir el tipo de audio/video especificado
		load() 				: Recarga el audio/video
		play() 				: Empieza a reproducir el audio/video
		pause() 			: Pausa el audio/video

	EVENTOS:

		abort 				: Se lanza cuando la carga es abortada
		canplay 			: Se lanza cuando el navegador puede empezar a reproducirlo
		canplaythrough 		:  Se lanza cuando el navegador puede reproducirlo sin pararse para almacenar en el buffer
		durationchange 		: Se lanza cuando la duracion es cambiada
		emptied 			: Se lanza cuando la playlist actual esta vacia
		ended 				: Se lanza cuando la reproduccion a finalizado
		error 				: Se lanza cuando ocurre un error durante la carga
		loadeddata 			: Se lanza cuando el navagegador ha cargado el frame actual
		loadedmetada 		: Se lanza cuando el navegador ha cargado los metadatos
		loadstart 			: Se lanza cuando el navegador empieza a buscar el recurso
		pause 				: Se lanza cuando ha sido pausado
		play 				: Se lanza cuando empieza a reproducir o deja de estar pausado
		playing 			: Se lanza cuando esta listo para reproducir despues de haber sido pausado o parado para almacenar en el buffer
		progress 			: Se lanza cuando el navegador esta descargandolo
		ratechange 			: Se lanza cuando la velocidad de reproduccion cambiada
		seeked 				: Se lanza cuando el usuario termina de posicionar el recurso en una nueva posicion
		seeking 			: Se lanza cuando el usuario empieza a mover el recurso a una nueva posicion
		stalled 			: Se lanza cuando el navegador esta intentando conseguir datos que no estan disponibles
		suspend 			: Se lanza cuando el navegador no consigue datos intencionadamente
		timeupdate 			: Se lanza cuando la posicion actual ha cambiado
		volumenchange 		: Se lanza cuando el volumen es cambiado
		waiting 			: Se lanza cuando el video para porque necesita almacenar en el buffer el siguiente frame

CANVAS
---------------------------------------------------------------------------------------------------------------------------------------------

	DECLARACION:

		<canvas id="myCanvas" width="200" height="100">Tu navegador no soporta Canvas</canvas>
		var c = document.getElementById('myCanvas')
		var ctx = c.getContext('2d')

	COLORES, ESTILOS Y SOMBRAS:

		fillstyle 								: Modifica o recupera el color, gradiente o patrón usado para rellenar un dibujo
		strokeStyle 							: Modifica o recupera el color, gradiente o patron usado en el trazo de un dibujo
		shadowColor 							: Modifica o recupera el color usado para las sombras
		shadowBlur 								: Modifica o recupera el nivel de borrosidad de la sombra
		shadowOffsetX 							: Modifica o recupera la distancia horizontal de la sombra con respecto al objeto
		shadowOffsetY 							: Modifica o recupera la distancia vertical de la sombra con respecto al objeto
		createLinearGradient(x0,y0,x1,y1)		: Crea un gradiente lineal para rellenar un contenido
		createPattern(elem, dir)				: Repite un elemento especifico en una direccion especifica
		createRadialGradient(x0,y0,r0,x1,y1,r1)	: Crea un gradiente radial/circular
		addColorStop(stop,color) 				: Especifica el color y la posición donde debe parar el gradiente

	LINEAS:

		lineCap   								: Modifica o recupera el estilo de los bordes de las lineas
		lineJoin 								: Modifica o recupera el estilo de union entre lineas
		lineWidth 								: Modifica o recupera el ancho de la linea
		miterLimit 								: Modifica o recupera la maxima longitud de union entre lineas

	RECTANGULOS:

		rect(x,y,width,height) 					: Dibuja un rectangulo
		fillRect(x,y,width,height) 				: Dibuja un rectangulo con relleno
		strokeRect(x,y,width,height)			: Dibuja un rectango solo con trazado
		clearRect(x,y,width,height) 			: Borra los pixeles dentro del rectangulo indicado

	PATHS:

		fill() 									: Rellena el dibujo indicado
		stroke()								: Dibuja el trazado del path indicado
		beginPath() 							: Comienza un nuevo path o resetea el actual
		moveTo(x,y)								: Mueve el path al punto indicado sin dibujar una linea hasta el
		closePath() 							: Crea un path desde el ultimo path indicado hasta el primero, cerrando asi el path
		lineTo(x,y)								: Añade un nuevo punto y crea una linea desde este punto hasta el ultimo indicado
		clip() 									: Recorta una region de cualquier forma y tamaño del canvas original
		quadraticCurveTo(cpx,cpy,x,y)			: Crea una curva cuadratica de Bezier
		bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y)	: Crea una curva cubica de Bezier
		arc(x,y,r,sAng,eAng,counterclockwise) 	: Crea un arco, usado para crear circulos tambien
		arcTo(x1,y1,x2,y2,r)					: Crea un arco entre dos tangentes
		isPointInPath(x,y) 						: Devuelve True si el punto especificado esta en el path actual

	TRANSFORMACIONES:

		scale(width, height)					: Escala el dibujo actual
		rotate(ang)								: Rota el dibujo actual
		translate(x,y)							: Translada el punto de origen del dibujo
		transform(a,b,c,d,e,f)					: Añade una matriz de transformacion al dibujo
		setTransform(a,b,c,d,e,f) 				: Resetea la transformacion actual a la matriz identidad

	TEXTO:

		font 									: Modifica o recupera la informacion de la fuente
		textAlign								: Modifica o recupera el alineamiento del texto
		textBaseline							: Modifica o recupera la linea base del texto
		fillText(text,x,y,maxWidth) 			: Dibuja texto con relleno
		strokeText(text,x,y,maxWidth) 			: Dibuja texto sin relleno
		measureText(text) 						: Devuelve un objeto que contiene el ancho del texto

	IMAGENES:

		drawImage(img,x,y)						: Dibuja una imagen,canvas o video
		drawImage(img,x,y,width,height)			: Dibuja una imagen,canvas o video
		drawImage(img,sx,sy,swidth,sheight,x,y,width,height) : Dibuja una imagen,canvas o video

	PIXELES:

		width 									: Devuelve el ancho de un objeto ImageData
		height									: Devuelve el alto de un objeto ImageData
		data 									: Devuelve un objeto que contiene datos de un objeto ImageData

	COMPOSICION:

		globalAlpha 							: Modifica o recupera el actual valor alpha o de transparencia
		globalCompositeOperation 				: Modifica o recupera como una imagen nueva es dibujada sobre una ya existente

	OTROS:

		save() 									: Guarda el estado de un contexto actual
		restore() 								: Recupera el estado previo guardado

GEOLOCALIZACION
---------------------------------------------------------------------------------------------------------------------------------------------

	DISPONIBILIDAD:
		
		navigator.geolocation						: True si el navegador dispone de la API de geolocalizacion

	POSICION:

		navigator.gelocation.getCurrentPosition() 	: Devuelve un objeto con las coordenadas de la posicion

	DATOS:

		coords.latitude							: Valor decimal con la latitud de la posicion
		coords.longitude 						: Valor decimal con la longitud de la posicion
		coords.accuracy 						: La precision de la posicion
		coords.altitude 						: La altitud en metros sobre el nivel del mar
		coords.altitudeAccuracy 				: Precision para obtener la altitud
		coords.heading 							: La direccion del viaje en grados respecto al norte en sentido a las agujas del reloj
		coords.speed 							: La velocidad de desplazamiento horizontal en metros por segundo
		timespan 								: Dia y hora de obtencion de la posicion

	ERROR:

		error.PERMISSION_DENIED					: Permiso denegado por parte del usuario para obtener la posicion
		errror.POSITION_UNAVAILABLE				: No esta disponible obtener la localizacion
		error.TIMEOUT							: Ha excedido el tiempo para obtener la posicion
		error.UNKNOWN_ERROR						: Error desconocido	

WEB STORAGE
---------------------------------------------------------------------------------------------------------------------------------------------

	DISPONIBILIDAD:

		typeof(Storage) !== 'undefined' 		: Storage es el constructor de localStorage y sessionStorage evitando asi la comprobacion individual

	GUARDAR:

		setItem(key, value) 					: Guarda pares de valor y clave, los datos siempre son almacenados como String
		localStorage.key = value 				: Guardado mediante acceso a propiedades
		sessionStorage.key = value 				: El tratamiento para local y session es igual. Session borra los datos al cerrar el tab/navegador

	RECUPERAR:

		getItem(key) 							: Recupera el valor almacenado para la clave correspondiente
		value = localStorage.key 				: Recuperacion mediante acceso a propiedades

	ELIMINAR:
		
		removeItem(key) 						: Elimina el recurso a partir de la clave


APPLICATION CACHE
---------------------------------------------------------------------------------------------------------------------------------------------

	DECLARACION:

		<html manifest="demo.appcache">			: Se debe declarar en el atributo manifest de la etiqueta HTML el fichero manifest con extension .appcache

	SECCIONES FICHERO MANIFEST:

		CACHE MANIFEST 							: Los ficheros indicados debajo de esta cabecera seran cacheados una vez se descarguen la primera vez
		NETWORK 								: los ficheros indicados debajo de esta cabecera requieren conexion al servidor y nunca seran cacheados
		FALLBACK 								: Los ficheros indicados especifican a que pagina se redireccionara en caso de que la conexion a internet falle

	EJEMPLO:

		CACHE MANIFEST
		# 2014-04-02 v1.0.0 					: los comentarios van precedidos de #, si los ficheros cambian pero el .appcache no, seguira recuperando los
		/theme.css 								  ficheros cacheados. Por ello, al modificar un comentario ayudara a que cachee todo de nuevo.
		/log.gif
		/main.js

		NETWORK:
		login.asp

		FALLBACK:
		/html/ /offline.html

WEB SOCKETS
---------------------------------------------------------------------------------------------------------------------------------------------

	DISPONIBILIDAD

		window.WebSocket 					: True si el navegador implementa WebSockets

	CONSTRUCTOR:
			
		new WebSocket(wsUri, protocols?) 	: Se debe declarar una URI con protocolos ws|wss. Es opcional la declaracion de protocolos auxiliares

	EVENTOS:
	
		onclose 							: Evento producido al cerrar la conexion con el servidor
		onerror 							: Salta cuando se produce un error en la comunicacion
		onmessage							: Evento producido al recibir un mensaje del servidor
		onopen 								: Evento producido al establecer la conexion con el servidor

	PROPIEDADES y METODOS:

		binaryType 							: Formato de los datos binarios transmitidos en el evento onmessage
		bufferedAmount 						: Indica el numero de bytes recibidos a traves del evento send
		close 								: Cierra la conexion con el websocket
		extensions 							: Indica las extensiones del servidor usado
		protocol 							: Indica el protocolo que el servidor ha utilizado
		readyState 							: Indica el estado de la comunicacion a traves del WebSocket
												CONNECTING = 0 	: La conexion todavia no ha sido abierta
												OPEN = 1 		: La conexion esta abierta y lista para comunicar con el servidor
												CLOSING = 2 	: La conexion se esta cerrando
												CLOSED = 3 		: La conexion con el servidor se ha cerrado y ya no puede ser abierta
		send 								: Envia un mensaje al servidor
		url 								: Indica la URL del servidor que comunica con el objeto WebSocket 

WEB WORKERS
---------------------------------------------------------------------------------------------------------------------------------------------

	DISPONIBILIDAD:

		typeof(Worker) != 'undefined' 		: True si el navegador tiene implementado Web Workers

	CONSTRUCTOR:

		new Worker('file.js') 				: Crea un nuevo objeto Worker a partir de un fichero .js que ejecutara el script en segundo plano
												- Desde file.js no hay acceso a: DOM, window, document y al objeto padre (parent object)
												- Los datos entre cliente y web worker se pasan por copia, no por referencia
												- Se pueden enviar datos de tipo String y JSON

	EVENTOS:

		onconnect 							: Evento que conecta al web worker compartidos (Shared Web Worker)
		onerror 							: Se produce cuando hay un error en la comunicacion con el web worker. El error contiene:
												- message 	: Descripcion del mensaje producido
												- filename	: Nombre del fichero que ha producido el error
												- lineno 	: Numero de linea donde se ha producido el error
		onmessage 							: Evento que se produce cuando recibe un mensaje del web worker y viceversa

	PROPIEDADES Y METODOS:

		close() 							: Cierra la comunicacion con el web worker desde el mismo web worker
		importScripts(file1,...,fileN) 		: Desde el web worker se pueden importar y ejecutar otros ficheros JavaScript
		postMessage(msj) 					: Envia un mensaje del web worker hacia el cliente o viceversa
		terminate() 						: Cierra la comunicacion con el web worker desde el cliente
*/