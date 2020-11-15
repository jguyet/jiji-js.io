## Getting Started

#### A micro-framework, sample architecture for writing any small applications.

### Architecture

Jiji-js is a framework and a library whose objective is to offer the developer a simple solution that contains the bare essentials.

No unnecessary features.

The architecture of a Jiji-js application is based on certain fundamental concepts. The basic elements of the Jiji-js framework are controllers organized in an Index. Indexes bring together the controllers of a single feature block. An application always has at least one root index that allows seeding, and usually has many more feature paths.

- Controllers define views, which are collections of views. Jiji-js can detect changes depending on the logic and data of your controller and modify the displays.
- Controllers are unique you have only one controller per page.
- A page therefore necessarily corresponds to a single controller.


### Create the sample project

#### Pre Required

The first require is nodejs for compiling your projects [NodeJs](http://nodejs.org/).

The second require is our Line command utility for install execute the next command line to your shell

````shell
npm install -g jiji-cli
````

#### Creating

Now you are ready for create your first sample projet with Jiji-js
In your favorite folder execute the next command line for starting the creation

````shell
ji new
````

````shell
$ ji new 
Which project name? $> jiji-start
[1] Browser
[2] Mobile
[0] CANCEL
Which platform? [1, 2, 0]: 1
CREATE jiji-start/jiconfig.json (440 bytes)
CREATE jiji-start/package.json (3992 bytes)
CREATE jiji-start/README.md (152 bytes)
CREATE jiji-start/src/favicon.ico (34288 bytes)
CREATE jiji-start/src/home/home.controller.js (4104 bytes)
CREATE jiji-start/src/home/home.html.js (20576 bytes)
CREATE jiji-start/src/index.html (25472 bytes)
CREATE jiji-start/src/index.js (2096 bytes)
CREATE jiji-start/src/public/icon/codersrank.svg (6080 bytes)
CREATE jiji-start/src/public/icon/github.svg (6784 bytes)
CREATE jiji-start/src/public/icon/instacart.svg (4840 bytes)
CREATE jiji-start/src/public/jiji-js.png (460656 bytes)
CREATE jiji-start/src/public/logo.png (4728 bytes)
CREATE jiji-start/src/style.css (159744 bytes)
✔ Packages installed successfully.
✔ Successfully initialized.
````

Choise your project name and your application platforme type. (Browser or mobile)

After your choises the sample application are created in folder of same project name.

#### Start Developpement project

Go to the folder and execute the next command for start developpement server.

````shell
ji debug --open
````

````shell
$ ji debug
Start build before starting debug server
----------------------------------------
App listening at http://localhost:8080
````

Now go to http://localhost:8080

![](https://github.com/jguyet/jiji-start/raw/master/src/public/jiji-js.png)
