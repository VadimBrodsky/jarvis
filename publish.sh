#!/bin/sh

npm run build
mv build ..
git checkout gh-pages
cp -rv ../build/* .
rm -rf ../build
