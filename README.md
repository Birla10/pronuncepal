# pronuncepal
A web application designed to capture and analyse human speech, evaluating the correctness of word or sentence pronunciation. The assessment provides comprehensive results, including an overall score, word-level score, and syllable-level score to gauge pronunciation accuracy.

Local Setup:
Pre-requisites:
  1. ReactJS
  2. NodeJS
  3. MySQL
  4. AWS account for S3 bucket access

Clone the git repository to your local
Then Open the project which has 2 folders in it
  1. Sppech-backend
  2. Speech-ui

Open a Terminal in Speech-backend and run below commands
  1. npm install
  2. node index.js
Above steps will start the NodeJS server

Open a terminal in Speech-ui and run below command
  1. run npm install command
  2. npm start
Above steps will start the ReactJS and should open a Browser with the UI display

Sample input: Record a Word or Sentence by entering a Reference text and then pressing the record button ( Ex: Hello World )
Sample output: 
    
    Overall Score : 97
    IELTS Score : 8.5
    Word level Scoring:
	      Hello : 95
	      Syllable Level Scoring
		        hel : 98
		        lo : 92
	      World : 98
	      Syllable Level Scoring
		        world : 98
