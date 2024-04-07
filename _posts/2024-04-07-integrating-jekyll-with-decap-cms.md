---
layout: post
title: Integrating Jekyll with Decap CMS
date: 2024-04-07T20:36:00.000Z
permalink: jekyll
---
## Introduction

Yesterday, I rewrote my blog to use [Jekyll](https://jekyllrb.com/). I was previously using a backwards stupid method to fetch new posts on each page load from the server filesystem. If this content changed often it may have been a viable strategy but the posts are static and logically should be in the index itself.

## Jekyll

I rewrote the blog in Jekyll, a tool based on ruby. It reads all the markdown files in a directory, and can conditionally render these in a [liquid](https://liquidjs.com/tutorials/intro-to-liquid.html) template. I remember my initial experiences with a similar language, jinja, in python. Initially I DESPISED jinja. The syntax felt overly verbose, and I didn't enjoy writing it. However, after actually reading the documentation, liquid has been a joy to write in.

Jekyll has a large ecosystem of premade themes available for a quick portfolio job or the graphic design hater amongst us. As well as this, it also features plugins, such as automatic RSS and sitemap generators. I think you should give serious consideration to migrating away from other SSGs.

## Automatic page updates

I recently included [Decap CMS](https://decapcms.org/docs/intro/) as a post editor and creator. I prefer it to writing directly in my code editor, and it authenticates directly with github so I don't have to handle authentication. However, Decap doesn't directly modify the filesystem on the server, and after doing some research, found a tool that some sysadmins may not be using!

### But what might this be tyler, you beautiful man?

[Github webhooks](https://docs.github.com/en/webhooks/about-webhooks) automatically make a POST request to my backend on each repository push. After this, I run an express.js server that recieves the POST, proxied over nginx. Through this, I pull on the repository, execute jekyll build and reload the nginx config to make it flush its cache.

All in all, I find this to be an excellent workflow, and one that may work for any sysadmins working with clients that are not to be trusted with a code editor and don't know what a darn geethub is.

## But I hate managed services! I hate you!

That's okay too! Decap, while previously a netlify offering, allows for external oauth implementations for self hosted services like gitlab, as well as [github](https://github.com/vencax/netlify-cms-github-oauth-provider). The entire stack is self hosted on my server, and if I wished to, the repo could also be hosted on gitea or gitlab, meaning the entire stack would be managed by me. Think Linus would be proud?

## Conclusion

This was just a short writeup. Now that writing articles will be easier than ever, I hope to upload more frequently in the coming months. Now get off your ass and make some shit. 

Tyler

p.p.s.
it did not work immediately, don't fuck around with sudoers permissions while running `bundle install`! it'll bite you in the ass.
