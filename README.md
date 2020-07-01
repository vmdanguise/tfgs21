# tfgs21 Trabajo Final de Graduacion Siglo 21
Sistema de gestion de clases online para ejercicios fisicos con asistente inteligente virtual

Video Promocional sin terminar...
https://youtu.be/vRUf3Wdd1wM 

Sistema desplegado como Demo (MVP)
...Tiene desactivada la conexion con la base de datos...
https://tfg21.herokuapp.com/



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


EXample push ok

PS C:\Users\DNG\Documents\TFG\TFG_ABM> git push heroku master
Enumerating objects: 3034, done.
Counting objects: 100% (3034/3034), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2806/2806), done.
Writing objects: 100% (3034/3034), 5.11 MiB | 206.00 KiB/s, done.
Total 3034 (delta 603), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
remote: 
remote: -----> Node.js app detected
remote:        
remote: -----> Creating runtime environment
remote:
remote:        NPM_CONFIG_LOGLEVEL=error
remote:        NODE_ENV=production
remote:        NODE_MODULES_CACHE=true
remote:        NODE_VERBOSE=false
remote:
remote: -----> Installing binaries
remote:        engines.node (package.json):  12.13.0
remote:        engines.npm (package.json):   6.13.4
remote:
remote:        Resolving node version 12.13.0...
remote:        Downloading and installing node 12.13.0...
remote:        Bootstrapping npm 6.13.4 (replacing 6.12.0)...
remote:        npm 6.13.4 installed
remote:        
remote: -----> Installing dependencies
remote:        Prebuild detected (node_modules already exists)
remote:        Rebuilding any native modules
remote:        
remote:        > nodemailer@6.4.6 postinstall /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/nodemailer
remote:        > node -e "try{require('./postinstall')}catch(e){}"
remote:
remote:        === Nodemailer 6.4.6 ===
remote:
remote:        Thank you for using Nodemailer for your email sending needs! While Nodemailer
remote:        itself is mostly meant to be a SMTP client there are other related projects in
remote:        the Nodemailer project as well.
remote:
remote:        For example:
remote:        > IMAP API (  https://imapapi.com  ) is a server application to easily access
remote:        IMAP accounts via REST API
remote:        > NodemailerApp (  https://nodemailer.com/app/  ) is a cross platform GUI app to
remote:        debug emails
remote:
remote:        body-parser@1.19.0 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/body-parser
remote:        bytes@3.1.0 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/bytes
remote:        content-type@1.0.4 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/content-type
remote:        debug@2.6.9 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/debug
remote:        ms@2.0.0 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/ms
remote:        depd@1.1.2 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/depd
remote:        http-errors@1.7.2 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/http-errors
remote:        inherits@2.0.3 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/inherits
remote:        setprototypeof@1.1.1 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/setprototypeof
remote:        statuses@1.5.0 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/statuses
remote:        toidentifier@1.0.0 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/toidentifier
remote:        iconv-lite@0.4.24 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/iconv-lite
remote:        safer-buffer@2.1.2 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/safer-buffer
remote:        on-finished@2.3.0 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/on-finished
remote:        ee-first@1.1.1 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/ee-first
remote:        qs@6.7.0 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/qs
remote:        raw-body@2.4.0 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/raw-body
remote:        unpipe@1.0.0 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/unpipe
remote:        type-is@1.6.18 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/type-is
remote:        media-typer@0.3.0 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/media-typer
remote:        mime-types@2.1.27 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/mime-types
remote:        mime-db@1.44.0 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/mime-db
remote:        csv-stringify@5.3.6 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/csv-stringify
remote:        express@4.17.1 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/express
remote:        accepts@1.3.7 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/accepts
remote:        negotiator@0.6.2 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/negotiator
remote:        array-flatten@1.1.1 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/array-flatten
remote:        content-disposition@0.5.3 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/content-disposition
remote:        safe-buffer@5.1.2 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/safe-buffer
remote:        cookie@0.4.0 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/cookie
remote:        cookie-signature@1.0.6 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/cookie-signature
remote:        encodeurl@1.0.2 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/encodeurl
remote:        escape-html@1.0.3 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/escape-html
remote:        etag@1.8.1 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/etag
remote:        finalhandler@1.1.2 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/finalhandler
remote:        parseurl@1.3.3 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/parseurl
remote:        fresh@0.5.2 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/fresh
remote:        merge-descriptors@1.0.1 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/merge-descriptors
remote:        methods@1.1.2 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/methods
remote:        path-to-regexp@0.1.7 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/path-to-regexp
remote:        proxy-addr@2.0.6 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/proxy-addr
remote:        forwarded@0.1.2 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/forwarded
remote:        ipaddr.js@1.9.1 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/ipaddr.js
remote:        range-parser@1.2.1 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/range-parser
remote:        send@0.17.1 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/send
remote:        destroy@1.0.4 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/destroy
remote:        mime@1.6.0 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/mime
remote:        ms@2.1.1 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/send/node_modules/ms
remote:        serve-static@1.14.1 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/serve-static
remote:        utils-merge@1.0.1 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/utils-merge
remote:        vary@1.1.2 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/vary
remote:        express-hbs@2.3.3 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/express-hbs
remote:        bluebird@3.7.2 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/bluebird
remote:        handlebars@4.7.6 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/handlebars
remote:        minimist@1.2.5 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/minimist
remote:        neo-async@2.6.1 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/neo-async
remote:        source-map@0.6.1 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/source-map
remote:        wordwrap@1.0.0 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/wordwrap
remote:        lodash@4.17.15 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/lodash
remote:        readdirp@3.4.0 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/readdirp
remote:        picomatch@2.2.2 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/picomatch
remote:        jsonwebtoken@8.5.1 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/jsonwebtoken
remote:        jws@3.2.2 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/jws
remote:        jwa@1.4.1 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/jwa
remote:        buffer-equal-constant-time@1.0.1 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/buffer-equal-constant-time
remote:        ecdsa-sig-formatter@1.0.11 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/ecdsa-sig-formatter
remote:        lodash.includes@4.3.0 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/lodash.includes
remote:        lodash.isboolean@3.0.3 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/lodash.isboolean
remote:        lodash.isinteger@4.0.4 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/lodash.isinteger
remote:        lodash.isnumber@3.0.3 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/lodash.isnumber
remote:        lodash.isplainobject@4.0.6 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/lodash.isplainobject
remote:        lodash.isstring@4.0.1 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/lodash.isstring
remote:        lodash.once@4.1.1 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/lodash.once
remote:        ms@2.1.2 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/jsonwebtoken/node_modules/ms
remote:        semver@5.7.1 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/semver
remote:        mysql@2.18.1 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/mysql
remote:        bignumber.js@9.0.0 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/bignumber.js
remote:        readable-stream@2.3.7 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/readable-stream
remote:        core-util-is@1.0.2 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/core-util-is
remote:        isarray@1.0.0 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/isarray
remote:        process-nextick-args@2.0.1 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/process-nextick-args
remote:        string_decoder@1.1.1 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/string_decoder
remote:        util-deprecate@1.0.2 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/util-deprecate
remote:        sqlstring@2.3.1 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/sqlstring
remote:        nodemailer@6.4.6 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/nodemailer
remote:        socket.io@1.7.4 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/socket.io
remote:        debug@2.3.3 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/socket.io/node_modules/debug
remote:        ms@0.7.2 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/socket.io/node_modules/ms
remote:        uglify-js@3.10.0 /tmp/build_61e2822a8d99e44f7b4c0ff413f5c1b8/node_modules/uglify-js
remote:        Installing any new modules (package.json)
remote:        audited 165 packages in 1.348s
remote:        
remote:        2 packages are looking for funding
remote:          run `npm fund` for details
remote:
remote:        found 9 vulnerabilities (8 low, 1 high)
remote:          run `npm audit fix` to fix them, or `npm audit` for details
remote:        
remote: -----> Build
remote:        
remote: -----> Caching build
remote:        - node_modules
remote:        
remote: -----> Pruning devDependencies
remote:        audited 165 packages in 1.327s
remote:        
remote:        2 packages are looking for funding
remote:          run `npm fund` for details
remote:
remote:        found 9 vulnerabilities (8 low, 1 high)
remote:          run `npm audit fix` to fix them, or `npm audit` for details
remote:        
remote: -----> Build succeeded!
remote: -----> Discovering process types
remote:
remote:  ~     Mis-cased procfile detected; ignoring.
remote:  ~     Rename it to Procfile to have it honored.
remote:
remote:        Procfile declares types     -> (none)
remote:        Default types for buildpack -> web
remote:
remote: -----> Compressing...
remote:        Done: 26.9M
remote: -----> Launching...
remote:        Released v3
remote:        https://tfg21.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/tfg21.git
 * [new branch]      master -> master
