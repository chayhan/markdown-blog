---
title: "[ 백준 25402 ] 트리와 쿼리 : C++ 풀이"
date: 2023-11-12
description : "트리의 특성을 이용한 연결그래프 탐색문제입니다."
---

## 내가 생각한 솔루션

### 1. 분리집합

문제를 보자마자 일단 아! 분리집합 문제구나 라고 생각은 했음.


각 영역의 분리집합을 구한 후, 분리집합의 개수 별로 nC2의 값을 표현하기 가 구현내용이 아닐지.. 하고.

예를들면, 문제 예시의 트리와, `K = 6, S_k = { 1,2,3,4,5,6 }` 인 경우

`{ 1, 2, 3, 5 }` 와 `{4, 6}`으로 두 영역이 나뉘므로,

`4C2 + 2C2 = 6 + 1 = 7` 가 정답인 것이다.

각 영역별로 수행한다고 치면 최악의 경우 O(N) 만큼 걸릴 것임.

이렇게 단순하게 생각하면 사실 풀 수 있지만, 애로사항이 있다.

위의 시간 복잡도는 정확하지 않다. **쿼리가 있기 때문이다.**

### 2. DFS

그래서 DFS로 해볼까? 하고 생각해봤다.

> S_K 마다 탐색을 한다.
>
> 자식노드가 없는 경우는 스킵한다.
>
> 이미 방문한 점도 스킵한다.

방문 수 : `O(N)` 이기 때문에 이 방법도 사실상 최적화엔 실패다.

## 해설을 통한 솔루션


위 방식대로하면 결국 각 노드에서 모든 간선 을 둘러보게 되는 단점이 있고, 이는 `O(N)` 만큼 소모되게 만드는 단점이 있다.

쿼리가 하나면 상관없지만 쿼리가 10만개나 되니, 결국 전체 쿼리에 등장하는 K의 개수가 최대 백만인 점을 이용해 `O(쿼리중 나오는 전체 K 집합의 원소 수)`로 단순화시켜야한다.

N의 크기에 영향을 받지 않고 순수하게 K만 살펴보기 위해서는 트리의 구조를 이용해야한다.

트리가 가지는 성질은 자신 노드가 루트가 아니라면, 부모노드는 오로지 하나라는 점이다.
이렇게 되면 순전히 K개의 노드와, 그의 부모노드만 확인하면 되게 되므로, `O(N + 쿼리중 나오는 전체 K집합의 원소 수)`가 되게 된다.

각 K의 부모노드를 확인해가면서, 분리집합으로 어떤 트리에 어떻게 속하는지 기록을 하며 루트노드가 될 노드에게 노드의 개수를 전달해주면 해결이다.

트리의 특성을 활용하는 문제였다. 많이 나에겐 어려운 것 같으니 골드 하위 트리문제를 좀 더 풀어봐야할 것 같다.

## 소스코드

`s[]` 배열을 `memset()` 을 통해 초기화 하지 않고, 쓰고 난 후 다시 `false` 값으로 되돌려 주면 AC 시간을 많이 단축 시킬 수 있습니다.

```cpp
#include<iostream>
#include<vector>
using namespace std;

vector<int> tree[250001];
bool visit[250001];
int parent[250001]; // 분리집합
int cnt[250001]; // 각 지점을 루트로 하는 트리의 노드 개수 입니다.
bool s[250001];
int tree_parent[250001];

void process(int node) {
	// dfs로 전처리 하는 과정
	visit[node] = true;
	for (int i : tree[node]) {
		if (!visit[i]) {
			process(i);
			tree_parent[i] = node;
		}
	}
}

int find(int t) {
	if (parent[t] == t) return t;
	return parent[t] = find(parent[t]);
}

void uni(int a, int b) {
	if (a > b) {
		int swp; swp = a; a = b; b = swp;
	}
	parent[b] = a;
	cnt[a] += cnt[b];
	cnt[b] = -1;
}

int main() {
	cin.tie(0); cout.tie(0)->sync_with_stdio(0);
	int n, q;
	cin >> n;
	for (int i = 0; i < n - 1; ++i) {
		int a, b; cin >> a >> b;
		tree[a].push_back(b);
		tree[b].push_back(a);
	}

	process(1); // 최소 노드의 개수는 1일테니 1을 루트로 정의한다.

	cin >> q;
	while (q--) {
		int k; cin >> k;
		vector<int> arr;

		for (int i = 0; i < k; ++i) {
			int t; cin >> t;
			parent[t] = t;
			cnt[t] = 1;
			s[t] = true;
			arr.push_back(t);
		}

		long long ans = 0;

		for (int t : arr) {
			if (s[tree_parent[t]]) {
				uni(find(t), find(tree_parent[t]));
			}
		}

		for (int t : arr) {
			s[t] = false; // 쓰고 바로 마킹을 지우면 memset을 할 필요가 없어짐.
			if (cnt[t] > 1) {
				ans += (long long)cnt[t] * (cnt[t] - 1) / 2;
			}
		}

		cout << ans << '\n';
	}
}
```