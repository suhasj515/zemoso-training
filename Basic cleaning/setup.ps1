git clean -n

#shows nothing

#creating an untracked file "temp.c"

git clean -n
->would remove temp.c

git clean -n -d
#would remove directories

git clean -x -d
#would remove files inside .gitignore
