#!/bin/bash


function init() {
    git init
    git remote add origin git@github.com:borisrosedev/artshop-v1-backend.git
    git remote -v
}

function add_commit_push() {
    git add .
    git commit -m "$1"

    # structure de contrôle if-else
    if [ -z "$2" ]; then 
        git push origin main 
    else 
        git push origin "$2"
    fi
}


add_commit_push $1 $2
