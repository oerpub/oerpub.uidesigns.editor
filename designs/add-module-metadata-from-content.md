## Design: Add module metadata via the module content

Design for adding basic metadata to modules.

This issue should probably be implemented mostly via the Aloha editor with the detection of book metadata and the save interface implemented in github-bookeditor or atc respectively.

Goals
1. Detect when book metadata has not been filled out and encourage adding metadata at the top level.
2. Allow modules to just refer to the book metadata for their metadata if they don't need to be custom.
3. Make the model understandable by authors. We experimented with various complex modes that would allow you to override individual metadata fields, but opted to stick with a simple all or none model where the module can either point to the book metadata or create all custom metadata.

## Mockup

[w-editor-33.html](http://oerpub.github.io/uidesigns/mockups/editor-ideas/w-editor-33.html)

### Step 1. Module content shows title and authors if different from book authors

Within the module, add a new non-editable region that shows the title \(and any custom module metadata that has been added \)

![Module title in content](http://oerpub.github.io/uidesigns/designs/images/module-metadata-title-hovering.png)

- [ ] Title shows up in module
- [ ] If the module has custom authors, show "By: <author name>"
- [ ] On hover over the title, the region highlights and says "Click to edit title, authors, license, etc."
- [ ] On click dialog comes up.

### Step 1-alternate. Accessing module metadata editing from TOC and Shelf.

- [ ] In bookish, if click on the menu off a module in the TOC and shelf/workspace, if choose "edit author, license etc." this same series of actions should happen.

### Step 2. If in bookish, check book metadata

![Module metadata choice dialog](http://oerpub.github.io/uidesigns/designs/images/module-metadata-book-choice.png)

If we are in a book editor, check to see if book metadata other than the title has been filled in. If it has not, give the author a prompt to do that first. 

- [ ] Choice prompt as above comes up.
- [ ] If choose to do book first, goes to book metadata dialogs that are already implemented. It is fine to require authors click again on the title if they want to edit the module metadata when they are done.
- [ ] If choose to go ahead and edit the module, go to the next step. 

### Step 3 Metadata dialog: Notes relevant to all the tabs

- [ ] The author can click on the tabs to move through them.
- [ ] Cancel should have a confirmation since you could lose a lot of work. "Are you sure you want to cancel? The title, authors, and other information about this book will retain their previous values."

### Module "About" tab

![Module metadata choice dialog](http://oerpub.github.io/uidesigns/designs/images/module-metadata-about.png)

If we are in the Aloha Editor without being inside a book editor, go directly here. Or if the book metadata is already filled in go directly here. By filled in, we mean that any book metadata besides the title is completed.

- [ ] If book metadata is available, "About" dialog shows book metadata, defaults to using the book metadata and provides radio options
- [ ] If the radio button for custom is selected, all book metadata disappears
- [ ] If switch from custom to book, an alert warns that any changes will be lost, and gives option to cancel.
- [ ] Modal title done. "Edit the authors and other metadata on this module"
- [ ] Editable title area done. "Title (required): \<title\>" click to edit, highlights on hover
- [ ] Title color matches the module title color in the TOC.
- [ ] Implement subject and keywords entry. Comma, tab, or enter, should all separate entries. The entries should then work like gmail addresses, or the author ids on the connexions beta.
- [ ] Inside subject and keywords, do light gray italics instructions. This is not on the mockup. "Use comma, or tab to separate"
- [ ] Language : Use the list on the metadata page of remix - http://remix.oerpub.org .
- [ ] Google Analytics: If this could work like it does on remix, and have a check box that unfolds the value. [google-analytics.png](http://oerpub.github.io/uidesigns/designs/images/google-analytics.png) [ga-unfolded.png](http://oerpub.github.io/uidesigns/designs/images/ga-unfolded.png) 
- [ ] License: Use the same values as in the image uploader. [licenses.png](http://oerpub.github.io/uidesigns/designs/images/licenses.png)

#### Module "authors" tab

![Module metadata authors dialog](http://oerpub.github.io/uidesigns/designs/images/module-metadata-authors.png)

- [ ] If book metadata is available, "Authors" dialog shows book metadata, defaults to using the book metadata and provides radio options
- [ ] If the radio button for custom is selected, all book metadata disappears
- [ ] If switch from custom to book, an alert warns that any changes will be lost, and gives option to cancel.
- [ ] Implement authors, copyright holders, editors, and translators. Use the same entry mechanism as for subjects and keywords. 
- [ ] Add help text within the author field. \(See subjects and keywords\)
- [ ] Add "Publisher \(optional\)" beneath "Copyright Holder" \(these aren't in the mockup\)
- [ ] Add "Illustrator \(optional\)" at the end \(these aren't in the mockup\)

#### Module "summary" tab

![Module metadata summary dialog](http://oerpub.github.io/uidesigns/designs/images/module-metadata-summary.png)

- [ ] If book metadata is available, "Authors" dialog shows book metadata, defaults to using the book metadata and provides radio options
- [ ] If the radio button for custom is selected, all book metadata disappears
- [ ] If switch from custom to book, an alert warns that any changes will be lost, and gives option to cancel.
- [ ] Implement mini-formatting toolbar for the summary eventually \(separate ticket for it\).  
- [ ] Make sure can enter multiple paragraphs.
- [ ] Make entry box big enough to fill the tab reasonably.
- [ ] Make entry box stretchy.

### Step 4 Save metadata 

Still being designed.

### Metadata saves should update the modified date in the module and book

ie. ```<meta properties="dcterms:modified">2013-12-19</meta>```

 - [ ] Update in the opf file.
 - [ ] Update in the nav file.
 - [ ] Update in the module.
 