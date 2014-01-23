## Design: Ability to move, copy, or link parts of books 

Currently the book editor has a shelf/picker that facilitates copying content from one book to another. But the original design called for the ability to either move the content, copy it, or make a link such that two books share the same content. We orginally tried to determine likely scenarios and circumstances such that we could guess the most likely author intent and make move, copy, or link the default in that case. After much exploration, we decided that determining the best default and communicating that to the author so they could feel confident in predicting why things occurred was too difficult. So with one exception, we settled on asking the author every time. The exception is when moving content within a single book, which will always be a move. Because rearranging content from other books isn't that large a part of writing a textbook, we felt the additional ask was worth the simplification in the model.

Max worked on the wording of the choice, and we vetted with our group of teachers during a textbook sprint in South Africa. They felt that the options made sense and that they would use all three. Real testing with authors actively working on books may further refine the model in the future.

This should mostly be implemented in bookish, with all the saving and creating of new files occuring in github-bookeditor or atc and other book editor implementations.

### Goals

1. Make moving content between books possible.
2. Make copying \(or deriving copies\) of content possible.
3. Make using existing content possible in multiple books.
4. Make these three options clear to authors
5. Keep the implementation straight forward.

### Mockup

[w-editor-33.html](http://oerpub.github.io/uidesigns/mockups/editor-ideas/w-editor-33.html): To see the action
 * click on the green bar on the left to unfold the bookshelf
 * click on Moby Dick to unfold that book
 * drag "Loomings" over into the Table of Contents panel for "Advaned Algebra II" and drop it.

### Basic Design

![Popup for move/copy/link](http://oerpub.github.io/uidesigns/designs/images/move-copy-link.png)

Note that the mockup isn't exactly like the current editor, so details other than the copy dialog should be ignored. 

- [ ] Dialog title "Use same module, make a new copy, or move it?"
- [ ] Radio buttons for "Use this same module in both books. Changes will appear in both books.", "Make a copy", "Move module"
- [ ] OK and Cancel buttons.

### Dragging content within a single book

- [ ] Content just moves. 
- [ ] Trigger update navigation storage. 
- [ ] For Github-bookeditor: Spine in the opf is updated
- [ ] Update navigation storage. For Github-bookeditor: Nav is updated.

### Dragging content between books within the shelf/workspace or between the shelf and the TOC of an open book.

- [ ] Dialog comes up as the item is dropped.

#### A. Choosing "Use this same module"

![Link symbol](http://oerpub.github.io/uidesigns/designs/images/link-symbol.png)

- [ ] update the TOC
- [ ] make a link symbol by the module in both books
- [ ] Trigger update navigation storage.
- [ ] Github-bookeditor:update nav and opf in copied to second book. 
- [ ] Github-bookeditor:save opf and nav files

#### B. Choosing "Make a copy"

- [ ] This is the existing behavior and no changes are needed. 
- [ ] New copy gets title "Copy of ...", a new module is created and saved with that and a hash bit as the file name.

### C. Choosing "Move module"

- [ ] add module to one TOC and remove from the other
- [ ] trigger navigation storage
- [ ] Github-bookeditor: update nav and opf to add to one set and delete from the other.
- [ ] Github-bookeditor: save opf and nav files

