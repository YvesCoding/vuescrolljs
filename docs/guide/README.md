# Introduction

Vuescroll is a virtual scrollbar based on Vue.js which is designed for beautifying and enhancing your native scrollbar.It has different modes for different people. If you like native scrollbar, you can choose `pure-native` mode, if you like customize styles of scrollbar, you can choose `native` mode, if you like run you project in mobile, you can choose `slide` mode.

In a word, Vuescroll is not only a scrollbar, but you can use to make a carousel, time picker, a plugin that can automatically detect the size change of content and so on.
Vuescroll is a scrolling chamberlain with a simple getting-start and full configuration.

It's a plugin based on Vue.js, and its principle is to create div to wrap the contents to be scrolled, act as scroll bars, and then complete the scroll by manipulating the `scrollTop` and `scrollLeft` of div.

The purpose of the design is to beautify and enhance your scrollbar.

You can choose different modes by changing the configuration:

* `native` mode: Like the native scrollbar, but has ability to costumize styles of scrollbar, it is suitable for the users who use PC.
* `slide` mode: Allow you slide by finger or mouse pointer, has ability to slide out of bountry, it is suitable for the users who use mobile phone.
* `pure-native` mode: Use native scrollbar, it is suitable for PC and the users who like native scrollbar.

You can also change the styles of the scroll bar by changing the configuration, including:

* `Opacity`
* `Height/Width`
* `Position`
* `Background`
* `Keep show or not`

> To learn more, please visit the official website [guide page](https://wangyi7099.github.io/vuescrolljs/guide/)

> If you do not satisfy the above characteristics and want to expand the features, consider to [contribution code](#contribution).

In general, Vuescroll is more than a scrollbar, you can use it to make a carousel, a time picker, a plug-in that can automatically detect changes of content, and so on.The following is a part of the preview effect.
![](https://github.com/wangyi7099/pictureCdn/blob/master/allPic/vuescroll/p1.gif?raw=true)
![](https://github.com/wangyi7099/pictureCdn/blob/master/allPic/vuescroll/p2.gif?raw=true)
![](https://github.com/wangyi7099/pictureCdn/blob/master/allPic/vuescroll/p3.gif?raw=true)

## Features

* Originally created virutal scrollbar + sliding scrolling for both being suitable for PC and mobile!
* Has multi modes and has ability to toggle them anytime, each modes has diffrernt features:
  * `native` mode: Like the native scrollbar, but has ability to costumize styles of scrollbar, it is suitable for the users who use PC.
  * `slide` mode: Allow you slide by finger or mouse pointer, has ability to slide out of bountry, it is suitable for the users who use mobile phone.
  * `pure-native` mode: Use native scrollbar, it is suitable for PC and the users who like native scrollbar.
* Ability to detect the size change of the content and automatically update scrollbar.
* Ability to scroll smoothly by using [different animations](https://wangyi7099.github.io/vuescrolljs/guide/Configuration.html#scrollpanel).
* Pull-to-Refresh (Pull top out of the boundaries to start refreshing list)
* Push-to-Load (Push bottom out of the boundaries to start loading list)
* Ability to zoom in or zoom out the scroll content.
* Paging (Slide a whole page each time)
* Snapping (Slide a user-defined distance each time)
* Ability to disable scrollingX or scrollingY
* Keep Bar showing or not.
* Set bar/rail opacity or background.
* Set bar/rail's position.
* Customize the tag of content. (That is you can set the tag of content to a component tag)

## Comparison with other scrolling Libraries

### native scrollbar

The native scrollbar is a scrollbar of the browser's own. It has a lot of functions, such as scrolling content, clicking on scrolling tracking and jumping, dragging scrollbars, and so on. But vuescroll can say that all functions have been achieved and strengthened. For example, clicking the scrolling track can directly jump the content to the corresponding position of the track, and so on.

### iscroll, better-scroll, scroller

`iscroll` `scroller` and `better-scroll` are good scrolling libraries, but vuescroll has the following differences:

1.  focus on Vue, a virtual scroll bar tailored for Vue.

2.  has a variety of modes, suitable for different platforms.
