# Angular Strapi starter template

This starter template uses backend as Strapi & frontend as Angular.

    - Angular 16
    - Strapi 4.12.5
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
#### Install starter dependencies:
```bash
yarn
```
#### `Setup` backend & frontend:
```bash
yarn setup
```
#### Create a `.env` in `/backend` folder, update accordingly:
```bash
HOST=0.0.0.0
PORT=1337
APP_KEYS="toBeModified1,toBeModified2"
API_TOKEN_SALT=tobemodified
ADMIN_JWT_SECRET=tobemodified
TRANSFER_TOKEN_SALT=tobemodified
JWT_SECRET=tobemodified

# strapi Init Admin plugin
INIT_ADMIN_USERNAME=admin
INIT_ADMIN_PASSWORD=password
INIT_ADMIN_FIRSTNAME=firstname
INIT_ADMIN_LASTNAME=lastname
INIT_ADMIN_EMAIL=username@mail.com
```

#### Build strapi admin panel:
```bash
yarn build:backend
```

#### Start backend & frontend:
```bash
yarn develop
```