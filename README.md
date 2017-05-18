
# Bootcamp Home Session 3 - Reverse Strings

This repo holds a solution and tests that takes strings and return them in reverse, or true if they turn out to be palindromes.

## Getting Started

To use this solution:

 - Open your Terminal or Command Prompt and [Navigate](https://computers.tutsplus.com/tutorials/navigating-the-terminal-a-gentle-introduction--mac-3855) to folder you want to keep working copy of repo.

 - Clone this repository: 

     run from your git terminal-
  ```git clone https://githubcom/OsayamenOsaretin/abv_bc_session1/tree/function-aritGeo``` 

 

- In your working directory, install dependencies by running:

                           ```npm install```

 

### Prerequisites
You need these installed if you want to reverse strings, and find Palindromes. (Strings are a box of chocolates, you never know what youre going to get)

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
It should return null in the case of an empty string
```

Tests should also check for agreeable input

``` 
If string is a palindrome, function should return true
If string is not a palindrome, function should return the reversed string
```

## Asymptotic Analysis

    The algorithm checks for edge cases and returns appropriate values, then it splits the string into an array, reverses that array, and joins the array back into a string. It then tests for palindromes, and returns the reversed string if it finds we don't have a palindrome.
    
 * if statement to test for empty string, numbers, empty arguments: Take constant time b * O(1)
 * Splits, reversal, and join take [Linear](https://softwareengineering.stackexchange.com/questions/331909/whats-the-complexity-of-javas-string-split-function) time with the size of the input: Take linear time a * O(n)
 * Checks for palindromes or not: Takes constant time O(1)
   
 * Final tests: Take constant time O(1)
   
   
     ```Final Asymptotic complexity : O(N) = b * O(1) + a * O(n) +  O(1)
                               
                               O(N) approximately=  O(n) 
                               since a, b are constants and negligble ```

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