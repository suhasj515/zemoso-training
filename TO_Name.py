fp=open("hello world.txt","r+")
l1=fp.readline().split()
for i in l1:
    if (i=="to"):
        fp.write("suhas")
    else:
        fp.write(i)
fp.close()