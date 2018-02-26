#!/bin/sh

npm run build
mv build ..
git checkout gh-pages
cp -rv ../build/* .
rm -rf ../build
git add -A
git commit -m 'new build'
git push
git checkout master
