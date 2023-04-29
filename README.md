
<h1 align="center">
  <br>
  <br>
  viene la timba
  <br>
</h1>

<!--
<h4 align="center"></h4>

<p align="center">
  <a href="https://badge.fury.io/js/electron-markdownify">
    <img src="https://badge.fury.io/js/electron-markdownify.svg"
         alt="Gitter">
  </a>
  <a href="https://gitter.im/amitmerchant1990/electron-markdownify"><img src="https://badges.gitter.im/amitmerchant1990/electron-markdownify.svg"></a>
  <a href="https://saythanks.io/to/bullredeyes@gmail.com">
      <img src="https://img.shields.io/badge/SayThanks.io-%E2%98%BC-1EAEDB.svg">
  </a>
  <a href="https://www.paypal.me/AmitMerchant">
    <img src="https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&amp;style=flat">
  </a>
</p>
-->

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#download">Download</a> •
  <a href="#credits">Credits</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p>

![screenshot](https://raw.githubusercontent.com/amitmerchant1990/electron-markdownify/master/app/img/markdownify.gif)

## Key Features

* LivePreview - Make changes, See changes
  - Instantly see what your Markdown documents look like in HTML as you create them.
* Sync Scrolling
  - While you type, LivePreview will automatically scroll to the current location you're editing.
* GitHub Flavored Markdown  
* Syntax highlighting
* [KaTeX](https://khan.github.io/KaTeX/) Support
* Dark/Light mode
* Toolbar for basic Markdown formatting
* Supports multiple cursors
* Save the Markdown preview as PDF
* Emoji support in preview :tada:
* App will keep alive in tray for quick usage
* Full screen mode
  - Write distraction free.
* Cross platform
  - Windows, macOS and Linux ready.

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/amitmerchant1990/electron-markdownify

# Go into the repository
$ cd electron-markdownify

# Install dependencies
$ npm install

# Run the app
$ npm start
```

> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.


## Download

You can [download](https://github.com/amitmerchant1990/electron-markdownify/releases/tag/v1.2.0) the latest installable version of Markdownify for Windows, macOS and Linux.

## Emailware

Markdownify is an [emailware](https://en.wiktionary.org/wiki/emailware). Meaning, if you liked using this app or it has helped you in any way, I'd like you send me an email at <bullredeyes@gmail.com> about anything you'd want to say about this software. I'd really appreciate it!

## Credits

This software uses the following open source packages:

- [Electron](http://electron.atom.io/)
- [Node.js](https://nodejs.org/)
- [Marked - a markdown parser](https://github.com/chjj/marked)
- [showdown](http://showdownjs.github.io/showdown/)
- [CodeMirror](http://codemirror.net/)
- Emojis are taken from [here](https://github.com/arvida/emoji-cheat-sheet.com)
- [highlight.js](https://highlightjs.org/)

## Related

[markdownify-web](https://github.com/amitmerchant1990/markdownify-web) - Web version of Markdownify

## Support

<a href="https://www.buymeacoffee.com/5Zn8Xh3l9" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

<p>Or</p> 

<a href="https://www.patreon.com/amitmerchant">
	<img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## You may also like...

- [Pomolectron](https://github.com/amitmerchant1990/pomolectron) - A pomodoro app
- [Correo](https://github.com/amitmerchant1990/correo) - A menubar/taskbar Gmail App for Windows and macOS

## License

MIT

---

> [amitmerchant.com](https://www.amitmerchant.com) &nbsp;&middot;&nbsp;








# [portland local business api](https://github.com/johnedisc/portland_local_businesses_api)
### Special Project #13 for [Epicodus](https://epicodus.com), 7 April 2023

#### by [John Diggins](https://github.com/john-dig), [Mike Donovan](https://github.com/eggborne), [Chris Johnedis](https://github.com/johnedisc)

_a martial arts gym student tracking api to be integrated with a gym client_

***

### install tools

first, make sure that you have the [dotnet sdk](https://dotnet.microsoft.com/en-us/download) and dotnet entity framework tool installed.

``` bash
dotnet tool install --global dotnet-ef --version 6.0.0
```

1. clone this [repository](https://github.com/John-Dig/StudentsTracker.Solution) to the directory of your choosing.
``` bash
git clone https://github.com/John-Dig/StudentsTracker.Solution
```
2. navigate to the StudentsTracker.Solution directory(folder).
``` bash
cd StudentsTracker.Solution/TrackerApi
```
3. create two new files in that directory `appsettings.json` and `appsettings.Development.json`.
``` bash
touch appsettings.json appsettings.Development.json
```
4. in appsettings, add the information below replacing database name, uid, pwd to suit your own situation.
```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Port=3306;database=NAME_OF_YOUR_CHOOSING;uid=YOUR_USER_NAME;pwd=YOUR_PASSWORD;"
  }
}
```

5. in appsettings.Development.json add the following.

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Trace",
      "Microsoft.AspNetCore": "Information",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  }
}
```

