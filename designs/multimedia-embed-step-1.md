## Plugin to embed multimedia

We want a multimedia embed tool, that will allow video and other embedded content in the editor. 
We will do this in several stages. Each stage will be a separate issue. This issue will cover the 
first stage.

**Stages**

1. Embed by URL
2. Check that whether captions are available for the video and add metadata to the embed if so.
3. Add youtube search.
4. Support print alternates.

### Goals

1. Make it possible to embed multimedia in OERPUB editor in a standard way.
2. Make accessible multimedia easy to discover \(by including metadata\). 
3. Allow searching of youtube.
4. Create print alternates for multimedia.
5. Design a way to edit the print alternates. \(Probably won't implement this.\)

### Mockups and Resources

[editor-57.html Firefox only](http://oerpub.github.io/uidesigns/mockups/editor-ideas/editor-57.html): To see the action
 * Click "Go"
 * hover over text that appears bold

### Global variations

- [ ] Title of the dialog should say "Add video, slides or other media"
- [ ] Do NOT include "or Upload video"
- [ ] Search isn't in this phase so ignore that at the beginning.
- [ ] Not the right video? is the same as "Back" and can be ommitted if it is a hassle. Check
      this item if it has been ommitted.
- [ ] Change "Video Caption" to "Figure Caption" to distinguish from captioned video.
- [ ] Default text for caption coming soon.
- [ ] Add "Figure Title" above "Figure Caption" : default text should be the oEmbed "title"
- [ ] Beneath both inputs, add in gray italics "The title will show up above and 
		the caption will show up below the media you are inserting."
- [ ] Change "Insert Video" to "Insert Now"

### Format for the embed code

* [Sample video html](https://github.com/oerpub/uidesigns/blob/master/designs/sample-video-embed.html) : Note that not all parts of the format are relevant at the first stage. In particular, the
accessibility metadata and the alternates stuff won't be present for the very first version. 

### Screenshots

