## Eslint

Kannattaa käyttää plugaria.

## RENDER

**PAKKO** Muuta frontin urlit http://localhost:3001/api/persons ==> /api/persons
**PAKKO** poista kaikki console.logit

Buildaa frontti ja siirrä se dist filu backend repoon.

Render automaattisesti luo NODE_ENV:production Jos et määritä environmenttia.

Miten sain renderin toimimaan:

Environment:
MONGODB_URI: db urli
NODE_ENV:development tai prodution
PORT: 3001

Build Command: npm install
Start Command: npm run start
