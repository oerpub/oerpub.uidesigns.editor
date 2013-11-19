oerpub-web-ui-docs
==================

OERPub Web User Interface documentation

Reading the docs
----------------
    
    Clone the repo

    ::

        git clone git@github.com:oerpub/oerpub-web-ui-docs.git oerpub-web-ui-docs

    Install Sphinx (see below for installation steps).

    Now you can build the docs by:

    ::

        cd oerpub-web-ui-docs
        ./make html

Contributing
------------

    For those who want to contribute to the documentation, the source files are in
    ./source. Start with index.rst.

    If you have not done so yet, clone the repo

    ::

        git clone git@github.com:oerpub/oerpub-web-ui-docs.git oerpub-web-ui-docs

    Install Sphinx (see below for installation steps).

    Edit the files in oerpub-web-ui-docs/source with your favourite text editor.

    Quick guide to rst:
        http://docutils.sourceforge.net/docs/user/rst/cheatsheet.txt

Install Sphinx
--------------
    
    Install system wide

    ::

        sudo easy_install sphinx
        cd oerpub-webui-docs

    Or you can sandbox it by installing a virtual environment:

    ::
        
        cd oerpub-webui-docs
        virtualenv .
        ./bin/easy_install sphinx

