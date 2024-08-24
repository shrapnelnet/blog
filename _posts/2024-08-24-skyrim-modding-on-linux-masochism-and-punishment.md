---
layout: post
title: "Skyrim modding on Linux: masochism and punishment"
date: 2024-08-24T19:24:00.000Z
permalink: skyrim-linux
description: Today I tried my hardest to get Skyrim successfully modded on linux
  and learned that, in fact, it is ridiculously stupid and hard.
image: /assets/uploads/lausse.jpeg
---
I remember modding Skyrim when I was 13. It was a mess of CTDs, missing textures and missing dependencies. Luckily, since then, cleaning mods and core ESMs has gotten easier, and LOOT has gotten much better at resolving load orders correctly.

However, there's still no good dependency management system. I loathe nexus mods for creating a gated modded system which is capped. Bandwidth isn't free, but surely there are lessons to be learned from Flatpak, deb mirrors, and any modern dependency/package management system? They of course have to protect their profit margins, but a 3MB/s cap in 2024 is absurd.

There are thankfully utilities to help with installing necessary libraries and toolsets. MO2 will refuse outright to compile natively on Linux, or at least Debian. It uses the new c++ std::format (libfmt) header which is gated behind gcc13, and I do not trust myself to fuck with the system compiler because currently I enjoy my computer booting. Not to mention that Debian 13 is on the horizon.

MO2 will work... okay on linux. There is a quick and easy package to bootstrap an install [here](https://github.com/rockerbacon/modorganizer2-linux-installer), which will make it boot using Protonv9 through the Skyrim Special Edition binary on steam. On top of this, you need a few different direct3d libraries as well as the 2019-2024 VCRedist from microsoft. Winetricks makes that a breeze so it's not so bad.

Through this, you can do usual MO installs through Nexus, although the next roadblock is ENB tooling. If you want lighting in Skyrim to not look like total shit, you have to unfortunately use free but gated software (contrib?) from the revered Boris Vorontsov. You hear polarising things about the guy, since he provides what is probably the best lighting (shaders?) or whatever the fuck an ENB is software out there. Not sure if there are any OSS alternatives out there. For sure he's a talented developer.

Problems arise when you try use enbseries on linux, AMD uses RADV as the Vulkan driver, a part of the open source Mesa venture. This somehow pops a breakpoint on loading into Skyrim, and it's a total fucking nightmare. I fixed it by using AMDVLK, the enterprise alternative that many consider inferior. It was previously enterprise only, recently open sourced [here](github.com/GPUOpen-Drivers/AMDVLK). 

Now, my interests lie in fixing textures clipping and base Skyrim looking like total shit. It's been a decade and a half! 

But remember, when breakpoints bother you, set 

`export VK_ICD_FILENAMES="/etc/vulkan/icd.d/amd_icd64.json"`[](github.com/GPUOpen-Drivers/AMDVLK)

Good luck if your journey found you here. Download bethini and turn off antialiasing while you're at it.

T
