## Design: Implement inline semantic elements. 

The designs for the editor include the ability to add semantic tags to text within a sentence, \(an inline element rather than a block element \). 

### Goals

1. Make it possible to mark "definition terms", "foreign words", and "programming code".
2. For definitions, make it possible to insert the definition block into the text.
3. Encourage switching from bold/italics/underline to more semantic description.

### Mockup

[editor-57.html](http://oerpub.github.io/uidesigns/mockups/editor-ideas/editor-57.html): To see the action
 * highlight any text
 * hover over text that appears bold

### Basic Design

**Menu icon**

![Menu icon](http://oerpub.github.io/uidesigns/designs/images/inline-hovering-over-inline.png)

**Menu**

![Menu opened](http://oerpub.github.io/uidesigns/designs/images/inline-menu-clicked.png)

### Highlighting some text in the body.

![Menu icon](http://oerpub.github.io/uidesigns/designs/images/inline-highlighting-text.png)

- [ ] Selected content appears highlighted 
- [ ] Orange menu circle comes up to the left and pointing down as long as there is room for the menu to come up.
- [ ] Orange circle points up if the menu needs to go up to fit in the window.
- [ ] If you hover over the orange circle it says, "Click menu for more formatting options"

### Hovering over an emphasized or semantic inline element

![Menu icon hovered](http://oerpub.github.io/uidesigns/designs/images/inline-hover-over-menu-icon.png)

- [ ] Content inside the emphasis or semantic region highlights
- [ ] The rest is the same as above

### Clicking on the menu

![Inline menu clicked](http://oerpub.github.io/uidesigns/designs/images/inline-menu-clicked.png)

- [ ] If the item is semantic \(like a definition's term\), check that item in the menu.
- [ ] If the item is just emphasized bold, italics, or underlined, don't check anything
- [ ] Include "key term" bold, "foreign text" italicized, "code font" monospaced, and "unformatted" plain.

### Clicking on the "\(?\)"

![Clicking on help](http://oerpub.github.io/uidesigns/designs/images/inline-clicking-help.png)

- [ ] Bring up side help, with the two bolded headings shown in the image above.
- [ ] Variation for the first para "This menu appears under highlighted text, emphasized text, and special features like key terms. It provides a quick way to mark text with special features. If you just want to use bold or italics, those can be found in the toolbar at the top of the content." 

### Clicking on "key term"

![Clicking on key term](http://oerpub.github.io/uidesigns/designs/images/inline-define-now.png)

- [ ] if unchecked, add a check mark
- [ ] pull up side option "Define now (optional)"
- [ ] add ```<term></term>``` around the highlighted text

#### Clicking on "Define now (optional)"

![Clicking on define now](http://oerpub.github.io/uidesigns/designs/images/inline-clicking-define-now.png)

- [ ] drop in a definition block beneath the current block
- [ ] auto supply the highlighted text as the term next to "Definition"
- [ ] variation: should be the same as if you dragged a definition here. In other words we are not implementing the "Move this definition to the glossary" or "add meaning" yet.

### Clicking on "foreign"

- [ ] if unchecked, add a check mark
- [ ] add ```<foreign></foreign>``` around the highlighted text

### Clicking on "code font"

- [ ] if unchecked, add a check mark
- [ ] add ```<code></code>``` around the highlighted text

### Clicking on "unformatted"

- [ ] if unchecked, add a check mark
- [ ] remove the inline formatting from this text. 