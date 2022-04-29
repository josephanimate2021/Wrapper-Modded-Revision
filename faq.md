<!-- markdownlint-disable MD012 MD022 MD026 MD032 -->
# Wrapper: Offline (Revision) FAQ
This file contains tons of useful information based on questions I get a lot about the project. This file's a little visually noisy, but feel free to CTRL+F and skim through the headers to find what you want.

## About Wrapper: Offline (Revision)

### What is Wrapper: Offline (Revision)?
Wrapper: Offline (Revision) (simply called “Revision” for the rest of this page) is a fork of the Wrapper: Offline project. Unlike the original (as of writing this), Revision has the features people have been requesting for years, such as importing and starters. Everything it needs to run is still stored entirely on your computer, but this is taken less seriously. While its current use is for making content, the motive is to complete the GoAPI that was left incomplete in other public versions of Wrapper.

### Where can I get updates?
You can join the Discord server here to get updates as they come out: <https://discord.gg/NeUcnmWPWj></a>
If you don’t want to use Discord, you could ask a friend who does to let you know when an update comes out, and they can send you the download link.

### Will it work forever? Even after Flash is retired?
It should, that’s the goal. Perhaps in the future when we all run 6000-bit machines implanted into our brains it won’t be compatible with that anymore, but I’m sure there’ll always be a way to run it. There is also futureproofing for Flash’s discontinuation, since Revision includes a Flash install and a version of ungoogled-chromium that supports Flash. By default, it starts from this, but you can change that in settings.bat. The included Chrome should not be used for browsing beyond using Flash content. You can also look into projects like [Lightspark](http://lightspark.github.io/) and [ruffle](https://ruffle.rs/) that are attempting to recreate Flash.

### So I could just unplug my internet and use it?
Pretty much, yes. Some features like text-to-speech voices still require an internet connection, but there’s no way to take that offline, and the TTS companies unlikely to block you unless you spam them really quickly. You can also change, add, or even remove voices by modifying files in `offline-revision/wrapper/tts`, should you wish to add a custom site or figure out a way to make them work offline too.

### How does Revision work exactly?
Well, it still uses the Node.js app the original Wrapper ran on. But, it also starts a web server on your computer (which is completely private and never connected to the actual internet) and Revision communicates with that server. Both are in their respective wrapper and server folders if you want to explore either. It also uses an older version of ungoogled-chromium that supports Flash, which you can find in the utilities folder. If you really wanted to, you could still put the server files into a proper web server, configure the Node.js app to connect to that, and run it from there.

### Wait... Chromium? I've heard something about that being a virus...
Chromium is literally Chrome. It's the libre software base Google uses to build Chrome, and then they tack proprietary parts like auto-updates and Google integration in so it's more appealing and they have more control over your experience. Ungoogled-chromium is just a version of Chromium that has any Google integration that's left in Chromium removed for privacy.
If you don't trust me, feel free to look through the code on GitHub: <https://github.com/Eloston/ungoogled-chromium>
And these VirusTotal results for it: <https://www.virustotal.com/gui/file/bab1f622f9a966baffa07838c305e586715979db884cd7369df96bb08c092f8a/detection>
And you can also see an independent report from this site that analyzes software for spyware traits: <https://spyware.neocities.org/articles/ungoogled_chromium.html>



## Using Revision

### How do I use it?
Once you've got it downloaded and extracted, all you have to do is open start_wrapper.bat and do what it says. It should install everything needed for you.

### Can I import my videos and characters from another Wrapper project, such as the original or GA4SR?
Yes... kinda. While the method is the same, there are some differences. In Revision, you have to manually change the database, which you shouldn't be touching at all. In the future I may add a better way to do this, but for now you'll have to deal with it.

### Can I import character IDs from the original LVM?
Also yes! To do that, go to the matching character creator, and paste `&original_asset_id=ID HERE` at the end of the URL.

### Can I share characters made in Offline with others?
Also also yes! Look in `offline-revision\wrapper\_SAVED`, find the matching XML file, and then send that. To save an XML character, put them in your _SAVED folder, and make the number at the end one above the highest in the folder.

### How can I start without the launcher?
This is meant for people who can't run the start_wrapper.bat file, such as Mac and GNU+Linux users.
On your first run:
1. Make sure Flash Player (<https://get.adobe.com/flashplayer/>) and Node.js (<https://nodejs.org/en/>) are installed
2. The first time you run, open a command prompt/terminal and enter "npm install http-server -g"
3. Look up how to install HTTPS certificates on your OS. Open the server folder and install the.crt.
   - If you can't figure out how to install HTTPS certs, you can go to localhost:4664 and add a security exception, but this'll need to be done on each browser you use Wrapper: Offline with.

Every time you want to start:
1. In a terminal, go to the folder named "server"  and enter http-server -p 4343 -S -C the.crt -K the.key
2. Now in a new terminal window, go to the folder named "wrapper" and enter npm start
3. Open your preferred browser and enter localhost:4343 in the address bar.

### Can I make Revision smaller?
The current size is ~1.5 GB. The base download can't be much smaller without being incomplete, but there a few steps you can take if you absolutely need more space.
#### System cleanout tips (Recommended)
1. If you're using Windows, you can run <https://old.reddit.com/r/TronScript/> overnight to clean out and potentially speed up your computer. This is a reputable script that automates many things that cleanup guides and technicians would do.
2. If you're using Linux, you can run <https://www.bleachbit.org> to clean out your computer.
3. You can use WinDirStat (QDirStat on Linux) to find the largest folders/files on your computer.
4. If there's a space hog on your computer that you use (such as a big game, or Offline itself), you can try <https://github.com/ImminentFate/CompactGUI> on Windows 10 to shrink them down. Win8 and below users can right click a folder and enable NTFS compression, but it's less effective. I don't know anything like this for Linux, but it's out there if you look.
#### Wrapper cleanout tips (Desperation)
1. If you've already installed them, you can remove the Flash and Node.js installers as well as the http-server folder from the utilities folder.
2. The `offline-revisionwrapper/_CACHE` folder contains any text-to-speech you've generated, and you can delete the files inside (NOT THE FOLDER ITSELF) if you no longer need them.
3. Windows 10 users can run <https://github.com/ImminentFate/CompactGUI> on the wrapper-offline folder.
4. If you don't plan on importing any characters made with the original Legacy Video Maker, make sure to scroll through all the stock characters to make them load, and then you can remove all zip files in `offline-revision/server/characters`.
5. If you prefer your own browser, you can configure settings.bat to use that and remove ungoogled-chromium from the utilities folder.



## Wrapper isn't working!

### The launcher is crashing!
There's likely not much way to solve this on your own. You should turn on VERBOSEWRAPPER in settings.bat, open a command prompt window, drag start_wrapper.bat onto it, and run it. Then, when it crashes, take a screenshot and post it in our Discord server. If you're tech savvy enough to understand whatever error pops up, feel free to elaborate.

### The editor/character creator won't load!
The cause of this is usually an error with http-server, the software Offline uses to host the asset files. To see its output, turn on VERBOSEWRAPPER in settings.bat. If there's an error, then you might just have to ask for support in the Discord. If there's no error however, you might simply have to make your browser trust the HTTPS certificate. Normally this is automatically fixed by the launcher, but it may have broken, and Firefox users simply have to deal with this sadly. Because, as a Firefox user, Firefox has to be **special**. This is not a concern beyond annoyance, as you're just connecting to yourself and nobody else can connect. But if you see a notice like this on a real website, *that* is a cause for concern and you should avoid the website. To fix this, you can visit <https://localhost:4343> or open the server page with the launcher, and add a security exception.



## A feature isn't here/working!

### Business Friendly and Whiteboard are missing!
I go into this in more detail in the legalese section, but basically Vyond is still using them so I won't include them in Offline.

### Some TTS voices won't generate!
Some of them will never generate if your message is too long, as the current limit gives too much room and can go over what the voice services allow. If you're generating a short message and some voices still don't work, it may be possible that you've been rate-limited or a service has gone down. If all voices are not working, please check your internet connection.



## Can I use Revision on...

### macOS or GNU+Linux?
Yes, you can. See "How can I start without the launcher?" for instructions. However, this is likely to be much more tedious and annoying, and is currently untested. Linux support is currently planned and I fully intend on helping Linux users where possible, but Mac support is less likely and I have absolutely no experience with the operating system beyond similarities to Linux. Worth noting: if you're running 32-bit Linux, you will not be able to install Node.js. An older version that supports 32-bit *may* work, but this is untested.

### Any web browser?
As long as it allows you to run Flash, yes. You can change some options in settings.bat to change what browser it launches Revision in, by default it launches with an included browser that supports Flash.

### ChromeOS?
ChromeOS is very heavily locked down, and supporting it would likely be troublesome to make, especially since Linux support would need to be made first. It might end up no longer working by the end of 2020 anyway, since Flash will be discontinued and there may not be a way to install it on ChromeOS past that point. Feel free to try it yourself though.

### iOS or Android?
No. Not unless you use some remote desktop trickery with a regular computer. This will never happen, Flash does not run on iOS at all, and the few Android versions out there are extremely old and barely work.

### Windows Phone?
go back to 2013
‎


## Legalese things I guess

### Can I copy/modify Revision?
Absolutely! I'm a huge libre software advocate, and if you want to change something or make your own version or whatever, please feel free! Just about everything in Offline is under the MIT license, except for the original GoAnimate code (obviously) and ungoogled-chromium (which is under the BSD 3-Clause license). If you do make changes, let me know and I'd be glad to look into putting them in official releases :)
‎
### Why was the original Wrapper shut down?
The original Wrapper had the flaw of being hosted on a website. Without that website, it can't function. And because Vyond didn't want it to be there, they requested that it's taken down. Despite what people say about CyanAnimate or whoever causing it, the developer of Wrapper, VisualPlugin, actually contacted Vyond directly asking if it was okay right after release. Offline has fixed this flaw, and the only way to get rid of it is to raid the homes of everyone who has a copy and burn their hard drive. In case it isn't obvious, that won't happen. The torrent download is meant to make it harder to take down as well.

### Why is Business Friendly still missing?
just didn't add them yet