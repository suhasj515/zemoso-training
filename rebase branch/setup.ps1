git branch -A

git checkout master

git log --oneline

#last commits are "merg"

git checkout mybranch

#last commits are "confict resolved"

git rebase mybranch

git log --oneline

#last two commits are "conflict resolved" and "merg"
