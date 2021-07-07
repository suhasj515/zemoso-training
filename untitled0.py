def fun22(stri):
    if(stri[0]=="p"):
        return True
    return False


list1 = ['python','java','perl','panorama','game']

l2=list(filter(fun22,list1))
print(l2)