6. next set up your local database with the following dotnet entity framework command
``` bash
dotnet ef database update
```
7. you are ready to start the api server. this will start the server in production mode. if you are going to develop it further, run the following without the --launch-profile
``` bash
dotnet watch run --launch-profile "PortlandLocalShopsApi-Production"
```
8. use your favorite program to make api calls (eg, [postman](https://www.postman.com/), [curl](https://curl.se/) on the command line, or with swagger). swagger can be found at [http://localhost:5288/swagger](http://localhost:5250/swagger)

```bash
GET http://localhost:5250/api/students/
GET http://localhost:5250/api/students/{id}
POST http://localhost:5250/api/students/
PUT http://localhost:5250/api/students/{id}
DELETE http://localhost:5250/api/students/{id}
```

```bash
GET http://localhost:5250/api/promotions/
GET http://localhost:5250/api/promotions/{id}
POST http://localhost:5250/api/promotions/
PUT http://localhost:5250/api/promotions/{id}
DELETE http://localhost:5250/api/promotions/{id}
```

```bash
GET http://localhost:5250/api/coaches/
GET http://localhost:5250/api/coaches/{id}
POST http://localhost:5250/api/coaches/
PUT http://localhost:5250/api/coaches/{id}
DELETE http://localhost:5250/api/coaches/{id}
```

note: `{id}` is a variable and it should be replaced with the id number of the animal you want to GET, PUT, or DELETE.

#### for a POST request, you have to supply an entire unique object

a body is required for the post to be successful. remember to leave the idea at 0 for the database to auto-increment

here is an example from the coaches endpoint:
```json
{
    "coachId": 0,
    "firstN": "Jimmy",
    "lastN": "Carter",
    "email": "JimmyCoacher@email.com",
    "phone": "555-555-5555",
    "beltId": 124,
    "promotions": null
  }
```

#### PUT request

when making a put request, you must provide the whole object, not just the value that is changing. thus:

```json
{
    "studentId": 7,
    "firstN": "Funny",
    "lastN": "Guy",
    "email": "guy@buddy.com",
    "beltId": 114,
    "dateEnrolled": "2023-04-05T16:12:55.04",
    "promotions": null
  }
```
becomes
```json
{
    "studentId": 7,
    "firstN": "Buddy",
    "lastN": "Guy",
    "email": "guy@buddy.com",
    "beltId": 114,
    "dateEnrolled": "2023-04-05T16:12:55.04",
    "promotions": null
  }
```

## MIT license

copyright (c) [2023] team-dont-forget-to-log-out. AKA: [John Diggins and his mutable array](https://github.com/John-Dig)

permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the software, and to permit persons to whom the software is
furnished to do so, subject to the following conditions:

the above copyright notice and this permission notice shall be included in all
copies or substantial portions of the software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

