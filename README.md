## Details of starter template   

This starter template uses backend as Strapi & frontend as Angular.

    - Angular 16
    - Strapi 4.13.2
    - Node 18

## Get Started

#### Clone the repo:
```bash
git clone https://github.com/vinodkumar937/angular-strapi-starter.git project-name
```
#### Change to `project` directory:
```bash
cd project-name
```
#### Modify `Strapi Init Admin plugin` details in `scripts/env.template` file:
```bash
# strapi Init Admin plugin
INIT_ADMIN_USERNAME=admin
INIT_ADMIN_PASSWORD=password
INIT_ADMIN_FIRSTNAME=firstname
INIT_ADMIN_LASTNAME=lastname
INIT_ADMIN_EMAIL=username@mail.com
```
#### `Setup` backend & frontend:
```bash
yarn setup
```
#### Build strapi admin panel:
```bash
yarn build:backend
```
#### Start backend & frontend:
```bash
yarn develop
```
#### remove `.env, .tmp/, .angular/, node_modules/, .cache/ & build/` :
```bash
yarn clear
```
## Add `ngx-bootstrap` to angular

you can use any of these methods to add `ngx-bootstrap` to your frontend angular project

### using scripts
```bash
yarn frontend:ngx-bootstrap
```

### Manual installation
#### Change to `frontend` directory:
```bash
cd frontend
```

#### Use the Angular CLI ng add command for updating your Angular project
```bash
ng add ngx-bootstrap
```

## Add `tailwindcss` to angular

you can use any of these methods to add `tailwindcss` to your frontend angular project


### using scripts
```bash
yarn frontend:tailwindcss
```
### Manual installation
#### Change to `frontend` directory:
```bash
cd frontend
```

#### Install tailwindcss via npm, and then run the init command to generate a tailwind.config.js file.
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

#### Add the paths to all of your template files in your tailwind.config.js file.
```bash
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### Add the @tailwind directives for each of Tailwind’s layers to your ./src/styles.css file.
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Customization of Strapi `"Welcome to your Strapi app"` page
Modify the contents of `public/index.html` in `backend` folder