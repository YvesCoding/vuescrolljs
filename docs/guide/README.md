# Introduction

> A scrolling plugin based on Vue.js, which has 3 modes for PC and mobile phone.

You can choose different modes by changing the configuration:

- `native` mode: Like the native scrollbar, but has ability to costumize styles of scrollbar, it is suitable for the users who use PC.
- `slide` mode: Allow you slide by finger or mouse pointer, has ability to slide out of bountry, it is suitable for the users who use mobile phone.
- `pure-native` mode: Use native scrollbar, it is suitable for PC and the users who like native scrollbar.

You can also change the styles of the scroll bar by changing the configuration, including:

- `Opacity`
- `Height/Width`
- `Position`
- `Background`
- `Keep show or not`

## Features

- Originally created virutal scrollbar + sliding scrolling for both being suitable for PC and mobile!
- Has multi modes and has ability to toggle them anytime, each modes has diffrernt features:
  - `native` mode: Like the native scrollbar, but has ability to costumize styles of scrollbar, it is suitable for the users who use PC.
  - `slide` mode: Allow you slide by finger or mouse pointer, has ability to slide out of bountry, it is suitable for the users who use mobile phone.
  - `pure-native` mode: Use native scrollbar, it is suitable for PC and the users who like native scrollbar.
- Ability to detect the size change of the content and automatically update scrollbar.
- Ability to scroll smoothly by using [different animations](http://vuescrolljs.yvescoding.org/guide/Configuration.html#scrollpanel).
- Pull-to-Refresh (Pull top out of the boundaries to start refreshing list)
- Push-to-Load (Push bottom out of the boundaries to start loading list)
- Ability to zoom in or zoom out the scroll content.
- Paging (Slide a whole page each time)
- Snapping (Slide a user-defined distance each time)
- Ability to disable scrollingX or scrollingY
- Keep Bar showing or not.
- Set bar/rail opacity or background.
- Set bar/rail's position.
- Customize the tag of content. (That is you can set the tag of content to a component tag)
