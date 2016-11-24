Following Node Hero - Getting Started with Node.js Tutorial
(https://blog.risingstack.com/node-hero-tutorial-getting-started-with-node-js/)

From time to time I will use different branches for different problems just to help seperate topics.
I am also adding some features not covered in Node Hero but stuff I want to have fun with. I will put those parts
in another Branch.

For the Synch and Asynch node path, you need to cd into io/ to call node correctly.
I will look into why this is occurring later.  I think it involves node's File System.

I had to change the Database problem a little bit to get it to work.  I used (http://stackoverflow.com/questions/4295782/how-do-you-extract-post-data-in-node-js).  Each directory explores the different problems.

For the File System Database problem, I changed fs.appendToFile to fs.appendFile. (http://stackoverflow.com/questions/3459476/how-to-append-to-a-file-in-node).

Took a second but I got the PSQL to work.  I highly recommend (http://www.tutorialspoint.com/postgresql/).

You will have to change your username to match your own.  If you don't remember it, try the default.

Added a secret file in the gitignore so I can keep my database config in one module and require it when ever I need it.  This way I won't have to worry about sending anything important to github.  (Ideally, I won't have to be concern.)


