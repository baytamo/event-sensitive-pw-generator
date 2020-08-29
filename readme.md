**User chooses password characters**
1. characters are organized into 4 separate arrays, with each set to be (or not to be) pushed into a new array depending on what user chooses
1. user can check or uncheck each box and password will modify depending on user's latest parameters

**User chooses number of characters**
1. user can click on slider to choose current value OR
1. user can use slider to select their desired password length

**Random character generation**
1. for loop chooses characters at random from new user generated array and based on the number of desired characters
1. random characters generated are placed into a new array
1. .join used so that new password array doesn't appear as separate strings, but as one set of characters that is easy to copy and paste
1. password appears in window above button

**Generate Button**
1. for mobile users, slider event listener does not always work
1. user has option to use "Generate" button to create a password

**Clear Button**
1. textarea with password will clear
1. boxes will be unchecked
1. slider value will be reset to default

![password generator](Assets/pwGenerator.png)