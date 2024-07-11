Project: Battleship
=============

A basic game of Battleship built with TDD principles.

Here's the [live project demo.](https://alansobchacki.github.io/odin-js-battleship/)

About
-----

This project was completed as part of [The Odin Project](https://www.theodinproject.com/) [Javascript](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript) curriculum. It is the twelfth and final project required for completion of the Javascript Course [12/12].

These were the project requirements:

- [x] Begin your app by creating the Ship class/factory.
  - [x] Your ‘ships’ will be objects that include their length, the number of times they’ve been hit and whether or not they’ve been sunk.
  - [x] Ships should have a hit() function that increases the number of ‘hits’ in your ship.
  - [x] isSunk() should be a function that calculates whether a ship is considered sunk based on its length and the number of hits it has received.
- [x] Create a Gameboard class/factory
  - [x] Implement this class/factory without relying on console.log or DOM methods. Write and run tests to check this class behavior.
  - [x] Gameboards should be able to place ships at specific coordinates by calling the ship factory or class.
  - [x] Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
  - [x] Gameboards should keep track of missed attacks so they can display them properly.
  - [x] Gameboards should be able to report whether or not all of their ships have been sunk.     
- [x] Create a Player class/factory.
  - [x] There will be two types of players in the game, ‘real’ players and ‘computer’ players.
  - [x] Each player object should contain its own gameboard.
- [x] Import your classes/factories into another file, and drive the game using event listeners to interact with your objects. Create a module that helps you manage actions that should happen in the DOM.
- [x] Display both the player’s boards and render them using information from the Gameboard class/factory.
- [x] Your event listeners should step through the game turn by turn using only methods from other objects.
- [x] For attacks, let the user click on a coordinate in the enemy Gameboard. Send the user input to methods on your objects, and re-render the boards to display the new information.
- [x] The game is played against the computer, so make the ‘computer’ players capable of making random plays.
- [x] Create conditions so that the game ends once one player’s ships have all been sunk.

EXTRA CREDIT:
- [x] Polish the intelligence of the computer player by having it try adjacent slots after getting a ‘hit’.

What I Learned
-----

Writing tests was surprisingly fun. I've set up Jest for this project, and wrote about 16 different tests to handle ship placement, attack registration, and more. It felt much easier than writing tests for Ruby, that's for sure. The syntax is much simpler (talk about irony).

Notes
-----

Currently not responsive, as the main goal of the project was to work with TDD. I do intend to make it responsive later on, so for now, be sure to check this out on your desktop.
