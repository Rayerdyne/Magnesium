# Magnesium
## A discord music bot that can store urls for you !
________________________________________________
________________________________________________ 
## **⚠ Important notice**
### `ffmpeg` and `nodejs` are needed on the device that runs the bot. 
See https://www.ffmpeg.org/* and *https://nodejs.org/en/*.
________________________________________________

## Getting started

Add the bot to your server :
1. Download it.
2. Create your discord application on https://discordapp.com/developers/applications/.
3. In the settings of the application, select **Bot**, then in **Build-a-Bot** section click **Add Bot** and accept.
4. [`Optional`] You can set the icon of your bot here. This will be the one you will see in Discord.
5. Copy the bot's token (the button should be on the right of bot's icon) and paste it in the `config.js` file (located in */path/where/installed/Magnesium/*), instead of **token** (keep the ").
    > NOTE : Bot's token is confidential, if someone gets it, they would be able to hack access to your server.
6. Launch the bot : start a terminal, then type :

    > `cd /path/where/installed/Magnesium`
    >
    > `node .` 
________________________________________________
## Quick start

The default prefix is -- (see config.js)

Use `--help` to begin to freestyle =)

Each command has an help : `--help command`.
________________________________________________
## Main commands : examples

> `--play https://www.youtube.com/watch?v=q0lsD7U0JSI`

> `--reg katusha https://youtu.be/MLg83QMmlGs`
>
> `--get katusha`
>
> `--play katusha`
>
> `--save`

> `--reg dir russian`
>
> `--reg katusha https://youtu.be/MLg83QMmlGs in russian`
>
> `--save`

> `--reg dir russian`
>
> `--cd russian`
>
> `--play https://youtu.be/MLg83QMmlGs -s katusha`
> 
> `--loop on`
>
> `--cd ..`
>
> `--rm katusha in russian`
>
> `--save`

> `--play katusha & korobeiniki`
>
> `--queue`
>
> `--delete 1`

> `--list`
>
> `--list russian`
>
> `--list dirs`
>
> `--list everything`

> `--image Olne Belgium`

**Other commands :**
> `pause`, `resume`, `skip`, `stop`, `setdjrole`, `tell`, `reload`, `ping`, `say`, `setprefix`

____________________________________
## Good to know :

* When someone who does not have the DJ role sends a command, it will be run by the bot if a DJ likes the message (with 👍 emoji only).

* Directories organization works like in a terminal (I'm on Linux). `cd` command changes current directory. Everything will be by default made in this one.
_____________________________________
## In case you know JS :
(If not just be careful xD)
* Urls are stored in a JSON file, located in */path/where/installed/Magnesium/commands/store/*. You can add or delete elements, but a "**global**" directory will always be recreated if removed.

* Data related to the bot settings (mainly its prefix and the DJ role) are stored in another JSON file, in */path/where/installed/Magnesium/*. Missing parts may lead to errors.
