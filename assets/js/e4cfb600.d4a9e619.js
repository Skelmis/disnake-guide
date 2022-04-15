"use strict";(self.webpackChunkdisnake_guide=self.webpackChunkdisnake_guide||[]).push([[869],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),p=d(n),u=i,k=p["".concat(s,".").concat(u)]||p[u]||c[u]||o;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2831:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return N},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return c}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],r={description:"Modals act as client-integrated popups, that can prompt the user for text input.",keywords:["disnake","bot","guide","tutorial","modals","text inputs","python"]},s="Modals & Text Inputs",d={unversionedId:"interactions/modals",id:"interactions/modals",title:"Modals & Text Inputs",description:"Modals act as client-integrated popups, that can prompt the user for text input.",source:"@site/docs/interactions/modals.mdx",sourceDirName:"interactions",slug:"/interactions/modals",permalink:"/interactions/modals",editUrl:"https://github.com/DisnakeDev/guide/edit/main/guide/docs/interactions/modals.mdx",tags:[],version:"current",lastUpdatedBy:"arl",lastUpdatedAt:1649985962,formattedLastUpdatedAt:"4/15/2022",frontMatter:{description:"Modals act as client-integrated popups, that can prompt the user for text input.",keywords:["disnake","bot","guide","tutorial","modals","text inputs","python"]},sidebar:"guideSidebar",previous:{title:"User/Message Commands",permalink:"/interactions/user-message-commands"},next:{title:"Popular Topics",permalink:"/popular-topics"}},m={},c=[{value:"Modal preview",id:"modal-preview",level:2},{value:"Creating a modal",id:"creating-a-modal",level:2},{value:"<code>TextInput</code> components",id:"textinput-components",level:2},{value:"Modal callback methods",id:"modal-callback-methods",level:2},{value:'<DocsLink reference="disnake.ui.Modal.callback"><code>callback()</code></DocsLink>',id:"callback",level:3},{value:'<DocsLink reference="disnake.ui.Modal.on_error"><code>on_error()</code></DocsLink>',id:"on_error",level:3},{value:'<DocsLink reference="disnake.ui.Modal.on_timeout"><code>on_timeout()</code></DocsLink>',id:"on_timeout",level:3},{value:"Modal notes",id:"modal-notes",level:2},{value:"Modal limits",id:"modal-limits",level:2},{value:"Resulting code",id:"resulting-code",level:2}],p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},u=p("DiscordMessages"),k=p("DiscordMessage"),h=p("DiscordEmbed"),f=p("DiscordEmbedFields"),g=p("DiscordEmbedField"),v=p("DocsLink"),y=p("ResultingCode"),b={toc:c};function N(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modals--text-inputs"},"Modals & Text Inputs"),(0,o.kt)("p",null,"Modals are how you can prompt users for further detailed input. They act as client-integrated popups, and work in tandem\nwith interactive components called ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/interactions/message-components#text-inputs"},"Text Inputs"),".\nThese inputs can have various formats to accept information from the user on prompt, and use the callback to process that information."),(0,o.kt)("p",null,"This section goes in-depth on using modals with other interactive components, and responding to interactions with them."),(0,o.kt)("h2",{id:"modal-preview"},"Modal preview"),(0,o.kt)("p",null,"Here is an example of how a modal may look. We will go over modal construction in the next part of this article."),(0,o.kt)("br",null),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:n(898).Z,alt:"Modal preview",width:"60%"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Once the user inputs information into the modal, the bot will receive a callback that includes the values. As an example, this information has been portrayed in an embed below."),(0,o.kt)("br",null),(0,o.kt)(u,{mdxType:"DiscordMessages"},(0,o.kt)(k,{profile:"bot",mdxType:"DiscordMessage"},(0,o.kt)(h,{embedTitle:"Tag Creation",slot:"embeds",mdxType:"DiscordEmbed"},(0,o.kt)(f,{slot:"fields",mdxType:"DiscordEmbedFields"},(0,o.kt)(g,{fieldTitle:"Name",mdxType:"DiscordEmbedField"},"This is the tag's name."),(0,o.kt)(g,{fieldTitle:"Description",mdxType:"DiscordEmbedField"},"This is the tag's description. It can be as long as 4000 characters."))))),(0,o.kt)("br",null),(0,o.kt)("p",null,"This was done using the following code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="modals.py"',title:'"modals.py"'},'# At the top of the file.\nimport disnake\nfrom disnake.ext import commands\nfrom disnake import TextInputStyle\n\n# Subclassing the modal.\nclass MyModal(disnake.ui.Modal):\n    def __init__(self):\n        # The details of the modal, and its components\n        components = [\n            disnake.ui.TextInput(\n                label="Name",\n                placeholder="Foo Tag",\n                custom_id="name",\n                style=TextInputStyle.short,\n                max_length=50,\n            ),\n            disnake.ui.TextInput(\n                label="Description",\n                placeholder="Lorem ipsum dolor sit amet.",\n                custom_id="description",\n                style=TextInputStyle.paragraph,\n            ),\n        ]\n        super().__init__(\n            title="Create Tag",\n            custom_id="create_tag",\n            components=components,\n        )\n\n    # The callback received when the user input is completed.\n    async def callback(self, inter: disnake.ModalInteraction):\n        embed = disnake.Embed(title="Tag Creation")\n        for key, value in inter.text_values.items():\n            embed.add_field(\n                name=key.capitalize(),\n                value=value[:1024],\n                inline=False,\n            )\n        await inter.response.send_message(embed=embed)\n\n\nbot = commands.Bot(command_prefix="!")\n\n\n@bot.slash_command()\nasync def tags(inter: disnake.AppCmdInter):\n    """Sends a Modal to create a tag."""\n    await inter.response.send_modal(modal=MyModal())\n\n\nbot.run("YOUR_BOT_TOKEN")\n')),(0,o.kt)("p",null,"The implementation of this command using the lower-level interface can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DisnakeDev/guide/tree/main/code-samples/interactions/modals/create-tag-low.py"},"here"),"."),(0,o.kt)("h2",{id:"creating-a-modal"},"Creating a modal"),(0,o.kt)("p",null,"A modal can be created and sent using two different methods, just like other message components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Subclassing ",(0,o.kt)(v,{reference:"disnake.ui.Modal",mdxType:"DocsLink"},"disnake.ui.Modal")," to define the components, and sending it through the ",(0,o.kt)("inlineCode",{parentName:"li"},"modal")," parameter of ",(0,o.kt)(v,{reference:"disnake.InteractionResponse.send_modal",mdxType:"DocsLink"},"interaction.send_modal")," (as done in the example above)."),(0,o.kt)("li",{parentName:"ul"},"Defining the attributes and components of the modal inside ",(0,o.kt)(v,{reference:"disnake.InteractionResponse.send_modal",mdxType:"DocsLink"},"interaction.send_modal"),' itself. This is considered a "lower-level" implementation of modals - we will use the same term to refer to it in this section.')),(0,o.kt)("p",null,"A ",(0,o.kt)(v,{reference:"disnake.ui.Modal",mdxType:"DocsLink"},"disnake.ui.Modal")," object has the following attributes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"title")," - The title of the modal."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"custom_id")," - An ID specified to the modal. This can be accessed via ",(0,o.kt)(v,{reference:"disnake.ModalInteraction",mdxType:"DocsLink"}),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeout")," - The time (in seconds) after which the modal is removed from cache. Defaults to ",(0,o.kt)("strong",{parentName:"li"},"600 seconds"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"components")," - The list of components to be displayed in the modal. Limited to ",(0,o.kt)("strong",{parentName:"li"},"5 action rows"),".")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Modals without timeouts are not supported. There is no event dispatched when the modal is closed by the user, and thus the modal would not be removed from cache without a timeout."))),(0,o.kt)("p",null,"These attributes can be used while creating a modal, as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="modals.py" {4-9}',title:'"modals.py"',"{4-9}":!0},'# Subclassing the modal.\nclass MyModal(disnake.ui.Modal):\n    def __init__(self):\n        super().__init__(\n            title="Modal Title",\n            custom_id="modal_id",\n            timeout=300,\n            components=[...],\n        )\n\n\n# Using the lower-level interface. (inside a function)\nawait inter.response.send_modal(\n    title="Modal Title",\n    custom_id="modal_id",\n    components=[...],\n)\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is recommended that you pseudo-randomize a modal's ",(0,o.kt)("inlineCode",{parentName:"p"},"custom_id")," by storing the interaction's ID in it. The reason being that a user can close a modal without triggering an event, and reopen one with the same command. In such cases, the ",(0,o.kt)("inlineCode",{parentName:"p"},"wait_for")," for the old modal will still be active, which will resume execution for both commands."),(0,o.kt)("p",{parentName:"div"},"In the lower-level interface, you can implement this like so:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="modals.py"',title:'"modals.py"'},'- custom_id="create_tag_low",\n+ custom_id=f"create_tag_low-{inter.id}",\n\n% in wait_for\n- check=lambda i: i.custom_id == "create_tag_low" and i.author.id == inter.author.id,\n+ check=lambda i: i.custom_id == f"create_tag_low-{inter.id}",\n')))),(0,o.kt)("h2",{id:"textinput-components"},(0,o.kt)("inlineCode",{parentName:"h2"},"TextInput")," components"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TextInput")," is a component in itself, like buttons and select menus. It is responsible for receiving user input in the form of text, and cannot be used outside of modals. It has the following customizable attributes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"label")," - The label of the text input."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"custom_id")," - An ID specified to the text input."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"style")," - Utilizes one of ",(0,o.kt)(v,{reference:"disnake.TextInputStyle",mdxType:"DocsLink"})," for the component. Defaults to ",(0,o.kt)(v,{reference:"disnake.TextInputStyle.short",mdxType:"DocsLink"},"short"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"placeholder")," - The placeholder text that is shown if nothing is entered."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value")," - The pre-filled value of the text input (up to ",(0,o.kt)("inlineCode",{parentName:"li"},"max_length"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"required")," - Whether the text input is required. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"True"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"min_length")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"max_length")," - Set the minimum and maximum length of the inputs respectively.")),(0,o.kt)("p",null,"These attributes can be used per ",(0,o.kt)("inlineCode",{parentName:"p"},"TextInput")," component, as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="textinput.py"',title:'"textinput.py"'},'disnake.ui.TextInput(\n    label="Name",\n    placeholder="Foo Tag",\n    custom_id="name",\n    style=TextInputStyle.short,\n    max_length=50,\n)\n')),(0,o.kt)("p",null,"The ",(0,o.kt)(v,{reference:"disnake.TextInputStyle",mdxType:"DocsLink"})," attribute currently has two styles, which have multiple aliases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"short")," - Represents a single-line text input component. Also called ",(0,o.kt)("inlineCode",{parentName:"li"},"single_line"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"long")," - Represents a multi-line text input component. Also called ",(0,o.kt)("inlineCode",{parentName:"li"},"multi_line")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"paragraph"),".")),(0,o.kt)("h2",{id:"modal-callback-methods"},"Modal callback methods"),(0,o.kt)("h3",{id:"callback"},(0,o.kt)(v,{reference:"disnake.ui.Modal.callback",mdxType:"DocsLink"},(0,o.kt)("inlineCode",{parentName:"h3"},"callback()"))),(0,o.kt)("p",null,"It refers to the callback associated with the modal, and returns a ",(0,o.kt)(v,{reference:"disnake.ModalInteraction",mdxType:"DocsLink"})," object which includes the values input by the user. It is overriden by subclasses, allowing the developer to define the action done on the modal input received."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="modals.py" {5,6}',title:'"modals.py"',"{5,6}":!0},'class MyModal(disnake.ui.Modal):\n    def __init__(self):\n        super().__init__(...)\n\n    async def callback(self, inter: disnake.ModalInteraction):\n        await inter.response.send_message("User input was received!")\n')),(0,o.kt)("p",null,"If you're using the lower-level interface for sending the modal, you'll have to utilize an event/listener to check for the custom ID and respond to the interaction. There is an ",(0,o.kt)(v,{reference:"disnake.on_modal_submit",mdxType:"DocsLink"})," event for this purpose."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="modals.py" {10-14}',title:'"modals.py"',"{10-14}":!0},'@bot.slash_command()\nasync def tags(inter: disnake.ApplicationCommandInteraction):\n    ...\n    await inter.response.send_modal(..., custom_id="modal_custom_id")\n\n\n...\n\n\n@bot.event()\nasync def on_modal_submit(inter: disnake.ModalInteraction):\n\n    if inter.custom_id == "modal_custom_id":\n        await do_stuff_here()\n')),(0,o.kt)("p",null,"You can alternatively use ",(0,o.kt)(v,{ext:"commands",reference:"disnake.ext.commands.Bot.wait_for",mdxType:"DocsLink"},"bot.wait_for()")," for this purpose, inside the command itself."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="modals.py" {}',title:'"modals.py"',"{}":!0},'@bot.slash_command()\nasync def tags(inter: disnake.ApplicationCommandInteraction):\n    ...\n    await inter.response.send_modal(..., custom_id="modal_custom_id")\n\n    modal_inter: disnake.ModalInteraction = await bot.wait_for(\n        "modal_submit",\n        check=lambda i: i.custom_id == "modal_custom_id" and i.author.id == inter.author.id,\n        timeout=300,\n    )\n')),(0,o.kt)("h3",{id:"on_error"},(0,o.kt)(v,{reference:"disnake.ui.Modal.on_error",mdxType:"DocsLink"},(0,o.kt)("inlineCode",{parentName:"h3"},"on_error()"))),(0,o.kt)("p",null,"Received when the modal submission encounters an error. It returns the error as well as a ",(0,o.kt)(v,{reference:"disnake.ModalInteraction",mdxType:"DocsLink"})," object that can be used to respond to the user. The default implementation prints the traceback to ",(0,o.kt)("inlineCode",{parentName:"p"},"stderr"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="modals.py" {5,6}',title:'"modals.py"',"{5,6}":!0},'class MyModal(disnake.ui.Modal):\n    def __init__(self):\n        super().__init__(...)\n\n    async def on_error(self, error: Exception, inter: disnake.ModalInteraction):\n        await inter.response.send_message(f"An error occurred!\\n```{error}```")\n')),(0,o.kt)("h3",{id:"on_timeout"},(0,o.kt)(v,{reference:"disnake.ui.Modal.on_timeout",mdxType:"DocsLink"},(0,o.kt)("inlineCode",{parentName:"h3"},"on_timeout()"))),(0,o.kt)("p",null,"Called when the user does not respond before specified timeout; the modal is removed from cache without an interaction being made."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"No interaction object is passed to the ",(0,o.kt)(v,{reference:"disnake.ui.Modal.on_timeout",mdxType:"DocsLink"},"on_timeout()")," method. It is to be subclassed solely for backend functions."))),(0,o.kt)("h2",{id:"modal-notes"},"Modal notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The only component that can currently be used with modals is ",(0,o.kt)(v,{reference:"disnake.ui.TextInput",mdxType:"DocsLink"},"TextInput"),". Buttons and select menus cannot be used inside modals."),(0,o.kt)("li",{parentName:"ul"},"You can add components to a ",(0,o.kt)(v,{reference:"disnake.ui.Modal",mdxType:"DocsLink"},"disnake.ui.Modal")," object using the ",(0,o.kt)(v,{reference:"disnake.ui.Modal.append_component",mdxType:"DocsLink"},"append_component()")," method. To directly add text inputs, use ",(0,o.kt)(v,{reference:"disnake.ui.Modal.add_text_input",mdxType:"DocsLink"},"add_text_input()")," instead."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)(v,{reference:"disnake.TextInputStyle",mdxType:"DocsLink"})," defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"short"),", if not specified for the component."),(0,o.kt)("li",{parentName:"ul"},"All ",(0,o.kt)(v,{reference:"disnake.ui.TextInput",mdxType:"DocsLink"},"TextInput")," components are required by default.")),(0,o.kt)("h2",{id:"modal-limits"},"Modal limits"),(0,o.kt)("p",null,"There are a few limits to be aware of while using modals due to the API's limitations. Here is a quick reference you can come back to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A modal can have a total of ",(0,o.kt)("strong",{parentName:"li"},"5 action rows"),"."),(0,o.kt)("li",{parentName:"ul"},"A modal's ",(0,o.kt)("inlineCode",{parentName:"li"},"title")," has a maximum length of ",(0,o.kt)("strong",{parentName:"li"},"45 characters"),"."),(0,o.kt)("li",{parentName:"ul"},"The text input ",(0,o.kt)("inlineCode",{parentName:"li"},"label")," has a maximum length of ",(0,o.kt)("strong",{parentName:"li"},"45 characters"),"."),(0,o.kt)("li",{parentName:"ul"},"The text input ",(0,o.kt)("inlineCode",{parentName:"li"},"placeholder")," is limited to ",(0,o.kt)("strong",{parentName:"li"},"100 characters"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"custom_id")," is limited to ",(0,o.kt)("strong",{parentName:"li"},"100 characters"),", for both modals and text inputs."),(0,o.kt)("li",{parentName:"ul"},"The pre-defined ",(0,o.kt)("inlineCode",{parentName:"li"},"value")," has a maximum length of ",(0,o.kt)("strong",{parentName:"li"},"4000 characters")," (overriden by the developer-defined limit)."),(0,o.kt)("li",{parentName:"ul"},"The minimum and maximum values of a text input can be set from ",(0,o.kt)("strong",{parentName:"li"},"0-4000 characters")," and ",(0,o.kt)("strong",{parentName:"li"},"1-4000 characters")," respectively.")),(0,o.kt)("h2",{id:"resulting-code"},"Resulting code"),(0,o.kt)(y,{mdxType:"ResultingCode"}))}N.isMDXComponent=!0},898:function(e,t,n){t.Z=n.p+"assets/images/modals-preview-36f092cc1856cfd81b04b6ac649ae087.png"}}]);