# Design: Consistent edit content/edit metadata/rename/delete icons   

Design for making the icons in the bookshelf and toc consistent, functional, and efficient.

## Goals

1. Pick bootstrap icons to use
2. Have just two icons show up on each item.
3. Make common activities doable with one click.
  a. Unfolding books and chapters to see inside them by clicking on the title.
  b. Opening books, chapters, and modules for editing by clicking on the arrow ->.
4. Provide a way to edit module and book metadata

## Basic Design

![Icons for edit/rename/etc](http://oerpub.github.io/uidesigns/designs/images/ss-of-toc-icons-and-menu-01.png)

Note that the mockup isn't exactly like the current editor. The shelf is called the picker in the mockups and various other differences. Anything unrelated to the icons should be ignored.

### Step 1. Global design and variations checklist

- [ ] Find and add the icons that Max used. They are on [mockup-toc-icons-06](https://github.com/oerpub/github-bookeditor/tree/mockup-toc-icons-06) I think.
- [ ] Move delete under the arrow "->".
- [ ] Use new icons on everything in the shelf/workspace and in the TOC
- [ ] Variation: Change "Edit description/authors" to "Edit authors, license, etc." to be consistent with the in-module metadata mechanism \(on a separate issue\).

### Step 2. Book icons behavior

- [ ] Hover over the down arrow opens a menu
- [ ] "Rename this book" inside the menu \(down arrow\) 
- [ ] "Edit authors, license, etc." inside the menu 
- [ ] "Delete this book" inside the menu 
- [ ] Hover over the right arrow says "Go edit this book"
- [ ] Clicking on the right arrow opens the book in the TOC and the first module of the book in the editor
- [ ] Clicking on the book title unfolds the book in the picker and either does nothing, or opens the metadata editor, whichever is easier.

### Step 3. Book division / folder icons behavior

- [ ] Hover over the down arrow opens a menu
- [ ] "Rename this module" inside the menu \(down arrow\)
- [ ] No metadata editing should show up
- [ ] "Delete this module" inside the menu \(down arrow\)
- [ ] Hover over the right arrow says "Go edit this book division"
- [ ] Clicking on the right arrow opens the book in the TOC and unfolds the selected division and opens the first module of the book division in the editor
- [ ] Clicking on the book division title unfolds the book division in the picker and the TOC.

### Step 4. Module icosns behavior

- [ ] Hover over the down arrow opens a menu
- [ ] "Rename this module" inside the menu \(down arrow\)
- [ ] "Edit authors, license, etc." inside the menu \(down arrow\)
- [ ] "Delete this module" inside the menu \(down arrow\)
- [ ] Hover over the right arrow says "Go edit this module"
- [ ] Clicking on the right arrow opens the book in the TOC and opens the module in the editor, unfolding whatever divisions are necessary
- [ ] Clicking on the module title \(which looks like a link\) opens the module for editing as described above.

