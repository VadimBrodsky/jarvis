#!/bin/sh

yarn build
mv build ..
git checkout gh-pages
mv ../build/* .
rmdir ../build
