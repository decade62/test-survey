# test-survey
A multi-step survey which can be added to a website using JS. This works by including a short snippet of code in an HTML page. The code loads a pop-up (a simple div layer) containing the survey.

Exercise for interview. Original request follows:

Requirements:

The survey pop-up should load 2 seconds after the page has loaded.
The survey should contain 4 steps and have NEXT and PREVIOUS buttons on pages which need them.
The survey should contain the following fields (2 fields per step):

Step 1: Name (input), Email (input)
Step 2: Age (select), About me (textarea)
Step 3: Address (input), Gender (input[radio])
Step 4: Favourite Book (input), Favourite Colors (input[checkbox])

All fields on the first 2 steps are required. All fields on the final 2 steps are optional.
Once all steps have been completed, the pop-up should display a table with all of the data collected in the survey.

BONUS If the browser is closed and re-opened, the script should re-open the survey on the right step if the browser tab was closed before the survey was submitted. Otherwise, the survey should not re-open if it was already submitted.
