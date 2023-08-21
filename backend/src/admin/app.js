// @ts-ignore
const config = {
    locales: []
};

// @ts-ignore
import favicon from './extensions/favicon.png';
// @ts-ignore
import logo from './extensions/logo.png';

const bootstrap = (app) => {
    console.log(app);
};

export default {
    config: {
        translations: {
            en: {
                "Auth.form.button.login.strapi": "Log in via Vidyardi",
                "Auth.form.register.subtitle": "Credentials are only used to authenticate in Vidyardi. All saved data will be stored in your database.",
                "Auth.form.welcome.subtitle": "Log in to your Vidyardi account",
                "Auth.form.welcome.title": "Welcome to Vidyardi!",
                "app.components.LeftMenu.navbrand.title": "Vidyardi Panel",
                "HomePage.helmet.title": "Dashboard - vidyardi Admin",
                "app.components.LeftMenu.navbrand.workplace": "Administration"
            }
        },
        head: {
            favicon: favicon
        },
        auth: {
            logo: logo
        },
        menu: {
            logo: favicon
        },
        tutorials: false
    },
    bootstrap
};
