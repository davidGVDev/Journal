# 📔 Journal App

Una aplicación web desarrollada con React + TypeScript + Vite que permite a los usuarios gestionar un diario personal. Este proyecto es parte del curso [React: De cero a experto (Hooks y MERN)](https://www.udemy.com/course/react-cero-experto/) de Fernando Herrera en Udemy.

## 🎯 Descripción del Proyecto

Journal App es una aplicación de diario personal que permite a los usuarios:
- 🔐 Autenticarse mediante email/password o Google usando Firebase
- 📝 Crear, editar y eliminar notas
- 🖼️ Añadir imágenes a las notas
- 📱 Interfaz responsive y moderna usando Material-UI
- 🌙 Modo oscuro/claro
- 🔍 Búsqueda de notas por título o contenido

## 🛠️ Tecnologías Utilizadas

- ⚛️ React 18
- 📘 TypeScript
- ⚡ Vite
- 🎨 Material-UI (MUI)
- 🔄 React Router DOM
- 💅 Emotion (para estilos)
- 🔥 Firebase (Autenticación y Almacenamiento)
- 📱 React Icons
- 🎯 SweetAlert2 (para notificaciones)

## 📋 Requisitos Previos

- 📦 Node.js (versión 14 o superior)
- 🔧 npm o yarn
- 🔑 Cuenta de Firebase (para autenticación)

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
VITE_APIKEY=tu-api-key
VITE_AUTHDOMAIN=tu-auth-domain
VITE_PROJECTID=tu-project-id
VITE_STORAGEBUCKET=tu-storage-bucket
VITE_MESSAGINGSENDERID=tu-messaging-sender-id
VITE_APPID=tu-app-id
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

## 🌟 Características Principales

- 🔒 Autenticación segura con Firebase
- 📱 Diseño responsive
- 🎨 Tema personalizado con modo oscuro/claro
- 📝 Editor de texto enriquecido
- 🖼️ Galería de imágenes con vista previa
- 🔍 Búsqueda de notas por título o contenido
- 📅 Organización de notas por fecha
- 🔄 Sincronización en tiempo real
- 🎯 Notificaciones con SweetAlert2

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes, por favor abre primero un issue para discutir lo que te gustaría cambiar.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT