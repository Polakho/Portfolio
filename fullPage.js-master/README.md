# fullPage.js
![preview](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/intro.png)
![compatibility](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/compatible.gif?v=2)

<p align="center">
  <span>English</span> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish#fullpagejs">Español</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#fullpagejs">Français</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian#fullpagejs">Pусский</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese#fullpagejs">中文</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#fullpagejs">한국어</a>
</p>

<p align="center">
	Available for <a href="https://github.com/alvarotrigo/vue-fullpage.js">Vue</a>, <a href="https://github.com/alvarotrigo/react-fullpage">React</a> and <a href="https://github.com/alvarotrigo/angular-fullpage">Angular</a>.
</p>

---

![fullPage.js version](http://img.shields.io/badge/fullPage.js-v3.1.2-brightgreen.svg)
[![License](https://img.shields.io/badge/License-GPL-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.html)
[![PayPal Donate](https://img.shields.io/badge/donate-PayPal.me-ff69b4.svg)](https://www.paypal.me/alvarotrigo/9.95)
[![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/fullpage.js/badge?style=rounded)](https://www.jsdelivr.com/package/npm/fullpage.js)
&nbsp;&nbsp; **|**&nbsp;&nbsp; *7Kb gziped* &nbsp;&nbsp;**|**&nbsp;&nbsp; *Created by [@imac2](https://twitter.com/imac2)*

- [Demo online](http://alvarotrigo.com/fullPage/) | [Codepen](https://codepen.io/alvarotrigo/pen/NxyPPp)
- [Wordpress plugin for Gutenberg](https://alvarotrigo.com/fullPage/wordpress-plugin-gutenberg/) and [WordPress plugin for Elementor](https://alvarotrigo.com/fullPage/wordpress-plugin-elementor/)
- [Wordpress theme](http://alvarotrigo.com/fullPage/utils/wordpress.html)
- [fullpage.js Extensions](http://alvarotrigo.com/fullPage/extensions/)
- [Frequently Answered Questions](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions)

---

A simple and easy to use library that creates fullscreen scrolling websites (also known as single page websites or onepage sites) and adds landscape sliders inside the sections of the site.

- [Introduction](https://github.com/alvarotrigo/fullPage.js#introduction)
- [Compatibility](https://github.com/alvarotrigo/fullPage.js#compatibility)
- [License](https://github.com/alvarotrigo/fullPage.js#license)
- [Usage](https://github.com/alvarotrigo/fullPage.js#usage)
  - [Creating links to sections or slides](https://github.com/alvarotrigo/fullPage.js#creating-links-to-sections-or-slides)
  - [Creating smaller or bigger sections](https://github.com/alvarotrigo/fullPage.js#creating-smaller-or-bigger-sections)
  - [State classes added by fullpage.js](https://github.com/alvarotrigo/fullPage.js#state-classes-added-by-fullpagejs)
  - [Lazy loading](https://github.com/alvarotrigo/fullPage.js#lazy-loading)
  - [Auto play/pause embedded media](https://github.com/alvarotrigo/fullPage.js#auto-playpause-embedded-media)
  - [Use extensions](https://github.com/alvarotrigo/fullPage.js#use-extensions)
- [Options](https://github.com/alvarotrigo/fullPage.js#options)
- [Methods](https://github.com/alvarotrigo/fullPage.js#methods)
- [Callbacks](https://github.com/alvarotrigo/fullPage.js#callbacks)
- [Reporting issues](https://github.com/alvarotrigo/fullPage.js#reporting-issues)
- [Contributing to fullpage.js](https://github.com/alvarotrigo/fullPage.js#contributing-to-fullpagejs)
- [Changelog](https://github.com/alvarotrigo/fullPage.js#changelog)
- [Build tasks](https://github.com/alvarotrigo/fullPage.js#build-tasks)
- [Resources](https://github.com/alvarotrigo/fullPage.js#resources)
- [Who is using fullpage.js](https://github.com/alvarotrigo/fullPage.js#who-is-using-fullpagejs)
- [Donations](https://github.com/alvarotrigo/fullPage.js#donations)
- [Sponsors](https://github.com/alvarotrigo/fullPage.js#sponsors)

## Introduction
Suggestion are more than welcome, not only for feature requests but also for coding style improvements.
Let's make this a great library to make people's lives easier!

## Compatibility
fullPage.js is fully functional on all modern browsers, as well as some old ones such as Internet Explorer 9, Opera 12, etc.
It works with browsers with CSS3 support and with the ones which don't have it, making it ideal for old browsers compatibility.
It also provides touch support for mobile phones, tablets and touch screen computers.

Special thanks to [Browserstack](http://www.browserstack.com/) for supporting fullpage.js.

## License

### Commercial license
If you want to use fullPage to develop non open sourced sites, themes, projects, and applications, the Commercial license is the appropriate license. With this option, your source code is kept proprietary. Which means, you won't have to change your whole application source code to an open source license. [[Purchase a Fullpage Commercial License]](https://alvarotrigo.com/fullPage/pricing/)

### Open source license
If you are creating an open source application under a license compatible with the [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html), you may use fullPage under the terms of the GPLv3.

**The credit comments in the JavaScript and CSS files should be kept intact** (even after combination or minification)

[Read more about fullPage's license](https://alvarotrigo.com/fullPage/pricing/).

## Usage
As you can see in the example files, you will need to include:
 - The JavaScript file `fullpage.js` (or its minified version `fullpage.min.js`)
 - The css file `fullpage.css`

 **Optionally**, when using `css3:false`, you can add the [easings file](https://github.com/alvarotrigo/fullPage.js/tree/master/vendors/easings.min.js) in case you want to use other easing effects apart from the one included in the library (`easeInOutCubic`).

### Install using bower or npm
**Optionally**, you can install fullPage.js with bower or npm if you prefer:

Terminal:
```shell
// With bower
bower install fullpage.js

// With npm
npm install fullpage.js
```

### Including files:
```html
<link rel="stylesheet" type="text/css" href="fullpage.css" />

<!-- This following line is optional. Only necessary if you use the option css3:false and you want to use other easing effects rather than "easeInOutCubic". -->
<script src="vendors/easings.min.js"></script>


<!-- This following line is only necessary in the case of using the option `scrollOverflow:true` -->
<script type="text/javascript" src="vendors/scrolloverflow.min.js"></script>

<script type="text/javascript" src="fullpage.js"></script>
```

Using Webpack, Browserify or Require.js? Check <a href="https://github.com/alvarotrigo/fullPage.js/wiki/Use-module-loaders-for-fullPage.js">how to use fullPage.js with module loaders</a>.

### Optional use of CDN
If you prefer to use a CDN to load the needed files, fullPage.js is in CDNJS:
https://cdnjs.com/libraries/fullPage.js

### Required HTML structure
Start your HTML document with the compulsory [HTML DOCTYPE declaration](http://www.corelangs.com/html/introduction/doctype.html) on the 1st line of your HTML code. You might have troubles with sections heights otherwise. The examples provided use HTML 5 doctype `<!DOCTYPE html>`.

Each section will be defined with an element containing the `section` class.
The active section by default will be the first section, which is taken as the home page.

Sections should be placed inside a wrapper (`<div id="fullpage">` in this case). The wrapper can not be the `body` element.
```html
<div id="fullpage">
	<div class="section">Some section</div>
	<div class="section">Some section</div>
	<div class="section">Some section</div>
	<div class="section">Some section</div>
</div>
```
If you want to define a different starting point rather than the first section or the first slide of a section, just add the class `active` to the section and slide you want to load first.
```html
<div class="section active">Some section</div>
```

In order to create a landscape slider within a section, each slide will be defined by default with an element containing the `slide` class:
```html
<div class="section">
	<div class="slide"> Slide 1 </div>
	<div class="slide"> Slide 2 </div>
	<div class="slide"> Slide 3 </div>
	<div class="slide"> Slide 4 </div>
</div>
````
You can see a fully working example of the HTML structure in the [`simple.html` file](https://github.com/alvarotrigo/fullPage.js/blob/master/examples/simple.html).

### Initialization

#### Initialization with Vanilla Javascript
All you need to do is call fullPage.js before the closing `</body>` tag.

```javascript
new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true
});

//methods
fullpage_api.setAllowScrolling(false);
```

#### Initialization with jQuery
You can use fullpage.js as a jQuery plugin if you want to!

```javascript
$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(false);
});
```

Functions and methods can still be called in the jQuery way, as [in fullPage.js v2.X](https://github.com/alvarotrigo/fullPage.js/tree/2.9.7).

#### Vanilla JS example with all options
A more complex initialization with all options set could look like this:
```javascript

var myFullpage = new fullpage('#fullpage', {
	//Navigation
	menu: '#menu',
	lockAnchors: false,
	anchors:['firstPage', 'secondPage'],
	navigation: false,
	navigationPosition: 'right',
	navigationTooltips: ['firstSlide', 'secondSlide'],
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

	//Scrolling
	css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	normalScrollElements: '#element1, .element2',
	scrollOverflow: false,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 15,
	bigSectionsDestination: null,

	//Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Design
	controlArrows: true,
	verticalCentered: true,
	sectionsColor : ['#ccc', '#fff'],
	paddingTop: '3em',
	paddingBottom: '10px',
	fixedElements: '#header, .footer',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
	dropEffect: false,
	dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999},
	waterEffect: false,
	waterEffectOptions: { animateContent: true, animateOnMouseMove: true},
	cards: false,
	cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

	//Custom selectors
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,

	//events
	onLeave: function(origin, destination, direction){},
	afterLoad: function(origin, destination, direction){},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterReBuild: function(){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction){},
	onSlideLeave: function(section, origin, destination, direction){}
});
```

### Creating links to sections or slides
If you are using fullPage.js with anchor links for the sections (using the `anchors` option or the attribute `data-anchor` in each section), then you will be able to use anchor links also to navigate directly to a certain slide inside a section.

This would be an example of a link with an anchor: http://alvarotrigo.com/fullPage/#secondPage/2 (which is the URL you will see once you access to that section/slide manually)
Notice the last part of the URL ends in `#secondPage/2`.

Having the following initialization:

```javascript
new fullpage('#fullpage', {
	anchors:['firstPage', 'secondPage', 'thirdPage']
});
```

The anchor at the end of the URL `#secondPage/2` defines the section and slide of destination respectively. In the previous URL, the section of destination will be the one defined with the anchor `secondPage` and the slide will be the 2nd slide, as we are using the index `2` for it. (the fist slide of a section has index 0, as technically it is a section).

We could have used a custom anchor for the slide instead of its index if we would have used the attribute `data-anchor` on the HTML markup like so:

```html
<div class="section">
	<div class="slide" data-anchor="slide1"> Slide 1 </div>
	<div class="slide" data-anchor="slide2"> Slide 2 </div>
	<div class="slide" data-anchor="slide3"> Slide 3 </div>
	<div class="slide" data-anchor="slide4"> Slide 4 </div>
</div>
```
In this last case, the URL we would use would be `#secondPage/slide3`, which is the equivalent to our previous `#secondPage/2`.

Note that section anchors can also be defined in the same way, by using the `data-anchor` attribute, if no `anchors` array is provided.

**Be careful!** `data-anchor` tags can not have the same value as any ID element on the site (or NAME element for IE).

### Creating smaller or bigger sections
[Demo](http://codepen.io/alvarotrigo/pen/BKjRYm) fullPage.js provides a way to remove the full height restriction from its sections and slides. It is possible to create sections which height is smaller or bigger than the viewport. This is ideal for footers.
It is important to realise that it doesn't make sense to have all of your sections using this feature. If there is more than one section in the initial load of the site, fullPage.js won't scroll at all to see the next one as it will be already in the viewport.

To create smaller sections just use the class `fp-auto-height` in the section you want to apply it. It will then take the height defined by your section/slide content.

```html
<div class="section">Whole viewport</div>
<div class="section fp-auto-height">Auto height</div>
```

#### Responsive auto height sections
[Demo](https://codepen.io/alvarotrigo/pen/MzByMa) A responsive auto height can be applied by using the class `fp-auto-height-responsive`. This way sections will be fullscreen until the responsive mode gets fired. Then they'll take the size required by their content, which could be bigger or smaller than the viewport.

### State classes added by fullpage.js
Fullpage.js adds multiple classes in different elements to keep a record of the status of the site:

- `active` is added the current visible section and slide.
- `active` is added to the current menu element (if using the `menu` option).
- A class of the form `fp-viewing-SECTION-SLIDE` is added to the `body` element of the site. (eg: [`fp-viewing-secondPage-0`](http://alvarotrigo.com/fullPage/#secondPage)) The `SECTION` and `SLIDE` parts will be the anchors (or indexes if no anchor is provided) of the current section and slide.
- `fp-responsive` is added to the `body` element when the entering in the responsive mode
- `fp-enabled` is added to the `html` element when fullpage.js is enabled. (and removed when destroyed).
- `fp-destroyed` is added to the fullpage.js container when fullPage.js is destroyed.

### Lazy Loading
[Demo](http://codepen.io/alvarotrigo/pen/eNLBXo) fullPage.js provides a way to lazy load images, videos and audio elements so they won't slow down the loading of your site or unnecessarily waste data transfer.
When using lazy loading, all these elements will only get loaded when entering in the viewport.
To enable lazy loading all you need to do is change your `src` attribute to `data-src` as shown below:

```html
<img data-src="image.png">
<video>
	<sourc