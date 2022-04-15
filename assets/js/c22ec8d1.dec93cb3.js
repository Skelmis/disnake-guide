"use strict";(self.webpackChunkdisnake_guide=self.webpackChunkdisnake_guide||[]).push([[606],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),m=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(d.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(t),u=i,h=p["".concat(d,".").concat(u)]||p[u]||l[u]||o;return t?a.createElement(h,r(r({ref:n},c),{},{components:t})):a.createElement(h,r({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=p;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var m=2;m<o;m++)r[m]=t[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},784:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return l}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],s={description:"This article goes in depth on creating commands in your Discord bot.",keywords:["disnake","bot","guide","tutorial","creating","commands","python"]},d="Creating commands",m={unversionedId:"getting-started/creating-commands",id:"getting-started/creating-commands",title:"Creating commands",description:"This article goes in depth on creating commands in your Discord bot.",source:"@site/docs/getting-started/creating-commands.mdx",sourceDirName:"getting-started",slug:"/getting-started/creating-commands",permalink:"/getting-started/creating-commands",editUrl:"https://github.com/DisnakeDev/guide/edit/main/guide/docs/getting-started/creating-commands.mdx",tags:[],version:"current",lastUpdatedBy:"arl",lastUpdatedAt:1649985962,formattedLastUpdatedAt:"4/15/2022",frontMatter:{description:"This article goes in depth on creating commands in your Discord bot.",keywords:["disnake","bot","guide","tutorial","creating","commands","python"]},sidebar:"guideSidebar",previous:{title:"Initial files",permalink:"/getting-started/initial-files"},next:{title:"Creating cogs/extensions",permalink:"/getting-started/using-cogs"}},c={},l=[{value:"A note on prefix commands",id:"a-note-on-prefix-commands",level:2},{value:"Registering commands",id:"registering-commands",level:2},{value:"Registering commands in specific guilds",id:"registering-commands-in-specific-guilds",level:3},{value:"Responding to commands",id:"responding-to-commands",level:2},{value:"Server info command",id:"server-info-command",level:3},{value:"User info command",id:"user-info-command",level:3},{value:"Resulting Code",id:"resulting-code",level:2}],p=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)}},u=p("DocsLink"),h=p("DiscordMessages"),g=p("DiscordMessage"),k=p("DiscordInteraction"),v=p("ResultingCode"),f={toc:l};function y(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-commands"},"Creating commands"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This page is a follow-up, and the base code used is from the previous page (",(0,o.kt)("a",{parentName:"p",href:"/getting-started/initial-files"},"Initial files"),"). The\ncode can be found on the GitHub repository\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DisnakeDev/guide/tree/main/code-samples/getting-started/initial-files"},"here"),"."))),(0,o.kt)("p",null,"Discord also allows developers to register\n",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/interactions/application-commands"},"slash commands"),", which provides users a\nfirst-class way of interacting directly with your application. These slash commands shall be covered by the guide\n",(0,o.kt)("a",{parentName:"p",href:"/interactions/slash-commands"},"here"),", in the ",(0,o.kt)("strong",{parentName:"p"},"Interactions")," section."),(0,o.kt)("h2",{id:"a-note-on-prefix-commands"},"A note on prefix commands"),(0,o.kt)("p",null,"Bot commands that are initiated when a keyword is used along with a specified prefix (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"!")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"$"),") are known as\n",(0,o.kt)("strong",{parentName:"p"},"prefix commands")," (are also often referred to as ",(0,o.kt)("strong",{parentName:"p"},"text commands"),")."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Message Intent - Privileged")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is to be noted that handling prefix commands require the ",(0,o.kt)("strong",{parentName:"p"},"message intent"),", which allows the bot to get content and\ndata of messages sent by users. This intent has recently been privileged, i.e., it needs to be manually enabled for the\nbot application, and its requirement will eventually be reviewed if your bot is in over 100 servers."),(0,o.kt)("p",{parentName:"div"},"You can read more about the message intent ",(0,o.kt)("a",{parentName:"p",href:"https://support-dev.discord.com/hc/en-us/articles/4404772028055"},"here"),"."))),(0,o.kt)("p",null,"Therefore, to minimize the permissions your bot has to use, we will be covering prefix commands under the ",(0,o.kt)("strong",{parentName:"p"},"Popular\nTopics")," section, and advancing with the basics of slash commands in this article; more advanced topics of the same will\nbe covered in the ",(0,o.kt)("a",{parentName:"p",href:"/interactions"},(0,o.kt)("strong",{parentName:"a"},"Interactions"))," section."),(0,o.kt)("h2",{id:"registering-commands"},"Registering commands"),(0,o.kt)("p",null,"This section covers the bare minimum to get you started with registering slash commands. Once again, you can refer to\n",(0,o.kt)("a",{parentName:"p",href:"/interactions/slash-commands"},"this page")," for an in-depth coverage of topics, including guild commands,\nglobal commands, options, option types, autocomplete and choices."),(0,o.kt)("p",null,"Now, we shall continue with the base code used in the previous section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},'import disnake\nfrom disnake.ext import commands\n\nbot = commands.Bot()\n\n\n@bot.event\nasync def on_ready():\n    print("The bot is ready!")\n\n\nbot.run("YOUR_BOT_TOKEN")\n')),(0,o.kt)("p",null,"The first step is to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@bot.slash_command")," coroutine, along with an ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," function in order to define the code\nfor your slash command. Below is a script demonstrating the same (focus on the use of ",(0,o.kt)("inlineCode",{parentName:"p"},"inter"),", which is short for\n",(0,o.kt)("inlineCode",{parentName:"p"},"interaction"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py" {12-14}',title:'"main.py"',"{12-14}":!0},'import disnake\nfrom disnake.ext import commands\n\nbot = commands.Bot()\n\n\n@bot.event\nasync def on_ready():\n    print("The bot is ready!")\n\n\n@bot.slash_command()\nasync def ping(inter):\n    ...\n\n\nbot.run("YOUR_BOT_TOKEN")\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"inter")," passed into the function is analogous to context, or ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx")," used in prefix commands - it passes through all\ninformation relative to the interaction - data regarding the user who initiated the command, as an example. It is also\nnecessary for replying to the use of the command."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Using ",(0,o.kt)("inlineCode",{parentName:"h5"},"ctx")," vs. ",(0,o.kt)("inlineCode",{parentName:"h5"},"inter"))),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you have experience with coding bots with ",(0,o.kt)("a",{parentName:"p",href:"https://discordpy.readthedocs.io/en/latest"},(0,o.kt)("inlineCode",{parentName:"a"},"discord.py")),", you would be\nfamiliar with using ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx")," as an abbreviation for passing context into the function. This guide will primarily be using\n",(0,o.kt)("inlineCode",{parentName:"p"},"inter"),", as it is short for ",(0,o.kt)("inlineCode",{parentName:"p"},"interaction")," and refers to ",(0,o.kt)(u,{reference:"disnake.ApplicationCommandInteraction",mdxType:"DocsLink"}),".\nOf course, you're open to using your preferred abbreviation in code."))),(0,o.kt)("h3",{id:"registering-commands-in-specific-guilds"},"Registering commands in specific guilds"),(0,o.kt)("p",null,'Note that servers are referred to as "guilds" in the Discord API and disnake library. On running the above code, the\nslash command will be registered globally, and will be accessible on all servers the bot is in. The caveat being that\nglobal registration of slash commands can take up to 1 hour (refer to\n',(0,o.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/interactions/application-commands#create-global-application-command"},"Discord's documentation"),")."),(0,o.kt)("p",null,"When you're trying to test your changes to code in real time, it can be immensely useful to have the command's function\nupdate with your code changes right away. Thus, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"guild_ids")," argument for the command to be\ninstantaneously registered in a list of specified servers. (We recommend including your separate development server in\nthis list.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py" {12-14}',title:'"main.py"',"{12-14}":!0},'import disnake\nfrom disnake.ext import commands\n\nbot = commands.Bot()\n\n\n@bot.event\nasync def on_ready():\n    print("The bot is ready!")\n\n\n@bot.slash_command(guild_ids=[1234, 5678])  # Your server IDs go here.\nasync def ping(inter):\n    ...\n\n\nbot.run("YOUR_BOT_TOKEN")\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Using ",(0,o.kt)("inlineCode",{parentName:"h5"},"test_guilds")," in ",(0,o.kt)("inlineCode",{parentName:"h5"},"commands.Bot()"))),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When you have multiple commands registered under the same test guilds, it is convenient to only have your ",(0,o.kt)("inlineCode",{parentName:"p"},"guild_ids"),"\ndefined once. Therefore, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"test_guilds")," argument in the ",(0,o.kt)("inlineCode",{parentName:"p"},"commands.Bot()")," instance instead of passing\n",(0,o.kt)("inlineCode",{parentName:"p"},"guild_ids")," to every single command -"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},"bot = commands.Bot(test_guilds=[1234, 5678])\n")))),(0,o.kt)("p",null,"Now that you're all set with registering the slash command, you can proceed with responding to the initiated command."),(0,o.kt)("h2",{id:"responding-to-commands"},"Responding to commands"),(0,o.kt)("p",null,"You can respond to a slash command initiated by the user, using ",(0,o.kt)("inlineCode",{parentName:"p"},"inter.response.send_message()"),". It is analogous to\nusing ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.send()"),", in that you can respond to the interaction with embeds, files, buttons/select menus or just plain\ntext."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py" {14}',title:'"main.py"',"{14}":!0},'import disnake\nfrom disnake.ext import commands\n\nbot = commands.Bot()\n\n\n@bot.event\nasync def on_ready():\n    print("The bot is ready!")\n\n\n@bot.slash_command(guild_ids=[1234, 5678])\nasync def ping(inter):\n    await inter.response.send_message("Pong!")\n\n\nbot.run("YOUR_BOT_TOKEN")\n')),(0,o.kt)("br",null),(0,o.kt)(h,{mdxType:"DiscordMessages"},(0,o.kt)(g,{profile:"bot",mdxType:"DiscordMessage"},(0,o.kt)("div",{slot:"interactions"},(0,o.kt)(k,{profile:"user",command:"true",mdxType:"DiscordInteraction"},"ping")),"Pong!")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"server-info-command"},"Server info command"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"inter.guild")," refers to the guild the interaction was sent in (a ",(0,o.kt)(u,{reference:"disnake.Guild",mdxType:"DocsLink"},"Guild"),"\ninstance), which exposes properties such as ",(0,o.kt)("inlineCode",{parentName:"p"},".name")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".member_count"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py" {12-16}',title:'"main.py"',"{12-16}":!0},'import disnake\nfrom disnake.ext import commands\n\nbot = commands.Bot()\n\n\n@bot.event\nasync def on_ready():\n    print("The bot is ready!")\n\n\n@bot.slash_command()\nasync def server(inter):\n    await inter.response.send_message(\n        f"Server name: {inter.guild.name}\\nTotal members: {inter.guild.member_count}"\n    )\n\n\nbot.run("YOUR_BOT_TOKEN")\n')),(0,o.kt)("br",null),(0,o.kt)(h,{mdxType:"DiscordMessages"},(0,o.kt)(g,{profile:"bot",mdxType:"DiscordMessage"},(0,o.kt)("div",{slot:"interactions"},(0,o.kt)(k,{profile:"user",command:"true",mdxType:"DiscordInteraction"},"server")),"Server name: Disnake Guide ",(0,o.kt)("br",null),"Total members: 2")),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Refer to the ",(0,o.kt)(u,{reference:"disnake.Guild",mdxType:"DocsLink"},"Guild")," documentation for a list of all the available\nproperties and methods."))),(0,o.kt)("p",null,"You could also display the date the server was created, or the server's verification level. You would do those in the\nsame manner - use ",(0,o.kt)("inlineCode",{parentName:"p"},"inter.guild.created_at")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"inter.guild.verification_level"),", respectively."),(0,o.kt)("h3",{id:"user-info-command"},"User info command"),(0,o.kt)("p",null,'A "user" refers to a Discord user. ',(0,o.kt)("inlineCode",{parentName:"p"},"inter.author")," refers to the user the interaction was sent by\n(a ",(0,o.kt)(u,{reference:"disnake.User",mdxType:"DocsLink"},"User")," instance in DM contexts, or a ",(0,o.kt)(u,{reference:"disnake.Member",mdxType:"DocsLink"},"Member")," instance in server contexts), which exposes properties\nsuch as ",(0,o.kt)("inlineCode",{parentName:"p"},".name")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".id"),". (Using just ",(0,o.kt)("inlineCode",{parentName:"p"},"inter.author")," will give the user's full tag.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py" {12-14}',title:'"main.py"',"{12-14}":!0},'import disnake\nfrom disnake.ext import commands\n\nbot = commands.Bot()\n\n\n@bot.event\nasync def on_ready():\n    print("The bot is ready!")\n\n\n@bot.slash_command()\nasync def user(inter):\n    await inter.response.send_message(f"Your tag: {inter.author}\\nYour ID: {inter.author.id}")\n\n\nbot.run("YOUR_BOT_TOKEN")\n')),(0,o.kt)("br",null),(0,o.kt)(h,{mdxType:"DiscordMessages"},(0,o.kt)(g,{profile:"bot",mdxType:"DiscordMessage"},(0,o.kt)("div",{slot:"interactions"},(0,o.kt)(k,{profile:"user",command:"true",mdxType:"DiscordInteraction"},"server")),"Your tag: AbhigyanTrips#1234 ",(0,o.kt)("br",null),"Your ID: 123456789012345678")),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Refer to the ",(0,o.kt)(u,{reference:"disnake.User",mdxType:"DocsLink"})," and ",(0,o.kt)(u,{reference:"disnake.Member",mdxType:"DocsLink"})," documentation for a list\nof all the available properties and methods."))),(0,o.kt)("p",null,"And there you have it!"),(0,o.kt)("h2",{id:"resulting-code"},"Resulting Code"),(0,o.kt)(v,{mdxType:"ResultingCode"}))}y.isMDXComponent=!0}}]);