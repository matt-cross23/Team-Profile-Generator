# Team-Profile-Generator

This project generates a team of employees based on a manager's input. The functionality behind this project consists of Classes that extend the Employee Class, which follows the OOP principles of Inheritance and Polymorphism. Managers, Interns, and Engineers all follow the same attributes of an employee but each has specific methods that need to be implemented into each respective object. By overwriting the attribute of 'role' by adding a method which returns a string of the employee's role. Each class works as intended due to the passing of tests (To install and run test cases, clone repo and run =>)
```
{npm run jest}
```
Once the user answers the prompts which act as promises, a then method is used to return the promise which consolidates the data and places it an object. This object allows the answers to be placed within new instances of the Manager, Intern, Engineer Class. From here, the object is iterated throughout (for loop) and classifies each card based on the getRole() method so HTML can be generated based on employees' roles.  

<img width="960" alt="team-prof" src="https://user-images.githubusercontent.com/88978036/155823460-3bbb3dd8-9005-474c-8762-b6928bde637a.png">

## Here are the links to the walkthrough video
https://youtu.be/l3Qeer7Sje4
https://youtu.be/ua5QVkp5QSg
