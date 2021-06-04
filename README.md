# Starsofboston Website React/NextJS

Updating STARS of BOSTON react website with NEXT JS framework for better SEO, blogging and admin framework for tags, meta tags, etc.

## Installation
You need to have nodejs installed to run this project.
```
npm install
npm run dev
```
Development server stars on [localhost:3030](http://localhost:3030)

## Build for production
```
npm run build
npm start
```
Nextjs app starts on [localhost:8080](http://localhost:8080)

## Restart EC2 pm2 service
connect to server with putty

```
cd /var/starsofboston/stars_nextjs
sudo git pull origin master
sudo npm install --legacy-peer-deps 
sudo npm run build
sudo pm2 restart next
```

OR run just one command
```
/bin/sh ./deploy.sh
```