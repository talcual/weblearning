
# Primeros pasos con React.js

 - Estructura de archivos
 - Conceptos
    - JSX
        - JSX es una sintaxis que mezcla JavaScript con HTML.
        - Permite escribir código parecido a HTML dentro de JavaScript.

        React lo convierte en llamadas a React.createElement para construir la UI.

        ```jsx
            const name = "Luis";
            const element = <h1>Hola, {name} 👋</h1>;
        ```

        Ventajas de JSX:

        - Más legible que usar React.createElement.
        - Permite incrustar expresiones JS usando { }.
        - Facilita la construcción de interfaces dinámicas.

    - Componentes

        Los componentes son la unidad básica de construcción en React.
        Un componente es una función que devuelve JSX (antes también había componentes de clase, pero hoy se recomienda usar funcionales con Hooks).

        Componente funcional
        ```jsx
            function Saludo({ nombre }) {
                return <h1>Hola, {nombre} 👋</h1>;
            }

            export default Saludo;
        ```

        Como puedo usarlo en App.jsx
        ```jsx
            import Saludo from "./Saludo";

            function App() {
                return (
                    <div>
                    <Saludo nombre="Luis" />
                    <Saludo nombre="Fernando" />
                    </div>
                );
            }
        ```

        Tipos de componentes
        - Presentacionales (UI) → Solo muestran datos, no manejan lógica.
        - Contenedores (Smart) → Manejan lógica, estado y pasan props.
    
    - Props

        Las props son la forma en que un componente recibe datos desde su padre.
        Son inmutables: el componente hijo solo las usa, no las cambia.

        Ejemplo
        ```jsx
            function Saludo({ nombre, edad }) {
                return <h2>Hola {nombre}, tienes {edad} años</h2>;
            }

            function App() {
                return (
                    <div>
                    <Saludo nombre="Luis" edad={30} />
                    <Saludo nombre="Fernando" edad={25} />
                    </div>
                );
            }
        ```

        Diferencia clave:

        - Estado (useState) → Datos internos que cambian dentro de un componente.
        - Props → Datos que vienen de afuera (de otro componente).

    - Estados

        El estado son datos internos que un componente maneja y que al cambiar provocan que la UI se renderice de nuevo.

        En React se maneja con el Hook useState:

        ```jsx
            import { useState } from "react";

            function Contador() {
            const [contador, setContador] = useState(0);

            return (
                <div>
                <h2>Contador: {contador}</h2>
                <button onClick={() => setContador(contador + 1)}>Incrementar</button>
                <button onClick={() => setContador(contador - 1)}>Decrementar</button>
                </div>
            );
            }

            export default Contador;
        ```     

        Explicación : 

        - useState(0) inicializa el estado con 0.
        - contador → valor actual del estado.
        - setContador → función para actualizar el estado.
        - Cada vez que cambias el estado, React vuelve a renderizar el componente.

    - Eventos

        En React, los eventos funcionan de manera similar a JavaScript, pero se escriben en camelCase y se pasan como funciones.

        Ejemplo
        ```js
            function Boton() {
                const manejarClick = () => {
                    alert("¡Hiciste clic en el botón!");
                };

                return <button onClick={manejarClick}>Haz clic</button>;
            }    
        ```    

        Ejemplo con parametro
        ```js
        function Lista() {
            const mostrarItem = (item) => {
                console.log("Item seleccionado:", item);
            };

            return (
                <div>
                <button onClick={() => mostrarItem("Manzana")}>Manzana</button>
                <button onClick={() => mostrarItem("Pera")}>Pera</button>
                </div>
            );
        }
        ```
        Eventos comunes en React : 
        - onClick
        - onChange (inputs)
        - onSubmit (formularios)
        - onMouseEnter, onMouseLeave
        - onKeyDown, onKeyUp
        
    - Hooks

 - Buenas practicas
    - Componentes pequeños y reutilizables
    - Nombres claros
    - Usa estados solo donde sea necesario
    - Aprende (React Router, Context API y REDUX)


