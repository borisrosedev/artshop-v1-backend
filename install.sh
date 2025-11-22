#!/bin/bash
# we use node package manage to install dependencies into our project 
init () {
    npm init -y
    npm install express ejs cors dotenv express-validators bcrypt
}

init

