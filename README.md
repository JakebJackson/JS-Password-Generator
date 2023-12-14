# JS-Password-Generator
This is a repository for a Web-based password generator created using JavaScript.

## About this Repository
This repository is a part of the coursework for the Monash University Web Development Bootcamp, this is the Week 2 challenge for the course. The objectives for this project were as follows:
* **When the user clicks the generate password button, they are prompted by the webpage with password criteria.**
* **The user is able to select the criteria they desire for the password.**
* **When the user is prompted for the length of the password they must chose a length of at least 8 characters and no more than 128 characters.**
* **When the user is asked for the type of character to include, they are able to chose lowercase, uppercase, numeric and/or special characters.**
* **When the user chooses their prompts the prompts should be validated and at least one character type should be selected.**
* **Once the user has completed these steps the password should be generated and displayed on the webpage.**

## Challenges
The most challenging part of creating this project was wrapping my head around and understanding the necessary steps for the logic required validate and incorporate the criteria that the user has selected. In particular I found creating a way to ONLY select the characters that the user had specified was very hard to realise in my code, once I did figure out how to do so, it was actually fairly simple and straightforward. The second thing I found difficult was also something very simple, I couldn't figure out how to convert Math.random() into a whole number and make it within a certain range. I'm used to C# where doing the exact same thing is as simple as Math.random(0-intName). Once I figured it out it was incredibly simple but not having that functionality as part of the random() function was very weird to me at first. I majority of what I learnt was just minimising the code, a lot of the end product was consolidated from the way I originally did and intended to do things when I started, I also learnt how to use unicode and the rest was mostly consolidating or reiterating things I had learnt in the past few weeks.

## About the project
The project is designed to provide the user with a random password based on the criteria the user has selected, the options are; password length, and wether or not to include uppercase, lowercase, numbers and special characters in the password. Once the user has selected an acceptable length and at least one character type the web page will generate a password based on this criteria and display it to the user.

## Mock-Up
Below is an image of the deployed application:
![Deployed portfolio website](./assets/images/password-generator.png)

## Deployment
This website has been deployed and can be viewed [here](https://jakebjackson.github.io/JS-Password-Generator/).
