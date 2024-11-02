# Card_Game
This interactive memory card game challenges players to match pairs of cards within a grid, enhancing cognitive skills through visual recall and attention. The game showcases my proficiency in front-end web development, as it combines HTML, CSS, and JavaScript to deliver an engaging and visually appealing experience.
Here’s a detailed README description of your memory card game project, including its structure, key components, and a walkthrough of the code organization.

---

# Memory Card Game

This memory card game is a web-based application that challenges users to match pairs of cards within a grid, improving memory and concentration. Built with HTML, CSS, and JavaScript, the game offers multiple difficulty levels, a timer, step counter, and score tracking, providing an engaging and customizable experience for users.

## Project Structure

The project files are structured as follows:
- `index.html`: Sets up the game interface and loads necessary resources.
- `style.css`: Provides the styling, ensuring a responsive and visually cohesive design.
- `main.js`: Handles all game logic, animations, and user interactions.

### 1. `index.html`

The HTML file establishes the core structure of the game and loads external resources:
- **Header**: Contains the game title, a button to open the main menu, and two counters (step counter and timer).
- **Main Section**: Houses the main game area with two `<aside>` sections for background images and content padding, which enhances visual appeal and usability.
- **Rank Table**: Displays player rankings based on their completion time and steps, adding a competitive element.
- **Script and Font Links**: Includes FontAwesome icons, custom fonts, and the main JavaScript file for game functionality.

### 2. `style.css`

This file defines the visual appearance and layout:
- **Global Styling**: Sets a dark theme background and basic styling for text and containers.
- **Header Styling**: Adjusts layout and positioning of the game title, counters, and menu button, making them responsive.
- **Card Styling**: Defines the appearance of the cards, including the front and back, and applies a `flip` animation effect.
- **Animation Classes**: Adds animations for flipping cards, fading elements in and out, and visually enhancing selected and matched cards.
- **Responsive Layouts**: Adapts the layout for smaller screens using media queries, ensuring the game functions well on mobile devices.

### 3. `main.js`

The JavaScript file contains the game’s core logic and functionality:
- **Global Variables**: Initializes variables for tracking selected cards, difficulty level, timer, and score.
- **Game Initialization (`start()`)**: Creates the main game container, settings, and control buttons. Upon starting, it dynamically generates the game grid based on selected difficulty and card set.
- **Level and Card Setup (`start_level()`)**: Configures the grid and card deck according to the selected difficulty and card theme. Cards are placed in a grid, and shuffle logic randomizes card positions.
- **Card Flip and Selection Logic**: Implements functions to handle card flips, checking if selected pairs match, and resetting the selection if they do not. A step counter increments with each attempt.
- **Victory Condition**: Tracks matched pairs and ends the game when all pairs are found. Displays a “Victory” message with time and steps taken, allowing players to start a new round.
- **Menu and Settings (`build_menu()` and `buildSettingMenu()`)**: Creates main menu buttons (Resume, Settings, Exit) and settings for adjusting difficulty and card theme, enhancing customization.
- **Scoreboard and Rank Display (`createScoreBoard()` and `appendBoardItem()`)**: Adds a high-score table showing player rankings based on level, time, and steps, encouraging competitive gameplay.
- **Helper Functions**:
    - `shuffleArray()`: Shuffles the cards in the deck to randomize card placement.
    - `StartTimer()`: Starts a real-time timer, recording the total time elapsed.
    - `triggerFadeIn()` and `triggerFadeOut()`: Controls animations for menu and settings elements.

## Key Features

1. **Responsive Design**: The layout adapts to different screen sizes, with media queries for small screens, ensuring a consistent experience across devices.
2. **Difficulty Levels**: Three levels of difficulty are available, increasing the grid size and number of cards, providing more challenging gameplay.
3. **Selectable Card Sets**: Allows users to choose different card themes, making the game visually diverse and customizable.
4. **Timer and Step Counter**: Tracks game duration and attempts, displaying these metrics at the top, giving users feedback on their progress.
5. **Animated Card Flip**: Adds smooth animations for card flipping and selection, enhancing the visual appeal.
6. **Victory Message and Restart**: Shows a victory message upon completion and allows players to restart, refreshing the game layout and settings.
7. **High Score Table**: Displays top scores, including time and steps, encouraging replayability.

## Future Improvements

Potential areas for enhancement include adding sound effects, additional card themes, or a multiplayer option for shared gameplay experiences.

This project illustrates skills in front-end development, including DOM manipulation, event handling, and responsive design. It's an ideal addition to a portfolio, showcasing the ability to create engaging, interactive applications with a focus on user experience.
