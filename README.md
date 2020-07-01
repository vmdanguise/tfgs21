# tfgs21 Trabajo Final de Graduacion Siglo 21
Sistema de gestion de clases online para ejercicios fisicos con asistente inteligente virtual


https://youtu.be/vRUf3Wdd1wM 


Install the Heroku CLI
Download and install the Heroku CLI.

If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

$ heroku login
Create a new Git repository
Initialize a git repository in a new or existing directory

$ cd my-project/
$ git init
$ heroku git:remote -a tfg21
Deploy your application
Commit your code to the repository and deploy it to Heroku using Git.

$ git add .
$ git commit -am "make it better"
$ git push heroku master
Existing Git repository
For existing repositories, simply add the heroku remote

$ heroku git:remote -a tfg21
