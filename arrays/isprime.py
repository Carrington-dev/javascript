def isPrime(num):
    if num < 2:
        return False
    
    for i in range(2, num+1):
        is_prime = True        
        if num % i == 0 and i != num:
            # print(f"{num=} {i=}")
            is_prime = False
            return False
        return is_prime
    return True


for k in range(20):
    # isPrime(k)
    print(f"{k=} {isPrime(k)}", end=" \n", sep=" \n")