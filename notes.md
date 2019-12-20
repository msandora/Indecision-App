

>https://www.udemy.com/course/react-2nd-edition/learn/lecture/7900206

> Check ssh-key
HSM000071:Indecision-App marksandora$ ls -a ~/.ssh
.               ..              id_rsa          id_rsa.pub      known_hosts

> Generate ssh-key
HSM000071:Indecision-App marksandora$ ssh-keygen-t rsa -b 4096 -C "mark.sandora@gmail.com"
> hit Enter until generated

> Check if ssh is running, if not run
HSM000071:Indecision-App marksandora$ eval "$(ssh-agent -s)"
Agent pid 80929

> Add Identity with private file (id_rsa)
HSM000071:Indecision-App marksandora$ ssh-add ~/.ssh/id_rsa


HSM000071:Indecision-App marksandora$ pbcopy < ~/.ssh/id_rsa.pub
# Copies the contents of the id_rsa.pub file to your clipboard

https://github.com/settings/profile
> SSH and GPG Keys > New SSH KEY > Paste in whats copied to clipboard > Add 

> Make SSH connection
HSM000071:Indecision-App marksandora$ ssh -T git@github.com
> Yes > Success message

HSM000071:Indecision-App marksandora$ git remote
HSM000071:Indecision-App marksandora$ git remote -v


https://www.udemy.com/course/react-2nd-edition/learn/lecture/7900214#questions

https://devcenter.heroku.com/articles/heroku-cli
> download heroku > version does not matter

HSM000071:Expensify marksandora$ heroku --version
heroku/7.35.0 darwin-x64 node-v12.13.0

> Authenticate with Heroku
HSM000071:Indecision-App marksandora$ heroku login
heroku: Press any key to open up the browser to login or q to exit: 
Opening browser to https://cli-auth.heroku.com/auth/browser/4c489843-c084-4da5-816f-0df6354f45fd
Logging in... done
Logged in as mark.sandora@gmail.com

> Create new application
HSM000071:Indecision-App marksandora$ heroku create ms-indecision-app
Creating ⬢ ms-indecision-app... done
https://ms-indecision-app.herokuapp.com/ | https://git.heroku.com/ms-indecision-app.git

HSM000071:Indecision-App marksandora$ git remote
heroku
origin
HSM000071:Indecision-App marksandora$ git remote -v
heroku  https://git.heroku.com/ms-indecision-app.git (fetch)
heroku  https://git.heroku.com/ms-indecision-app.git (push)
origin  https://github.com/msandora/Indecision-App.git (fetch)
origin  https://github.com/msandora/Indecision-App.git (push)
HSM000071:Indecision-App marksandora$ 

> Add start script to package scripts
  "scripts": {
    ...,
    "start": "node server/server.js",
    "heroku-postbuild": "yarn run build:prod" 
  }