---
title: Raspberry Pi Torrent Box
date: 2021-05-23T21:22:44.028Z
---


# Raspberry Pi Torrent Box

This project all started from this [HowToGeek article](https://www.howtogeek.com/142044/how-to-turn-a-raspberry-pi-into-an-always-on-bittorrent-box/) on how to turn a Raspberry Pi into an always on torrent box. The advantages of torrenting using a Raspberry Pi are numerous:

* you can always leave it on without taxing your computer, having to make sure it doesn't fall asleep, or worrying about using too much electricity
* you can prevent any risk of your primary computer being infected with malware
* you can easily use your TV as a huge monitor for watching media with a Raspberry Pi (while with a normal computer [this might be more difficult)](https://www.pcworld.com/article/2924203/use-your-tv-as-a-computer-monitor-everything-you-need-to-know.html)

  Since then, I've restarted this project several times due to the pi's operating system becoming corrupted and weird issues resulting from having installed different VPN's that made it easier just to restart. Hence, I've created a collection of bash scripts that automate the process of setting the Raspberry Pi up.

  The first part of this tutorial by showing you to setup the Pi automatically using bash scripts I've created. I've included an updated explanation on how to do it manually (which is also explained in HowToGeek's original article) along with some tips I've discovered on how to avoid errors and optimize Deluge for speed.

  The second part of this tutorial discusses which VPN to use and how to install it which the original article didn't elaborate on.

  ## Part 1, Setting Up Deluge and the Deluged Daemon

  Deluge is the name of the torrenting client we're going to use. Deluged (with a "d") refers to the deluge-daemon. The deluged daemon will run on the Pi, and we'll connect to it remotely on our main computer using Deluge. This way, the Pi will do all the actual torrenting while we're still able to control it and add torrents from our main computer.

  This tutorial assumes you're using standard Raspbian on your Pi, but if you have Ubuntu or the [pure Debian installed](https://itsfoss.com/debian-raspberry-pi/), this should still work.

  ### The Quick Way

  ```

  ```

  This will automatically install deluge and the web deluge-console. The script takes in your password in order to give the deluge daemon permission to run by adding it to the /.config/deluge/auth file.

  ### The Manual Way

  1) **Install the deluged daemon** on the Pi by entering the following into the terminal.

  ```

  ```

  When you enter the deluged command, the deluged daemon should start. You won't get any output which means all is running smoothly and there are no errors.

  2) **Give the dameon permissions** necessary to function by entering.

  ```

  ```

  This shuts down the daemon and opens up the auth configuration file. Add

  ```

  ```

  to the bottom of the file. This specifies we want deluged to be able to run as "pi" and have level 10 access. Press Ctrl+X and Y to exit and save.

  3) **Allow remote connection** in order to connect to the deluged-daemon from our main computer, To do this, restart the daemon and open the console.

  ```

  ```

  Once in the console, enter

  ```

  ```

  Now restart the daemon for the changes to take effect.

  ```

  ```

  4) (optional) **Install the web interface** which allows you to connect to the daemon through your browser.

  ```

  ```

  5) Configure the daemon to start on boot. Enter

  ```

  ```

  which opens up a text editor. Add

  ```

  ```

  to the top of the file before "exit 0."

  ### Connect to the Daemon Remotely

  There's two ways to connect to the deluge daemon: through Deluge, an app that you can install on your computer, or through you browser. Both of them require the local IP address of the Pi, which can be found by entering

  ```

  ```

  into the terminal.

  To connect through Deluge, start by installing it on your primary computer. Visit the [Deluge website](https://dev.deluge-torrent.org/wiki/Download) to find the right image for you operating system. Once installed, go into Preferences>Interface and uncheck "enable" underneath "Classic mode." Then restart Deluge and click the "Connection Manager" button in the top tray of icons. Press the "Add" button which will pop up a window that asks for the hostname, username, and password for your Pi. Enter the local IP address of the pi as the hostname as well as the username "pi" and your password. A green dot should appear next to the new entry, and you should be able to select it and click connect.

  To connect through your browser, make sure the deluge-web interface is running on the Pi by entering

  ```

  ```

  If you followed my earlier instructions, it should start automatically on boot. Enter the Pi's ip address into the browser along with the port 8112 like so:

  ```

  ```

  You should we taken to the web interface and promtped to login. The default password is deluge, but you'll be prompted to change it to something more secure (which you should.) And that's all!

  *Before you start using the Raspberry Pi to download files, I recommend you setup a VPN which can explained in Part 2 of this article.*