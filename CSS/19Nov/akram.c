// write a program to make the last digit of a number in a variable as zero. (ex. if x=2345 then make it x=2340)

#include <stdio.h>
int main()
{
    int x = 2345;
    x = x / 10;
    x = x * 10;
    printf("%d", x);

    return 0;
}