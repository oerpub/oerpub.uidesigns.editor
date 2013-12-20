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

## Ideas

* Duplicate info in .opf (in dc xml) and -nav.html (in schema.org)
* Point to book level metadata in .html files in some way
* Assume that book level metadata applies to all modules unless otherwise specified (especially if we can point to the metdata within the -nav.html file.
* Have specifications in the module if they are different from the book level stuff.

## Background

### Connexions metadata fields

* Title
* Author (author, editor, translator, illustrator)
* Copyright holder (publisher, rights)
* Subject
* Language
* Keywords
* Summary/Abstract
* GA tracking code

### EPUB3 OPF file formats

#### Required fields
* Identifier
* Title
* Lanugage

Ex:
```
    <dc:identifier id="pub-id">http://oerpub19.github.io/empty-book</dc:identifier>
    <dc:title>My Untitled Book with Metadata Modified</dc:title>
    <dc:language xsi:type="dcterms:RFC4646">en</dc:language>
```

#### Relevant optional fields
* Rights
* Creator + modifications using meta
* Subject
* Description
* Date
* Modified

Ex:
```
    <dc:rights>Public domain</dc:rights>
    <dc:creator opf:file-as="Author, Sample">Sample Author</dc:creator>
    <dc:subject>Test Content</dc:subject>
    <dc:description>This is an empty book to use as a sample for new books</dc:description>
    <dc:date opf:event="publication">2013-10-08</dc:date>
    <meta properties="dcterms:modified">2013-12-19</meta>
```
    
