# Book and book sections metadata formats

## Metadata in the OPF file

*References*
* [EPUB3 OPF Metadata reference](http://www.idpf.org/epub/30/spec/epub30-publications.html#sec-metadata-elem)
* [Marc relator terms](http://www.loc.gov/marc/relators/relaterm.html): Author- aut, Illustrator- ill, Editor- edt, Translator- trl, Publisher- pbl
* Connexions MDML - can't find one because rhaptos.org is gone
* [LRMI/Schema.org](http://www.lrmi.net/the-specification)
* [Accessibility metadata from schema.org](http://www.idpf.org/accessibility/guidelines/content/meta/schema.org.php) This is what I used to determine the format for using the LRMI/Schema.org fields that we need.

### Namespace declarations needed in the OPF

```
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifer="uid"  
    prefix="schema: http://schema.org
          lrmi: http://http://www.lrmi.net/the-specification
          custom: http://github.com/oerpub/github-bookeditor">
 <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
```

### Mapping table for OPF

Metadata Value | Expression in OPF | Example
----------- | -------------------- | ------------
title       | dc:title             | ```<dc:title>Title of the book</dc:title>```
github repo | dc:identifier        | ```<dc:identifier id="uid">http://github.com/oerpub/demo-book/content/demo-book.opf</dc:identifier> ```
language	| dc:language | ```<dc:language  xsi:type="dcterms:RFC4646">en</dc:language>```
summary/abstract | dc:description | ```<dc:description> *summary/abstract with markup escaped* </dc:description>```
author      | dc:creator with role=aut | ```<dc:creator id="#creator01" opf:file-as="Author, Sample">Sample Author</dc:creator>```<br />```<meta refines="#creator01" property="role" scheme="marc:relators">aut" />```
author order | meta property="display-seq" |```<meta refines="#creator01" property="display-seq">1</meta>```
author account | meta property="custom:github-id" | ```<meta refines="#creator01" property="custom:github-id">oerpub</meta>```
subject		| dc:subject xsi:type={cnx or oercommons} | ```<dc:subject xsi:type="http://github.com/Connexions/rhaptos.cnxmlutils/rhaptos/cnxmlutils/schema">Humanities</dc:subject>```
keyword		| dc:subject | ```<dc:subject>Amphibians</dc:subject>```
license		| dc:rights | ```<dc:rights>Creative Commons Attribution 4.0</dc:rights>```
license URL | meta lrmi:useRightsUrl | ```<meta property="lrmi:useRightsUrl">http://creativecommons.org/licenses/by/4.0/</meta>``` <br \> or ```<link rel="lrmi:useRightsUrl href="http://creativecommons.org/licenses/by/4.0/" />```
derived from | meta schema:isBasedOnUrl | ```<meta property="schema:isBasedOnUrl">http://github.com/oerpub/empty-book/content/empty-book.opf</meta>```
publisher | dc:creator with role=pbl | ```<dc:creator id="#creator01" opf:file-as="Publisher, Sample">Sample Publisher</dc:creator>```<br />```<meta refines="#creator01" property="role" scheme="marc:relators">pbl</meta>```
editor      | dc:creator with role=edt | ```<dc:creator id="#creator01" opf:file-as="Author, Sample">Sample Author</dc:creator>```<br />```<meta refines="#creator01" property="role" scheme="marc:relators">edt</meta>```
translator  | dc:creator with role=trl | ```<dc:creator id="#creator01" opf:file-as="Author, Sample">Sample Author</dc:creator>```<br />```<meta refines="#creator01" property="role" scheme="marc:relators">trl</meta>```
illustrator | dc:creator with role=ill | ```<dc:creator id="#creator01" opf:file-as="Author, Sample">Sample Author</dc:creator>```<br />```<meta refines="#creator01" property="role" scheme="marc:relators">ill</meta>```
copyright holder | meta dcterms:rightsHolder | ```<meta property="dcterms:rightsHolder">Mister Owner</meta>```
date created | dc:date w event="publication | ```<dc:date opf:event="publication">2013-10-08 {date when new book created}</dc:date>```
date modified | meta dcterms:modified | ```<meta properties="dcterms:modified">2013-12-19 {date of last edit}</meta>```
accessibility metadata | | 
mathml | meta schema:acessibilityFeature:MathML | ```<meta property="schema:accessibilityFeature">MathML</meta>```
image descriptions | meta schema:acessibilityFeature:alternativeText | ```<meta property="schema:accessibilityFeature">alternativeText</meta>```
structural nav | meta schema:acessibilityFeature:structuralNavigation | ```<meta property="schema:accessibilityFeature">structuralNavigation</meta>```
video captions | meta schema:acessibilityFeature:captions | ```<meta property="schema:accessibilityFeature">captions</meta>```

Note: In order to use the meta values from schema.org, lrmi \(for the rights URL which hasn't made it into schema.org\) and the custom github-id, the schema and custom prefixes must declares in the package element. The need for "schema" may change because schema may become a reserved prefix in EPUB 3.01 and then won't have to be declared.

### Example OPF file metadata

```
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifer="uid"	
	prefix="schema: http://schema.org
		  lrmi: http://http://www.lrmi.net/the-specification
          custom: http://github.com/oerpub/github-bookeditor">
 <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="uid">http://github.com/oerpub/demo-book/content/demo-book.opf</dc:identifier>
    <dc:title>Title of the book</dc:title>
    <dc:language  xsi:type="dcterms:RFC4646">en</dc:language>
    <dc:description>This book is a demo. If there were markup in here, it would need to be properly escaped.</dc:description>
    <dc:creator id="#creator-01" opf:file-as="Author, Sample">Sample Author</dc:creator>
    <meta refines="#creator-01" property="role" scheme="marc:relators">aut</meta>
	<meta refines="#creator-01" property="display-seq">1</meta>
	<meta refines="#creator-01" property="custom:github-id">oerpub</meta>
	<dc:creator id="#creator-02" opf:file-as="Author2, Sample2">Sample2 Author2</dc:creator>
    <meta refines="#creator-02" property="role" scheme="marc:relators">aut</meta>
	<meta refines="#creator-02" property="display-seq">2</meta>
    <dc:rights>Creative Commons Attribution 4.0</dc:rights>
    <meta property="lrmi:useRightsUrl">http://creativecommons.org/licenses/by/4.0/</meta>
    <meta property="dcterms:rightsHolder">OERPUB</meta>
    <meta property="schema:isBasedOnUrl">http://github.com/oerpub/empty-book/content/empty-book.opf</meta>
    <dc:subject xsi:type="http://github.com/Connexions/rhaptos.cnxmlutils/rhaptos/cnxmlutils/schema" id="subject">Humanities</dc:subject>
    <dc:subject>demo content</dc:subject>
    <dc:subject>art deco</dc:subject>
    <dc:date opf:event="publication">2013-10-08 {date when new book created}</dc:date>
    <meta properties="dcterms:modified">2013-12-19 {date of last edit}</meta>
</metadata>
```

## Metadata in the nav file \(-nav.html\) file and module .html files.

Because the Nav file can also be used as a simple way to view the book on the web, we want to duplicate the metadata in the -nav file so that readers finding the book on the web this way will also have access to all the metadata. We can also use this specification to put metadata into individual components \(html\) of the books that might be reused elsewhere.

To be as compatible as possible with others, we will use schema.org and microdata where available and include
visible metadata in the body of the content, for example book title, authors, and summary. We have to make sure that the epub reader can handle adding these to the nav file.

In the table below, we are just showing the meta representations, but the sample file linked at the bottom includes examples that use in-body microdata also.

The following should go into the body as long as the reader can handle them \(or be made to\).
* Title
* Authors
* Publisher
* Abstract/Summary \(the description field\) 

### Namespace declarations needed.

<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" 
xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" 
xmlns:lrmi="http://lrmi.net/the-specification"
> 

### Mapping table for the nav file and module metadata

To make processing the values easier, in addition to the schema.org microdata properties, data-type values are given for each metadata value. See the linked samples below for an example encoding for the -nav file and for a module. 

For the -nav file, the Schema.org itemtype should be http://schema.org/Book and for modules, the Schema.org type should be http://schema.org/CreativeWork. 

Where it makes sense, the metadata is included directly in the body of the content. In the samples, notice that most of the metadata is in a metadata block within the html body. Different contexts may choose to show or hide the metadata. 

Metadata Value | Expression in html | Example
            |  itemprop, data-type  | 
----------- | -------------------- | ------------
title       | name, title            | ```<h1 data-type="title" itemprop="name">Title of the book or module </h1>```
github book epub id | url       | ```<meta itemprop="url" content="http://github.com/oerpub/demo-book/content/demo-book.opf" /> ```
github book web id | url       | ```<meta itemprop="url" content="http://github.com/oerpub/demo-book/content/demo-book-nav.html" /> ```
github module id | url       | ```<meta itemprop="url" content="http://github.com/oerpub/demo-book/content/introduction-to-demos.html" /> ```
language	| inLanguage, language | ```<meta data-type="language" itemprop="inLanguage" content="en"/>```
summary/abstract | description, description |  ```<div data-type="description" itemprop="description">Everything you always wanted to know about metadata but were afraid to ask. </div>```
keyword		| keywords,keyword | ```<span itemprop="keywords" data-type="keyword">Amphibians</span>```
derived from | isBasedOnUrl,based-on | ```<a data-type="based-on" itemprop="isBasedOnURL" href="http://github.com/oerpub/empty-book/content/forked-from-book.opf>Physics for Highschool</a>```

license		| dc:license and lrmi:useRightsURL, license | ```<a data-type="license" rel="lrmi:useRightsURL" href="http://creativecommons.org/licenses/by/4.0/"><span property="dc:license">CC-By 4.0</span></a>```
author      | author, author | ```<span itemscope="itemscope" itemtype="http://schema.org/Person" data-type="author" itemprop="author">Sample Author</span>```
author account | url, github-id | ```<a data-type=github-id itemprop="url" href="http://github.com/oerpub">{author as above}</a>```
subject     | about | ```<meta itemprop="about" content="Humanities" />```
publisher      | publisher,publisher | like author
editor      | editor, editor | like author
illustrator | illustrator | like author
copyright holder | copyrightHolder | like author
translator  | contributor,translator | ```<span data-type="translator" itemprop="contributor">Francis Hablar</span>```
date created | dateCreated | ```<meta itemprop="dateCreated" content="2013-10-08" />```
date modified | dateModified | ```<meta itemprop="dateModified" content="2013-11-15" />```
accessibility metadata | | 
mathml | accessiblityFeature:mathML | ```<meta itemprop="accessibilityFeature" content="MathML" />```
described images | accessiblityFeature:alternativeText | ```<meta itemprop="accessibilityFeature" content="alternativeText" />```
structural navigation | accessiblityFeature:structuralNavigation | ```<meta itemprop="accessibilityFeature" content="structuralNavigation" />```
video captions | accessiblityFeature:captions | ```<meta itemprop="accessibilityFeature" content="captions" />```

### Example -nav.html and module.html files

[Sample nav file](sample-book-nav.html)
[Sample module file](sample-module-metadata.html)