
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
        ```js
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
    - Estados
    - Eventos
    - Hooks

 - Buenas practicas
    - Componentes pequeños y reutilizables
    - Nombres claros
    - Usa estados solo donde sea necesario
    - Aprende (React Router, Context API y REDUX)


