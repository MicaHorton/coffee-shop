---
contentKey: blog
title: Raspberry Pi Torrent Box
date: 2021-05-23T23:22:13.306Z
---
This is a continuation of my article on how to setup a Raspberry Pi Torrent Box. See Part 1 [here](https://micahorton.com/single/6000b25be41775fcbbce4b79).

## Part 2, Setting Up a VPN

A VPN (Virtual Private Network) is important, so your internet service provider cannot see you web traffic. (If you're unsure of what a VPN exactly does, [here's](https://youtu.be/PHqAL6zvoFE) a good video on it.) There are a lot of VPN's out there, some of which are more trustworthy than other's. When it comes to VPN recommendations, I recommend checking out [Techlore's](https://www.youtube.com/channel/UCs6KfncB4OV6Vug4o_bzijg) YouTube channel. He has lots of great videos about internet privacy including unsponsored, detailed analysis of the many different VPN's out there. Two of the top VPN he's [recommended](https://youtu.be/xEzbKNBVyZM) (as of now, the reputations of VPNs often change) are Mullvad and Proton VPN. I've tried both for this project and have will discuss the pro's and con's of both.

ProtonVPN offers a CLI (Command Line Interface) that works on the Raspberry Pi that's easy to set up and is definitely better for someone who wants something simple. It offers built-in kill switch, so you can prevent any VPN leaks without having to setup a firewall. I use a VPN for privacy my other devices (latop, phone, etc...), and I've personally found ProtonVPN to be more stable than Mullvad on my laptop and to have a nicer user interface. However, one major disadvantage of ProtonVPN is that it doesn't allow port forwarding which can significantly speed up your torrents. As a result, if you're willing to deal with more setup, I recommend Mullvad VPN instead.

Mullvad VPN has a Linux app with a GUI (Graphical User Interface), *but* you won't be able to use it because it's designed for amd64 architecture (aka. most laptops and desktop computers.) The Raspberry Pi, being a much smaller and low power computer, uses arm32 architecture. Attempting to install Mullvad VPN's Linux app on the Pi won't work. In order to use Mullvad VPN on the Pi, you'll have to get the OpenVPN configuration files and configure the VPN manually then setup a firewall to act as a kill switch (which I'll discuss how to do.) The lack of arm32 architecture support is common amongst VPN apps (especially those with GUI's), so I recommend upgrading to an amd64 mini pc (such as the [CHUWI Lark Box](https://www.amazon.com/CHUWI-LarkBox-Pro-Computer-Streaming/dp/B08KCZPQ3P/ref=sr_1_1?dchild=1&keywords=chuwi+larkbox&qid=1611698349&sr=8-1)) if you want to use a VPN with a GUI.

Note: If you don't have port forwarding setup, Deluge will complain "no incoming connections" on the bottom status bar even if everything's working. This doesn't mean Deluge is unable to connect to other people at all (else wise the file would not be able to download), but rather there's no direct incoming connections as port forwarding hasn't been set up.

### Installing ProtonVPN on Raspberry Pi

Installing ProtonVPN on the Raspberry Pi is very simple. The [instructions](https://protonvpn.com/support/linux-vpn-tool/) on their website explain it well already. There is a newer version of the CLI in beta, but it doesn't support arm32 architecture (yet), so you'll have to user the older version. Two important points to keep in mind for torrenting:

* While you want to enable the kill switch to prevent VPN leaks, I recommend using option 2, "Enable access on local network" which doesn't block your ability to SSH into the Pi.
* Be sure to use the --p2p flag when connecting. Not all ProtonVPN servers will allow torrenting, and if you don't include the flag to specify to connect to the ones that do, they might automatically disconnect you. Your account won't be suspended, but the seemingly random drops in connection might be frustrating.

### Installing MullvadVPN on Raspberry Pi

Installing Mullvad VPN on the Raspberry Pi is much more complicated. As they have no pre-built app that works with the Raspberry Pi, you'll have to use OpenVPN to install it manually.

1) First follow the instructions for Debian [here](https://mullvad.net/en/help/linux-openvpn-installation/) to install the VPN manually. As Raspbian is an offshoot of Debian, the process is the same. I recommend choosing the servers closest to use for the fastest speed.

2) The Mullvad VPN instructions use itpables to set up a firewall to act as a kill switch which strikes me as a totally overcomplicated way to do it. The instructions they give only work if you want to connect to their Swedish or Dutch servers which unless you live in Sweeden or the Netherlands, you likely don't want do.

This tutorial uses ufw (which stands for uncomplicated firewall) which acts as a wrapper around iptables and is much easier to use. This tutorial will show you how to setup a firewall to act as a kill switch regardless of which servers you want to use.

a) **First install ufw.**

```

```

b) **Deny all outgoing and incoming connections** by default

```

```

c) **Force all connections over tun0** (ie. vpn interface)

```

```

d) Look in the .conf file, to **find the VPN port. Then allow traffic from that port**, so OpenVPN can connect to the Mullvad server.

```

```

e) **Open other necessary ports.**

* Allow ssh

```

```

* Open port for DNS

```

```

* Open port for Deluge ThinClient

```

```

* Open port for Deluge web interface

```

```

f) **Setup port forwarding.**

* Log into your Mullvad VPN account, go into "manage ports and Wireguard keys." Underneath OpenVPN, press the "+" button to add a forwarded port. You'll be assigned one at random which is fine.
* Go to Deluge settings, uncheck the box that says "use random port", and set both incoming and outgoing connections to the port Mullvad VPN assigned you.
* Open the forwarded port with ufw.

```

```

* Check if everything working by opening the website [CanYouSeeMe](https://canyouseeme.org/) in a browser on the Pi. If everything's working, when you enter the port number into the website, it should say the port is open.