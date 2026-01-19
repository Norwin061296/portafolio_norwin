# Portafolio Profesional - Desarrollador Full Stack

Portafolio web moderno y dinámico desarrollado en React Native con Expo, optimizado para web. Presenta 5+ años de experiencia en desarrollo móvil y backend con un diseño elegante y profesional.

## ✨ Características

- **🎨 Diseño Moderno y Dinámico**: Interfaz moderna con animaciones suaves y efectos visuales atractivos
- **🌐 Optimizado para Web**: Diseñado específicamente para una experiencia web excepcional
- **🎯 Clean Architecture**: Organización modular con features, core y shared
- **💎 Diseño Premium**: Paleta de colores negro y dorado con gradientes elegantes
- **📱 Responsive**: Adaptable a diferentes tamaños de pantalla
- **⚡ Animaciones Fluidas**: Transiciones y animaciones suaves para una mejor UX
- **🎭 Componentes Reutilizables**: Sistema de componentes escalable y bien estructurado
- **🔒 TypeScript**: Tipado estático para mayor seguridad y mantenibilidad

## 🚀 Tecnologías Utilizadas

### Stack Principal
- **React Native** 0.76.9 - Framework multiplataforma
- **Expo** ~52.0.11 - Herramientas y servicios
- **TypeScript** ~5.3.3 - Tipado estático
- **Expo Linear Gradient** - Gradientes elegantes
- **React Native Web** - Renderizado web optimizado

### Tecnologías Presentadas en el Portafolio

#### Mobile Development
- Flutter
- React Native
- Kotlin
- Swift
- Java
- Ionic
- Angular

#### Backend Development
- NestJS
- .NET
- Spring Boot (Java)
- Node.js

#### Databases
- SQLite
- Oracle
- SQL Server
- PostgreSQL
- MySQL

## 📁 Estructura del Proyecto

```
portafolio_norwin/
├── src/
│   ├── features/              # Features modulares
│   │   ├── hero/              # Sección de presentación con animaciones
│   │   ├── experience/        # Experiencia profesional con timeline
│   │   ├── skills/            # Habilidades técnicas interactivas
│   │   ├── projects/          # Proyectos destacados con cards modernas
│   │   └── contact/          # Información de contacto
│   ├── core/                  # Lógica central
│   │   ├── components/       # Componentes globales (GlobalStyles)
│   │   ├── constants/        # Tema y constantes
│   │   ├── data/             # Datos del portafolio
│   │   ├── types/            # Definiciones de tipos
│   │   └── utils/            # Utilidades (estilos globales)
│   └── shared/               # Componentes compartidos
│       └── components/       # Button, Card, Typography, Container
├── App.tsx                   # Componente principal
├── package.json              # Dependencias
└── tsconfig.json            # Configuración TypeScript
```

## 🛠️ Instalación

1. **Instalar dependencias:**
```bash
npm install
```

2. **Iniciar el proyecto:**
```bash
npm start
```

3. **Ejecutar en web (recomendado):**
```bash
npm run web
```

## 📜 Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo Expo
- `npm run web` - Ejecuta en navegador web (recomendado)
- `npm run ios` - Ejecuta en simulador iOS
- `npm run android` - Ejecuta en emulador Android
- `npm run lint` - Ejecuta el linter
- `npm run type-check` - Verifica tipos TypeScript

## 🎨 Características del Diseño

### Secciones del Portafolio

1. **Hero Section**
   - Animaciones de entrada suaves
   - Efectos de brillo animados
   - Estadísticas destacadas
   - Botones de acción con efectos hover
   - Indicador de scroll

2. **Experience Section**
   - Timeline visual interactivo
   - Cards con efectos de elevación
   - Animaciones escalonadas
   - Diseño limpio y profesional

3. **Skills Section**
   - Categorías organizadas por tipo
   - Chips de tecnologías con gradientes
   - Animaciones de entrada progresivas
   - Card destacada con años de experiencia

4. **Projects Section**
   - Grid responsive de proyectos
   - Cards modernas con efectos visuales
   - Tags de tecnologías
   - Animaciones de entrada escalonadas

5. **Contact Section**
   - Cards de contacto interactivas
   - Efectos hover suaves
   - Badge de disponibilidad
   - Footer con información

### Sistema de Diseño

- **Colores**: Paleta negro (#000000) y dorado (#D4AF37)
- **Tipografía**: Sistema de tipografía escalable con múltiples variantes
- **Espaciado**: Sistema de espaciado consistente
- **Sombras**: Múltiples niveles de elevación
- **Animaciones**: Transiciones suaves y naturales

## 🎯 Personalización

### Actualizar Información Personal

Edita los archivos en cada feature para personalizar:

- **Hero**: `src/features/hero/components/HeroSection.tsx`
- **Experiencia**: `src/features/experience/components/ExperienceSection.tsx`
- **Habilidades**: `src/features/skills/components/SkillsSection.tsx`
- **Proyectos**: `src/features/projects/components/ProjectsSection.tsx`
- **Contacto**: `src/features/contact/components/ContactSection.tsx`

### Modificar Datos del Portafolio

Los datos están centralizados en `src/core/data/portfolioData.ts`. Puedes editar:
- Experiencias laborales
- Habilidades técnicas
- Proyectos destacados
- Información de contacto

### Modificar Tema

El tema se encuentra en `src/core/constants/theme.ts`. Puedes ajustar:

- Colores (primarios, secundarios, texto)
- Espaciado
- Tipografía
- Bordes y sombras
- Animaciones

### Estilos Globales

Los estilos globales para web están en `src/core/utils/globalStyles.ts`. Incluyen:
- Scrollbar personalizada
- Animaciones CSS
- Efectos de hover
- Estilos de accesibilidad

## 🏗️ Arquitectura

El proyecto sigue principios de Clean Architecture:

- **Features**: Módulos independientes por funcionalidad
- **Core**: Lógica y utilidades centrales
- **Shared**: Componentes y recursos compartidos

Cada feature es autocontenida y puede ser desarrollada/probada independientemente.

## 🧩 Componentes Compartidos

- **Typography**: Componente de texto con múltiples variantes (h1-h3, body, caption, label)
- **Card**: Contenedor con variantes (elevated, outlined, gradient)
- **Button**: Botón con variantes (primary, outlined, text) y estados (loading, disabled)
- **Container**: Contenedor responsive con max-width

## 🌟 Mejoras Implementadas

- ✅ Diseño completamente rediseñado para web
- ✅ Animaciones fluidas y transiciones suaves
- ✅ Efectos visuales mejorados (glows, gradients, shadows)
- ✅ Mejor organización visual de las secciones
- ✅ Cards más atractivas y modernas
- ✅ Timeline interactivo en experiencia
- ✅ Grid responsive mejorado
- ✅ Efectos hover en componentes interactivos
- ✅ Scroll suave entre secciones
- ✅ Estilos globales optimizados para web

## 📝 Notas

- Este proyecto está optimizado principalmente para **web**
- Las animaciones utilizan `Animated` API de React Native
- Los estilos están optimizados para React Native Web
- Compatible con navegadores modernos

## 📄 Licencia

Proyecto personal - Libre uso con atribución

---

Desarrollado con React Native, TypeScript y mucho ☕
