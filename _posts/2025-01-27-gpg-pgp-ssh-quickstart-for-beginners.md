---
layout: post
title: GPG/PGP/SSH quickstart for beginners
date: 2025-01-27T17:26:00.000Z
permalink: gpg-quickstart
description: I cover the steps you need to get started with GPG, as well as
  creating an SSH key and other cool shit. Using this, you can send encrypted
  emails to your friends, create your own encrypted chat platforms and securely
  log in to your remote servers.
image: /assets/uploads/lausse.jpeg
---
Pubkeys used to terrify me.  Here's the starter guide that I wished I had before creating a server of my own.

### Must do's and must don'ts

Never share your private key with anybody other than yourself. If you need it to be accessible on multiple devices, password protect your key (you will get a prompt to do this automatically), and transfer it over a secure connection, or preferably off of the network (usb stick, ext hdd). If someone else needs to access your server, they can make their own key, and you can add it to your config later.

Share your public key on the internet. Keep a link to your public key on your website, as well as on [keys.openpgp.org](https://keys.openpgp.org). Otherwise people won't be able to encrypt their messages to you!

If you're going to keep password authentication on, make sure it's a good damn password. Use a free and open source audited password manager. I use proton pass. It is not free and open source. I wonder what [Richard](https://rms.sexy) would think....

### Desirable, but not mandatory

Make sure your SSH configuration is bulletproof. There are some options that you should absolutely set in your sshd_config, which is located at /etc/ssh/sshd_config. Also see `man sshd_config`.

`Port 1234`

Run your SSH server on a different port than default (22). Automated brute-force bots scour the internet on port 22 to find weakly secured servers. This is less feasible on servers that have many services that all use port 22 as default. Pick a number that you like. 1337 is a crowd favourite.

NOTE: this isn't a valid security technique. This just moves the attack surface. From my experience, I have had 0 automated attack attempts since moving it, but if someone REALLY wants to try your SSH server they will do a portscan and find it. 

`PubkeyAuthentication yes`

This enables authenticating with a public key, which is what this guide is all about.

`PermitRootLogin no`

You should spend as little time as root as possible. Services should never run as root unless they NEED to, for example if they need to bind to a privileged port. Logging in as root shouldn't be done, and for a bad actor, it's a dream come true if they can. Failing to secure root can and will lead to bitcoin miners being placed on your server, exposure of any secret keys you have, and probably replace your beautiful painstaking complex nginx config with a link to a syrian terror cell or something. 

`X11Forwarding no`

You shouldn't need X11 for anything. It's best to keep this option off. I will revoke your hacker card if you have a DE on your server.

`Banner /etc/issue.net`

When people attempt to connect to your server, you can display a scary/funny message using this config option. This is very much optional but I continue to enjoy my banner.

`PasswordAuthentication no`

This disables password authentication. This is a best practice, if you genuinely have a good, long password, and set up fail2ban or any other SSHD audit software it should be fine, but using key based auth is quick and easy and foolproof. 

**NOTE: keep this on until you are SURE pubkey authentication is working. This WILL lock you out otherwise.**

**SERIOUSLY!!!!!!!!!! Unless you are on a VPS with options to reformat, you will lose access FOREVER if the server is remote.**

### Creating your key (GPG/PGP)

If you want a key for OpenPGP encryption for your emails, GPG simplifies this greatly.

First of all, get a Linux box. You can do this pretty easily on Windows using `wsl --install.`

Then, you can generate your key using this command:

`gpg --quick-gen-key <email address> <algorithm>`

You also have the option of passing in an expiry date, which supports multiple formats. ISO-8601 is probably the easiest to remember, which is YYYY-MM-DD. Manual revocation is also an option, in case your algorithm gets obsoleted by quantum computing in a couple years.

I recommend using ed25519 as your algorithm, but rsa is absolutely fine for this usecase in case you are working with a really old openssl/ssh implementation which doesn't support elliptic curve cryptography.

### Getting other people's public keys

Importing public keys is simple, too. GPG keys can be fetched remotely using [keys.openpgp.org](https://keys.openpgp.org/about/usage), which has helpful documentation. Some people might link their public key on their site. In this case, importing it is as easy as cURLing it into GPG.

`curl -L example.com/my-key.pgp | gpg --import`

`-L:`Follow redirects

### Using your key to encrypt messages

Most email clients support OpenPGP. If you are using Thunderbird, importing a personal key is as simple as exporting it to a file, then adding it to your account settings under "end to end encryption".

To export your key, first find your key ID (or use your email address). Use `gpg --list-secret-keys`, and copy it. The format of this output is as follows:

`sec    <algorithm> <date-created> [capabilities] [expiry]`

`<key id>`

Then paste your key ID into an export command:

`gpg --armor --export-secret-keys <key id> > key.pgp`

An armored (ASCII rather than hex) PGP key will be forwarded into the file key.pgp. You can then import it into thunderbird. Make sure you password protect your key! it could stick with you for a long time. Thunderbird can automatically import your recipients pubkey. If this fails, just export their key after importing it, using this command, then add it to your Thunderbird keyring:

`gpg --list-public-keys # get key ID of recipient. email address also works`

`gpg --armor --export <key ID/email> > recipient.pgp`

### Encrypting things outside of an email client

Encrypting things using GPG is pretty simple outside of a client. The simplest way is to just use echo.

`echo "i miss you" | gpg --armor -e -r <recipient email addr> -r <your email addr> > message.gpg`

This will spit out an armored, encrypted GPG message. It's only readable by the recipients specified by -r, which you can pass an email address or a key ID, but only for keys in your keyring, i.e.

`gpg --list-public-key`

You can verify that this is unreadable to anybody else by opening a virtual machine, and attempting to decrypt it with:

`cat message.gpg | gpg -d`

Make sure you include your email address when specifying recipients, otherwise you will be unable to read your message later. 

### Creating your key (SSH)

Every linux box should have the utility `ssh-keygen` baked in. Give the manpage at `man ssh-keygen` a read if you are unsure about any flags I use below, or if you want to use a different algo/add your own flags.

The defaults provided by `ssh-keygen` are excellent, but I would personally generate an ED25519 key for SSH. I am only a messenger. Some dweeb who is much smarter than me invented something which is supposedly much better than RSA. Something about prime numbers. you'd be better off reading the [wikipedia article](https://en.wikipedia.org/wiki/Curve25519).

(ED25519 uses a smaller keysize, which should in theory make it faster to generate, and faster to auth to server. How much this actually accelerates your workflow will probably be minimal. Neither are quantum resistant, but RSA is definitively broken by shor's algorithm).

`ssh-keygen -t ed25519`

Make sure you save this key in your $HOME/.ssh directory, which is where SSH looks for keys (if not defined in config). You should next create this config in $HOME/.ssh/config, and define the following options:

`Host mysite`

`# the options below the Host should be indented`

`HostName example.com`

`User myname`

`IdentityFile /path/to/key # $HOME/.ssh/id_ed25519 if you didn't set a name`

`Port 22 # Default value`

### Connecting using your key

Connect using password auth on your first login. Copy and paste the public key, which has the extension .pub, into the authorized_keys file in the $HOME/.ssh directory of your server. 

After setting options in your ssh config (not on the server), ssh will automatically use pubkey authentication to login. Once this is working, feel free to disable password authentication. 

### Did this guide help you?

Send me an encrypted email ;). Here's [my pubkey](https://blog.shr4pnel.com/assets/keys/key.pgp). Happy hunting!
