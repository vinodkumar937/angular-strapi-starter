# Angular Strapi starter template

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
### Customization of Strapi `"Welcome to your Strapi app"` page
Modify the contents of `public/index.html` in `backend` folder