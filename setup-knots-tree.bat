@echo off
REM Ejecutar este .bat desde la raíz del proyecto knots-and-blades

cd /d "%~dp0"

echo ==============================
echo Creando estructura de carpetas
echo ==============================

REM Carpetas principales
if not exist "src" mkdir src
if not exist "src\config" mkdir src\config

REM Segmento de idioma [lang]
if not exist "app\[lang]" mkdir app\[lang]
if not exist "app\[lang]\thank-you" mkdir app\[lang]\thank-you
if not exist "app\[lang]\shop" mkdir app\[lang]\shop
if not exist "app\[lang]\home" mkdir app\[lang]\home
if not exist "app\[lang]\crowdfunding" mkdir app\[lang]\crowdfunding
if not exist "app\[lang]\about" mkdir app\[lang]\about

echo ==============================
echo Creando archivos vacios clave
echo ==============================

REM Config
if not exist "src\config\books.ts" type nul > src\config\books.ts

REM Layouts y paginas
if not exist "app\layout.tsx" type nul > app\layout.tsx
if not exist "app\[lang]\layout.tsx" type nul > app\[lang]\layout.tsx
if not exist "app\[lang]\page.tsx" type nul > app\[lang]\page.tsx
if not exist "app\[lang]\thank-you\page.tsx" type nul > app\[lang]\thank-you\page.tsx
if not exist "app\[lang]\shop\page.tsx" type nul > app\[lang]\shop\page.tsx
if not exist "app\[lang]\home\page.tsx" type nul > app\[lang]\home\page.tsx
if not exist "app\[lang]\crowdfunding\page.tsx" type nul > app\[lang]\crowdfunding\page.tsx
if not exist "app\[lang]\about\page.tsx" type nul > app\[lang]\about\page.tsx

echo ==============================
echo Estructura creada.
echo Ahora solo tienes que pegar el codigo en cada archivo.
echo ==============================
pause