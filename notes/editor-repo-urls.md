# Repository URL behavior in the Editor

The following design is predicated on the new login design that explicitly asks what bookshelf to load. 
If you do not specify a repository, the editor will ask which one you want to load. The repositories are referred
to as bookshelves since you can have multiple books in each repository.

Currently, the bookshelf/repository is specified on the URL as follows:

(editor-url/#repo/github-id/github-repository-id).

The editor doens't behave consistently if you attempt to change the repository by changing the URL and reloading. The
following is an attempt to define all the cases and the intended behavior.

## Cases

### Brand new tab or window
1. Type the editor URL with **no shelf**. 
*Behavior*: Login screen followed by bookshelf chooser
2. Type the editor URL with a **particular shelf specified** (#repo/owner-id/shelf-id)
*Behavior*: Login screen followed by loading the shelf specified on the URL.

### Existing tab or window, where you have been editing a book on a bookshelf.
1. Type the editor URL with **no shelf**. 
*Behavior*: Show the bookshelf chooser
2. Type the editor URL with a **particular shelf specified** (#repo/owner-id/shelf-id)
*Behavior*: Load the shelf specified on the URL.
