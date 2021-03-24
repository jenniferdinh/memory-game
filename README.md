# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Jennifer Dinh

Time spent: 3 hours spent in total

Link to project: https://glitch.com/edit/#!/enthusiastic-hot-spinosaurus

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](your-link-here)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
I had a problem where certain variables were not resetting for each new game or for each new sequence in a game.
If the user won or lost a game and wanted to start another game without refreshing the site, the variables would
not reset the way I intended it to; some variables would remain in the same state they were in in the previous game
played. I fixed this by using console.log() to check the value of variables throughout the execution of the game. 
As a result, I found variables that were not reset from the last game. I fixed this by initializing these variables in
the startGame() function so that for each new game, the variables would be their intended initial values.
Also, when a sequence was three buttons or more, I found that the guess function marked the correct answer as wrong.
I fixed this by debugging with outputs to the console. I realized that the guessCounter variable was not
being reset after checking each new sequence, so I reinitialized the guessCounter variable to 0 each time the guess
function detected the correct sequence being inputted and moved on to the next sequence. By reinitializing guessCounter
to 0 for each new sequence, the pattern would start checking from the beginning of the pattern instead of somewhere in
the middle of the pattern. 
There is one problem that I could not solve where audio would not play if I opened the site in its own tab. The sound 
only worked when I played the game on glitch.com. I looked at the console and got a message saying the AudioContext needed
to be resumed or created. If I had more time, I would have tried to fix this problem. From the searching I had done, 
the problem could possibly be that certain browsers need user interaction to start the AudioContext and onmousedown and
onmouseup don't count as user interactions.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
As someone who had no experience with web development, the assignment was a fun introduction to HTML, CSS, and 
JavaScript that made me wanting to learn more. Ultimately, I want to learn how to make the websites
that I usually see when browsing the web. I want to know how to implement different pages on a website and I want to know how
that all comes together in the code. I want to learn how to add expanding menus, search bars, animated interfaces, 
moving images, and all the other possible features to add to a website. I want to learn more 
about the capabilities of HTML, CSS, and JavaScript and how real web developers use these languages efficiently. 
I am also curious about how web development is done in the industry. What IDEs are typically used? How is web development done in the
industry and outside of glitch.com? How do web developers collaborate together when making a website together? How do web developers
collaborate with other roles, such as UX designers or back-end developers?
I have also heard about frameworks before working on this assignment. I want to know what frameworks are, which ones are used in the industry, and how 
they are used in web development alongside HTML, CSS, and JavaScript. After searching online about creating a random array 
of integers with JavaScript, I noticed that it was very different compared to creating a random array in C++ and Python. 
It made me curious about JavaScript and its coding syntax and capabilities. I want to learn all the intricacies of HTML, CSS, and JavaScript
so that ultimately, I could create my own website and learn the skills needed to be a web developer in the industry.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had more time to work on this project, I would look at the functions and see if they could be optimized or shortened in any way.
As for features, I would try to add different game difficulties, like easy, medium, and hard, or allow the player to
customize the game by choosing the size of the pattern or the number of boxes used in the game. I would also try to make
the game more visually appealling. The site looks plain and doesn't seem like the style I would want for a game. I would
also try to implement more playful and less robotic sounds to make the game feel more entertaining and fun.
I would also want to make the alert window look more in theme with the game and the site. I would also try to make the game
music-themed, labelling the buttons with music notes and making the sound off the button correspond to the music note
label so the game could feel more engaging and meaningful.



## License

    Copyright Jennifer Dinh

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.