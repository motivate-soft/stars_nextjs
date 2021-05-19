#!/bin/sh
sudo su -
cd /var/starsofboston/stars_nextjs
git pull origin master
npm install --legacy-peer-deps 
npm run build
pm2 restart next