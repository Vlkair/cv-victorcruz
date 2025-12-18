# 📄 CV Online - Curriculum Vitae

Este es mi curriculum vitae online, diseñado para ser desplegado en GitHub Pages.

## 🌟 Características

- Diseño responsive y profesional
- Compatible con todos los navegadores modernos
- Optimizado para impresión
- Fácil de personalizar
- Desplegable en GitHub Pages

## 🚀 Cómo Desplegar en GitHub Pages

### Paso 1: Crear un repositorio en GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Crea un nuevo repositorio con el nombre que prefieras (ej: `mi-cv`, `curriculum-vitae`, etc.)
3. **NO** inicialices el repositorio con README, .gitignore o licencia

### Paso 2: Subir tus archivos

Abre una terminal en esta carpeta y ejecuta los siguientes comandos:

```bash
# Inicializar Git en tu proyecto
git init

# Añadir todos los archivos
git add .

# Hacer el primer commit
git commit -m "Primer commit: CV online"

# Conectar con tu repositorio de GitHub (reemplaza TU-USUARIO y TU-REPOSITORIO)
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git

# Subir los archivos
git branch -M main
git push -u origin main
```

### Paso 3: Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, haz clic en **Pages**
4. En **Source**, selecciona la rama **main** y la carpeta **/ (root)**
5. Haz clic en **Save**
6. ¡Listo! Tu CV estará disponible en `https://TU-USUARIO.github.io/TU-REPOSITORIO/`

## ✏️ Personalizar tu CV

### 1. Información Personal

Edita el archivo `index.html` y busca las siguientes secciones para actualizarlas con tu información:

- **Nombre y título**: Líneas con `<h1 class="name">` y `<h3 class="tagline">`
- **Contacto**: Sección `<div class="contact-container">`
- **Foto de perfil**: Coloca tu foto en `assets/images/profile.jpg` (recomendado: 200x200px)

### 2. Contenido del CV

Actualiza las siguientes secciones en `index.html`:

- **Perfil Profesional**: Sección `summary-section`
- **Experiencia Laboral**: Sección `experiences-section`
- **Proyectos**: Sección `projects-section`
- **Habilidades**: Sección `skills-section`
- **Educación**: Sección en el sidebar `education-container`
- **Idiomas**: Sección `languages-container`
- **Intereses**: Sección `interests-container`

### 3. Personalizar Colores

Edita `assets/css/main.css` para cambiar los colores:

```css
/* Color principal (azul): */
background: #42A8C0; /* Cambia este valor */

/* Enlaces: */
color: #2d7788; /* Cambia este valor */
```

### 4. Añadir tu Foto

1. Coloca tu foto de perfil en `assets/images/profile.jpg`
2. Tamaño recomendado: 200x200 píxeles
3. Formato: JPG o PNG

## 📱 Responsive

El CV es completamente responsive y se adapta a:
- 📱 Móviles
- 📱 Tablets
- 💻 Desktop
- 🖨️ Impresión

## 🎨 Estructura de Archivos

```
curriculumVitae/
│
├── index.html              # Página principal
├── README.md              # Este archivo
│
└── assets/
    ├── css/
    │   └── main.css       # Estilos personalizados
    ├── js/
    │   └── main.js        # JavaScript
    └── images/
        └── profile.jpg    # Tu foto de perfil (añádela aquí)
```

## 🔧 Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (jQuery)
- Bootstrap 4.6.2
- Font Awesome 6.4.0

## 📝 Licencia

Este template está basado en un diseño de [Xiaoying Riley](http://themes.3rdwavemedia.com/) bajo licencia Creative Commons Attribution 3.0.

## 💡 Tips

1. **Actualiza regularmente**: Mantén tu CV actualizado con tu experiencia más reciente
2. **Links funcionales**: Asegúrate de que todos los enlaces a redes sociales y proyectos funcionen
3. **SEO**: Actualiza las meta tags en el `<head>` de index.html para mejorar el SEO
4. **Dominio personalizado** (opcional): Puedes configurar un dominio personalizado en GitHub Pages

## 🤝 Soporte

Si tienes problemas o preguntas:
- Revisa la [documentación de GitHub Pages](https://docs.github.com/es/pages)
- Verifica que todos los archivos estén en su lugar correcto
- Asegúrate de que las rutas en el HTML sean correctas

---

**Autor:** Victor Williams Cruz Mamani  
**¡Buena suerte con tu búsqueda de empleo!** 🚀
