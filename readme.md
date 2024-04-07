# Simulador de Ecdomerse basico

## Descripcion
Este es un trabajo realizado para el curso de **Desarrollo de Aplicaciones Móviles** de **CoderHouse**. Representa los estudios y la práctica realizada a lo largo del curso.

La aplicación creada debía ser un e-commerce básico desarrollado con **React Native**, cumpliendo con las condiciones propuestas para demostrar el aprendizaje exitoso del alumno.



## Requerimientos de la app.

+ Preparar la estructura base de un proyecto móvil utilizando React Native.
+ Construir los componentes, su lógica y aplicar el manejo de estado de la aplicación (con Redux Toolkit).
+ Documentar el proyecto.
+ Utilizar interfaces del dispositivo y sus permisos correspondientes. Puede ser una de las dos: cámara o ubicación. También se pueden utilizar ambas.
+ Implementar Firebase con Realtime Database y Authentication.
+ Debe poderse realizar una navegación entre las pantallas de la app.
+ Poseer persistencia de datos (SQLite).
+ Opcional: crear una compilación móvil para Android y disponer del APK en tu móvil.

## Contenido de la App

1. Inicia en un Login con requisitos de Email y contraseña, las cuales serán corroboradas con la base de datos de Firebase. Si no se poseen, se puede crear una cuenta sin ningún tipo de requisito.

2. En la parte superior (en el header) además del título de la sección de la app, posee dos botones. Al lado derecho, el de "Salir" cierra la sesión iniciada con la cuenta. En el lado izquierdo, si se adentró en la app más allá de la pantalla inicial, tendré un botón de retroceso para volver a la pantalla anterior de esa sección particular.

3. Un navegador táctil en la parte inferior donde se muestran las cuatro secciones principales para una fácil navegación.

4. Sección **Shop**:
    4. 1. Una exposición de las categorías de los productos desplegados mediante una FlatList en una disposición vertical.
    4. 2. Al ingresar a una categoría, en el mismo formato, los productos pertenecientes a dicha categoría.
    4. 3. Ingresando al producto se encuentran los detalles de dicho producto y un botón para su adición al carrito de compras.

5. Sección **Cart**: 
    Una exposición de todos los elementos agregados al carrito, si es que los hay. De ser ese el caso, también mostrará el total de la suma de los precios del carrito y la confirmación de este para transformarlo en una orden.


6. Sección **Orders**(*defectusa*):
    Aquí se deberían mostrar todas las órdenes del usuario registradas hasta el momento con su fecha de creación *(debido a ciertos problemas, actualmente es imposible mostrar las órdenes y la sección se encuentra permanentemente vacía, indistintamente de si hay órdenes o no en la base de datos)*.


7. Sección **My Profile**:
    En esta sección se encuentra la imagen de usuario o una por defecto si aún no se ha asignado ninguna. Aquí se puede asignar/cambiar tanto la imagen de usuario como la dirección de este.


## Tecnologias


| React Native  | Firebase   | SQLite      | Expo    | Geocoding API |
|:-------------:|:----------:|:-----------:|:-------:|:-------------:|
| ⚛️             | 🔥         | 📦          | 📱      | 🌍            |
| Framework para desarrollo de apps móviles con React.             | Plataforma de desarrollo de apps con servicios backend.         |  Base de datos relacional para almacenamiento local.         | Plataforma para desarrollo rápido de apps móviles.      | API para convertir direcciones en coordenadas geográficas.            |


#### Librerias y Dependencias

- @expo/vector-icons: Conseguir los iconos para aplicación.
- @react-navigation/bottom-tabs: Navegación por pestañas en React Navigation.
- @react-navigation/native: Navegación principal en React Navigation.
- @react-navigation/native-stack: Stack de navegación en React Navigation.
- @reduxjs/toolkit: Para el manejo del estado de la aplicación con Redux Toolkit.
- cors: Middleware para habilitar el acceso a recursos de otros orígenes en Express.js.
- expo-file-system: Acceso al sistema de archivos en Expo.
- expo-font: Para cargar fuentes personalizadas.
- expo-image-picker: Para seleccionar imágenes de la galería o la cámara.
- expo-location: Para acceder a la ubicación del dispositivo.
- expo-sqlite: Para utilizar SQLite.
- expo-status-bar: Uso del StatusBar en el estilo de la app.
- react-native-safe-area-context: Ayuda para ajustar el diseño basado en el área segura de dispositivos móviles.
- react-native-screens: Para mejorar el rendimiento de las pantallas en React Native.
- react-redux: Para conectar React con Redux y manejar el estado global de la aplicación.


### Agradecimientos

Gracias a mis profesores y tutores por lo que me han enseñado. Lamento no haber podido aprovecharlo más y en este trabajo, debido a cuestiones personales, no es ni una mínima parte de lo que podría haber sido si le hubiera dedicado el tiempo adecuado.

También, gracias a mis compañeros, pues con el intercambio entre nosotros pude encontrar soluciones a varios problemas.

## FIN
    

