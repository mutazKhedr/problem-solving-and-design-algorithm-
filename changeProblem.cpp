
#include <iostream>
using namespace std;


int greedyChangeMoney(int coin[], int size, int value) {
	int i, count = 0;
	int ans[10] = {};
	for (i = 0; i < size; i++) {
		while (value >= coin[i]) {
			value = value - coin[i];
			ans[count] = coin[i];
			count++;
		}
		if (value == 0) break;
	}
	return count;
}

int main() {

	int coins[] = { 25 , 20 , 10 , 5 };
	int value = 105;
	int size = sizeof(coins) / sizeof(coins[0]);
	int minCount = greedyChangeMoney(coins, size, value);
	cout << minCount;


}

