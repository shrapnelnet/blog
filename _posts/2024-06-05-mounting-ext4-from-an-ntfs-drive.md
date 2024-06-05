---
layout: post
title: mounting ext4 from an NTFS drive
date: 2024-06-05T21:19:00.000Z
permalink: ext4
description: tyler talks about a quick and easy solution to (almost) natively
  mount an ext4 drive on windows
image: /assets/uploads/lausse.jpeg
---
Had to whip up a quick easy solution to access my linux drive from windows to get some files across. This is what I came up with.

This is mostly ripped from [this microsoft article](https://learn.microsoft.com/en-us/windows/wsl/wsl2-mount-disk) but i figured i'd keep it here for when i inevitably have to do this again.



```
/* Mount NVME from path (GET-CimInstance -query) */
wsl --mount \\.\PHYSICALDRIVE1
wsl
/* Find the partition number (i.e sda1 = 1) */
lsblk
exit
/* Remount the drive with the correct partition */
wsl --mount \\.\PHYSICALDRIVE1 --partition 1 --type ext4
wsl
/* Find mount point within wsl (in my case, /dev/sdd2 */
df 
/* Mount drive within wsl */
sudo mkdir /mnt/debian
sudo mount -t ext4 /dev/sdd2 /mnt/debian
```

With this completed, you'll be able to natively access an ext4 partition using the WSL file explorer integration and zoom all your files across at good speeds.
