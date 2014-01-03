# Design: Add New Book with Metadata 

Design for adding basic metadata at the time a new book is created.

### Step 1. Add new book

![Add new book from Bookshelf](http://oerpub.github.io/uidesigns/designs/images/add-new-book.png)

Should be no change from existing implementation.

### Step 2. Request title

![Add book title](http://oerpub.github.io/uidesigns/designs/images/add-book-title.png "Make sure to change OK to Next")

- [ ] Change "OK" to "Next" on the title request, since we are going to request metadata before finishing.
- [ ] Change "What title would you like to use for this?" to "What title would you like to use for this book?"

### Step 3. Save book

Save \<title\>.opf, \<title\>-nav.html, \<title\>-module1.html

I think their should be no changes from the existing implementation, except possibly adding part of the book title to module1's title so we don't end up with a bunch of module1's.

- [ ] Add book title to module 1.

### Step 4. Request metadata

Mockup (View in Firefox): [w-editor-33.html](http://oerpub.github.io/uidesigns/max/editor-ideas/w-editor-33.html) : Click on module title area to see dialog.

This is the same metadata collection dialog that will come up from various other interactions, but it has a couple of variations from the mockup when it comes from "Create new book". 

To activate the metadata dialog so you can see all the parts, click on the module title, "Laws of Exponents" in orange on the editable area and choose "Yes, edit book information first". \(Implementing module metadata will be described in a separate design doc.\)

#### Variations from the mockup

- [ ] 1. Instead of "Save", use "Next" and forward to the tab to the right. About -> Authors, Authors -> Summary.
- [ ] 2. On the right most tab, "Summary", say "Save".

#### Notes relevant to all the tabs

- [ ] 1. The author can click on the tabs to move through them in addition to using the "Next" button. 
- [ ] 2. If the author cancels, no new metadata will be saved, but the book will still be created since that happens after the title is entered.

#### Tab 1: About

![Book metadata: Tab 1](http://oerpub.github.io/uidesigns/designs/images/book-metadata-tab1-about.png "Make sure to change Save to Next") : Mockup (View in Firefox): [w-editor-33.html](http://oerpub.github.io/uidesigns/max/editor-ideas/w-editor-33.html) : Click on module title area to see dialog.

- [ ] Modal title done. "Edit the authors and other metadata on this book"
- [ ] Editable title area done. "Title (required): \<title\>" click to edit, highlights on hover
- [ ] Implement subject and keywords entry. Comma, tab, or enter, should all separate entries. The entries should then work like gmail addresses, or the author ids on the connexions beta.
- [ ] Inside subject and keywords, do light gray italics instructions. This is not on the mockup. "Use comma, or tab to separate"
- [ ] Language : Use the list here - http://remix.oerpub.org/metadata .
- [ ] Google Analytics: If this could work like it does on remix, and have a check box that unfolds the value. [google-analytics.png](images/google-analytics.png) [ga-unfolded.png](images/ga-unfolded.png) 
- [ ] License: Use the same values as in the image uploader. [licenses.png](images/licenses.png)
 
#### Tab 2: Authors

![Book metadata: Tab 2](http://oerpub.github.io/uidesigns/designs/images/book-metadata-tab2-authors.png "Make sure to change Save to Next") 

- [ ] To be done

#### Tab 3: Summary

![Book metadata: Tab 3](http://oerpub.github.io/uidesigns/designs/images/book-metadata-tab3-summary.png "Make sure to change Save to Save Information") 

- [ ] To be done

### Step 5.A Save metadata in the .opf file

Not done yet.

### Step 5.B Save metadata in the -nav.html file

Not done yet.
