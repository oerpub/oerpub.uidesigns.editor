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

### Mockups

[editor-57.html Firefox only](http://oerpub.github.io/uidesigns/mockups/editor-ideas/editor-57.html): To see the action
 * Click "Go"
 * hover over text that appears bold

#### Screenshots

![Multimedia input](http://oerpub.github.io/uidesigns/designs/images/media/media-step1.png)

![Multimedia confirmation](http://oerpub.github.io/uidesigns/designs/images/media/media-step2.png)

![Multimedia in the doc](http://oerpub.github.io/uidesigns/designs/images/media/media-in-the-doc.png)

### Variations from the mockup

This is the list of all of them. They are duplicated under each step as a checklist.

* Title of the dialog should say "Add video, slides or other media"
* Do NOT include "or Upload video"
* Search isn't in this phase so ignore that at the beginning.
* Not the right video? is the same as "Back" and can be ommitted if it is a hassle. Check
      this item if it has been ommitted.
* Change "Video Caption" to "Figure Caption" to distinguish from captioned video.
* Default text for caption coming soon.
* Add "Figure Title" above "Figure Caption" : default text should be the oEmbed "title"
* Beneath both inputs, add in gray italics "The title will show up above and 
		the caption will show up below the media you are inserting."
* Change "Insert Video" to "Insert Now"
* Once inserted show both title and caption like with images.
* Once inserted, add mechanism to edit the title/caption/metadata like with images.

### Format for the embed code

* [Sample video html](https://github.com/oerpub/uidesigns/blob/master/designs/sample-video-embed.html) : Note that not all parts of the format are relevant at the first stage. In particular, the
accessibility metadata and the alternates stuff won't be present for the very first version. 

### Implementation Resources

* [oembed examples](http://mountainbunker.org/~maxwell/oerpub/video/oembed-01.html): Max found some jquery that will negotiate oEmbed for a bunch of different sites 
* [noembed](http://noembed.com/) Noembed also looks interesting. A service that does a bunch 
of oembed providers plus a bunch extra. 

### Step 1: First page of the dialog for the URL

- [ ] Arrow shows in the doc where the media will go.

**Variations from the mockup**

- [ ] Title of the dialog should say "Add video, slides or other media"
- [ ] Do NOT include "or Upload video"
- [ ] Search isn't in this phase so ignore that at the beginning.
- [ ] Youtube works http://www.youtube.com/watch?v=01viXRa8Hqg
- [ ] Vimeo works http://vimeo.com/51075488
- [ ] Slideshare works http://www.slideshare.net/kathi-fletcher/real-remix-realized
- [ ] Flicker works http://www.flickr.com/photos/openpad/3327933534/
- [ ] Twitter works https://twitter.com/kefletcher/status/326810345677152256

### Step 1 Error: oEmbed doesn't return good stuff

- [ ] If oEmbed doesn't return something useful, "We could not determine how to include the media. 
Please check the URL for the media and try again or cancel."

### Step 2: Previewing the video and adding title/caption

**Variations from the mockup**

- [ ] Not the right video? is the same as "Back" and can be ommitted if it is a hassle. Check
      this item if it has been ommitted.
- [ ] Change "Video Caption" to "Figure Caption" to distinguish from captioned video.
- [ ] Default text for caption coming soon.
- [ ] Add "Figure Title" above "Figure Caption" : default text should be the oEmbed "title"
- [ ] Beneath both inputs, add in gray italics "The title will show up above and 
		the caption will show up below the media you are inserting."
- [ ] Change "Insert Video" to "Insert Now"

### Step 3: View in the doc

**Variations from the mockup**

- [ ] Once inserted show both title and caption like with images.
- [ ] Once inserted, add mechanism to edit the title/caption/metadata like with images.