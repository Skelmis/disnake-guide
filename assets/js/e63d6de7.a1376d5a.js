"use strict";(self.webpackChunkdisnake_guide=self.webpackChunkdisnake_guide||[]).push([[733],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),r=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=r(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),u=r(n),c=a,b=u["".concat(l,".").concat(c)]||u[c]||p[c]||s;return n?i.createElement(b,o(o({ref:t},m),{},{components:n})):i.createElement(b,o({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var r=2;r<s;r++)o[r]=n[r];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},287:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return E},frontMatter:function(){return d},metadata:function(){return r},toc:function(){return p}});var i=n(7462),a=n(3366),s=(n(7294),n(3905)),o=["components"],d={description:"An extensive article on utilizing Discord Embeds, along with their features and limits."},l="Embeds",r={unversionedId:"popular-topics/embeds",id:"popular-topics/embeds",title:"Embeds",description:"An extensive article on utilizing Discord Embeds, along with their features and limits.",source:"@site/docs/popular-topics/embeds.mdx",sourceDirName:"popular-topics",slug:"/popular-topics/embeds",permalink:"/popular-topics/embeds",editUrl:"https://github.com/DisnakeDev/guide/edit/main/guide/docs/popular-topics/embeds.mdx",tags:[],version:"current",lastUpdatedBy:"arl",lastUpdatedAt:1649985962,formattedLastUpdatedAt:"4/15/2022",frontMatter:{description:"An extensive article on utilizing Discord Embeds, along with their features and limits."},sidebar:"guideSidebar",previous:{title:"Threads",permalink:"/popular-topics/threads"},next:{title:"Reactions",permalink:"/popular-topics/reactions"}},m={},p=[{value:"Embed preview",id:"embed-preview",level:2},{value:"Creating an embed",id:"creating-an-embed",level:2},{value:"Setting the author",id:"setting-the-author",level:3},{value:"Setting the footer",id:"setting-the-footer",level:3},{value:"Setting the thumbnail",id:"setting-the-thumbnail",level:3},{value:"Using timestamps",id:"using-timestamps",level:3},{value:"Inserting fields",id:"inserting-fields",level:3},{value:"Inserting images",id:"inserting-images",level:3},{value:"Sending an embed",id:"sending-an-embed",level:2},{value:"Dictionaries to embeds",id:"dictionaries-to-embeds",level:2},{value:"Embed notes",id:"embed-notes",level:2},{value:"Embed limits",id:"embed-limits",level:2},{value:"Resulting code",id:"resulting-code",level:2}],u=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)}},c=u("DocsLink"),b=u("DiscordMessages"),k=u("DiscordMessage"),h=u("DiscordEmbed"),g=u("DiscordEmbedFields"),f=u("DiscordEmbedField"),y=u("DiscordMarkdown"),v=u("ResultingCode"),T={toc:p};function E(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,i.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"embeds"},"Embeds"),(0,s.kt)("p",null,"You might have seen some special messages on Discord (often sent by bots/webhooks), that have a colored border, embedded\nimages, text fields and other properties. These elements are referred to as ",(0,s.kt)("strong",{parentName:"p"},"Embeds"),", and this section will cover how\nyou can create and send one with your bot. This is done with ",(0,s.kt)(c,{reference:"disnake.Embed",mdxType:"DocsLink"})," object."),(0,s.kt)("p",null,"This section will extensively cover the attributes and methods used with embeds. Thus, we recommend skipping to your\ndesired topic via the table of contents."),(0,s.kt)("h2",{id:"embed-preview"},"Embed preview"),(0,s.kt)("p",null,"Here is an example of how an embed may look. We will go over embed construction in the next part of this article."),(0,s.kt)("br",null),(0,s.kt)(b,{mdxType:"DiscordMessages"},(0,s.kt)(k,{profile:"bot",mdxType:"DiscordMessage"},(0,s.kt)(h,{embedTitle:"Embed Title",url:"https://disnake.dev/",thumbnail:"/public/disnake-logo.png",image:"https://i.imgur.com/KsTvw5Z.png",timestamp:"01/01/2077",authorName:"Embed Author",authorIcon:"/public/disnake-logo.png",authorUrl:"https://disnake.dev/",footerIcon:"/public/disnake-logo.png",slot:"embeds",mdxType:"DiscordEmbed"},"Embed Description",(0,s.kt)(g,{slot:"fields",mdxType:"DiscordEmbedFields"},(0,s.kt)(f,{fieldTitle:"Regular Title",mdxType:"DiscordEmbedField"},"Regular Value"),(0,s.kt)(f,{inline:"true",fieldTitle:"Inline Title",mdxType:"DiscordEmbedField"},"Inline Value"),(0,s.kt)(f,{inline:"true",fieldTitle:"Inline Title",mdxType:"DiscordEmbedField"},"Inline Value"),(0,s.kt)(f,{inline:"true",fieldTitle:"Inline Title",mdxType:"DiscordEmbedField"},"Inline Value")),(0,s.kt)("span",{slot:"footer"},"This is a footer.")))),(0,s.kt)("br",null),(0,s.kt)("p",null,"The code for this embed is given below."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="embed.py"',title:'"embed.py"'},'# At the top of the file.\nimport disnake\nfrom disnake.ext import commands\n\n# Inside a command, event listener, etc.\nembed = disnake.Embed(\n    title="Embed Title",\n    description="Embed Description",\n    color=disnake.Colour.yellow(),\n    timestamp=datetime.datetime.now(),\n)\n\nembed.set_author(\n    name="Embed Author",\n    url="https://disnake.dev/",\n    icon_url="https://disnake.dev/assets/disnake-logo.png",\n)\nembed.set_footer(\n    text="Embed Footer",\n    icon_url="https://disnake.dev/assets/disnake-logo.png",\n)\n\nembed.set_thumbnail(url="https://disnake.dev/assets/disnake-logo.png")\nembed.set_image(url="https://disnake.dev/assets/disnake-thin-banner.png")\n\nembed.add_field(name="Regular Title", value="Regular Value", inline=False)\nembed.add_field(name="Inline Title", value="Inline Value", inline=True)\nembed.add_field(name="Inline Title", value="Inline Value", inline=True)\nembed.add_field(name="Inline Title", value="Inline Value", inline=True)\n\nawait ctx.send(embed=embed)\n')),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"It is not strictly necessary to use all elements showcased above. You're free to leave some out as per your\nrequirements."))),(0,s.kt)("p",null,"The colour of the embed (via the ",(0,s.kt)("inlineCode",{parentName:"p"},"colour")," parameter) accepts a ",(0,s.kt)(c,{reference:"disnake.Colour",mdxType:"DocsLink"})," instance, a HEX\nstring or an integer."),(0,s.kt)("p",null,"To add a blank field to the embed, you can use ",(0,s.kt)("inlineCode",{parentName:"p"},"embed.add_field(name='\\u200b', value='\\u200b')"),"."),(0,s.kt)("h2",{id:"creating-an-embed"},"Creating an embed"),(0,s.kt)("p",null,"You can use the ",(0,s.kt)(c,{reference:"disnake.Embed",mdxType:"DocsLink"},"Embed")," object for the creation and manipulation of embeds."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="embed.py"',title:'"embed.py"'},'embed = disnake.Embed(\n    title="Embed Title",\n    description="Embed Description",\n    colour=0xF0C43F,\n)\n')),(0,s.kt)("br",null),(0,s.kt)(b,{mdxType:"DiscordMessages"},(0,s.kt)(k,{profile:"bot",mdxType:"DiscordMessage"},(0,s.kt)(h,{embedTitle:"Embed Title",slot:"embeds",mdxType:"DiscordEmbed"},"Embed Description"))),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"setting-the-author"},"Setting the author"),(0,s.kt)("p",null,"You can set the author of the embed with the ",(0,s.kt)(c,{reference:"disnake.Embed.set_author",mdxType:"DocsLink"},"set_author"),"\nattribute. Note that this code will come after you have defined ",(0,s.kt)("inlineCode",{parentName:"p"},"embed")," via ",(0,s.kt)("inlineCode",{parentName:"p"},"embed = disnake.Embed(...)"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="embed.py"',title:'"embed.py"'},'embed.set_author(\n    name="Embed Author",\n    url="https://disnake.dev/",\n    icon_url="https://disnake.dev/assets/disnake-logo.png",\n)\n')),(0,s.kt)("br",null),(0,s.kt)(b,{mdxType:"DiscordMessages"},(0,s.kt)(k,{profile:"bot",mdxType:"DiscordMessage"},(0,s.kt)(h,{embedTitle:"Embed Title",authorName:"Embed Author",authorIcon:"/public/disnake-logo.png",authorUrl:"https://disnake.dev/",slot:"embeds",mdxType:"DiscordEmbed"},"Embed Description"))),(0,s.kt)("br",null),(0,s.kt)("p",null,'Since we have set a URL in this case, clicking on "Embed Author" will redirect the user to the\n',(0,s.kt)("a",{parentName:"p",href:"https://disnake.dev/"},(0,s.kt)("inlineCode",{parentName:"a"},"disnake.dev"))," website."),(0,s.kt)("h3",{id:"setting-the-footer"},"Setting the footer"),(0,s.kt)("p",null,"You can set the footer of the embed with the ",(0,s.kt)(c,{reference:"disnake.Embed.set_footer",mdxType:"DocsLink"},"set_footer"),"\nattribute. Note that this code will come after you have defined ",(0,s.kt)("inlineCode",{parentName:"p"},"embed")," via ",(0,s.kt)("inlineCode",{parentName:"p"},"embed = disnake.Embed(...)"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="embed.py"',title:'"embed.py"'},'embed.set_footer(\n    text="Embed Footer",\n    icon_url="https://disnake.dev/assets/disnake-logo.png",\n)\n')),(0,s.kt)("br",null),(0,s.kt)(b,{mdxType:"DiscordMessages"},(0,s.kt)(k,{profile:"bot",mdxType:"DiscordMessage"},(0,s.kt)(h,{embedTitle:"Embed Title",authorName:"Embed Author",authorIcon:"/public/disnake-logo.png",authorUrl:"https://disnake.dev/",footerIcon:"/public/disnake-logo.png",slot:"embeds",mdxType:"DiscordEmbed"},"Embed Description",(0,s.kt)("span",{slot:"footer"},"Embed Footer")))),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"setting-the-thumbnail"},"Setting the thumbnail"),(0,s.kt)("p",null,"The thumbnail of the embed is shown in it's top right corner. It can be set using\nthe ",(0,s.kt)(c,{reference:"disnake.Embed.set_thumbnail",mdxType:"DocsLink"},"set_thumbnail")," attribute."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="embed.py"',title:'"embed.py"'},'embed.set_thumbnail(url="https://disnake.dev/assets/disnake-thin-banner.png")\n')),(0,s.kt)("br",null),(0,s.kt)(b,{mdxType:"DiscordMessages"},(0,s.kt)(k,{profile:"bot",mdxType:"DiscordMessage"},(0,s.kt)(h,{embedTitle:"Embed Thumbnail",thumbnail:"/public/disnake-logo.png",authorName:"Embed Author",authorIcon:"/public/disnake-logo.png",authorUrl:"https://disnake.dev/",footerIcon:"/public/disnake-logo.png",timestamp:"01/01/2077",slot:"embeds",mdxType:"DiscordEmbed"},"It is shown in the top-right corner of the embed. You can set this as a URL, but"," ",(0,s.kt)(y,{mdxType:"DiscordMarkdown"},"`disnake`")," also allows you to use a locally stored file instead, using the"," ",(0,s.kt)(y,{mdxType:"DiscordMarkdown"},"`file`")," parameter.",(0,s.kt)("br",null),(0,s.kt)("br",null),(0,s.kt)(y,{mdxType:"DiscordMarkdown"},'`embed.set_thumbnail(file=disnake.File("asset/path.png"))`'),(0,s.kt)("span",{slot:"footer"},"Embed Footer")))),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"using-timestamps"},"Using timestamps"),(0,s.kt)("p",null,"Timestamps are shown in the footer of the embed, indicating the time at which the embed was sent/initiated. This can be\ndone using the ",(0,s.kt)(c,{reference:"disnake.Embed.timestamp",mdxType:"DocsLink"},"timestamp")," parameter of ",(0,s.kt)("inlineCode",{parentName:"p"},"disnake.Embed()"),". Note\nthat you will need to import the ",(0,s.kt)("a",{parentName:"p",href:"https://pypi.org/project/DateTime/"},(0,s.kt)("inlineCode",{parentName:"a"},"datetime"))," package into your script."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="embed.py" {9}',title:'"embed.py"',"{9}":!0},'# At the top of your script\nimport datetime\n\n# Inside a command, event listener, etc.\nembed = disnake.Embed(\n    title="An Embed!",\n    description="A description!",\n    colour=0xF0C43F,\n    timestamp=datetime.datetime.now(),\n)\n')),(0,s.kt)("br",null),(0,s.kt)(b,{mdxType:"DiscordMessages"},(0,s.kt)(k,{profile:"bot",mdxType:"DiscordMessage"},(0,s.kt)(h,{embedTitle:"Timestamps",authorName:"Embed Author",authorIcon:"/public/disnake-logo.png",authorUrl:"https://disnake.dev/",footerIcon:"/public/disnake-logo.png",timestamp:"01/01/2077",slot:"embeds",mdxType:"DiscordEmbed"},"Note that ",(0,s.kt)(y,{mdxType:"DiscordMarkdown"},"`datetime.datetime.utcnow()`")," can also be used here. You can also specify the timezone via the ",(0,s.kt)(y,{mdxType:"DiscordMarkdown"},"`tzinfo`")," parameter.",(0,s.kt)("span",{slot:"footer"},"Embed Footer")))),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"inserting-fields"},"Inserting fields"),(0,s.kt)("p",null,"Embed fields have two parameters - a name(or title) and a value, inside the ",(0,s.kt)(c,{reference:"disnake.Embed.add_field",mdxType:"DocsLink"},"add_field")," attribute.\nIt is also possible to use markdown in both parameters."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="embed.py"',title:'"embed.py"'},'# Regular Fields\nembed.add_field(name="Regular Title", value="Regular Value", inline=False)\n\n# Inline Fields\nembed.add_field(name="Inline Title", value="Inline Value", inline=True)\nembed.add_field(name="Inline Title", value="Inline Value", inline=True)\nembed.add_field(name="Inline Title", value="Inline Value", inline=True)\n')),(0,s.kt)("br",null),(0,s.kt)(b,{mdxType:"DiscordMessages"},(0,s.kt)(k,{profile:"bot",mdxType:"DiscordMessage"},(0,s.kt)(h,{embedTitle:"Embed Title",authorName:"Embed Author",authorIcon:"/public/disnake-logo.png",authorUrl:"https://disnake.dev/",footerIcon:"/public/disnake-logo.png",timestamp:"01/01/2077",slot:"embeds",mdxType:"DiscordEmbed"},"Embed Description",(0,s.kt)(g,{slot:"fields",mdxType:"DiscordEmbedFields"},(0,s.kt)(f,{fieldTitle:"Regular Title",mdxType:"DiscordEmbedField"},"Regular Value"),(0,s.kt)(f,{inline:"true",fieldTitle:"Inline Title",mdxType:"DiscordEmbedField"},"Inline Value"),(0,s.kt)(f,{inline:"true",fieldTitle:"Inline Title",mdxType:"DiscordEmbedField"},"Inline Value"),(0,s.kt)(f,{inline:"true",fieldTitle:"Inline Title",mdxType:"DiscordEmbedField"},"Inline Value")),(0,s.kt)("span",{slot:"footer"},"Embed Footer")))),(0,s.kt)("br",null),(0,s.kt)("p",null,"These attributes also fully support the use of markdown, as well as highlight links. You can also insert fields at a\nparticular position, with a specified index using ",(0,s.kt)(c,{reference:"disnake.Embed.insert_field_at",mdxType:"DocsLink"},"embed.insert_field_at(index, ...)"),"."),(0,s.kt)("h3",{id:"inserting-images"},"Inserting images"),(0,s.kt)("p",null,"This can be done using the ",(0,s.kt)(c,{reference:"disnake.Embed.set_image",mdxType:"DocsLink"},"set_image")," attribute, which accepts\neither a URL or a ",(0,s.kt)(c,{reference:"disnake.File",mdxType:"DocsLink"})," object."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="embed.py"',title:'"embed.py"'},'# Using a URL\nembed.set_image(url="https://disnake.dev/assets/disnake-thin-banner.png")\n\n# Using a local file\nembed.set_image(file=disnake.File("path/to/file.png"))\n')),(0,s.kt)("br",null),(0,s.kt)(b,{mdxType:"DiscordMessages"},(0,s.kt)(k,{profile:"bot",mdxType:"DiscordMessage"},(0,s.kt)(h,{embedTitle:"Images",image:"https://i.imgur.com/KsTvw5Z.png",authorName:"Embed Author",authorIcon:"/public/disnake-logo.png",authorUrl:"https://disnake.dev/",footerIcon:"/public/disnake-logo.png",timestamp:"01/01/2077",slot:"embeds",mdxType:"DiscordEmbed"},"To use a local asset for images or thumbnail with the ",(0,s.kt)(y,{mdxType:"DiscordMarkdown"},"`set_image`")," ","attribute, use the ",(0,s.kt)(y,{mdxType:"DiscordMarkdown"},"`file`")," kwarg which accepts a"," ",(0,s.kt)(y,{mdxType:"DiscordMarkdown"},"`disnake.File()`")," object.",(0,s.kt)("span",{slot:"footer"},"Embed Footer")))),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"sending-an-embed"},"Sending an embed"),(0,s.kt)("p",null,"Once the embed is created, you need to send it to a channel too. This means you need to call ",(0,s.kt)("inlineCode",{parentName:"p"},"send(embed=embed)")," on a\nmessageable object, for example a ",(0,s.kt)("inlineCode",{parentName:"p"},"TextChannel")," object (i.e. ",(0,s.kt)("inlineCode",{parentName:"p"},"message.channel.send"),") or a ",(0,s.kt)("inlineCode",{parentName:"p"},"Context")," object (",(0,s.kt)("inlineCode",{parentName:"p"},"ctx.send"),").\nOtherwise, the embed will not be sent."),(0,s.kt)("h2",{id:"dictionaries-to-embeds"},"Dictionaries to embeds"),(0,s.kt)("p",null,"A ",(0,s.kt)("inlineCode",{parentName:"p"},"dict")," datatype (and essentially a ",(0,s.kt)("inlineCode",{parentName:"p"},"json")," file) can be converted into an embed, using the ",(0,s.kt)(c,{reference:"disnake.Embed.from_dict",mdxType:"DocsLink"},"Embed.from_dict()")," method.\nWe can recreate the embed made at the start of this page, using the same."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="embed.py"',title:'"embed.py"'},'embed_dict = {\n    "title": "Embed Title",\n    "description": "Embed Description",\n    "color": 0xFEE75C,\n    "timestamp": datetime.datetime.now().isoformat(),\n    "author": {\n        "name": "Embed Author",\n        "url": "https://disnake.dev/",\n        "icon_url": "https://disnake.dev/assets/disnake-logo.png",\n    },\n    "thumbnail": {"url": "https://disnake.dev/assets/disnake-logo.png"},\n    "fields": [\n        {"name": "Regular Title", "value": "Regular Value", "inline": "false"},\n        {"name": "Inline Title", "value": "Inline Value", "inline": "true"},\n        {"name": "Inline Title", "value": "Inline Value", "inline": "true"},\n        {"name": "Inline Title", "value": "Inline Value", "inline": "true"},\n    ],\n    "image": {"url": "https://disnake.dev/assets/disnake-thin-banner.png"},\n    "footer": {"text": "Embed Footer", "icon_url": "https://disnake.dev/assets/disnake-logo.png"},\n}\n\nawait channel.send(embed=disnake.Embed.from_dict(embed_dict))\n')),(0,s.kt)("p",null,"This will give the exact same result as the embed shown ",(0,s.kt)("a",{parentName:"p",href:"#embed-preview"},"here"),". Note that the timestamp passed through a\ndictionary should be in ISO8601 format (which has been achieved here by using ",(0,s.kt)("inlineCode",{parentName:"p"},"datetime.datetime.now().isoformat()"),").\nYou can learn more about the ",(0,s.kt)("inlineCode",{parentName:"p"},"dict")," format of embeds in the\n",(0,s.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/resources/channel#embed-object"},"official Discord documentation"),"."),(0,s.kt)("h2",{id:"embed-notes"},"Embed notes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"To display fields side-by-side, you need at least two consecutive fields set to inline."),(0,s.kt)("li",{parentName:"ul"},"The timestamp will automatically adjust the timezone depending on the user's device."),(0,s.kt)("li",{parentName:"ul"},"Mentions of any kind in embeds will only render correctly within embed descriptions and field values."),(0,s.kt)("li",{parentName:"ul"},"Mentions in embeds will not trigger a notification."),(0,s.kt)("li",{parentName:"ul"},"Embeds allow masked links (e.g. ",(0,s.kt)("inlineCode",{parentName:"li"},"[Guide](https://guide.disnake.dev/ 'optional hovertext')"),"), but only in description\nand field values.")),(0,s.kt)("sup",null,"Source: ",(0,s.kt)("a",{href:"https://discordjs.guide/popular-topics/embeds.html#notes"},"Discord.js Guide")),(0,s.kt)("h2",{id:"embed-limits"},"Embed limits"),(0,s.kt)("p",null,"There are a few limits to be aware of while planning your embeds due to the API's limitations. Here is a quick reference\nyou can come back to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Embed titles are limited to ",(0,s.kt)("strong",{parentName:"li"},"256 characters"),"."),(0,s.kt)("li",{parentName:"ul"},"Embed descriptions are limited to ",(0,s.kt)("strong",{parentName:"li"},"4096 characters"),"."),(0,s.kt)("li",{parentName:"ul"},"There can be up to ",(0,s.kt)("strong",{parentName:"li"},"25 fields"),"."),(0,s.kt)("li",{parentName:"ul"},"A field's name is limited to ",(0,s.kt)("strong",{parentName:"li"},"256 characters")," and its value to ",(0,s.kt)("strong",{parentName:"li"},"1024 characters"),"."),(0,s.kt)("li",{parentName:"ul"},"The footer text is limited to ",(0,s.kt)("strong",{parentName:"li"},"2048 characters"),"."),(0,s.kt)("li",{parentName:"ul"},"The author name is limited to ",(0,s.kt)("strong",{parentName:"li"},"256 characters"),"."),(0,s.kt)("li",{parentName:"ul"},"The sum of all characters from all embed structures in a message must not exceed ",(0,s.kt)("strong",{parentName:"li"},"6000 characters"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"10 embeds")," can be sent per message.")),(0,s.kt)("sup",null,"Source: ",(0,s.kt)("a",{href:"https://discord.com/developers/docs/resources/channel#embed-limits"},"Discord API Documentation")),(0,s.kt)("h2",{id:"resulting-code"},"Resulting code"),(0,s.kt)(v,{mdxType:"ResultingCode"}))}E.isMDXComponent=!0}}]);