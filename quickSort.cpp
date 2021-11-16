

// Quick sort is the best algorithm for sorting  timeComplexity : O(n log n ) in avarage case 
                                               // spaceComplexty : O( 1 )  



#include <iostream>
using namespace std;

int partition(int arr[], int left, int right) {
    int i = left;
    int j = right;
    int pivot = i;
    while (i < j) {
        while (arr[pivot] <= arr[j] && pivot != j) {
            j--;
        }
        if (pivot == j) break;
        else if (arr[pivot] >= arr[j]) {
            swap(arr[j], arr[pivot]);
            pivot = j;
            i++;
        }
        while (arr[pivot] >= arr[i]  && pivot !=i) {
            i++;
        }
        if (pivot == i) break;
        else if (arr[pivot] < arr[i]) {
            swap(arr[i], arr[pivot]);
            pivot = i;
            j--;
        }
    }
    return pivot;


}

void quickSort(int arr[], int l, int h) {
    if (l < h) {
        int piv = partition(arr, l, h);
        quickSort(arr, l, piv - 1);
        quickSort(arr, piv + 1, h);
    }
}

int main()
{

    int arr[] = { 50 , 20  , 60 , 10 , 30 , 40 };
    int n = sizeof(arr) / sizeof(arr[0]);
    quickSort(arr, 0, n);
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
}

