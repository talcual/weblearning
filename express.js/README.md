

# Weblearning (expressjs)

- [Instalación](./instalacion.md)

- Express.js
    - Estructura base

        Express.js con su naturaleza de libreria no tiene una estructura clara para la construcción de software sobre esta, por eso siempre existen recomendaciones para
        poder crear productos escalables al menos a nivel de escalabilidad y mantenibilidad, esto mismo que es una debilidad tambien es una fortaleza para express ya que es 
        posible desplegar arquitecturas como Clean Code, Hexagunal, por capas entre otras.

    - Express Router

        Express router es la herramienta que permite la posibilidad de navegacion entre los recursos via url, hace parte del nucleo de express y tiene varias funcionalidades.

    - Middlewares

        Los middlewares son pequeños codigos que corren entre el punto de entrada de la app escrita en express y el punto final de la ruta proveeida por express router, estos 
        son ideales para inspeccionar las peticiones realizadas.

    - Bases de datos
        
        A nivel de base de datos, express es compatible con cualquier libreria que sea utilizada para conectarse a bases de datos(ORM) y tambien con cualquier base de datos siempre y cuando funcione en node.js

    - Seguridad

        A nivel de aseguramiento de recursos, con express podemos usar de forma nativa sessiones, cookies seguras entre otras utilidades, las cuales pertencen al nucleo de express, ademas podemos usar librerias para JWT (JSON WEB TOKENS)