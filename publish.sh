#!/bin/sh

npm run build
mv build ..
git checkout gh-pages
mv -fv ../build/* .
rmdir ../build
