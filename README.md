# 💰 KAPITAL API

Una API RESTful para gestionar cuentas bancarias, construida con **Node.js**, **MongoDB** y autenticación **JWT**. Documentada con **Swagger** y estructurada para escalabilidad y seguridad.

---

## 🚀 Tecnologías principales

| Herramienta           | Descripción                                           |
|------------------------|-------------------------------------------------------|
| 🟩 Node.js             | Entorno de ejecución para JavaScript en el backend   |
| 🍃 Mongoose            | ODM para interactuar con MongoDB                     |
| 🔐 JWT                 | Autenticación segura con JSON Web Tokens             |
| 📘 Swagger             | Documentación interactiva de la API                  |
| 🛠️ Express             | Framework de servidor web rápido y minimalista       |

---

## 📦 Scripts disponibles

| Comando              | Descripción                                          |
|----------------------|------------------------------------------------------|
| `npm run dev`        | Inicia el servidor en modo desarrollo (nodemon)     |
| `npm run build`      | Compila el proyecto TypeScript                      |
| `npm start`          | Inicia el servidor en modo producción               |
| `npm run lint`       | Ejecuta el linter con ESLint                        |
| `npm run format`     | Formatea el código con Prettier                     |

---

## ▶️ Cómo iniciar el servidor

1. Instala las dependencias:

    ```bash
    npm install
    ```

2. Crea un archivo `.env` con tus variables necesarias:

    ```env
    MONGO_URI=mongodb://localhost:27017/kapital
    JWT_SECRET=supersecreto
    PORT=3000
    ```

3. Inicia el servidor en modo desarrollo:

    ```bash
    npm run dev
    ```

---

## 🛠️ Estructura base del proyecto

```bash
src/
├── config/              # Configuración global y constantes
├── controllers/         # Lógica de negocio para cada ruta
├── middlewares/         # Middlewares de autenticación y validaciones
├── models/              # Modelos de Mongoose (User, Account, Transaction)
├── routers/             # Definición de rutas RESTful
├── services/            # Servicios auxiliares
├── utils/               # Helpers, creación del servidor, etc.
└── index.ts             # Punto de entrada principal
 ```

 ---

## 📄 Documentación de la API (Swagger)
La API está documentada usando Swagger. Puedes ver la documentación interactiva en:

---
👉 http://localhost:3000/api/docs

---
## 🔐 Autenticación
Para acceder a rutas protegidas:

Regístrate o inicia sesión usando /auth/register o /auth/login.

Copia el token JWT de la respuesta.

Haz clic en el botón Authorize en la documentación Swagger.

Pega el token con el prefijo Bearer (con espacio).

---
## Pruebas con Postman
Puedes importar el archivo postman.json incluido para realizar pruebas de los endpoints.

✅ Checklist de funcionalidades
 Registro e inicio de sesión de usuarios

 CRUD de cuentas bancarias

 Operaciones de depósito y retiro

 Historial de transacciones por cuenta

 Seguimiento de saldo actualizado

 Autorización granular por usuario

 Documentación Swagger
