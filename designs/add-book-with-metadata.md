# Design: Add New Book with Metadata 

Design for adding basic metadata at the time a new book is created.

### Step 1. Add new book

![Add new book from Bookshelf](images/add-new-book.png)

Should be no change from existing implementation.

### Step 2. Request title

![Add book title](images/add-book-title.png "Make sure to change OK to Next")

- [ ] Change "OK" to "Next" on the title request, since we are going to request metadata before finishing.
- [ ] Change "What title would you like to use for this?" to "What title would you like to use for this book?"

### Step 3. Save book

Save \<title\>.opf, \<title\>-nav.html, \<title\>-module1.html

### Step 4. Request metadata

![Add book metadata](images/add-book-metadata.png "Make sure to change Save to Next")

Mockup (View in Firefox): [w-editor-33.html](http://oerpub.github.io/uidesigns/max/editor-ideas/w-editor-33.html)

This is the same metadata collection dialog that will come up from various other interactions, but it has a couple of variations from the mockup when it comes from "Create new book".

#### Tasks for the book metadata pane

Not done yet.

#### Variations from the mockup

- [ ] 1. Instead of "Save", use "Next" and forward to the tab to the right. About -> Authors, Authors -> Summary.
- [ ] 2. On the right most tab, "Summary", say "Save".

#### Notes

- [ ] 1. The author can click on the tabs to move through them in addition to using the "Next" button. 
- [ ] 2. If the author cancels, no new metadata will be saved, but the book will still be created since that happens after the title is entered.

### Step 5.A Save metadata in the .opf file

Not done yet.
