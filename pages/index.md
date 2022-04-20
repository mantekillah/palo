---
layout: default
post_list: false
toc: false
comment: true
home_btn: true
btn_text: true
footer: true
title: "• lı★ıl • BLZ • Mantekillah •"
author: ""
encrypted_text: true
permalink: /
---

# lı★ıl (H1)

<br>
> AQUEST ÉS UN TEXT DE PROVA.

## H2

Text de prova nº I.

- Text de prova nº II.
- HANAKO LOKO? `HANAKO LOKO SALT`.

```python
arr = [10, 7, 8, 9, 1, 5]
n = len(arr)
quickSort(arr,0,n-1)
print ("Sorted array is:")
for i in range(n):
    print ("%d" %arr[i]),
```

## H2

### H3

normal **bold** _italic_ ~~strikethrough~~ `keyword` [Link to Google](https://google.com)

### H3

1. ordered list item 1
   1. sublist
      1. subsublist

- unordered list
  - sublist

### H3

| Date         | Version   | Size    | Comment                |
| :----------- | :-------- | :------ | :--------------------- |
| Nov 11, 2018 | v2.14c    | 240 kb  | No irreversible damage |
| Nov 12, 2018 | v2.14c    | 1230 kb | No irreversible damage |
| Nov 13, 2018 | v2.14c    | 12kb    | No irreversible damage |
| Nov 15, 2018 | v1.99 LTS | 4kb     | Irreversible damage    |

### H3

#### H4

```mermaid
pie
    title Pie Chart
    "Dogs" : 36
    "Cats" : 85
    "Rats" : 150
    "Pheonix" : 120
    "Elephant" : 330 
```

### H3

Λορεμ ιπσθμ δολορ σιτ αμετ, νονθμυ δολορεσ πρινcιπεσ εαμ αν, ρεγιονε σθσcιπιτ αccθσατα νε πρι, εα εαμ γραεcο μελιθσ αccθσαμ. Vολθπτθα δισσεντιασ τε ηασ, τε πρι σθασ ηαρθμ αδιπισcινγ. Qθο ατ ιθστο ταcιματεσ, μελ εραντ ρεπθδιανδαε ετ. Ετ τιμεαμ cονcεπταμ αccομμοδαρε νεc, ιδ σεα μελιορε λθπτατθμ. Αδ περσεcθτι cοντεντιονεσ θσθ. Ηομερο νοστρο θταμθρ εαμ εξ.

Νεc ιδ λεγερε ρεγιονε διcερετ, vιμ εθ νιβη ιριθρε cορπορα. Αδ vιξ διcο νατθμ εσσεντ. Ιλλθδ αλιqθιδ ει σιτ, δοcτθσ vιδισσε δετραξιτ αν μεα. Ιλλθδ qθανδο ιντεγρε εξ vιμ, εοσ θτ μθνερε τριτανι ποσιδονιθμ, αν cετεροσ περσεqθερισ σιτ. Λατινε δισcερε vοcιβθσ πρι νο, vιμ cθ νοστρο μαλθισσετ vολθπταρια.

##### H5

```python
# Python program for implementation of Quicksort Sort

# This function takes last element as pivot, places
# the pivot element at its correct position in sorted
# array, and places all smaller (smaller than pivot)
# to left of pivot and all greater elements to right
# of pivot
def partition(arr,low,high):
    i = ( low-1 )         # index of smaller element
    pivot = arr[high]     # pivot

    for j in range(low , high):

        # If current element is smaller than or
        # equal to pivot
        if   arr[j] <= pivot:

            # increment index of smaller element
            i = i+1
            arr[i],arr[j] = arr[j],arr[i]

    arr[i+1],arr[high] = arr[high],arr[i+1]
    return ( i+1 )

# The main function that implements QuickSort
# arr[] --> Array to be sorted,
# low  --> Starting index,
# high  --> Ending index

# Function to do Quick sort
def quickSort(arr,low,high):
    if low < high:

        # pi is partitioning index, arr[p] is now
        # at right place
        pi = partition(arr,low,high)

        # Separately sort elements before
        # partition and after partition
        quickSort(arr, low, pi-1)
        quickSort(arr, pi+1, high)

# Driver code to test above
arr = [10, 7, 8, 9, 1, 5]
n = len(arr)
quickSort(arr,0,n-1)
print ("Sorted array is:")
for i in range(n):
    print ("%d" %arr[i]),

# This code is contributed by Mohit Kumra
```
