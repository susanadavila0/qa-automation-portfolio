# QA Automation Portfolio 🚀

Este repositorio contiene mis scripts de automatización. He implementado el patrón de diseño **Page Object Model (POM)** para asegurar que el código sea mantenible y escalable.

## ¿Por qué Page Object Model?

El POM es un patrón de diseño que mejora la **mantenibilidad, reusabilidad y legibilidad** del código de automatización:

- 🎯 **Mantenibilidad**: Los selectores están centralizados en las clases de página
- 🔄 **Reusabilidad**: Los métodos de página se reutilizan en múltiples pruebas
- 📖 **Legibilidad**: Las pruebas son claras y enfocadas en la lógica de negocio
- 🛠️ **Escalabilidad**: Fácil agregar nuevas páginas y pruebas sin refactorizar

### Estructura del Proyecto:
```
qa-automation-portfolio/
├── pages/              # Objetos de página (Selectores + Métodos)
│   └── LoginPage.js    # Ejemplo: Abstracción de la página de login
├── tests/              # Scripts de prueba
│   └── login.spec.js   # Ejemplo: Pruebas de login
└── README.md
```

- `/pages`: Contiene los selectores y métodos de cada página (Abstracción).
- `/tests`: Contiene los scripts de prueba que ejecutan la lógica de negocio.

## Tecnologías

- **Lenguaje**: JavaScript
- **Framework de Pruebas**: Playwright / Cypress
- **Patrón de Diseño**: Page Object Model (POM)

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/susanadavila0/qa-automation-portfolio.git

# Instalar dependencias
npm install

# Ejecutar las pruebas
npm test
```

## Ejemplo: Page Object Model

### LoginPage.js (POM)
```javascript
class LoginPage {
  constructor(page) {
    this.usernameInput = '#username';
    this.passwordInput = '#password';
    this.loginButton = 'button[type="submit"]';
  }

  async login(username, password) {
    await page.fill(this.usernameInput, username);
    await page.fill(this.passwordInput, password);
    await page.click(this.loginButton);
  }
}
```

### login.spec.js (Test)
```javascript
const LoginPage = require('../pages/LoginPage');

test('should login successfully', async () => {
  const loginPage = new LoginPage(page);
  await loginPage.login('user@example.com', 'password123');
});
```

---

**Portfolio de Automatización QA** | Demostrando mejores prácticas en testing 🎯