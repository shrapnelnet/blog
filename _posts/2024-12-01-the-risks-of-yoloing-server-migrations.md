---
layout: post
title: the risks of YOLOing server migrations
date: 2024-12-01T19:24:00.000Z
permalink: server-migration
description: i discuss the reasons why trying to quickly migrate your server is
  indeed an awful idea
image: /assets/uploads/lausse.jpeg
---
In an attempt to save money, I wanted to downgrade my server resources with my provider.

Downgrading was not available due to hard disk size

fuck

Fine, make a snapshot and reinit with it.

Downgrading not available

FUCK

Luckily with an hour, sftp, and my failing memory, I copied over all my certs, and all the stuff that wasn't synchronized with git.

Delete server, buy smaller one, copy shit over. bosh. or so i thought

Here were the issues with the server migration:

1. I had a private wiki up which we used as a friend thing for software we make in university. all gone. fuck!
2. mailcow dockerized had the default password and login open to the internet for 20 minutes. double fuck
3. my custom systemd modules were all pointed to specific versions of node, and failed one by one, including the one that handles new articles being posted here. i dont even know if this will post without me manually triggering a git pull
4. mailcow dockerized also eats up 2 gig, or 3 with clam installed. luckily my MAU is at like 200. bad implications for the bloated piece of shit java comic reader which loves to escape the confines of -Xmx because something something JRE does what it wants. all i got is 4 gigs!
5. I didn't copy over my custom mailcow conf and all the ports were borked for a while

Some successes occurred. Mailcow synced over my mailboxes (surprisingly), using sftp is fun because it looks like le haxor in movie and i also had an excuse to use tmux which is always a good thing. one of the windows was btop. btop is cool.

I hope you enjoy the new, slower experience. send me money i have no money

tyler ;)
