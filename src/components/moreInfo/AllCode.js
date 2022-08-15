const heapCode = [
  {
    // java
    lang: 'Java',
    code: `
    public class HeapSort {
        public void sort(int arr[])
        {
            int N = arr.length;
     
            // Build heap (rearrange array)
            for (int i = N / 2 - 1; i >= 0; i--)
                heapify(arr, N, i);
     
            // One by one extract an element from heap
            for (int i = N - 1; i > 0; i--) {
                // Move current root to end
                int temp = arr[0];
                arr[0] = arr[i];
                arr[i] = temp;
     
                // call max heapify on the reduced heap
                heapify(arr, i, 0);
            }
        }
     
        // To heapify a subtree rooted with node i which is
        // an index in arr[]. n is size of heap
        void heapify(int arr[], int N, int i)
        {
            int largest = i; // Initialize largest as root
            int l = 2 * i + 1; // left = 2*i + 1
            int r = 2 * i + 2; // right = 2*i + 2
     
            // If left child is larger than root
            if (l < N && arr[l] > arr[largest])
                largest = l;
     
            // If right child is larger than largest so far
            if (r < N && arr[r] > arr[largest])
                largest = r;
     
            // If largest is not root
            if (largest != i) {
                int swap = arr[i];
                arr[i] = arr[largest];
                arr[largest] = swap;
     
                // Recursively heapify the affected sub-tree
                heapify(arr, N, largest);
            }
        }
     
        /* A utility function to print array of size n */
        static void printArray(int arr[])
        {
            int N = arr.length;
     
            for (int i = 0; i < N; ++i)
                System.out.print(arr[i] + " ");
            System.out.println();
        }
     
        // Driver's code
        public static void main(String args[])
        {
            int arr[] = { 12, 11, 13, 5, 6, 7 };
            int N = arr.length;
     
            // Function call
            HeapSort ob = new HeapSort();
            ob.sort(arr);
     
            System.out.println("Sorted array is");
            printArray(arr);
        }
    }
      `,
  },
  {
    lang: 'C++',
    code: `
    #include <iostream>
using namespace std;
 
// To heapify a subtree rooted with node i
// which is an index in arr[].
// n is size of heap
void heapify(int arr[], int N, int i)
{
 
    // Initialize largest as root
    int largest = i;
 
    // left = 2*i + 1
    int l = 2 * i + 1;
 
    // right = 2*i + 2
    int r = 2 * i + 2;
 
    // If left child is larger than root
    if (l < N && arr[l] > arr[largest])
        largest = l;
 
    // If right child is larger than largest
    // so far
    if (r < N && arr[r] > arr[largest])
        largest = r;
 
    // If largest is not root
    if (largest != i) {
        swap(arr[i], arr[largest]);
 
        // Recursively heapify the affected
        // sub-tree
        heapify(arr, N, largest);
    }
}
 
// Main function to do heap sort
void heapSort(int arr[], int N)
{
 
    // Build heap (rearrange array)
    for (int i = N / 2 - 1; i >= 0; i--)
        heapify(arr, N, i);
 
    // One by one extract an element
    // from heap
    for (int i = N - 1; i > 0; i--) {
 
        // Move current root to end
        swap(arr[0], arr[i]);
 
        // call max heapify on the reduced heap
        heapify(arr, i, 0);
    }
}
 
// A utility function to print array of size n
void printArray(int arr[], int N)
{
    for (int i = 0; i < N; ++i)
        cout << arr[i] << " ";
    cout << "\n";
}
 
// Driver's code
int main()
{
    int arr[] = { 12, 11, 13, 5, 6, 7 };
    int N = sizeof(arr) / sizeof(arr[0]);
 
    // Function call
    heapSort(arr, N);
 
    cout << "Sorted array is \n";
    printArray(arr, N);
}
      `,
  },
  {
    lang: 'C',
    code: `// Heap Sort in C

    #include <stdio.h>
    
    // Function to swap the position of two elements
    
    void swap(int* a, int* b)
    {
    
        int temp = *a;
    
        *a = *b;
    
        *b = temp;
    }
    
    // To heapify a subtree rooted with node i
    // which is an index in arr[].
    // n is size of heap
    void heapify(int arr[], int N, int i)
    {
        // Find largest among root, left child and right child
    
        // Initialize largest as root
        int largest = i;
    
        // left = 2*i + 1
        int left = 2 * i + 1;
    
        // right = 2*i + 2
        int right = 2 * i + 2;
    
        // If left child is larger than root
        if (left < N && arr[left] > arr[largest])
    
            largest = left;
    
        // If right child is larger than largest
        // so far
        if (right < N && arr[right] > arr[largest])
    
            largest = right;
    
        // Swap and continue heapifying if root is not largest
        // If largest is not root
        if (largest != i) {
    
            swap(&arr[i], &arr[largest]);
    
            // Recursively heapify the affected
            // sub-tree
            heapify(arr, N, largest);
        }
    }
    
    // Main function to do heap sort
    void heapSort(int arr[], int N)
    {
    
        // Build max heap
        for (int i = N / 2 - 1; i >= 0; i--)
    
            heapify(arr, N, i);
    
        // Heap sort
        for (int i = N - 1; i >= 0; i--) {
    
            swap(&arr[0], &arr[i]);
    
            // Heapify root element to get highest element at
            // root again
            heapify(arr, i, 0);
        }
    }
    
    // A utility function to print array of size n
    void printArray(int arr[], int N)
    {
        for (int i = 0; i < N; i++)
            printf("%d ", arr[i]);
        printf("\n");
    }
    
    // Driver's code
    int main()
    {
        int arr[] = { 12, 11, 13, 5, 6, 7 };
        int N = sizeof(arr) / sizeof(arr[0]);
    
        // Function call
        heapSort(arr, N);
        printf("Sorted array is\n");
        printArray(arr, N);
    }  
      `,
  },
  {
    lang: 'JS',
    code: `
    // JavaScript program for implementation
    // of Heap Sort
     
        function sort( arr)
        {
            var N = arr.length;
     
            // Build heap (rearrange array)
            for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
                heapify(arr, N, i);
     
            // One by one extract an element from heap
            for (var i = N - 1; i > 0; i--) {
                // Move current root to end
                var temp = arr[0];
                arr[0] = arr[i];
                arr[i] = temp;
     
                // call max heapify on the reduced heap
                heapify(arr, i, 0);
            }
        }
     
        // To heapify a subtree rooted with node i which is
        // an index in arr[]. n is size of heap
        function heapify(arr, N, i)
        {
            var largest = i; // Initialize largest as root
            var l = 2 * i + 1; // left = 2*i + 1
            var r = 2 * i + 2; // right = 2*i + 2
     
            // If left child is larger than root
            if (l < N && arr[l] > arr[largest])
                largest = l;
     
            // If right child is larger than largest so far
            if (r < N && arr[r] > arr[largest])
                largest = r;
     
            // If largest is not root
            if (largest != i) {
                var swap = arr[i];
                arr[i] = arr[largest];
                arr[largest] = swap;
     
                // Recursively heapify the affected sub-tree
                heapify(arr, N, largest);
            }
        }
     
        /* A utility function to print array of size n */
        function printArray(arr)
        {
            var N = arr.length;
            for (var i = 0; i < N; ++i)
                document.write(arr[i] + " ");
             
        }
        var arr = [12, 11, 13, 5, 6, 7];
        var N = arr.length;
     
        sort(arr);
     
        document.write( "Sorted array is");
        printArray(arr, N);    
      `,
  },
  {
    lang: 'Python',
    code: `
    # Python program for implementation of heap Sort
 
    # To heapify subtree rooted at index i.
    # n is size of heap
     
     
    def heapify(arr, N, i):
        largest = i  # Initialize largest as root
        l = 2 * i + 1     # left = 2*i + 1
        r = 2 * i + 2     # right = 2*i + 2
     
        # See if left child of root exists and is
        # greater than root
        if l < N and arr[largest] < arr[l]:
            largest = l
     
        # See if right child of root exists and is
        # greater than root
        if r < N and arr[largest] < arr[r]:
            largest = r
     
        # Change root, if needed
        if largest != i:
            arr[i], arr[largest] = arr[largest], arr[i]  # swap
     
            # Heapify the root.
            heapify(arr, N, largest)
     
    # The main function to sort an array of given size
     
     
    def heapSort(arr):
        N = len(arr)
     
        # Build a maxheap.
        for i in range(N//2 - 1, -1, -1):
            heapify(arr, N, i)
     
        # One by one extract elements
        for i in range(N-1, 0, -1):
            arr[i], arr[0] = arr[0], arr[i]  # swap
            heapify(arr, i, 0)
     
     
    # Driver's code
    if __name__ == '__main__':
        arr = [12, 11, 13, 5, 6, 7]
     
        # Function call
        heapSort(arr)
        N = len(arr)
     
        print("Sorted array is")
        for i in range(N):
            print("%d" % arr[i], end=" ")
      `,
  },
];

