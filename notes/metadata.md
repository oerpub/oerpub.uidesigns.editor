# Metadata for books and book chapters (modules)

We need to write book level metadata into the .opf file to be EPUB3 compliant. We can also put the metadata into the html
files so that the online view of the book is properly metadata'd. The book level metadata can go into the -nav.html file
and the chapter/module level metadata can go into those html files.

## Goals

* Compatibility with 
  * OpenStax/CNX metadata
  * Dublin Core
  * Schema.org
  * Access for all (accessibility metadata)
  
* Portability 
  * Available wherever the content goes at an appropriate granularity.
  
* Convenience
  * Don't make authors repeat metadata. Make it easy to reuse book level metadata, and also make it possible to provide
  metadata per module.
