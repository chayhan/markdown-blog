준비중

```cpp
#include<iostream>
#include<queue>
#include<vector>
using namespace std;

int n, m;
queue<int> q;
int parent[50001]; // 부모노드
int depth[50001]; // 각 노드의 깊이
bool visit[50001];
vector<int> graph[50001]; // 그래프

int main() {
	ios_base::sync_with_stdio(0); cin.tie(0); cout.tie(0);
	cin >> n;
	for (int i = 0; i < n - 1; ++i) {
		int from, to; cin >> from >> to;
		graph[from].push_back(to);
		graph[to].push_back(from);
	}
	q.push(1);
	q.push(-1);
	int d = 1;
	while (!q.empty()) {
		int front = q.front(); q.pop();
		if (front == -1) {
			if (q.empty()) break;
			d++;
			q.push(-1);
			front = q.front(); q.pop();
		}
		visit[front] = true;
		depth[front] = d;
		for (int t : graph[front]) {
			if (!visit[t]) {
				parent[t] = front;
				q.push(t);
			}
		}
	}
	cin >> m;
	for (int i = 0; i < m; ++i) {
		int n1, n2; cin >> n1 >> n2;
		int d1 = depth[n1], d2 = depth[n2];
		while (d1 != d2) {
			if (d1 > d2) {
				n1 = parent[n1];
				d1--;
			}
			else {
				n2 = parent[n2];
				d2--;
			}
		}
		while (d1) {
			if (n1 == n2) {
				cout << n1 << '\n';
				break;
			}
			d1--; d2--;
			n1 = parent[n1];
			n2 = parent[n2];
		}
	}
}
```