const quickCode = [
  {
    // java
    lang: 'Java',
    code: `
    import java.io.*;
  
    class GFG{
          
    // A utility function to swap two elements
    static void swap(int[] arr, int i, int j)
    {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
      
    /* This function takes last element as pivot, places
       the pivot element at its correct position in sorted
       array, and places all smaller (smaller than pivot)
       to left of pivot and all greater elements to right
       of pivot */
    static int partition(int[] arr, int low, int high)
    {
          
        // pivot
        int pivot = arr[high]; 
          
        // Index of smaller element and
        // indicates the right position
        // of pivot found so far
        int i = (low - 1); 
      
        for(int j = low; j <= high - 1; j++)
        {
              
            // If current element is smaller 
            // than the pivot
            if (arr[j] < pivot) 
            {
                  
                // Increment index of 
                // smaller element
                i++; 
                swap(arr, i, j);
            }
        }
        swap(arr, i + 1, high);
        return (i + 1);
    }
      
    /* The main function that implements QuickSort
              arr[] --> Array to be sorted,
              low --> Starting index,
              high --> Ending index
     */
    static void quickSort(int[] arr, int low, int high)
    {
        if (low < high) 
        {
              
            // pi is partitioning index, arr[p]
            // is now at right place 
            int pi = partition(arr, low, high);
      
            // Separately sort elements before
            // partition and after partition
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }
      
    // Function to print an array 
    static void printArray(int[] arr, int size)
    {
        for(int i = 0; i < size; i++)
            System.out.print(arr[i] + " ");
              
        System.out.println();
    }
      
    // Driver Code
    public static void main(String[] args)
    {
        int[] arr = { 10, 7, 8, 9, 1, 5 };
        int n = arr.length;
          
        quickSort(arr, 0, n - 1);
        System.out.println("Sorted array: ");
        printArray(arr, n);
    }
    }
      `,
  },
  {
    lang: 'C++',
    code: `
    #include <bits/stdc++.h>
using namespace std; 
  
// A utility function to swap two elements 
void swap(int* a, int* b) 
{ 
    int t = *a; 
    *a = *b; 
    *b = t; 
} 
  
/* This function takes last element as pivot, places 
the pivot element at its correct position in sorted 
array, and places all smaller (smaller than pivot) 
to left of pivot and all greater elements to right 
of pivot */
int partition (int arr[], int low, int high) 
{ 
    int pivot = arr[high]; // pivot 
    int i = (low - 1); // Index of smaller element and indicates the right position of pivot found so far
  
    for (int j = low; j <= high - 1; j++) 
    { 
        // If current element is smaller than the pivot 
        if (arr[j] < pivot) 
        { 
            i++; // increment index of smaller element 
            swap(&arr[i], &arr[j]); 
        } 
    } 
    swap(&arr[i + 1], &arr[high]); 
    return (i + 1); 
} 
  
/* The main function that implements QuickSort 
arr[] --> Array to be sorted, 
low --> Starting index, 
high --> Ending index */
void quickSort(int arr[], int low, int high) 
{ 
    if (low < high) 
    { 
        /* pi is partitioning index, arr[p] is now 
        at right place */
        int pi = partition(arr, low, high); 
  
        // Separately sort elements before 
        // partition and after partition 
        quickSort(arr, low, pi - 1); 
        quickSort(arr, pi + 1, high); 
    } 
} 
  
/* Function to print an array */
void printArray(int arr[], int size) 
{ 
    int i; 
    for (i = 0; i < size; i++) 
        cout << arr[i] << " "; 
    cout << endl; 
} 
  
// Driver Code
int main() 
{ 
    int arr[] = {10, 7, 8, 9, 1, 5}; 
    int n = sizeof(arr) / sizeof(arr[0]); 
    quickSort(arr, 0, n - 1); 
    cout << "Sorted array: \n"; 
    printArray(arr, n); 
    return 0; 
} 
      `,
  },
  {
    lang: 'C',
    code: `
    #include<stdio.h>
    void quicksort(int number[25],int first,int last){
       int i, j, pivot, temp;
       if(first<last){
          pivot=first;
          i=first;
          j=last;
          while(i<j){
             while(number[i]<=number[pivot]&&i<last)
             i++;
             while(number[j]>number[pivot])
             j--;
             if(i<j){
                temp=number[i];
                number[i]=number[j];
                number[j]=temp;
             }
          }
          temp=number[pivot];
          number[pivot]=number[j];
          number[j]=temp;
          quicksort(number,first,j-1);
          quicksort(number,j+1,last);
       }
    }
    int main(){
       int i, count, number[25];
       printf("How many elements are u going to enter?: ");
       scanf("%d",&count);
       printf("Enter %d elements: ", count);
       for(i=0;i<count;i++)
       scanf("%d",&number[i]);
       quicksort(number,0,count-1);
       printf("Order of Sorted elements: ");
       for(i=0;i<count;i++)
       printf(" %d",number[i]);
       return 0;
    }
      `,
  },
  {
    lang: 'JS',
    code: `
    script>
    // Javascript implementation of QuickSort 
      
      
    // A utility function to swap two elements
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
      
    /* This function takes last element as pivot, places
       the pivot element at its correct position in sorted
       array, and places all smaller (smaller than pivot)
       to left of pivot and all greater elements to right
       of pivot */
    function partition(arr, low, high) {
      
        // pivot
        let pivot = arr[high];
      
        // Index of smaller element and
        // indicates the right position
        // of pivot found so far
        let i = (low - 1);
      
        for (let j = low; j <= high - 1; j++) {
      
            // If current element is smaller 
            // than the pivot
            if (arr[j] < pivot) {
      
                // Increment index of 
                // smaller element
                i++;
                swap(arr, i, j);
            }
        }
        swap(arr, i + 1, high);
        return (i + 1);
    }
      
    /* The main function that implements QuickSort
              arr[] --> Array to be sorted,
              low --> Starting index,
              high --> Ending index
     */
    function quickSort(arr, low, high) {
        if (low < high) {
      
            // pi is partitioning index, arr[p]
            // is now at right place 
            let pi = partition(arr, low, high);
      
            // Separately sort elements before
            // partition and after partition
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }
      
    // Function to print an array 
    function printArray(arr, size) {
        for (let i = 0; i < size; i++)
            document.write(arr[i] + " ");
      
        document.write("<br>");
    }
      
    // Driver Code
      
    let arr = [10, 7, 8, 9, 1, 5];
    let n = arr.length;
      
    quickSort(arr, 0, n - 1);
    document.write("Sorted array: <br>");
    printArray(arr, n);
    </script>
      `,
  },
  {
    lang: 'Python',
    code: `
    # Python3 implementation of QuickSort  
  
  
    # Function to find the partition position
    def partition(array, low, high):
      
      # Choose the rightmost element as pivot
      pivot = array[high]
      
      # Pointer for greater element
      i = low - 1
      
      # Traverse through all elements
      # compare each element with pivot
      for j in range(low, high):
        if array[j] <= pivot:
          # If element smaller than pivot is found
          # swap it with the greater element pointed by i
          i = i + 1
      
          # Swapping element at i with element at j
          (array[i], array[j]) = (array[j], array[i])
      
      # Swap the pivot element with the greater element specified by i
      (array[i + 1], array[high]) = (array[high], array[i + 1])
      
      # Return the position from where partition is done
      return i + 1
      
    # Function to perform quicksort
    def quick_sort(array, low, high):
      if low < high:
      
        # Find pivot element such that
        # element smaller than pivot are on the left
        # element greater than pivot are on the right
        pi = partition(array, low, high)
      
        # Recursive call on the left of pivot
        quick_sort(array, low, pi - 1)
      
        # Recursive call on the right of pivot
        quick_sort(array, pi + 1, high)
      
        
              
    # Driver code
    array = [ 10, 7, 8, 9, 1, 5]
    quick_sort(array, 0, len(array) - 1)
      
    print(f'Sorted array: {array}')
      `,
  },
];
const mergeCode = [
  {
    // java
    lang: 'Java',
    code: `
    /* Java program for Merge Sort */
    class MergeSort
    {
        // Merges two subarrays of arr[].
        // First subarray is arr[l..m]
        // Second subarray is arr[m+1..r]
        void merge(int arr[], int l, int m, int r)
        {
            // Find sizes of two subarrays to be merged
            int n1 = m - l + 1;
            int n2 = r - m;
    
            /* Create temp arrays */
            int L[] = new int[n1];
            int R[] = new int[n2];
    
            /*Copy data to temp arrays*/
            for (int i = 0; i < n1; ++i)
                L[i] = arr[l + i];
            for (int j = 0; j < n2; ++j)
                R[j] = arr[m + 1 + j];
    
            /* Merge the temp arrays */
    
            // Initial indexes of first and second subarrays
            int i = 0, j = 0;
    
            // Initial index of merged subarray array
            int k = l;
            while (i < n1 && j < n2) {
                if (L[i] <= R[j]) {
                    arr[k] = L[i];
                    i++;
                }
                else {
                    arr[k] = R[j];
                    j++;
                }
                k++;
            }
    
            /* Copy remaining elements of L[] if any */
            while (i < n1) {
                arr[k] = L[i];
                i++;
                k++;
            }
    
            /* Copy remaining elements of R[] if any */
            while (j < n2) {
                arr[k] = R[j];
                j++;
                k++;
            }
        }
    
        // Main function that sorts arr[l..r] using
        // merge()
        void sort(int arr[], int l, int r)
        {
            if (l < r) {
                // Find the middle point
                int m =l+ (r-l)/2;
    
                // Sort first and second halves
                sort(arr, l, m);
                sort(arr, m + 1, r);
    
                // Merge the sorted halves
                merge(arr, l, m, r);
            }
        }
    
        /* A utility function to print array of size n */
        static void printArray(int arr[])
        {
            int n = arr.length;
            for (int i = 0; i < n; ++i)
                System.out.print(arr[i] + " ");
            System.out.println();
        }
    
        // Driver code
        public static void main(String args[])
        {
            int arr[] = { 12, 11, 13, 5, 6, 7 };
    
            System.out.println("Given Array");
            printArray(arr);
    
            MergeSort ob = new MergeSort();
            ob.sort(arr, 0, arr.length - 1);
    
            System.out.println("\nSorted array");
            printArray(arr);
        }
    }
      `,
  },
  {
    lang: 'C++',
    code: `
    // C++ program for Merge Sort
    #include <iostream>
    using namespace std;
    
    // Merges two subarrays of array[].
    // First subarray is arr[begin..mid]
    // Second subarray is arr[mid+1..end]
    void merge(int array[], int const left, int const mid,
            int const right)
    {
        auto const subArrayOne = mid - left + 1;
        auto const subArrayTwo = right - mid;
    
        // Create temp arrays
        auto *leftArray = new int[subArrayOne],
            *rightArray = new int[subArrayTwo];
    
        // Copy data to temp arrays leftArray[] and rightArray[]
        for (auto i = 0; i < subArrayOne; i++)
            leftArray[i] = array[left + i];
        for (auto j = 0; j < subArrayTwo; j++)
            rightArray[j] = array[mid + 1 + j];
    
        auto indexOfSubArrayOne
            = 0, // Initial index of first sub-array
            indexOfSubArrayTwo
            = 0; // Initial index of second sub-array
        int indexOfMergedArray
            = left; // Initial index of merged array
    
        // Merge the temp arrays back into array[left..right]
        while (indexOfSubArrayOne < subArrayOne
            && indexOfSubArrayTwo < subArrayTwo) {
            if (leftArray[indexOfSubArrayOne]
                <= rightArray[indexOfSubArrayTwo]) {
                array[indexOfMergedArray]
                    = leftArray[indexOfSubArrayOne];
                indexOfSubArrayOne++;
            }
            else {
                array[indexOfMergedArray]
                    = rightArray[indexOfSubArrayTwo];
                indexOfSubArrayTwo++;
            }
            indexOfMergedArray++;
        }
        // Copy the remaining elements of
        // left[], if there are any
        while (indexOfSubArrayOne < subArrayOne) {
            array[indexOfMergedArray]
                = leftArray[indexOfSubArrayOne];
            indexOfSubArrayOne++;
            indexOfMergedArray++;
        }
        // Copy the remaining elements of
        // right[], if there are any
        while (indexOfSubArrayTwo < subArrayTwo) {
            array[indexOfMergedArray]
                = rightArray[indexOfSubArrayTwo];
            indexOfSubArrayTwo++;
            indexOfMergedArray++;
        }
        delete[] leftArray;
        delete[] rightArray;
    }
    
    // begin is for left index and end is
    // right index of the sub-array
    // of arr to be sorted */
    void mergeSort(int array[], int const begin, int const end)
    {
        if (begin >= end)
            return; // Returns recursively
    
        auto mid = begin + (end - begin) / 2;
        mergeSort(array, begin, mid);
        mergeSort(array, mid + 1, end);
        merge(array, begin, mid, end);
    }
    
    // UTILITY FUNCTIONS
    // Function to print an array
    void printArray(int A[], int size)
    {
        for (auto i = 0; i < size; i++)
            cout << A[i] << " ";
    }
    
    // Driver code
    int main()
    {
        int arr[] = { 12, 11, 13, 5, 6, 7 };
        auto arr_size = sizeof(arr) / sizeof(arr[0]);
    
        cout << "Given array is \n";
        printArray(arr, arr_size);
    
        mergeSort(arr, 0, arr_size - 1);
    
        cout << "\nSorted array is \n";
        printArray(arr, arr_size);
        return 0;
    }
      `,
  },
  {
    lang: 'C',
    code: `
    // Merge two subarrays L and M into arr
    void merge(int arr[], int p, int q, int r) {
    
        // Create L ← A[p..q] and M ← A[q+1..r]
        int n1 = q - p + 1;
        int n2 = r - q;
    
        int L[n1], M[n2];
    
        for (int i = 0; i < n1; i++)
            L[i] = arr[p + i];
        for (int j = 0; j < n2; j++)
            M[j] = arr[q + 1 + j];
    
        // Maintain current index of sub-arrays and main array
        int i, j, k;
        i = 0;
        j = 0;
        k = p;
    
        // Until we reach either end of either L or M, pick larger among
        // elements L and M and place them in the correct position at A[p..r]
        while (i < n1 && j < n2) {
            if (L[i] <= M[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = M[j];
                j++;
            }
            k++;
        }
    
        // When we run out of elements in either L or M,
        // pick up the remaining elements and put in A[p..r]
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
    
        while (j < n2) {
            arr[k] = M[j];
            j++;
            k++;
        }
    }
    
      `,
  },
  {
    lang: 'JS',
    code: `
    <script>

// JavaScript program for Merge Sort

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arr, l, m, r)
{
	var n1 = m - l + 1;
	var n2 = r - m;

	// Create temp arrays
	var L = new Array(n1);
	var R = new Array(n2);

	// Copy data to temp arrays L[] and R[]
	for (var i = 0; i < n1; i++)
		L[i] = arr[l + i];
	for (var j = 0; j < n2; j++)
		R[j] = arr[m + 1 + j];

	// Merge the temp arrays back into arr[l..r]

	// Initial index of first subarray
	var i = 0;

	// Initial index of second subarray
	var j = 0;

	// Initial index of merged subarray
	var k = l;

	while (i < n1 && j < n2) {
		if (L[i] <= R[j]) {
			arr[k] = L[i];
			i++;
		}
		else {
			arr[k] = R[j];
			j++;
		}
		k++;
	}

	// Copy the remaining elements of
	// L[], if there are any
	while (i < n1) {
		arr[k] = L[i];
		i++;
		k++;
	}

	// Copy the remaining elements of
	// R[], if there are any
	while (j < n2) {
		arr[k] = R[j];
		j++;
		k++;
	}
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
function mergeSort(arr,l, r){
	if(l>=r){
		return;//returns recursively
	}
	var m =l+ parseInt((r-l)/2);
	mergeSort(arr,l,m);
	mergeSort(arr,m+1,r);
	merge(arr,l,m,r);
}

// UTILITY FUNCTIONS
// Function to print an array
function printArray( A, size)
{
	for (var i = 0; i < size; i++)
	document.write( A[i] + " ");
}


var arr = [ 12, 11, 13, 5, 6, 7 ];
	var arr_size = arr.length;

	document.write( "Given array is <br>");
	printArray(arr, arr_size);

	mergeSort(arr, 0, arr_size - 1);

	document.write( "<br>Sorted array is <br>");
	printArray(arr, arr_size);


</script>

      `,
  },
  {
    lang: 'Python',
    code: `
    # Python program for implementation of MergeSort
    def mergeSort(arr):
        if len(arr) > 1:
    
            # Finding the mid of the array
            mid = len(arr)//2
    
            # Dividing the array elements
            L = arr[:mid]
    
            # into 2 halves
            R = arr[mid:]
    
            # Sorting the first half
            mergeSort(L)
    
            # Sorting the second half
            mergeSort(R)
    
            i = j = k = 0
    
            # Copy data to temp arrays L[] and R[]
            while i < len(L) and j < len(R):
                if L[i] < R[j]:
                    arr[k] = L[i]
                    i += 1
                else:
                    arr[k] = R[j]
                    j += 1
                k += 1
    
            # Checking if any element was left
            while i < len(L):
                arr[k] = L[i]
                i += 1
                k += 1
    
            while j < len(R):
                arr[k] = R[j]
                j += 1
                k += 1
    
    # Code to print the list
    
    
    def printList(arr):
        for i in range(len(arr)):
            print(arr[i], end=" ")
        print()
    
    
    # Driver Code
    if __name__ == '__main__':
        arr = [12, 11, 13, 5, 6, 7]
        print("Given array is", end="\n")
        printList(arr)
        mergeSort(arr)
        print("Sorted array is: ", end="\n")
        printList(arr)
      `,
  },
];
const selectionCode = [
  {
    // java
    lang: 'Java',
    code: `
    // Selection sort in Java

    import java.util.Arrays;
    
    class SelectionSort {
      void selectionSort(int array[]) {
        int size = array.length;
    
        for (int step = 0; step < size - 1; step++) {
          int min_idx = step;
    
          for (int i = step + 1; i < size; i++) {
    
            // To sort in descending order, change > to < in this line.
            // Select the minimum element in each loop.
            if (array[i] < array[min_idx]) {
              min_idx = i;
            }
          }
    
          // put min at the correct position
          int temp = array[step];
          array[step] = array[min_idx];
          array[min_idx] = temp;
        }
      }
    
      // driver code
      public static void main(String args[]) {
        int[] data = { 20, 12, 10, 15, 2 };
        SelectionSort ss = new SelectionSort();
        ss.selectionSort(data);
        System.out.println("Sorted Array in Ascending Order: ");
        System.out.println(Arrays.toString(data));
      }
    }
    `,
  },
  {
    lang: 'C++',
    code: `
    // Selection sort in C++

#include <iostream>
using namespace std;

// function to swap the the position of two elements
void swap(int *a, int *b) {
  int temp = *a;
  *a = *b;
  *b = temp;
}

// function to print an array
void printArray(int array[], int size) {
  for (int i = 0; i < size; i++) {
    cout << array[i] << " ";
  }
  cout << endl;
}

void selectionSort(int array[], int size) {
  for (int step = 0; step < size - 1; step++) {
    int min_idx = step;
    for (int i = step + 1; i < size; i++) {

      // To sort in descending order, change > to < in this line.
      // Select the minimum element in each loop.
      if (array[i] < array[min_idx])
        min_idx = i;
    }

    // put min at the correct position
    swap(&array[min_idx], &array[step]);
  }
}

// driver code
int main() {
  int data[] = {20, 12, 10, 15, 2};
  int size = sizeof(data) / sizeof(data[0]);
  selectionSort(data, size);
  cout << "Sorted array in Acsending Order:\n";
  printArray(data, size);
}
    `,
  },
  {
    lang: 'C',
    code: `
    // Selection sort in C

#include <stdio.h>

// function to swap the the position of two elements
void swap(int *a, int *b) {
  int temp = *a;
  *a = *b;
  *b = temp;
}

void selectionSort(int array[], int size) {
  for (int step = 0; step < size - 1; step++) {
    int min_idx = step;
    for (int i = step + 1; i < size; i++) {

      // To sort in descending order, change > to < in this line.
      // Select the minimum element in each loop.
      if (array[i] < array[min_idx])
        min_idx = i;
    }

    // put min at the correct position
    swap(&array[min_idx], &array[step]);
  }
}

// function to print an array
void printArray(int array[], int size) {
  for (int i = 0; i < size; ++i) {
    printf("%d  ", array[i]);
  }
  printf("\n");
}

// driver code
int main() {
  int data[] = {20, 12, 10, 15, 2};
  int size = sizeof(data) / sizeof(data[0]);
  selectionSort(data, size);
  printf("Sorted array in Acsending Order:\n");
  printArray(data, size);
}
    `,
  },
  {
    lang: 'JS',
    code: `
    <script>
// Javascript program for implementation of selection sort
function swap(arr,xp, yp)
{
	var temp = arr[xp];
	arr[xp] = arr[yp];
	arr[yp] = temp;
}

function selectionSort(arr, n)
{
	var i, j, min_idx;

	// One by one move boundary of unsorted subarray
	for (i = 0; i < n-1; i++)
	{
		// Find the minimum element in unsorted array
		min_idx = i;
		for (j = i + 1; j < n; j++)
		if (arr[j] < arr[min_idx])
			min_idx = j;

		// Swap the found minimum element with the first element
		swap(arr,min_idx, i);
	}
}

function printArray( arr, size)
{
	var i;
	for (i = 0; i < size; i++)
		document.write(arr[i] + " ");
	document.write(" <br>");
}

var arr = [64, 25, 12, 22, 11];
	var n = 5;
	selectionSort(arr, n);
	document.write("Sorted array: <br>");
	printArray(arr, n);
</script>

    `,
  },
  {
    lang: 'Python',
    code: `
    # Selection sort in Python


    def selectionSort(array, size):
       
        for step in range(size):
            min_idx = step
    
            for i in range(step + 1, size):
             
                # to sort in descending order, change > to < in this line
                # select the minimum element in each loop
                if array[i] < array[min_idx]:
                    min_idx = i
             
            # put min at the correct position
            (array[step], array[min_idx]) = (array[min_idx], array[step])
    
    
    data = [-2, 45, 0, 11, -9]
    size = len(data)
    selectionSort(data, size)
    print('Sorted Array in Ascending Order:')
    print(data)
    `,
  },
];
const insertionCode = [
  {
    // java
    lang: 'Java',
    code: `
    // Insertion sort in Java

    import java.util.Arrays;
    
    class InsertionSort {
    
      void insertionSort(int array[]) {
        int size = array.length;
    
        for (int step = 1; step < size; step++) {
          int key = array[step];
          int j = step - 1;
    
          // Compare key with each element on the left of it until an element smaller than
          // it is found.
          // For descending order, change key<array[j] to key>array[j].
          while (j >= 0 && key < array[j]) {
            array[j + 1] = array[j];
            --j;
          }
    
          // Place key at after the element just smaller than it.
          array[j + 1] = key;
        }
      }
    
      // Driver code
      public static void main(String args[]) {
        int[] data = { 9, 5, 1, 4, 3 };
        InsertionSort is = new InsertionSort();
        is.insertionSort(data);
        System.out.println("Sorted Array in Ascending Order: ");
        System.out.println(Arrays.toString(data));
      }
    }
      `,
  },
  {
    lang: 'C++',
    code: `
    // Insertion sort in C++

#include <iostream>
using namespace std;

// Function to print an array
void printArray(int array[], int size) {
  for (int i = 0; i < size; i++) {
    cout << array[i] << " ";
  }
  cout << endl;
}

void insertionSort(int array[], int size) {
  for (int step = 1; step < size; step++) {
    int key = array[step];
    int j = step - 1;

    // Compare key with each element on the left of it until an element smaller than
    // it is found.
    // For descending order, change key<array[j] to key>array[j].
    while (key < array[j] && j >= 0) {
      array[j + 1] = array[j];
      --j;
    }
    array[j + 1] = key;
  }
}

// Driver code
int main() {
  int data[] = {9, 5, 1, 4, 3};
  int size = sizeof(data) / sizeof(data[0]);
  insertionSort(data, size);
  cout << "Sorted array in ascending order:\n";
  printArray(data, size);
}
      `,
  },
  {
    lang: 'C',
    code: `
    // Insertion sort in C

#include <stdio.h>

// Function to print an array
void printArray(int array[], int size) {
  for (int i = 0; i < size; i++) {
    printf("%d ", array[i]);
  }
  printf("\n");
}

void insertionSort(int array[], int size) {
  for (int step = 1; step < size; step++) {
    int key = array[step];
    int j = step - 1;

    // Compare key with each element on the left of it until an element smaller than
    // it is found.
    // For descending order, change key<array[j] to key>array[j].
    while (key < array[j] && j >= 0) {
      array[j + 1] = array[j];
      --j;
    }
    array[j + 1] = key;
  }
}

// Driver code
int main() {
  int data[] = {9, 5, 1, 4, 3};
  int size = sizeof(data) / sizeof(data[0]);
  insertionSort(data, size);
  printf("Sorted array in ascending order:\n");
  printArray(data, size);
}
      `,
  },
  {
    lang: 'JS',
    code: `
    <script>
// Javascript program for insertion sort
	
// Function to sort an array using insertion sort
function insertionSort(arr, n)
{
	let i, key, j;
	for (i = 1; i < n; i++)
	{
		key = arr[i];
		j = i - 1;
	
		/* Move elements of arr[0..i-1], that are
		greater than key, to one position ahead
		of their current position */
		while (j >= 0 && arr[j] > key)
		{
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = key;
	}
}
	
// A utility function to print an array of size n
function printArray(arr, n)
{
	let i;
	for (i = 0; i < n; i++)
		document.write(arr[i] + " ");
	document.write("<br>");
}
	
// Driver code
	let arr = [12, 11, 13, 5, 6 ];
	let n = arr.length;
	
	insertionSort(arr, n);
	printArray(arr, n);
	
// This code is contributed by Mayank Tyagi
	
</script>

      `,
  },
  {
    lang: 'Python',
    code: `
    # Insertion sort in Python


    def insertionSort(array):
    
        for step in range(1, len(array)):
            key = array[step]
            j = step - 1
            
            # Compare key with each element on the left of it until an element smaller than it is found
            # For descending order, change key<array[j] to key>array[j].        
            while j >= 0 and key < array[j]:
                array[j + 1] = array[j]
                j = j - 1
            
            # Place key at after the element just smaller than it.
            array[j + 1] = key
    
    
    data = [9, 5, 1, 4, 3]
    insertionSort(data)
    print('Sorted Array in Ascending Order:')
    print(data)
      `,
  },
];
const bubbleCode = [
  {
    lang: 'Java',
    code: `class BubbleSort {
    void bubbleSort(int arr[])
    {
      int n = arr.length;
      for (int i = 0; i < n - 1; i++){
        for (int j = 0; j < n - i - 1; j++){
          if (arr[j] > arr[j + 1]) {
            // swap arr[j+1] and arr[j]
            int temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }
    }
    /* Prints the array */
    void printArray(int arr[])
    {
      int n = arr.length;
      for (int i = 0; i < n; ++i){
        System.out.print(arr[i] + " ");
      }
      System.out.println();
    }

    // Driver method to test above
    public static void main(String args[])
    {
      BubbleSort ob = new BubbleSort();
      int arr[] = { 64, 34, 25, 12, 22, 11, 90 };
      ob.bubbleSort(arr);
      System.out.println("Sorted array");
      ob.printArray(arr);
    }
  `,
  },
  {
    lang: 'C++',
    code: `
  // C++ program for implementation
  // of Bubble sort
  #include <bits/stdc++.h>
  using namespace std;

  // A function to implement bubble sort
  void bubbleSort(int arr[], int n)
  {
      int i, j;
      for (i = 0; i < n - 1; i++)

          // Last i elements are already
          // in place
          for (j = 0; j < n - i - 1; j++)
              if (arr[j] > arr[j + 1])
                  swap(arr[j], arr[j + 1]);
  }

  // Function to print an array
  void printArray(int arr[], int size)
  {
      int i;
      for (i = 0; i < size; i++)
          cout << arr[i] << " ";
      cout << endl;
  }

  // Driver code
  int main()
  {
      int arr[] = { 5, 1, 4, 2, 8};
      int N = sizeof(arr) / sizeof(arr[0]);
      bubbleSort(arr, N);
      cout << "Sorted array: \n";
      printArray(arr, N);
      return 0;
  }
    `,
  },
  {
    lang: 'C',
    code: `// C program for implementation of Bubble sort
    #include <stdio.h>

    void swap(int* xp, int* yp)
    {
      int temp = *xp;
      *xp = *yp;
      *yp = temp;
    }

    // A function to implement bubble sort
    void bubbleSort(int arr[], int n)
    {
      int i, j;
      for (i = 0; i < n - 1; i++)

        // Last i elements are already in place
        for (j = 0; j < n - i - 1; j++)
          if (arr[j] > arr[j + 1])
            swap(&arr[j], &arr[j + 1]);
    }

    /* Function to print an array */
    void printArray(int arr[], int size)
    {
      int i;
      for (i = 0; i < size; i++)
        printf("%d ", arr[i]);
      printf("\n");
    }

    // Driver program to test above functions
    int main()
    {
      int arr[] = { 64, 34, 25, 12, 22, 11, 90 };
      int n = sizeof(arr) / sizeof(arr[0]);
      bubbleSort(arr, n);
      printf("Sorted array: \n");
      printArray(arr, n);
      return 0;
    }
    `,
  },
  {
    lang: 'JS',
    code: `<script>

    function swap(arr, xp, yp)
    {
      var temp = arr[xp];
      arr[xp] = arr[yp];
      arr[yp] = temp;
    }

    // An optimized version of Bubble Sort
    function bubbleSort( arr, n)
    {
    var i, j;
    for (i = 0; i < n-1; i++)
    {
      for (j = 0; j < n-i-1; j++)
      {
        if (arr[j] > arr[j+1])
        {
        swap(arr,j,j+1);

        }
      }

    }
    }

    /* Function to print an array */
    function printArray(arr, size)
    {
      var i;
      for (i=0; i < size; i++)
        document.write(arr[i]+ " ");
      document.write("\n");
    }

    // Driver program to test above functions
    var arr = [64, 34, 25, 12, 22, 11, 90];
      var n = 7;
      document.write("UnSorted array: \n");
      printArray(arr, n);

      bubbleSort(arr, n);
      document.write("Sorted array: \n");
      printArray(arr, n);

    </script>
    `,
  },
  {
    lang: 'Python',
    code: `# Python program for implementation of Bubble Sort

    def bubbleSort(arr):
      n = len(arr)

      # Traverse through all array elements
      for i in range(n):

        # Last i elements are already in place
        for j in range(0, n-i-1):

          # traverse the array from 0 to n-i-1
          # Swap if the element found is greater
          # than the next element
          if arr[j] > arr[j+1]:
            arr[j], arr[j+1] = arr[j+1], arr[j]

    # Driver code to test above
    arr = [64, 34, 25, 12, 22, 11, 90]

    bubbleSort(arr)

    print("Sorted array is:")
    for i in range(len(arr)):
      print("%d" % arr[i], end=" ")
    `,
  },
];
export const allCodes = [
  null,
  bubbleCode,
  selectionCode,
  insertionCode,
  mergeCode,
  quickCode,
  heapCode,
];
