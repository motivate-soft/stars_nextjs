#!/bin/sh
sudo git pull origin master
sudo npm install
sudo npm run build
sudo pm2 restart