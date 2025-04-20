# Generador de Microhistorias

## Descripción
El **Generador de Microhistorias** es una aplicación web desarrollada en React que permite a los usuarios crear microhistorias cortas y aleatorias. Los usuarios pueden ingresar un personaje personalizado o dejar que la aplicación seleccione uno al azar. La historia se genera combinando un personaje, una acción, un lugar, un conflicto y una resolución, todos seleccionados de listas predefinidas. La interfaz tiene un diseño inspirado en ciencia ficción, con un estilo futurista que evoca pantallas de naves espaciales y tecnología avanzada.

## Características
- **Entrada de personaje**: Los usuarios pueden ingresar un personaje o usar uno aleatorio.
- **Generación aleatoria**: Cada historia combina elementos de personajes, acciones, lugares, conflictos y resoluciones de manera única.
- **Diseño sci-fi**: Interfaz con fondo oscuro, colores neón (cian), tipografías modernas, y efectos de brillo para un look futurista.
- **Responsive**: La aplicación se adapta a diferentes tamaños de pantalla.

## Tecnologías
- **React**: Biblioteca para la interfaz de usuario.
- **Tailwind CSS**: Framework para estilos.
- **Google Fonts**: Fuentes *Orbitron* y *Roboto Mono* para el diseño sci-fi.
- **JavaScript**: Lógica para generar historias aleatorias.

## Instalación
Sigue estos pasos para ejecutar el proyecto localmente:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/<tu_usuario>/generador-microhistorias.git
   cd generador-microhistorias
   ```

2. **Instala las dependencias**:
   Asegúrate de tener [Node.js](https://nodejs.org/) instalado. Luego, ejecuta:
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**:
   ```bash
   npm start
   ```
   La aplicación se abrirá en `http://localhost:3000`.

## Uso
1. Abre la aplicación en tu navegador.
2. (Opcional) Ingresa un personaje en el campo de texto (por ejemplo, "un robot").
3. Haz clic en el botón **Generar Historia**.
4. Lee la microhistoria generada en la parte inferior. ¡Cada clic genera una historia única!

## Ejemplo
**Entrada**: "un científico"  
**Salida**: "Un científico exploraba en la Luna, pero perdió su mapa. Al final, resolvió el caso."

## Estructura del proyecto
```
generador-microhistorias/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.jsx
│   ├── historia.js
│   └── index.js
├── package.json
├── README.md
└── ...
```

- `App.jsx`: Componente principal con la interfaz y lógica de entrada/salida.
- `historia.js`: Función que genera microhistorias combinando listas de palabras.

## Contribuir
¡Las contribuciones son bienvenidas! Si quieres agregar más personajes, acciones, o mejorar el diseño:
1. Haz un fork del repositorio.
2. Crea una rama para tu cambio (`git checkout -b nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m "Añade nueva funcionalidad"`).
4. Sube los cambios (`git push origin nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia
Este proyecto está bajo la [Licencia MIT](LICENSE).

## Autor
- **<Matías Berardo>** - [GitHub](https://github.com/<Mati-34Mat>)