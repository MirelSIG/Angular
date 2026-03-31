# Ejercicio de Iniciacion a Angular

Guia de practica desarrollada en la pildora formativa dirigida por Jonathan Ibanez en Penascal F5.

El objetivo del ejercicio es construir una aplicacion Angular basica con componentes standalone, navegacion por rutas, barra de navegacion y pruebas unitarias funcionando.

## 1. Objetivo formativo

Al terminar este ejercicio, se podrá:

- Crear y ejecutar un proyecto Angular.
- Generar componentes con Angular CLI.
- Entender la estructura principal del proyecto.
- Configurar rutas basicas con Angular Router.
- Mostrar una barra de navegacion reutilizable.
- Ejecutar y corregir pruebas unitarias.
- Resolver errores comunes de compilacion y de test.

## 2. Requisitos previos

- Node.js instalado.
- npm instalado.
- Angular CLI disponible (global o por proyecto).
- VS Code recomendado.

Comprobaciones utiles:

```bash
node -v
npm -v
ng version
```

## 3. Estructura base del proyecto

Durante la practica se trabaja principalmente en:

- src/app/app.ts
- src/app/app.html
- src/app/app.routes.ts
- src/app/nav/nav.ts
- src/app/nav/nav.html
- src/app/nav/nav.css
- src/app/app.spec.ts
- src/app/nav/nav.spec.ts
- package.json

## 4. Paso a paso del ejercicio

### Paso 1: Arranque del proyecto

Instalar dependencias:

```bash
npm install
```

Lanzar proyecto en desarrollo:

```bash
npm run start
```

Nota: en este ejercicio se fija el puerto 4201 por defecto para evitar conflictos locales.

### Paso 2: Generacion de componentes

Se generan componentes de practica para maquetacion y navegacion:

```bash
ng g c nav
ng g c hola
ng g c mi-componente
ng g c components/presentacion
```

Cada componente se compone de:

- archivo TypeScript del componente.
- plantilla HTML.
- estilos CSS.
- archivo de pruebas unitarias.

### Paso 3: Construccion de la navegacion

En la plantilla de navegacion se definen enlaces con routerLink.

Puntos clave aplicados:

- Uso de routerLink para cambiar de vista.
- Uso de routerLinkActive para resaltar enlace activo.
- Separacion correcta entre HTML y CSS.

Error comun corregido en la practica:

- Tener CSS pegado dentro de nav.html puede provocar errores como Invalid ICU message.
- Solucion: dejar solo HTML en nav.html y mover estilos a nav.css.

### Paso 4: Importacion de directivas de router en componente standalone

Como el componente nav es standalone, necesita importar explicitamente las directivas de router que usa en su template.

En nav.ts se usan en imports:

- RouterLink
- RouterLinkActive

Sin esto, Angular muestra errores del tipo:

- Cant bind to routerLinkActiveOptions since it is not a known property.

### Paso 5: Configuracion de rutas

En app.routes.ts se define el mapa de rutas.

Rutas trabajadas:

- / -> Presentacion
- /instalacion -> Hola
- /primero-pasos -> MiComponente
- /componentes -> Presentacion
- /routes -> Nav
- wildcard ** -> redireccion a /

Error comun corregido en la practica:

- Export duplicado de routes o rutas a componentes inexistentes.
- Solucion: dejar una sola constante routes y referenciar componentes reales del proyecto.

### Paso 6: Estructura del componente raiz

El componente principal app muestra:

- la barra de navegacion fija.
- el contenido dinamico de la ruta activa con router-outlet.

Este cambio evita renderizar todos los componentes a la vez y permite navegacion real entre vistas.

### Paso 7: Script de inicio estable

En package.json se deja el script start asi:

```json
"start": "ng serve --port 4201"
```

Con esto se reduce el riesgo de fallo por puerto 4200 ocupado.

## 5. Pruebas unitarias y validacion

Ejecucion de pruebas:

```bash
npm run test -- --watch=false
```

Ajustes realizados en specs:

- En nav.spec.ts y app.spec.ts se anade provideRouter([]) para cubrir dependencias de RouterLink.
- Se actualiza una expectativa de app.spec.ts para validar el DOM actual del componente raiz.

Resultado esperado tras los ajustes:

- Todos los test en estado passed.

## 6. Problemas habituales y como resolverlos

### Problema: Puerto ocupado

Mensaje tipico:

- Port 4200 is already in use.

Solucion:

- usar otro puerto en arranque.
- dejarlo fijo en package.json si es una necesidad frecuente.

### Problema: Error NG0201 No provider found for ActivatedRoute en test

Solucion:

- anadir provideRouter([]) en TestBed providers.

### Problema: Errores de plantilla por mezcla de HTML y CSS

Solucion:

- revisar cierres de etiquetas.
- mantener HTML en .html y CSS en .css.
- validar comentarios CSS bien cerrados: /* ... */.

## 7. Comandos resumen de la sesion

```bash
npm install
ng g c nav
ng g c hola
ng g c mi-componente
ng g c components/presentacion
npm run start
npm run test -- --watch=false
```

## 8. Criterios de finalizacion del ejercicio

El ejercicio se considera completado cuando:

- La aplicacion arranca sin errores.
- La navegacion cambia vistas por rutas.
- El componente nav marca enlace activo.
- No hay errores de compilacion en el workspace.
- Las pruebas unitarias pasan.

## 9. Siguiente practica recomendada

- Crear una ruta lazy loaded.
- Anadir un formulario reactivo simple.
- Convertir contenido estatico en datos dinamicos.
- Aplicar mejoras de accesibilidad basicas.

---

Material redactado para apoyar la pildora formativa de iniciacion a Angular dirigida por Jonathan Ibanez en Penascal F5.
