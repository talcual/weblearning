# Instalación Nodejs

El proceso de instalación de nodejs tiene dos vias principales, la primera es utilizar el instalador oficial
de nodejs el cual se puede descargar desde https://nodejs.org, la alternativa es utilizar NVM (Node Version Manager) aqui deberemos
tener una puntual atención con el sistema operativos donde vamos a instalar si es base *NIX cualquier versión de linux y MacOS o derivados 
UNIX, este es practico ya cuando queremos hacer el procedemiento con Windows tenemos que hacer uso de una app diferente, a continuacion dejo 
los enlaces a los repos.

 - https://github.com/nvm-sh/nvm                (UNIX Compatible)
 - https://github.com/coreybutler/nvm-windows   (Windows)

Despues de completar la instalación con cualquier de las dos opciones solo resta instalar la versión y activarla, dependiendo de sistema puede tener ligeras variaciones.

Si estas en UNIX-compatible
```
nvm ls-remote   // Listado de versiones disponibles
nvm install 18
nvm use 18
```

Si estas en windows
```
nvm list        // Listado de versiones disponibles
nvm install 18
nvm use 18
```