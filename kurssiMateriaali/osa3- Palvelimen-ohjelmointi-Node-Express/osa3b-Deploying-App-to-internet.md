# Deploying app to internet

## Using Cors

npm i cors

user cors to let front and back to communicate between if server you use does not apply it autom.

## Render

TIPS:

- Make sure your file structure is ok
- Branch main
- Build Command was npm install && npm run build (vite requires npm i)
- Start command npm run server

Environmental variable for Render:
Add script to package.json : "server": "json-server -p $PORT --watch db.json --routes routes.json"
Set up env variable in Render Key: PORT - Value: 3000

The script npm run build:ui builds the frontend and copies the production version under the backend repository. npm run deploy:full contains also the necessary git commands to update the backend repository.

Note that the directory paths in the script build:ui depend on the location of repositories in the file system.

{
"scripts": {
//...
"build:ui": "rm -rf build && cd ../frontend && npm run build && cp -r build ../backend",
"deploy:full": "npm run build:ui && git add . && git commit -m uibuild && git push"
}
}
