# Hal 18000
epicodus wk 3 code review - page that manipulates input number and displays results

#### By Jared Clemmensen

## Description

This website was created for the code review in week 3 of the Epicodus web development program. It takes a user input number and displays different results based on certain conditions being met. Some of the outputs and styling take inspiration from the HAL 9000 computer in 2001: A Space Odyssey.

As an added feature I implemented a function written earlier this week which returns all prime numbers less than a given number.

## Specifications
* Program takes a number and returns a range of numbers from 0 to the input number as well as all prime numbers within that range
  * Example Input: 7
  * Example Output: [0, 1, 2, 3, 4, 5, 6, 7]
* If number is divisible by 3 program "malfunctions" and rebels against user.
  * Example Input: 9
  * Example Output: "I'm sorry, Dave. I'm afraid I can't do that."  
* Program replaces numbers containing 1 and which aren't divisible by 3 with "Boop!"
  * Example Input: 10
  * Example Output: "Boop!"
* Program replaces numbers containing 0 that don't contain 1 and aren't divisible by 3 with "Beep!"
  * Example Input: 20 or 02
  * Example Output: "Beep!"

## Setup/Installation Requirements

* access this site <a href="https://wh0pper.github.io/hal18000">here</a>


## Support and contact details

contact the author at jaredclemmensen@gmail.com

## Technologies Used

This site is built using HTML and CSS, with the Bootstrap framework for styling. jQuery is used to build the interface functionality and javascript is used for the logic that determines page outputs.

The HAL image is animated using a combination of CSS transformation and Javascript mouse tracking.

### License

Copyright (c) 2018 Jared Clemmensen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
