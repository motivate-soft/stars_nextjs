#!/bin/sh
cd /var/www/stars_nextjs
sudo git pull origin master
sudo npm install --legacy-peer-deps
sudo npm run build
sudo pm2 restart starsofboston-nextjs