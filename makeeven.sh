#!/usr/bin/env bash

git checkout baseb
git pull
git checkout main
git merge baseb
git push
