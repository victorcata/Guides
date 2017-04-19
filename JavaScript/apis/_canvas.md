# Canvas
<!-- TOC -->

- [Canvas](#canvas)
    - [Declaration](#declaration)
    - [Colors, styles and shadows](#colors-styles-and-shadows)
    - [Lines](#lines)
    - [Rectangle](#rectangle)
    - [Paths](#paths)
    - [Transformations](#transformations)
    - [Text](#text)
    - [Images](#images)
    - [Pixels](#pixels)
    - [Composition](#composition)
    - [Others](#others)

<!-- /TOC -->

## Declaration
```html
<canvas id="myCanvas" width="200" height="100">Canvas is not supported</canvas>
```
```javascript
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
```

## Colors, styles and shadows
- **fillstyle:** Modifica o recupera el color, gradiente o patrón usado para rellenar un dibujo
- **strokeStyle:** Modifica o recupera el color, gradiente o patron usado en el trazo de un dibujo
- **shadowColor:** Modifica o recupera el color usado para las sombras
- **shadowBlur:** Modifica o recupera el nivel de borrosidad de la sombra
- **shadowOffsetX:** Modifica o recupera la distancia horizontal de la sombra con respecto al objeto
- **shadowOffsetY:** Modifica o recupera la distancia vertical de la sombra con respecto al objeto
- **createLinearGradient(x0,y0,x1,y1):** Crea un gradiente lineal para rellenar un contenido
- **createPattern(elem, dir):** Repite un elemento especifico en una direccion especifica
- **createRadialGradient(x0,y0,r0,x1,y1,r1):** Crea un gradiente radial/circular
- **addColorStop(stop,color):** Especifica el color y la posición donde debe parar el gradiente

## Lines
- **lineCap:** Modifica o recupera el estilo de los bordes de las lineas
- **lineJoin:** Modifica o recupera el estilo de union entre lineas
- **lineWidth:** Modifica o recupera el ancho de la linea
- **miterLimit:** Modifica o recupera la maxima longitud de union entre lineas

## Rectangle
- **rect(x,y,width,height):** Dibuja un rectangulo
- **fillRect(x,y,width,height):** Dibuja un rectangulo con relleno
- **strokeRect(x,y,width,height):** Dibuja un rectango solo con trazado
- **clearRect(x,y,width,height):** Borra los pixeles dentro del rectangulo indicado

## Paths
- **fill():** Rellena el dibujo indicado
- **stroke():** Dibuja el trazado del path indicado
- **beginPath():** Comienza un nuevo path o resetea el actual
- **moveTo(x,y):** Mueve el path al punto indicado sin dibujar una linea hasta el
- **closePath():** Crea un path desde el ultimo path indicado hasta el primero, cerrando asi el path
- **lineTo(x,y):** Añade un nuevo punto y crea una linea desde este punto hasta el ultimo indicado
- **clip():** Recorta una region de cualquier forma y tamaño del canvas original
- **quadraticCurveTo(cpx,cpy,x,y):** Crea una curva cuadratica de Bezier
- **bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y):** Crea una curva cubica de Bezier
- **arc(x,y,r,sAng,eAng,counterclockwise):** Crea un arco, usado para crear circulos tambien
- **arcTo(x1,y1,x2,y2,r):** Crea un arco entre dos tangentes
- **isPointInPath(x,y):** Devuelve True si el punto especificado esta en el path actual

## Transformations
- **scale(width, height):** Escala el dibujo actual
- **rotate(ang):** Rota el dibujo actual
- **translate(x,y):** Translada el punto de origen del dibujo
- **transform(a,b,c,d,e,f):** Añade una matriz de transformacion al dibujo
- **setTransform(a,b,c,d,e,f):** Resetea la transformacion actual a la matriz identidad

## Text
- **font:** Modifica o recupera la informacion de la fuente
- **textAlign:** Modifica o recupera el alineamiento del texto
- **textBaseline:** Modifica o recupera la linea base del texto
- **fillText(text,x,y,maxWidth):** Dibuja texto con relleno
- **strokeText(text,x,y,maxWidth):** Dibuja texto sin relleno
- **measureText(text):** Devuelve un objeto que contiene el ancho del texto

## Images
- **drawImage(img,x,y):** Dibuja una imagen,canvas o video
- **drawImage(img,x,y,width,height):** Dibuja una imagen,canvas o video
- **drawImage(img,sx,sy,swidth,sheight,x,y,width,height):** Dibuja una imagen,canvas o video

## Pixels
- **width:** Devuelve el ancho de un objeto ImageData
- **height:** Devuelve el alto de un objeto ImageData
- **data:** Devuelve un objeto que contiene datos de un objeto ImageData

## Composition
- **globalAlpha:** Modifica o recupera el actual valor alpha o de transparencia
- **globalCompositeOperation:** Modifica o recupera como una imagen nueva es dibujada sobre una ya existente

## Others
- **save():** Guarda el estado de un contexto actual
- **restore():** Recupera el estado previo guardado