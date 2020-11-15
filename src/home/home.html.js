module.exports = /* html */`
<div class="app-container home-container" style="min-height: calc(100vh - 105px);">
  <header class="w3-container w3-center" style="padding:100px 16px">
    <div class="w3-margin logo-family logo-home" style="font-size: 10em">
      Jiji<font style="font-family: 'Lato', sans-serif;">.</font>js
    </div>
    <p class="w3-xlarge" style="color: white;">You have find the little Javascript framework that does just enough</p>
    <div style="background-color: #545454;color: white;width: 25%;margin: auto;height: 40px;border-radius: 50px;margin-top: 1em;">
      <div style="line-height: 40px;">{{ this.command }}</div>
    </div>
  </header>
  <div style="position: relative;">
  <header class="w3-container w3-center">
    <div>
      <a link href="/docs/getting-started" class="w3-button w3-black w3-padding-large w3-large w3-margin-top w3-button-icon w3-transparent"><i class="icon icon-instacart"></i>Get Started</a>
      <a link href="/docs"  class="w3-button w3-black w3-padding-large w3-large w3-margin-top w3-button-icon w3-transparent"><i class="icon icon-codersrank"></i>CLI documentation</a>
      <a target="_blank" href="https://github.com/jguyet/jiji-js" class="w3-button w3-black w3-padding-large w3-large w3-margin-top w3-button-icon w3-transparent"><i class="icon icon-github"></i>Github repository</a>
    </div>
    <div style="color:white">
    A few suggest for your application?
    </div>
    <div>
      <a click="this.command = '$ ji new'" class="w3-button w3-blue w3-padding-large w3-large w3-margin-top">New Application</a>
      <a click="this.command = '$ ji debug'" class="w3-button w3-blue w3-padding-large w3-large w3-margin-top">Debug</a>
      <a click="this.command = '$ ji build'" class="w3-button w3-blue w3-padding-large w3-large w3-margin-top">Build</a>
      <a click="this.command = '$ ji generate controller abc'" class="w3-button w3-blue w3-padding-large w3-large w3-margin-top">New Controller</a>
      <a click="this.command = '$ ji generate index abc'" class="w3-button w3-blue w3-padding-large w3-large w3-margin-top">New Index</a>
      <a click="this.command = 'Jiji.DetectChange.interval = 200;'" class="w3-button w3-blue w3-padding-large w3-large w3-margin-top">DetectChange Interval</a>
      <a external-link="_blank" href="https://simpleicons.org" class="w3-button w3-blue w3-padding-large w3-large w3-margin-top">Simple Icons</a>
    </div>
  </header>
</div>
`;