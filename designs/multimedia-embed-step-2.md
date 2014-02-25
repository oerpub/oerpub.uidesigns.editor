## Plugin to embed multimedia - add accessibility metadata in place

We want a multimedia embed tool that will allow video and other embedded content in the editor. 
We will do this in several stages. Each stage will be a separate issue. This issue covers the second stage.
The issue covering the first stage and listing all the stages is here: 

** This Stage**

2. Check whether captions are available for the video and add metadata to the embed if so. \(This issue.\)

### Goals

* Make accessible multimedia easy to discover \(by including metadata\). 

### Mockups

[editor-57.html Firefox only](http://oerpub.github.io/uidesigns/mockups/editor-ideas/editor-57.html): To see the action
 * Click the [>] symbol in the toolbar.

The mockup isn't super relevant to this issue.

### Format for the embed code

* [Sample video html](https://github.com/oerpub/uidesigns/blob/master/designs/sample-video-embed.html) : N

In particular, note the accessibility metadata.
<meta itemprop="accessibilityFeature" content="captions" /> <!-- add this if 
  http://api.a11ymetadata.org/captions/youtubeid=Y2IJb1YnAmQ/youtube/ returns 'true' -->

### Implementation Resources

* a11ymetadata API for checking captions: (http://api.a11ymetadata.org/captions/youtubeid=Y2IJb1YnAmQ/youtube/) Note that the API could disappear, so make sure to fail gracefully.

### Checklist

- [ ] When embedding by URL, check the URL to see if there are captions at youtube. 
- [ ] If so, add to the metadata within the figure element.
- [ ] If the API disappears, output message in the console.
- [ ] If the API disappears, just don't add the metadata, but don't inform the author or have the app
fail in some way. That API could disappear if Benetech stops hosting it. 

