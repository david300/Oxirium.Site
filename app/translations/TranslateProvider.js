/**
 * INSPINIA - Responsive Admin Theme
 *
 */
function config($translateProvider) {

    $translateProvider
        .translations('en', {
            MENU: {
                MONITORING: {
                    TITLE: 'Monitoring',
                    ROUTETRACKING: 'Route tracking'
                },
                TRACKING:{
                    TITLE: 'Tracking',
                    MAIN: 'Main'
                }
            },
            LOGIN:{
              LOG_IN: 'Login',
              FORGOT_PASSWORD: 'Forgot password?',
              REGISTER: 'Register account'
            },
            REGISTER:{
              REGISTRATION: 'Registration',
              REGISTER_ME: 'Register',
              FIELDS:{
                COMPANY: "Company",
                CUIT: "CUIT",
                DNI: "DNI",
                NAME: "Name",
                LASTNAME: "Last name",
                EMAIL: "Email",
                PASSWORD: "Password",
                PASSWORD_REPEAT: "Repeat password"
              }
            }

        })
        .translations('es', {
            MENU: {
                MONITORING: {
                    TITLE: 'Monitoreo',
                    ROUTETRACKING: 'Tracking de rutas'
                },
                TRACKING:{
                    TITLE: 'Seguimiento',
                    MAIN: 'Principal'
                }
              },
            LOGIN:{
              LOG_IN: 'Iniciar sesión',
              FORGOT_PASSWORD: '¿Olvidó su contraseña?',
              REGISTER: 'Crear una cuenta'
            },
            REGISTER:{
              REGISTRATION: 'Registración',
              REGISTER_ME: 'Registrarme',
              FIELDS:{
                COMPANY: "Empresa",
                CUIT: "CUIT",
                DNI: "DNI",
                NAME: "Nombre",
                LASTNAME: "Apellido",
                EMAIL: "Correo electrónico",
                PASSWORD: "Contraseña",
                PASSWORD_REPEAT: "Repetir contraseña"
              }
            }
        });
    $translateProvider.preferredLanguage('en');
}

angular
    .module('inspinia')
    .config(config)
