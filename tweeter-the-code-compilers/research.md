[//]: # (    Class: SWE2511 - Tweeter
[//]: # (	Name: Matthew Schulz & Kaiden Pollesch
[//]: # (	Class Section: 111)

## Security Research
- Research cross site scripting attacks. Describe cross site scripting in your own words. 
  - Cross Site Scripting attacks (XSS) are ways that hackers use to sneak in harmful code into a web application, which are normally through user inputs. This essentially is a way to trick a website or web app into running some JavaScript that it wasn't intended to run, which can lead to displaying fake information to stealing sensitive data like login detail or even user cookies.
- Attack mechanisms are sometimes called "vectors". From your research, what are two (2) different vectors that attackers use to inject JavaScript in a web application? 
  - First Vector - posting a comment wrapped in ```<script></script>``` tags. Hoping that the web app or the database will later execute that code when viewed, which could be harmful.
  - Second Vector - injecting JavaScript into event handlers through HTML attributes, and the event handlers will use something line ```onerror="alert('XXS')"``` which could call malicious code.
- What strategies can a web application developer use to prevent these attacks?
  - One strategy is to prevent the user from posting HTML tags into their form inputs, not allowing them to use code wrapped in script tags (my first vector). Another would be validating inputs, for example if it is a question response or name input it only needs to be alphanumeric characters, so tag openers ```<>``` wouldn't be allowed. Another strategy that can be done is filtering, there are many tools online that can sanitize HTML and filter out the malicious code. 


## Local Storage Research
- Research the following storage mechanisms (For EACH mechanism - Describe it in your own words.)
  - Local Storage 
    - Local Storage, storage mechanism allows the web app to hold the information in the user's browser. This storage value is stored with key-value pairs and without an expiration date. This storage is normally used by preferences, settings and cached data. 
  - Session Storage
    - Very similar to the local storage mechanism, but is only limited to the current session/tab the user is on. This is only useful for when information is only needed for that session. 
- Why are there two different mechanisms? Give a specific example of why you'd use one vs the other.
  - There are two different mechanisms because each only have so much storage and so when some things are only needed for the session and shouldn't be saved forever, such as user authentication, so that would be stored int the session storage, but other things such as preferences for that site or settings would be stored in the local storage so when the website is reloaded it is then saved and can be used again.


## Thumbs Up and Down
Any Unicode character is able to easily be added using a html entity reference using the entity number which can easily be looked up on multiple online databases.
### Sources:
- https://www.unicodepedia.com/unicode/miscellaneous-symbols-and-pictographs/1f44d/thumbs-up-sign/
- https://www.unicodepedia.com/unicode/miscellaneous-symbols-and-pictographs/1f44e/thumbs-down-sign/
