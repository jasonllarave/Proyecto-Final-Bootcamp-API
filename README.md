

# Proyecto Final Bootcamp — API REST

API RESTful construida con Node.js, Express y MongoDB Atlas para gestionar usuarios, películas, reseñas y favoritos.

---

## Tecnologías

- Node.js
- Express 5
- MongoDB Atlas
- Mongoose 9
- dotenv
- nodemon

---

## Requisitos previos

- Node.js instalado — https://nodejs.org
- Cuenta en MongoDB Atlas — https://cloud.mongodb.com
- Git instalado — https://git-scm.com

---

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/jasonllarave/Proyecto-Final-Bootcamp-API.git
cd Proyecto-Final-Bootcamp-API
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Crear el archivo `.env`

Creá un archivo `.env` en la raíz del proyecto con las siguientes variables:

```dotenv
MONGODB_URI=tu_string_de_conexion_mongodb
PORT=3000
```



### 4. Correr el servidor

```bash
nodemon app.js
```

Si no tenés nodemon instalado:

```bash
npm install -g nodemon
nodemon app.js
```

O con node directamente:

```bash
node app.js
```

### 5. Verificar que funciona

Abre el navegador o Postman y entra a:

```
http://localhost:3000
```

Deberías ver:

```json
{ "mensaje": "¡Api funciona!" }
```

---

## Estructura del proyecto

```
proyectofinal/
├── config/
│   └── db.js
├── controllers/
│   ├── userController.js
│   ├── movieController.js
│   ├── reviewController.js
│   └── favoriteController.js
├── models/
│   ├── User.js
│   ├── Movie.js
│   ├── Review.js
│   └── Favorites.js
├── routes/
│   ├── userRoutes.js
│   ├── movieRoutes.js
│   ├── reviewRoutes.js
│   └── favoriteRoutes.js
├── .env
├── .gitignore
├── index.js
└── package.json
```

---

## Endpoints

### Usuarios `/api/users`

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/api/users` | Crear usuario |

### Películas `/api/movies`

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/api/movies` | Crear película |
| GET | `/api/movies` | Obtener todas las películas |

### Reseñas `/api/reviews`

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/api/reviews` | Crear reseña |
| GET | `/api/reviews` | Obtener todas las reseñas |

### Favoritos `/api/favorites`

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/api/favorites` | Agregar favorito |
| GET | `/api/favorites` | Obtener todos los favoritos |
| GET | `/api/favorites/:id` | Obtener favorito por ID |
| PUT | `/api/favorites/:id` | Actualizar favorito |
| DELETE | `/api/favorites/:id` | Eliminar favorito |

---

## Ejemplos de uso

### Crear usuario

```
POST http://localhost:3000/api/users
Content-Type: application/json
```

```json
{
  "nombre": "Juan Pérez",
  "email": "juan@mail.com",
  "edad": 25,
  "ciudad": "Bogotá",
  "rol": "usuario"
}
```

### Crear favorito

```
POST http://localhost:3000/api/favorites
Content-Type: application/json
```

```json
{
  "usuarioId": "64f1a2b3c4d5e6f7g8h9i0j1",
  "peliculaId": "64f1a2b3c4d5e6f7g8h9i0j2"
}
```

### Respuesta exitosa

```json
{
  "exitoso": true,
  "mensaje": "Favorito creado",
  "datos": {
    "_id": "...",
    "usuarioId": "...",
    "peliculaId": "...",
    "createdAt": "..."
  }
}
```

### Respuesta de error

```json
{
  "exitoso": false,
  "mensaje": "Error al guardar favorito",
  "error": "descripción del error"
}
```

---

## Configuración de MongoDB Atlas

Si tenies problemas de conexión con el string `mongodb+srv://` prueba con la conexión directa:

```dotenv
MONGODB_URI=mongodb://USUARIO:PASSWORD@shard-00-00.mongodb.net:27017,shard-00-01.mongodb.net:27017,shard-00-02.mongodb.net:27017/NombreDB?ssl=true&replicaSet=atlas-xxxxx&authSource=admin&appName=NombreApp&retryWrites=true&w=majority
```

---

## Autor

Camilo Llarave — Bootcamp BIT Módulo 2