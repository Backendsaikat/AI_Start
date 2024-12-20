def fact(n):
    if n==0:
        return 1
    else:
        p=1
        for i in range(n):
            p*=i+1
        return p

def exp():
    r=0
    for i in range(123):
        r+=1/fact(i)
    return r
print(exp())