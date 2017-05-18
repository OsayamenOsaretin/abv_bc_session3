# Bootcamp Home Session 3 - Find the Missing Integer 

This repo holds a solutions and tests that take two arrays and finds the missing integer in one of them. It also handles the cases for empty arrays, and identical arrays

## Getting Started

To use this solution:

 - Open your Terminal or Command Prompt and [Navigate](https://computers.tutsplus.com/tutorials/navigating-the-terminal-a-gentle-introduction--mac-3855) to folder you want to keep working copy of repo.

 - Clone this repository: 

     run from your git terminal-
  ```git clone https://githubcom/OsayamenOsaretin/abv_bc_session1/tree/function-aritGeo``` 

 

- In your working directory, install dependencies by running:

                           ```npm install```

 

### Prerequisites
You need these installed if you want to go on the quest to find the missing Integer.

- [Git](https://git-for-windows.github.io/) 
- [node.js](https://nodejs.org/en/download/)



### Installing
After collecting and installing the prerequisites:
- 

Install dependencies

```
npm install
```


## Running the tests

To the run the tests:

``` npm test```

### Break down of what tests test

Tests were designed to cover edge cases

```
It should return 0 for empty arrays

It should also return O for identical arrays

```

Tests should also check for agreeable input

``` 
It should return the missing Number in the case of agreeable input, which are two arrays with a single number in one and not in the other
```

## Asymptotic Analysis

    The algorithm first sorts the two arrays. It does this using the javascript inbuilt sort function which is implemented with introsort, which is a hybrid version of quicksort. It then iterates through both lists at the same time, and breaks when it finds a difference. A difference shows that the iteration has reached the missing number in the sorted Larger array. It returns this number 
    
 * First two sorts: Takes O(nlogn) on the average.
 * Instatiations and if statement checks: Take constant time b * O(1)
 * For loop iterates through entire array once: Takes time Linear with the size of the input O(n)
   

   
   
     ```Final Asymptotic complexity : O(N) = O(nlogn) + b * O(1) + O(n)
                               
                               O(N) approximately=  O(nlogn) 
                               since b is a constant and negligble and the linear component is dominated by the nlogn component ```

## Built With

* [Sublime Text](hhttp://www.sublimetext.com/) - Text Editor used.
* [Git](https://github.com/) - Version Control
* [node.js](https://nodejs.org/) - Backend Javascript environment
* [jasmine]() - Testing Framework


## Authors

* **Osayamen** - *Initial work* [OsayamenOsaretin](github.com/OsayamenOsaretin)



## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
* Andela Bootcamp Facilitators and BFAs
* Andela Bootcampers
* Developer community