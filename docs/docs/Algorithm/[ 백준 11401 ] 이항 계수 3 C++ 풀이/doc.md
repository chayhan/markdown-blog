
## 설명

일단 이 문제를 풀기 위해선 `페르마의 소정리`와 `모듈러 역원`을 구하는 연산을 할줄 알아야한다.



### 소스코드

```cpp
#include<iostream>
using namespace std;

int n, r;
int fact[4000001];
const long long MOD = 1000000007;

long long getFact(long long n) {
	if (n == 0) return 1;
	if (fact[n]) return fact[n];
	return fact[n] = n * (long long)getFact(n - 1) % MOD;
}

long long power(long long base, int exp) {
	if (!exp) return 1;
	long long i = 1;
	while (exp) {
		if (exp % 2) {
			i *= base;
			i %= MOD;
			exp--;
			continue;
		}
		base *= base;
		base %= MOD;
		exp /= 2;
	}
	return i;
}

int main() {
	cin >> n >> r;
	long long numer = getFact(n);
	long long deno = getFact(r) * getFact(n - r) % MOD;
	deno = power(deno, MOD - 2);
	numer = numer * deno % MOD;
	cout << numer;
}
```