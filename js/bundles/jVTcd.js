var pageComponent=webpackJsonppageComponent([7],{322:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=o(1),s=n(a),c=o(2),u=n(c);o(4),o(5),o(6),o(7),o(8),o(9),o(10),o(11),o(12),o(13),o(14),o(15);var p=o(323),d=n(p),f=function(e){function t(){return l(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),t}(s.default);u.default.register(f,d.default),t.default=f},323:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.jVTcd=void 0;var a,s=o(1),c=n(s),u=o(2),p=n(u);goog.loadModule(function(e){function t(e,t,n){var a=function(){l("h2");var t=e.page.title;"function"==typeof t?t():null!=t&&r(t),i("h2"),l("p"),r("Now that we have Liferay setup and configured, we can start compiling the "),l("em"),r("source"),i("em"),r(" code to get Liferay running."),i("p"),l("h3"),r("Getting an application server"),i("h3"),l("p"),r("If we want to use Liferay's default setup, we need to get Apache Tomcat on our machine."),i("p"),l("ol"),l("li"),r("Open a "),l("em"),r("Terminal/Git Bash"),i("em"),r(" window."),i("li"),l("li"),r("Navigate to the cloned Liferay "),l("em"),r("source"),i("em"),r(" code folder."),i("li"),l("li"),r("Run the command below to download Apache Tomcat."),s({code:"ant -f build-dist.xml unzip-tomcat",mode:"shell"},null,n),l("ul"),l("li"),r("This command tells ant to look in the "),l("code"),r("build-dist.xml"),i("code"),r(" file and execute the "),l("strong"),r("unzip-tomcat"),i("strong"),r(" command."),i("li"),l("li"),r("Ant will delete preexisting folder names matching the application server directory defined in the "),l("code"),r("app.server._USER\\_NAME_.properties"),i("code"),r(" file."),i("li"),l("li"),r("Ant will download the version of Apache Tomcat defined in the "),l("code"),r("app.server._USER\\_NAME_.properties"),i("code"),r(" file."),i("li"),l("li"),r("Ant will install Apache Tomcat to the folder specified in the "),l("code"),r("app.server._USER\\_NAME_.properties"),i("code"),r(" file"),i("li"),i("ul"),i("li"),l("li"),r("If this Ant task is successful, you will see a similar output as below."),s({code:"Buildfile: PATH/liferay-portal/build-dist.xml\n...\nBUILD SUCCESSFUL\nTotal time: NNN seconds",mode:"shell"},null,n),i("li"),i("ol"),l("h3"),r("Compiling the source code"),i("h3"),l("p"),r("Now that everything is setup, we can compile Liferay's "),l("em"),r("source"),i("em"),r(" code."),i("p"),l("ol"),l("li"),l("p"),r("Open a "),l("em"),r("Terminal/Git Bash"),i("em"),r(" window."),i("p"),i("li"),l("li"),l("p"),r("Navigate to the cloned Liferay' "),l("em"),r("source"),i("em"),r(" code folder."),i("p"),i("li"),l("li"),l("p"),r("Run the following command to setup Liferay."),i("p"),s({code:"ant setup-sdk",mode:"shell"},null,n),i("li"),l("li"),l("p"),r("If this Ant task is successful, you will see a similar output as below."),i("p"),s({code:"Buildfile: PATH/liferay-portal/build.xml\n...\nBUILD SUCCESSFUL\nTotal time: NNN minutes NNN seconds",mode:"shell"},null,n),i("li"),l("li"),l("p"),r("Compile Liferay's "),l("em"),r("source"),i("em"),r(" code by running the following command."),i("p"),s({code:"ant all",mode:"shell"},null,n),i("li"),l("li"),l("p"),r("If this Ant task is successful, you will see a similar output as below."),i("p"),s({code:"Buildfile: PATH/liferay-portal/build.xml\n...\nBUILD SUCCESSFUL\nTotal time: NNN minutes NNN seconds",mode:"shell"},null,n),i("li"),l("li"),l("p"),r("Navigate to the "),l("code"),r("bin"),i("code"),r(" folder in the Apache Tomcat application server folder. (e.g. "),l("code"),r("liferay-portal/tomcat-8.0.32/bin"),i("code"),r(")."),i("p"),i("li"),l("li"),l("p"),r("Start Apache Tomcat by running the following command."),l("strong"),r("OS X/Linux"),i("strong"),i("p"),s({code:"./catalina.sh run",mode:"shell"},null,n),l("p"),l("strong"),r("Windows"),i("strong"),i("p"),s({code:"catalina.bat run",mode:"shell"},null,n),l("p"),r("We use catalina instead of the startup executables so that we can conveniently see the console and any errors that it may throw."),i("p"),i("li"),l("li"),l("p"),r("Open a web browser and go to  "),l("em"),r("http://localhost:8080"),i("em"),r("."),i("p"),i("li"),l("li"),l("p"),r("Login to Liferay using the following credentials."),l("strong"),r("Username"),i("strong"),i("p"),s({code:"test@liferay.com",mode:"shell"},null,n),l("p"),l("strong"),r("Password"),i("strong"),i("p"),s({code:"test",mode:"shell"},null,n),i("li"),l("li"),l("p"),r("To stop the server, go to the "),l("em"),r("Terminal/Git Bash"),i("em"),r(" window and hit "),l("code"),r("CTRL + c"),i("code"),r("."),i("p"),i("li"),i("ol"),l("input",null,null,"type","hidden","value",e.page.title);i("input"),l("input",null,null,"type","hidden","value",e.site.title),i("input")};c(o.$$assignDefaults({content:a},e),null,n)}goog.module("jVTcd.incrementaldom");var o=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var n=goog.require("incrementaldom"),l=n.elementOpen,i=n.elementClose,r=(n.elementVoid,n.elementOpenStart,n.elementOpenEnd,n.text),s=(n.attr,p.default.getTemplate("ElectricCode.incrementaldom","render")),c=p.default.getTemplate("tutorial.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="jVTcd.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=a=e,e});var d=function(e){function t(){return l(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),t}(c.default);p.default.register(d,a),t.jVTcd=d,t.templates=a,t.default=a}},[322]);