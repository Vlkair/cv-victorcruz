# Mi CV Online

Mi currículum vitae alojado en GitHub Pages. Lo armé para tener una versión web accesible de mi perfil profesional.

## Características

- Responsive (se ve bien en celular y computadora)
- Se puede imprimir decentemente
- Fácil de actualizar
- Alojado gratis en GitHub Pages

## Cómo lo desplegué en GitHub Pages

Por si alguien quiere hacer algo similar:

1. Creé un repositorio nuevo en GitHub
2. Subí mis archivos con estos comandos:

```bash
git init
git add .
git commit -m "primer commit"
git remote add origin https://github.com/USUARIO/REPO.git
git branch -M main
git push -u origin main
```

3. En Settings > Pages del repositorio, activé GitHub Pages desde la rama main
4. Listo, quedó en `https://USUARIO.github.io/REPO/`

## Cómo actualizar el contenido

Todo está en `index.html`. Ahí modifico:

- Nombre y datos de contacto
- Perfil profesional
- Experiencia
- Proyectos
- Habilidades
- Educación e idiomas

Para cambiar colores edito `assets/css/main.css`. La foto de perfil va en `assets/images/profile.jpg`.

## Estructura del proyecto

```
cv-victorcruz/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── main.css
    ├── js/
    │   └── main.js
    └── images/
        └── profile.jpg
```

## Tecnologías usadas

- HTML5, CSS3, JavaScript
- Bootstrap 4.6.2
- Font Awesome para los íconos

## Notas

El template base es de Xiaoying Riley (Creative Commons Attribution 3.0), lo adapté a mis necesidades.

---

Victor Williams Cruz Mamani
