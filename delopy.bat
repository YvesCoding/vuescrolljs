cd ./docs/.vuepress/dist
git init
git add .
git commit -m "deploy"
git push -f git@github.com:wangyi7099/vuescrolljs master:gh-pages
pause