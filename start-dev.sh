#!/bin/bash
DIR=$(pwd);
(cd $DIR && cd recommended-system && python3 src/app.py) & 
(cd $DIR && cd loja-backend && yarn dev) &
(cd $DIR && cd loja-web && yarn start);
