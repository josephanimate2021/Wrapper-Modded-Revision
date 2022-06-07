# Wrapper: Offline (Revision)
Wrapper: Offline (Revision) (simply called “Revision” for the rest of this page) is a fork of the Wrapper: Offline project. Unlike the original (as of writing this), Revision has the features people have been requesting for years, such as importing and starters. Everything it needs to run is still stored entirely on your computer, but this is taken less seriously. While its current use is for making content, the motive is to complete the GoAPI that was left incomplete in other public versions of Wrapper.

## Running / Installation
To start Revision on Windows, open start_wrapper.bat. It'll automate just about everything for you and, well, start Revision. On your first run, you will likely need to right-click it and click "Run as Administrator". This allows it to properly install what it needs to run. After your initial run, you shouldn't need to do that again, you can start it as normal.

If you want to import videos and characters from the original Wrapper or any other clones of it, open its folder and drag the "_SAVED" folder into Revision's "wrapper" folder. If you have already made any videos or characters, this will not work. Please only import on a new install with no saved characters or videos, or take the "_SAVED" folder in Revision out before dragging the old one in. If you want to import character IDs from the original LVM, you can paste `&original_asset_id=[ID HERE]` at the end of the link for the matching character creator.

## Updates & Support
For support, the first thing you should do is read through faq.txt, it most likely has what you want to know. If you can't find what you need, you can join the [Discord server](https://discord.gg/Kf7BzSw). Joining the server is recommended, as there is a whole community to help you out.

## Dependencies
This program relies on Flash, Node.js and http-server to work properly. SilentCMD is also used to suppress all the extra logging noise you'd only need for troubleshooting and development. These all have been included with the project (utilities folder) to ensure full offline operation and will be installed if missing. The "wrapper" folder and http-server have their own dependencies, but they are included as well.

## License
Most of this project is free/libre software[1] under the MIT license. You have the freedom to run, change, and share this as much as you want.
This includes:
  - Files in the "wrapper" folder
  - Batch files made for Wrapper: Offline/Revision
  - Node.js
  - http-server
  - SilentCMD
  - Chromium Web Store

ungoogled-chromium is under the BSD 3-Clause license, which grants similar rights, but has some differences from MIT. MediaInfo has a similar BSD 2-Clause license. 7zip's license is mostly LGPL, but some parts are under the BSD 3-clause License, and some parts have an unRAR restriction. Stylus is under the GNU GPLv3 license. These licenses can be found by looking up the program online.

Flash Player (utilities folder) and GoAnimate's original assets (server folder) are proprietary and do not grant you these rights, but if they did, this project wouldn't need to exist. Requestly, an addon included in Revision's browser, is sadly proprietary software, but you're free to remove the Chromium profile and use a fresh one if this bothers you. Requestly is primarily included because of how popular it is with our community.

While completely unnecessary, if you decide to use your freedom to change the software, it would be greatly appreciated if you sent it to me so I can implement it into the main program! With credit down here of course :)

## Credits
**Please do not contact anyone on the list for support, use the Discord server.**

Original Wrapper credits:
| Name         | Contribution         |
| ------------ | -------------------- |
| VisualPlugin | GoAnimate Wrapper    |
| xomdjl_      | Custom/Modded Assets |
| CLarramore   | Bug fixes            |
| PoleyMagik   | Asset Store Archive  |

No members of the original team are officially working on Offline, even if they have contributed. Some members of the original team have asked to not be given credit, and they have been removed.

Project Lead will have (PL) on their name and developers will have (D) on their name, to show they are officially working on Revision. Everyone else has simply contributed something at some point, or left the development team.
Wrapper: Offline credits:
| Name                          | Contribution                                           |
| ----------------------------- | -------------------------------------------------------|
| octanuary (PL)                | Wrapper: Offline (Revision)                            |
| GoTest334                     | Current W:O Project Lead                               |
| Benson (Child Groom)          | Wrapper: Offline                                       |
| NathanSaturnBOI               | W:O Logo                                               |
| Blukas/GoTube                 | Mega Comedy World 2                                    |
| VisualPlugin                  | Text to speech voices                                  |
| creepyjokes2000               | Waveform fix, improved actions                         |
| JoshAnimate                   | Headgear fix                                           |
| sparrkz (D)                   | Fixing 1.2.3 to actually work, truncated themelist     |
| KrisAnimate                   | Chromium parameter                                     |
| PoleyMagik                    | Client Modifications                                   |

These are unaffiliated people that they haven't directly done anything for the project (and probably don't even know it exists) but still deserve credit for their things. Kinda like a shoutout but in a project's readme. ***Please do not contact them about Wrapper: Offline.***
| Name               | Contribution                     |
| ------------------ | -------------------------------- |
| Vyond              | Creators of the themes we love   |
| http-party         | Creators of http-server          |
| Stephan Brenner    | Creator of SilentCMD             |
| vocatus            | Some of TronScript's batch code  |
| ss64.com           | Incredible CMD info resource     |
| robvanderwoude.com | Also amazing CMD info resource   |

## Footnotes
[1] - See <https://www.gnu.org/philosophy/free-sw.html> for a better definition of free software.

## Stock Character Workaround
to feature your stock character in your video, go to the Stock Characters tab or other tabs like GoAnimators And Eta and pick a character from there. then copy the character by clicking on the copy button. NOTE: YOU MUST SAVE YOUR VIDEO IN ORDER TO DO THIS! After that, save your character and it will take your back to the video list. Once there, go back to the lvm and then the custom characters tab and you should see your stock character that you selected there. you can use it as normal and no problems will occur.
