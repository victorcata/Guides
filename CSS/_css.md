# CSS

<!-- TOC -->

- [CSS](#css)
    - [Selectors](#selectors)
        - [Child selectors](#child-selectors)
        - [Sibling selectors](#sibling-selectors)
        - [Attributes](#attributes)
        - [Pseudo-classes](#pseudo-classes)
        - [Text selector](#text-selector)
        - [Pseudo-elements](#pseudo-elements)
        - [Links](#links)
    - [Browser prefixes](#browser-prefixes)
    - [Box model](#box-model)
        - [Margin](#margin)
        - [Border](#border)
        - [Padding](#padding)
        - [Content](#content)
        - [Outline](#outline)
    - [Dimensions](#dimensions)
    - [Positioning](#positioning)
    - [Visualization and visibility](#visualization-and-visibility)
    - [Box styles](#box-styles)
        - [Background gradients](#background-gradients)
    - [Flexbox](#flexbox)
    - [Text styles](#text-styles)
    - [Fonts](#fonts)
    - [Borders](#borders)
    - [Links](#links-1)
    - [Media queries](#media-queries)
    - [Exclusions](#exclusions)
    - [Regions](#regions)
    - [2D transformations](#2d-transformations)
    - [3D transformations](#3d-transformations)
    - [Transitions](#transitions)
    - [Animations](#animations)
    - [Importing stylesheets](#importing-stylesheets)
    - [Cascade](#cascade)
    - [Specificity](#specificity)

<!-- /TOC -->

## Selectors
- **.class:** Busqueda por nombre de clase
- **#id:** Busqueda por identificador de elemento
- ***:** Selecciona todos los elementos
- **tag:** Busqueda por nombre de etiqueta (p.e: div, p, span,...)
- **tag,tag:** Busqueda de varios elementos separados por comas

### Child selectors
- **elem1 elem2:** Selecciona los elementos 'elem2' que estan dentro de 'elem1'
- **elem1 > elem2:** Selecciona los elementos 'elem2' cuyo padre directo es 'elem1'
- **:first-child:** Selecciona todos los elementos que son el primer hijo
- **:first-of-type:** Selecciona los elementos que son el primero de su tipo dentro de su padre
- **:last-child:** Selecciona cada elemento que es el ultimo hijo de su padre
- **:last-of-type:** Selecciona cada elemento que es el ultimo de su tipo dentro de su padre
- **:nth-child(n):** Selecciona elementos hijos a partir de una formula de seleccion. (p.e: odd | even | number | an + b)
- **:nth-last-child(n):** Igual que el selector anterior pero empezando a contar desde el final
- **:nth-last-of-type(n):** Igual que el selector anterior pero contando solo elementos de un determinado tipo
- **:nth-of-type(n):** Selecciona aquellos elementos hijos que ocupan una determinada posicion 'n' y son del tipo indicado
- **:only-of-type:** Selecciona elementos que son el unico elemento hijo de un determinado tipo con respecto a su padre
- **:only-child:** Selecciona elementos de un determinado tipo que son el unico hijo de su padre

### Sibling selectors
- **elem1 + elem2:** Selecciona todos los elementos 'elem2' que estan ubicados directamente despues del elemento 'elem1'
- **elem1 ~ elem2:** Selecciona los elementos 'elem2' que estan precedidos de 'elem1'

### Attributes
- **[attr]:** Todos los elementos que tienen definido un determinado atributo
- **[attr=value]:** Todos los elementos cuyo atributo es igual a un determinado valor
- **[attr~=value]:** Todos los elementos cuyo atributo contiene un determinado valor
- **[attr|=value]:** Selecciona los elementos cuyo atributo empieza por un determinado valor y le sigue el final del valor o el caracter '-'
- **[attr^=value]:** Todos los elementos cuyo atributo comienza con un determinado valor
- **[attr$=value]:** Todos los elementos cuyo atributo termina con un determinado valor
- **[attr*=value]:** Todos los elementos cuyo atributo contiene un subtring con el valor definido

### Pseudo-classes
- **:checked:** Selecciona los elementos marcados (p.e: input[type="check"]:checked)
- **:disabled:** Selecciona cada elemento deshabilitado
- **:empty:** Selecciona cada elemento que no tiene nodos hijos
- **:enabled:** Selecciona cada elemento que esta habilitado
- **:focus:** Selecciona los elementos que tienen el foco
- **:hover:** Selecciona elementos cuando el raton esta encima de ellos
- **:in-range:** Selecciona elementos cuando estan dentro de un rango especifico. A partir de atributos min y max en inputs
- **:invalid:** Selecciona los inputs que tienen un valor que no es valido
- **:lang(language):** Selecciona los elementos que tienen un atributo de lenguaje especifico
- **:not(selector):** Seleccion negativa de elementos, selecciona todos los que no cumplen un determinado selector
- **:optional:** Selecciona elementos input que no tienen el atributo 'required'
- **:out-of-range:** Selecciona elementos input cuyo valor de rango esta fuera del permitido por los atributos max y min
- **:read-only:** Selecciona elementos que tienen el atributo 'readonly'
- **:read-write:** Selecciona elementos que no tienen el atributo 'readonly'
- **:required:** Selecciona elementos que tienen el atributo 'required' especificado
- **:root:** Selecciona el elemento document raiz <html>
- **:target:** Selecciona el elemento cuyo id corresponde con un target de una etiqueta <a> al marcar como activa dicha etiqueta
- **:valid:** Selecciona todos los elementos input con un valor valido

### Text selector
- **:first-letter:** Selecciona la primera letra de los elementos indicados
- **:first-line:** Selecciona la primera linea de los elementos indicados
- **::selection:** Selecciona la porcion de texto que el usuario esta seleccionando del documento

### Pseudo-elements
- **:after:** Inserta contenido despues de cada elemento seleccionado
- **:before:** Inserta contenido antes de cada elemento seleccionado

### Links
- **:link:** Selecciona todos los links que no han sido visitados
- **:active:** Selecciona todos los links activos ('<a>')
- **:visited:** Selecciona todos los links visitados

## Browser prefixes
- **-ms-:** Internet Explorer
- **webkit-:** Google Chrome
- **moz-:** Mozilla Firefox
- **webkit-:** Safari
- **o- | -webkit-:** Opera

## Box model
- **Ancho Total:** width + left padding + right padding + left border + right border + left margin + right margin
- **Alto Total:** height + top padding + bottom padding + top border + bottom border + top margin + bottom margin

### Margin
Limpia el area en la parte exterior del borde. No se ve afectado por el 'background' y es completamente transparente
- **margin:** *(length | auto | initial | inherit)* Establece el margen del elemento
- **margin-(pos):** *(pos): top | left | right | bottom* Establece el margen del elemento para una determinada posicion
					
### Border
El borde va alrededor del padding y del contenido. Hereda su color de la propiedad 'color' de la caja

### Padding
Limpia el area en la parte alrededor del contenido. Se ve afectado por el 'background'
- **padding:** *(length | initial | inherit)* Establece el padding del elemento					
- **padding-(pos):** *(pos): top | left | right | bottom* Establece el padding del elemento para una determinada posicion
					
### Content
Indica el contenido de la caja donde el texto e imagenes aparecen

### Outline
- **outline:** *(outline-color outline-style outline-width|initial|inherit)* Establece una linea alrededor del elemento y fuera del borde. No es parte del elemento y no afecta al ancho y alto total					
- **outline-color:** *(invert | color | initial | inherit)* Establece el color de la linea exterior					
- **outline-style:** *(none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset | initial | inherit)* Establece el estilo de la linea exterior			
- **outline-width:** *(medium | thin | thick | length | initial | inheri)* Establece el ancho de la linea exterior
					
## Dimensions
- **height:** Establece la altura del elemento en su contenido
- **max-height:** Establece el alto maximo del elemento
- **min-height:** Establece el alto minimo del elemento
- **width:** Establece el ancho del elemento en su contenido
- **max-width:** Establece el ancho maximo del elemento
- **min-width:** Establece el ancho minimo del elemento

## Positioning
	
- **position:** 
	- static
		- Valor por defecto
		- No le afecta top, left, right, bottom
	- fixed
		- Relativo a la ventana del navegador
		- No se puede aunque se haga scroll
		- Se puede posicionar encima de otros elementos
	- relative
		- Relativo a su posicion normal
		- Se puede mover y solapar con otros elementos
		- El espacio reservado para el elemento es preservado en el flujo normal del documento
		- Posicionamiento a menudo usado como contenedor de otros elementos con posicionamiento absoluto
	- absolute
		- Se posiciona relativo al primer elemento padre que tiene una posicion distinta de static, sino en relacion al elemento html
		- Son eliminados del flujo normal del documento
		- El resto de elementos se comportan como si el elemento absoluto no existiera
		- Puede solapar otros elementos
- **z-index:**
		- Para controlar el solape de elementos que son sacados del flujo normal del documento (fixed y absolute)
		- Especifica el orden de solape de elementos como una pila
		- Puede tener valores positivos y negativos

- **top:** *(lenght | auto | % | inherit)* Establece el margen respecto del borde superior de un elemento posicionado					
- **bottom:** *(lenght | auto | % | inherit)* Establece el margen respecto del borde inferior de un elemento posicionado					
- **left:** *(lenght | auto | % | inherit)* Establece el margen respecto del borde izquierdo de un elemento posicionado					
- **right:** *(lenght | auto | % | inherit)* Establece el margen respecto del borde derecho de un elemento posicionado					
- **clip:** *(shape | auto | inherit)* Recorta un elemento con posicion absoluta					
- **cursor:** *(url | auto | crosshair | default | pointer | move | e-resize | ne-resize | nw-resize | n-resize | se-resize | sw-resize | s-resize | w-resize | text | wait | help)* Establece el tipo de cursor utilizado					
- **overflow:** *(auto | hidden | scroll | visible | inherit)* Especifica que ocurre si el contenido sobresale del elemento					

## Visualization and visibility

- **visibility:** *(hidden | visible | collapse | initial | inherit)*
			- Esconde el elemento
			- Ocupa el mismo espacio que si fuera visible
- **display:**
	- none
		- Esconde el elemento
		- La pagina sera visualizada como si el elemento no existiera

	- block
		- Toma todo el ancho disponible
		- Tiene un salto de linea antes y despues del elemento
		- ej: h1, p, div
	- inline
		- Toma tanto ancho como el elemento necesite
		- No fuerza los saltos de linea
		- ej: span, a

	- Values: *inline | block | flex | inline-block | inline-flex | inline-table | list-item | run-in | table | table-caption | table-column-group | table-header-group | table-footer-group | table-row-group | table-cell | table-column | table-row | none | initial | inherit*

## Box styles
	
- **background:** *(color position size repeat origin clip attachment image | initial | inherit)* Establece de una sola vez todas las propiedades del background.								
- **background-attachment:** *(scroll | fixed | local | initial | inherit)* Establece si la imagen de fondo esta fija o hace scroll con el resto de la imagen.
- **background-color:** *(color | transparent | initial | inherit)* Indica el color de la imagen de fondo de un elemento.
- **background-imagen:** *(url | none | initial | inherit)* Indica la imagen a establece como background en un elemento.
- **background-position:** *(value)* Establece el punto de inicio de una imagen de fondo.
- **background-repeat:** *(repeat | repeat-x | repeat-y | no-repeat | initial | inherit)* Indica como debe repetir la imagen a lo largo de todo el elemento.
- **background-clip:** *(border-box | padding-box | content-box | initial | inherit)* Establece el area sobre la que aplicara el color o la imagen de fondo.				
- **background-origin:** *(border-box | padding-box | content-box | initial | inherit)* Indica la posicion del fondo de imagen relativo al contenido de la caja.
- **background-size:** *(auto | length | cover | contain | intial | inherit)* Especifica el tamaño del fondo de imagen.
- **box-sizing:** *(content-box | border-box | initial | inherit)* Indica como debe tomar el ancho y alto del elemento, considerando los padding o margin, por defecto solo es contenido.
- **opacity:** Establece el nivel de transparencia, toma un valor entre 0.0 y 1.
- **filter:alpha(opacity=val):** Establece el nivel de transparencia para <=IE8, val toma un valor entre 0 y 100.

### Background gradients

- **background:** linear-gradient(direction, color-stop1, color-stop2, ...)
						*(direction) : top | right | bottom | left | top right | top bottom (por defecto) | ..*
- **background:** linear-gradient(angle, color-stop1, color-stop2, ...)
						*(angle):* Para mas precision se establece un angulo en grados en sentido de las agujas del reloj
- **background:** repeating-linear-gradient(direction, color-stop1 pos, color-stop2 pos, ...)
						Repite el gradiente hasta alcanzar el tamaño total del elemento. *(pos):* Posicion final del color
- **background:** radial-gradient(center, shape size, start-color, ..., last-color)
						*(shape size):* closest-side | farthest-side | closest-corner | farthest-corner
- **background:** repeating-radial-gradient(center, shape size, start-color, ..., last-color)

## Flexbox
	
- **display: box** Establece el modelo de caja flexible y aplica a todos sus hijos
- **box-flex:** Especifica si los elementos hijos de una caja deben ser flexibles o no y en cuanta proporcion
				*(value):* El valor indica la flexibilidad del hijo, p.e: un valor de 2 indica que es el doble de flexible que otro hijo
- **box-orient:** *(horizontal | vertical | inline-axis | block-axis | inherit)* Indica si los hijos de una caja flexible debe ser desplegados horizontal o verticalmente.
- **box-pack:** *(start | end | center | justify)* Especifica donde son ubicados los hijos de una caja flexible cuando esta es mas larga que el tamaño del hijo.
- **box-align:** *(start | end | center | baseline | stretch)* Especifica como se deben alinear verticalmente los hijos de una caja.
- **box-ordinal-group:** *(integer)* Indica el orden en que se deben mostrar los hijos de una caja.
- **box-direction:** *(normal | reverse | inherit)* Indica en que direccion debe ser desplegados los hijos de una caja.
- **column-count:** *(number | auto | initial | inherit)* Especifica el numero de columnas en las que se divide un elemento.
- **column-gap:** *(length | normal | initial | inherit)* Indica el espacio entre columnas.
- **column-rule:** *(column-rule-width column-rule-style column-rule-color | initial | inherit)* Establece todas las propiedades del separador de columnas a la vez.
- **column-rule-color:** *(color | initial | inherit)* Indica el color del separador entre columnas.
- **column-rule-style:** *(none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset | initial | inherit)* Indica el estilo del separador.
- **column-rule-width:** *(medium | thin | thick | length | initial | inherit)* Establece el ancho del separador de columnas.
- **column-span:** *(1 | all | initial | inherit)* Indica cuantas columnas debe ocupar un determinado elemento.
- **column-width:** *(auto | length | initial | inherit)* Establece el ancho de las columnas.
- **columns:** *(auto | column-width column-count | initial | inherit)* Permite establecer las propiedades de 'column-width' y 'column-count' a la vez.
						
## Text styles

color 			: Establece el color del texto
					(HEX | RGB | colorName)
text-align 		: Establece el alineamiento horizontal del texto
					(center | right | left | justify)
text-decoration	: Añade o elimina decoraciones del texto, tales como subrayado, linea de tachado, etc
					(none | underline | overline | line-through | initial | inherit)
text-transform 	: Especifica mayusculas o minusculas en el texto
					(none | capitalize | uppercase | lowercase | initial | inherit)
text-indent 	: Indica la sangria de la primera linea del texto
					(length | initial | inherit)
direction 		: Indica la direccion de escritura
					(ltr | rtl | initial | inherit)
letter-spacing 	: Incrementa o decrementa el espacio entre caracteres
					(normal | length | initial | inherit)
line-height 	: Establece la altura de cada linea de texto
					(normal | number | length | initial | inherit)
text-shadow 	: Añade sombra al texto
					(h-shadow v-shadow blur color | none | initial | inherit)
unicode-bidi 	: Usado junto con direction para determinar si el texto debe ser sobreescrita para soportar otros lenguajes
					(normal | embed | bidi-override | intitial | inherit)
vertical-align 	: Establece el alineamiento vertical
					(baseline | length | sub | super | top | text-top | middle | bottom | text-bottom | initial | inherit)
white-space		: Especifica como son controlados los espacios en blanco dentro del texto
					(normal | nowrap | pre | pre-line | pre-wrap | initial | inherit)
word-spacing	: Incrementa o decrementa el espacio entre palabras del texto
					(normal | length | initial | inherit)
word-wrap 		: Permite forzar una palabra que excede el ancho partirse y saltar de linea
					(normal | break-word | initial | inherit)
text-justify 	: Cuando el texto tiene una alineacion 'justify' indica el modo de justificacion utilizado. Solo en IE
					(auto | inter-word | inter-ideograph | inter-cluster | distribute | kashida | trim | initial | inherit)
text-overflow	: Indica que deberia ocurrir si el texto sobresale de su contenedor (p.e: añadir puntos suspensivos)
					(clip | ellipsis | string | initial | inherit)
word-break 		: Especifica como debe realizar los saltos de linea entre palabras
					(normal | break-all | keep-all | initial | inherit)
## Fonts

TIPOS DE FUENTES:

	Serif 		: Tiene pequeñas decoraciones al final de algunos caracteres (p.e: Times New Roman, Georgia,...)
	Sans-serif 	: Fuentes sin las decoraciones al final de las letras (p.e: Arial, Verdana, ...)
	Monospace	: Fuentes en que cada caracter ocupa el mismo ancho (p.e: Courier New, Lucida Console,...)

font 			: Permite establecer todas las propiedades de una fuente de una sola vez
font-family		: Especifica la familia de fuentes utilizada, si el nombre esta separado por espacios usar ""
font-size 		: Establece el tamaño de la fuente. Mejor establecerlo en 'em' y poner el body al font-size: 100% para mejores resultados
					(medium | xx-small | x-small | small | large | x-large | xx-large | smaller | larger | length | initial | inherit)
font-style 		: Especifica estilos de texto, tales como cursiva
					(normal | italic | oblique | initial | inherit)
font-variant 	: Indica si el texto se debe ver o no en mayusculas de trazo fino
					(normal | small-caps | initial | inherit)
font-weight 	: Establece el grosor del texto
					(normal | bold | bolder | lighter | number (100-900) | initial | inherit)
@font-face 		: Permite utilizar fuentes que no estan instaladas en el equipo cliente
					Tipos: TTF | OTF | WOFF | SVG | EOT
		font-family 	: Nombre de la fuente
		src 			: URL donde se encuentra el fichero de fuentes
		font-stretch 	: Define como de estirada debe mostrarse la fuente
		font-style  	: Indica si debe ser cursiva, oblicua o normal
		font-weight 	: Indica el grosor de la fuente
		unicode-range 	: Define el rango de caracteres unicode que la fuente soporta

## Borders

border 						: Establece todas las propiadedes del borde de una sola vez
								(border-width border-style border-color | initial | inherit)
border-color 				: Establece el color de los cuatro bordes
								(color | transparent | initial | inherit)
border-style 				: Establece el estilo de los cuatro bordes
								(none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset | initial | inherit)
border-width 				: Establece el ancho de los cuatro bordes
								(medium | thin | thick | length | initial | inherit)
border-(pos)				: Establece todas las propiedades del borde segun (pos) de una sola vez
border-(pos)-color			: Establece el color del borde indicado en (pos)
border-(pos)-style 			: Establece el estilo del borde indicado en (pos)
border-(pos)-width 			: Establece el ancho del borde indicado en (pos)
								(pos): top | left | right | bottom
border-image 				: Especifica una imagen como borde
								(source slice width outset repeat | initial | inherit)
border-image-source			: Indica la ruta donde se encuentra la imagen
border-image-slice			: Indica cuanto espacio hacia dentro hay con respecto al borde de la imagen
								(number | % | fill | initial | inherit)
border-image-width			: Indica el ancho del borde con una imagen
								(number | % | auto | initial | inherit)
border-image-ouset			: Especifica cuando el borde de la imagen se extiende mas alla del borde de la caja
								(length | number | initial | inherit)
border-image-repeat			: Indica si la imagen se debe repetir, estirar, etc
								(stretch | repeat | round | initial | inherit)
border-radius				: Establece el radio de curvatura en las esquinas de la caja. Establece el borde en las cuatro esquinas
								(1-4 length | % / 1-4 length | % | initial | inherit)
border-(pos)-(side)-radius : Establece el radio de curvatura especifico para una esquina
								(pos): top | bottom
								(side): left | right
box-shadow					: Permite establecer una sombra a la caja
								(none | h-shadow v-shadow blur spread color | inset | initial | inherit)
## Links

SELECTORES

	a:link 		: Cualquier link que todavia no ha sido visitado
	a:visited 	: Un link que el usuario ha visitado
	a:hover		: Un link cuando el usuario se posiciona encima de el
	a:active 	: Un link en el momento de pulsar en el

text-decoration : Mediante esta propiedad podemos eliminar el subrayado que tiene por defecto cada link

## Media queries

OPERADORES LOGICOS

	and 	: Ejecutara la hoja de estilos si se cumplen como verdaderas todas las queries de la declaracion. P.e:
					@media (min-width: 700px) : Ancho mayor o igual a 700px
					@media (min-width: 700px) and (orientation: landscape) : Ancho >= a 700px y orientacion horizontal
					@media tv and (min-width: 700px) and (orientation: landscape) : Ademas de lo anterior visualizacion en TV
	or | ,	: Ejecutara la hoja de estilos si alguna queries es verdadera, separarlas por comas equivale al operador 'or'						
					@media (min-width: 700px), handheld and (orientation: landscape): Si la pantalla es >= a 700px o si esta en horizontal en un dispositivo pequeño
	not 	: Aplica a toda la query excepto a las queries que estan separadas por comas
					@media not all and (monochrome) == @media not (all and (monochrome))
					@media not screen and (color), print and (color) == @media (not (screen and (color))), print and (color)
	only 	: Sirve para prevenir que navegadores que no soportan queries con funciones apliquen los estilos asignados
					<link rel="stylesheet" media="only screen and (color)" href="Ejemplo.css" />

SINTAXIS

	Media Query 			: [[only | not]? <media_type> [ and <expression> ]*] | <expression> [ and <expression> ]*
	Lista Media Queries 	: <media_query> [, <media_query> ]*		
	<expression> 			: ( <media_feature> [: <value>]? )
	<media_type> 			: all | aural | braille | handheld | print | projection | screen | tty | tv | embossed
	<media_feature>	: width | min-width | max-width | height | min-height | max-height | device-width | min-device-width | max-device-width | device-height | 
					min-device-height | max-device-height | aspect-ratio | min-aspect-ratio | max-aspect-ratio | device-aspect-ratio | 
					min-device-aspect-ratio | max-device-aspect-ratio | color | min-color | max-color | color-index | min-color-index | 
					max-color-index | monochrome | min-monochrome | max-monochrome | resolution | min-resolution | max-resolution | scan | grid

TIPOS DE MEDIOS 

	all 			: Todos los dispositivos
	aural 			: Dispositivos de sonido y sintetizadores
	braille 		: Dispositivos tactiles de braile
	embossed 		: Usado en impresoras de braile
	handheld 		: Pequeños dispositivos y dispositivos de mano
	print 			: Usado en impresoras
	projection 		: Usado para proyectar presentaciones, como de diapositivas
	screen 			: Cualquier pantalla de ordenador
	tty 			: Dispositivos de rejilla tales como teletipos o terminales
	tv 				: Dispositivos de television


TIPOS DE CARACTERISTICAS

	color 			: Indica el numero de bits por cada color que soporta el dispositivo
	color-index 	: Indica el numero de colores que soporta un dispositivo (p.e: 256)
	aspect-ration	: Indica el aspecto de imagen, separado por el caracter '/ (p.e: 1/1)
	device-aspect-ratio : Aspecto de imagen del dispositivo de  (p.e: 16/9)
	device-height 	: Indica la altura del dispositivo de salida, es decir la totalidad de la pantalla/pagina y no del documento a mostrar
	device-width 	: Indica la anchura del dispositivo de salida
	grid 			: Determina cuando se trata de un dispositivo de cuadricula, como una terminal TTY o una pantalla de telefono. 1 en este caso, 0 en caso contrario
	height 			: Indica la altura del documento a mostrar
	monochrome 		: Indica el numero de bits por pixel en un dispositivo monocromatico, 0 si no es monocromatico
	orientation 	: Indica la orientacion del dispositivo de salida (landscape | portrait)
	resolution 		: Indica la resolucion del dispositivo, medida en dpi o dpcm
	scan 			: Indica el proceso de exploracion en televisores (p.e: progressive)
	width 			: Indica el ancho del documento a visualizar

## Exclusions

(prefix)-wrap-flow 		: Establece un area de exclusion por la cual el elemento padre no podra ocupar
							(auto | both | start | end | minimum | maximum | clear)
(prefix)-wrap-through 	: Controla el efecto de las exclusiones
							(wrap | none

## Regions

Permiten al texto fluir a traves de distintos elementos de la pagina

(prefix)-flow-into		: El contenido del elemento fluye a traves del resto de elementos definidos 'flow-from'
							(name) : Nombre como identificador del estilo
(prefix)-flow-from		: Los elementos con este estilo seran contenedores del texto definido con el elemento 'flow-into'
							(name) : Mismo nombres que hace referencia en el estilo 'flow-into
(prefix)-break-before	: Indica que el flujo del contenido debe terminar antes del elemento
							(auto | always | avoid | left | right | page | column | region | avoid-page | avoid-column | avoid-region)
(prefix)-break-after	: Indica que el flujo del contenido debe terminar despues del elemento
							(auto | always | avoid | left | right | page | column | region | avoid-page | avoid-column | avoid-region)
(prefix)-break-inside	: El flujo del contenido debe terminar dentro del elemento
							(auto | avoid | avoid-page | avoid-column | avoid-region)
(prefix)-region-fragment: Controla como se visualiza el contenido en la ultima region cuando esta sobresale del elemento
							(auto | break)

## 2D transformations
	
transform: translate(x,y)
			- Mueve el elemento desde su posicion original a partir de los valores de izquierda (x) y top (y)
			- ej: -webkit-transform: translate(50px, 100px)

transform: rotate(Xdeg)
			- Rota el elemento Xdeg en el sentido de las agujas del reloj. Si es negativo rota en sentido contrario a las agujas del reloj
			- ej: -ms-transform: rotate(30deg)

transform: scale(x,y)
			- Incrementa o decrementa el tamaño del elemento, en ancho(x) y/o alto(y)
			- ej: -webkit-transform: scale(2, 4)

transform: skew(Xdeg,Ydeg)
			- Gira un elemento en x e y segun los grados indicados
			- ej: -o-transform: skew(30deg, 20deg)

transform: matrix(n,n,n,n,n,n)
			- Combina en una unica transformacion todos los metodos 2D de transformacion a partir de una matriz de seis valores

transform-origin: 
			- Cambia la posicion de un elemento al que se ha aplicado una transformacion

transform: matrix | translate | translateX | scale | scaleX | scaleY | rotate | skew | skewX | skewY

transform-origin: x y z | initial | inherit

## 3D transformations
	
transform: rotateX(Xdeg)
			- Rota el elemento en el eje X

transform: rotateY(Ydeg)
			- Rota el elemento en el eje Y

transform-style: flat | preserve-3d | initial | inherit
			- Indica como elementos anidados son renderizados en el espacio 3D

perspective: lenght | none
			- Especifica la perspectiva de como los elementos 3D son visualizados

perspective-origin: x y | initial | inherit
			- Indica donde un elemento 3D es posicionado en su parte inferior

backface-visibility: visible | hidden | initial | inherit
			- Define si un elemento debe tener visible o no las caras traseras

transform: matrix3d | translate3d | translateX | translateY | translateZ | scale3d | scaleX | scaleY | scaleZ | rotate3d | rotateX | rotateY | rotateZ | perspective

## Transitions

transition: property duration timing delay
			- Las transiciones dan efectos cambiando gradualmente de un estilo a otro
			- Se inicia cuando una propiedad Css especifica cambia de valor

transition-delay: time | initial | inherti
			- Especifica cuando la transicion debe comenzar

transition-duration: time | initial | inherit
			- Especifica cuantos segundos o milisegundos debe durar la transicion

transition-property: none | all | property | initial | inherit
			- Indica el nombre de la propiedad Css a la que aplicar el efecto

transition-timing-function: ease | linear | ease-in| ease-out | cubic-bezier(n,n,n,n) | initial | inherit
			- Especifica la curva de velocidad que tomara la transicion

## Animations

animation: myAnimation delay direction duration iteration timing
			- Permite crear una animacion reemplazando animaciones Flash, imagenes animadas o animaciones con JavaScript
			- La animacion es creada dentro de @keyframes y cambiara gradualmente de un estilo a otro
			- La animacion en @keyframes se puede especificar con 'from'/'to' o mediante porcentajes
@-webkit-keyframes myAnimation
{
	from { css style }
	to { css style }
}
@-webkit-keyframes myAnimation
{
	0% { css style }
	50% { css style }
	100% { css style}
}

animation-delay: time | initial | inherit
			- Especifica cuando la animacion debe comenzar

animation-direction: normal | reverse | alternate | alternate-reverse | initial | inherit
			- Indica si la animacion debe ir o no al reverso o en ciclos alternos

animation-fill-mode: none | forwards | backwards | both | initial | inherit
			- Especifica que estilos seran aplicados al elemento cuando la animacion no esta ejecutandose, cuando ha terminado o cuando espera por un delay

animation-iteration-count: number | infinite | initial | inherit
			- Especifica el numero de veces que una animacion debe ser repetida

animation-name: name
			- Nombre de la animacion referente a @keyframes

animation-play-state: paused | running | initial | inherit
			- Especifica si la animacion esta ejecutandose o esta pausada

animation-timing-function: ease | linear | ease-in| ease-out | cubic-bezier(n,n,n,n) | initial | inherit
			- Indica la curva de velocidad de la animacion


## Importing stylesheets

@import url 		: Importa una hoja de estilos desde un fichero externo
						@import 'styles.css' == @import url('styles.css')
@import url media 	: Permite especificar para que dispositivos se cargaran las hojas de estilos
						@import url('stylesPrinter.css') print
						@import url('stylesBig.css') projection, tv

## Cascade

Las hojas de estilos pueden tener tres diferentes origenes

ORIGEN DE LA HOJA DE ESTILOS

	Author		: El autor del documento define los recursos con las hojas de estilos
	User 		: El usuario puede especificar diferentes estilos para un determinado documento
	User agent 	: Establece una hoja de estilos por defecto para presentar los elementos en el documento de acuerdo a unas determinadas expectativas

ORDEN DE IMPORTANCIA 

	1. user important
	2. author important
	3. author normal
	4. user normal
	5. user agent

## Specificity

Cuando a un elemento le aplican distintas clases, se puede utilizar la siguiente regla para determinar que clase sera la que se aplique
Por orden de prioridad tienen:

		0. Propiedades de clase definidas con '!important'
		a. Clase definida por identificador
		b. Clase definida por nombre de clase
		c. Clase aplicada a etiquetas HTML

En el siguiente ejemplo se ve como aplicar la regla:

	#id1         {xxx} a=1 b=0 c=0 --> Valor = 100 (Mayor especificacion)
	UL UL LI.red {xxx} a=0 b=1 c=3 --> Valor = 013 
	LI.red       {xxx} a=0 b=1 c=1 --> Valor = 011 
	LI           {xxx} a=0 b=0 c=1 --> Valor = 001

A igual especificacion se aplica la clase que se ha definido en primer lugar