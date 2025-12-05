# Guía Completa para Usar Tablas en HTML5

## 1. ¿Qué es una tabla en HTML5?

Una **tabla en HTML5** es una estructura usada para organizar
información en filas y columnas. Se construye mediante un conjunto de
etiquetas que permiten definir encabezados, filas, celdas, pies de tabla
y más.

------------------------------------------------------------------------

## 2. Estructura básica de una tabla

``` html
<table>
    <tr>
        <td>Celda 1</td>
        <td>Celda 2</td>
    </tr>
</table>
```

-   `<table>`: Contenedor principal.
-   `<tr>`: Define una fila.
-   `<td>`: Define una celda dentro de la fila.

------------------------------------------------------------------------

## 3. Usar encabezados en tablas

``` html
<table>
    <tr>
        <th>Nombre</th>
        <th>Edad</th>
    </tr>
    <tr>
        <td>Ana</td>
        <td>25</td>
    </tr>
</table>
```

-   `<th>` representa una celda de encabezado, se muestra en
    **negrilla** y normalmente centrada.

------------------------------------------------------------------------

## 4. Agregar título a una tabla con `<caption>`

``` html
<table>
    <caption>Lista de Empleados</caption>
    <tr>
        <th>Nombre</th>
        <th>Cargo</th>
    </tr>
    <tr>
        <td>Carlos</td>
        <td>Gerente</td>
    </tr>
</table>
```

------------------------------------------------------------------------

## 5. Secciones avanzadas: thead, tbody, tfoot

``` html
<table>
    <thead>
        <tr>
            <th>Producto</th>
            <th>Precio</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Manzana</td>
            <td>$2</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Total</td>
            <td>$2</td>
        </tr>
    </tfoot>
</table>
```

-   `<thead>`: Encabezado de la tabla\
-   `<tbody>`: Cuerpo\
-   `<tfoot>`: Pie (útil para totales)

------------------------------------------------------------------------

## 6. Combinar celdas con `colspan` y `rowspan`

### Combinar columnas

``` html
<td colspan="2">Celda combinada</td>
```

### Combinar filas

``` html
<td rowspan="2">Celda vertical</td>
```

------------------------------------------------------------------------

## 7. Estilos básicos con CSS

``` html
<table>
    <tr>
        <th>Item</th>
        <th>Valor</th>
    </tr>
    <tr>
        <td>Laptop</td>
        <td>$800</td>
    </tr>
</table>

<style>
table {
    width: 100%;
    border-collapse: collapse;
}
th, td {
    border: 1px solid #000;
    padding: 8px;
}
th {
    background: #f0f0f0;
}
</style>
```

------------------------------------------------------------------------

## 8. Hacer una tabla responsive

``` html
<div style="overflow-x:auto;">
    <table>
        <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
        </tr>
        <tr>
            <td>Ana</td>
            <td>ana@mail.com</td>
            <td>555-123</td>
        </tr>
    </table>
</div>
```

------------------------------------------------------------------------

## 9. Buenas prácticas

-   Usa `<th>` siempre que tengas encabezados.
-   Usa `scope="col"` y `scope="row"` para accesibilidad.
-   Mantén una estructura clara con `thead`, `tbody`, `tfoot`.
-   Evita tablas gigantes sin estilos o scroll horizontal.

------------------------------------------------------------------------

## 10. Ejemplo completo

``` html
<table>
    <caption>Reporte de Inventario</caption>

    <thead>
        <tr>
            <th scope="col">Producto</th>
            <th scope="col">Categoría</th>
            <th scope="col">Stock</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Mouse</td>
            <td>Accesorios</td>
            <td>150</td>
        </tr>
        <tr>
            <td>Teclado</td>
            <td>Accesorios</td>
            <td>80</td>
        </tr>
    </tbody>

    <tfoot>
        <tr>
            <td colspan="2">Total Productos</td>
            <td>230</td>
        </tr>
    </tfoot>
</table>
```

------------------------------------------------------------------------

## Conclusión

Las tablas en HTML5 permiten representar datos de forma estructurada.
Con el uso adecuado de etiquetas, estilos y buenas prácticas, puedes
crear tablas claras, accesibles y profesionales.
