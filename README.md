# Campus Servicios

Marketplace de servicios para estudiantes universitarios — **proyecto académico, propuesta hipotética**. No pertenece a ninguna universidad ni representa una plataforma oficial.

## ¿Qué es?

Campus Servicios conecta a estudiantes que necesitan servicios rápidos y accesibles (tutorías, diseño, impresiones, soporte técnico, edición, fotografía, traducción, etc.) con estudiantes que pueden ofrecerlos.

## Tecnologías

- **React** + **Vite** — SPA rápida y con estructura moderna
- **React Router** — navegación entre páginas
- **Tailwind CSS** — estilos utilitarios con paleta personalizada
- **lucide-react** — iconografía

No requiere backend: todos los datos son ficticios (`src/data`) y las interacciones (favoritos, login, solicitudes, publicación) están simuladas con estado local y `localStorage`.

## Estructura del proyecto

```
src/
  components/     Componentes reutilizables (Header, Footer, tarjetas, modales, filtros...)
  pages/          Páginas: Home, Services, ServiceDetail, ProviderProfile, PublishService...
  data/           Datos ficticios: servicios, proveedores, categorías
  context/        Context API: favoritos (localStorage) y estado de modales
  App.jsx         Rutas de la aplicación
  main.jsx        Punto de entrada
  index.css       Estilos base + Tailwind
```

## Cómo ejecutar el proyecto

Requisitos: Node.js 18 o superior.

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar en modo desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:5173
```

Para generar la build de producción:

```bash
npm run build
npm run preview
```

## Funcionalidades incluidas

- Búsqueda funcional de servicios (desde el header, el hero o la página de servicios)
- Filtros por categoría, modalidad, precio y valoración, con distintos criterios de orden
- Página de detalle de servicio con información del proveedor y reseñas
- Perfil de proveedor con sus servicios publicados
- Formulario de publicación de servicio con vista previa en vivo
- Favoritos (guardados en `localStorage`)
- Modal de inicio de sesión (cliente / proveedor) y modal de solicitud de servicio
- Navegación responsive con menú móvil (hamburguesa)
- Página "Cómo funciona" con el modelo de negocio propuesto (comisión, destacados, publicación premium)
- Página "Nosotros" con el contexto académico del proyecto

## Paleta de colores

| Color | Hex | Uso |
|---|---|---|
| Verde lima | `#A3F42A` | Botones principales y CTA |
| Verde | `#5EBB20` | Énfasis, estados activos |
| Morado | `#6C35D9` | Categorías, acentos secundarios |
| Negro azulado | `#17232D` | Títulos, navegación, footer |
| Gris oscuro | `#4B5563` | Texto secundario |
| Gris claro | `#F3F5F7` | Fondos secundarios |
| Blanco | `#FFFFFF` | Fondo principal |

## Nota

Este prototipo fue creado con fines académicos como parte de una propuesta de E-commerce. Las imágenes de servicios usan un servicio de imágenes de marcador de posición (picsum.photos) y los avatares usan pravatar.cc; en una versión real deberían reemplazarse por contenido propio subido por los usuarios.
