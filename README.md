# 📔 Journal App

Una aplicación web desarrollada con React + TypeScript + Vite que permite a los usuarios gestionar un diario personal. Este proyecto es parte del curso [React: De cero a experto (Hooks y MERN)](https://www.udemy.com/course/react-cero-experto/) de Fernando Herrera en Udemy.

## 🎯 Descripción del Proyecto

Journal App es una aplicación de diario personal que permite a los usuarios:
- 🔐 Autenticarse mediante email/password o Google usando Firebase
- 📝 Crear, editar y eliminar notas
- 🖼️ Añadir imágenes a las notas mediante Cloudinary
- 📱 Interfaz responsive y moderna usando Material-UI
- 🌙 Modo oscuro/claro personalizable
- 🔍 Búsqueda de notas por título o contenido
- 📅 Organización cronológica de las notas
- ⚡ Carga optimizada de imágenes

## 🛠️ Tecnologías Utilizadas

- ⚛️ React 18
- 📘 TypeScript
- ⚡ Vite
- 🎨 Material-UI v5 (MUI)
- 🔄 React Router DOM v6
- 💅 Emotion (para estilos en JS)
- 🔥 Firebase 9 (Autenticación y Base de datos)
- ☁️ Cloudinary (Almacenamiento de imágenes)
- 📱 React Icons
- 🎯 SweetAlert2 (para notificaciones)
- 📊 Redux Toolkit (Manejo de estado)
- 🧪 Jest + React Testing Library (Testing)

## 📋 Requisitos Previos

- 📦 Node.js (versión 16 o superior)
- 🔧 npm o yarn
- 🔑 Cuenta de Firebase
- ☁️ Cuenta de Cloudinary

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone [url-del-repositorio]
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
```

3. Configura las variables de entorno:
Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
```env
# Firebase
VITE_APIKEY=tu-api-key
VITE_AUTHDOMAIN=tu-auth-domain
VITE_PROJECTID=tu-project-id
VITE_STORAGEBUCKET=tu-storage-bucket
VITE_MESSAGINGSENDERID=tu-messaging-sender-id
VITE_APPID=tu-app-id

# Cloudinary
VITE_CLOUDINARY_CLOUD_NAME=tu-cloud-name
VITE_CLOUDINARY_API_KEY=tu-api-key
VITE_CLOUDINARY_UPLOAD_PRESET=tu-upload-preset
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

## 🌟 Características Principales

- 🔒 Autenticación segura con Firebase
  - Login con email/password
  - Login con Google
  - Registro de nuevos usuarios
  - Recuperación de contraseña
- 📱 Diseño responsive y adaptativo
  - Soporte para móviles, tablets y escritorio
  - Navegación optimizada para cada dispositivo
- 🎨 Tema personalizado
  - Modo oscuro/claro
  - Colores personalizables
  - Transiciones suaves
- 📝 Gestión de notas
  - Editor de texto enriquecido
  - Organización por fecha
  - Etiquetas y categorías
- 🖼️ Gestión de imágenes
  - Carga múltiple de imágenes
  - Vista previa
  - Optimización automática
- 🔍 Búsqueda avanzada
  - Filtrado por título
  - Filtrado por contenido
  - Búsqueda por fecha
- 🔄 Características técnicas
  - Sincronización en tiempo real
  - Caché optimizada
  - Lazy loading de componentes
  - Testing unitario y de integración

## 🧪 Testing

Para ejecutar los tests:
```bash
npm run test
# o
yarn test
```

## 📦 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Genera la versión de producción
- `npm run preview`: Previsualiza la versión de producción
- `npm run test`: Ejecuta los tests
- `npm run lint`: Ejecuta el linter
- `npm run format`: Formatea el código

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👏 Agradecimientos

- Fernando Herrera por el excelente curso
- La comunidad de React por su continuo soporte
- Todos los contribuidores que han ayudado a mejorar este proyecto