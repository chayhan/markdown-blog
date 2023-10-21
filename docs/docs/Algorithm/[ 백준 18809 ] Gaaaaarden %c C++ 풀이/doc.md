
### 소스코드

```cpp
#include<iostream>
#include<algorithm>
#include<cstring>
#include<queue>
using namespace std;

int n, m;
int r, g;
int board[52][52]; // 맵

vector<pair<int, int>> able_list; // 배양액 뿌릴 수 있는 땅 정보

int dir[4][2] = {
	{0, 1},
	{1, 0},
	{0, -1},
	{-1, 0}
};

int flowers; // 꽃의 개수

void bfs(vector<pair<int, int>>& gv, vector<pair<int, int>>& rv) {
	int visit[52][52] = { 0, }; // 빨간색 -t 값. 초록색 t 값으로 시간을 표현. 1초부터 시작. 0이면 닿지않은 경우임.
	int f = 0; // 현재 꽃
	queue<pair<int, pair<int, int>>> q; // bfs q

	for (auto t : gv) {
		visit[t.first][t.second] = -1;
		q.push({ -1, t });
	}

	for (auto t : rv) {
		visit[t.first][t.second] = 1;
		q.push({ 1, t });
	}

	while (!q.empty()) {
		int time = q.front().first;
		pair<int, int> node = q.front().second; q.pop();

		int y = node.first;
		int x = node.second;

		if (visit[y][x] == 9999) continue; // 꽃은 퍼지지 않음.

		visit[y][x] = time;

		if (time > 0) time++;
		else time--;

		for (int i = 0; i < 4; ++i) {
			int dy = y + dir[i][0];
			int dx = x + dir[i][1];

			if (visit[dy][dx] + time == 0) {
				visit[dy][dx] = 9999;
				f++;
				continue;
			}

			if (board[dy][dx] && visit[dy][dx] == 0) {
				q.push({ time, {dy, dx} });
				visit[dy][dx] = time;
			}
		}
	}
	flowers = flowers < f ? f : flowers;
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	cin >> n >> m >> r >> g;
	for (int i = 1; i <= n; ++i) {
		for (int j = 1; j <= m; ++j) {
			cin >> board[i][j];
			if (board[i][j] == 2) {
				able_list.push_back({ i, j });
			}
		}
	}


	vector<int> p;
	for (int i = 0; i < able_list.size() - r - g; ++i) p.push_back(0);
	for (int i = 0; i < r; ++i) p.push_back(1);
	for (int i = 0; i < g; ++i) p.push_back(2);

	do {

		vector<pair<int, int>> r_list;
		vector<pair<int, int>> g_list;

		for (int i = 0; i < p.size(); ++i) {
			if (p[i] == 1) r_list.push_back(able_list[i]);
			if (p[i] == 2) g_list.push_back(able_list[i]);
		}

		bfs(g_list, r_list);

	} while (next_permutation(p.begin(), p.end()));

	cout << flowers;
}
```