# Book metadata format

## Metadata in the OPF file

*References*
* [EPUB3 OPF Metadata reference](http://www.idpf.org/epub/30/spec/epub30-publications.html#sec-metadata-elem)
* [Marc relator terms](http://www.loc.gov/marc/relators/relaterm.html): Author- aut, Illustrator- ill, Editor- edt, Translator- trl, Publisher- pbl
* Connexions MDML - can't find one because rhaptos.org is gone
* [LRMI/Schema.org](http://www.lrmi.net/the-specification)
* [Accessibility metadata from schema.org](http://www.idpf.org/accessibility/guidelines/content/meta/schema.org.php) This is what I used to determine the format for using the LRMI/Schema.org fields that we need.

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
    <meta property="schema:useRightsUrl">http://creativecommons.org/licenses/by/4.0/</meta>
    <meta property="dcterms:rightsHolder">OERPUB</meta>
    <meta property="schema:isBasedOnUrl">http://github.com/oerpub/empty-book/content/empty-book.opf</meta>
    <dc:subject xsi:type="http://github.com/Connexions/rhaptos.cnxmlutils/rhaptos/cnxmlutils/schema" id="subject">Humanities</dc:subject>
    <dc:subject>demo content</dc:subject>
    <dc:subject>art deco</dc:subject>
    <dc:date opf:event="publication">2013-10-08 {date when new book created}</dc:date>
    <meta properties="dcterms:modified">2013-12-19 {date of last edit}</meta>
</metadata>
```

## Metadata in the nav file \(-nav.html\) file.

Because the Nav file can also be used as a simple way to view the book on the web, we want to duplicate the metadata in the -nav file so that readers finding the book on the web this way will also have access to all the metadata. We can also use this specification to put metadata into individual components \(html\) of the books that might be reused elsewhere.

To be as compatible as possible with others, we will use schema.org and microdata. If possible, it would be great to be able to include as much as possible of the metadata in the body, like the book title, authors, and summary. We have to make sure that the epub reader can handle adding these to the nav file.

In the table below, we are just showing the meta representations, but the sample file linked at the bottom includes examples that use in-body microdata also.

The following should go into the body as long as the reader can handle them \(or be made to\).
* Title
* Authors
* Publisher
* Abstract/Summary \(the description field\) 

### Mapping table for the nav file

Metadata Value | Expression in OPF | Example
----------- | -------------------- | ------------
title       | name            | ```<meta itemprop="name" content="Title of the book" />```
github book id | url       | ```<meta itemprop="url" content="http://github.com/oerpub/demo-book/content/demo-book.opf" /> ```
language	| inLanguage | ```<meta itemprop="inLanguage" content="en"  itemtype="dcterms:RFC4646" content="English" />```
summary/abstract | description |  ```<meta itemprop="description" content="Everything you always wanted to know about metadata but were afraid to ask." />```
author      | author | ```<meta id="author01" itemprop="author" content="Sample Author" />```
author order | meta property="display-seq" |```<meta refines="author01" property="display-seq" content="1" />```
author account | meta property="custom:github-id" | ```<meta refines="#author01" property="custom:github-id" content="oerpub" />```
subject		| about | ```<meta itemprop="about" content="Humanities" />```
keyword		| keywords | ```<meta itemprop="keywords" content="Amphibians" />```derived from | isBasedOnUrl | ```<meta itemprop="isBasedOnUrl" content="http://github.com/oerpub/empty-book/content/empty-book.opf" />```
license		| meta dc:rights | ```<meta property="dc:license" content="CC-BY 4.0" />```
license URL | meta lrmi:useRightsUrl | ```<meta property="lrmi:useRightsUrl" content="http://creativecommons.org/licenses/by/4.0/" />``` <br /> or ```<link rel="lrmi:useRightsURL" href="http://creativecommons.org/licenses/by/4.0/" />```
publisher      | publisher | ```<meta itemprop="publisher" content="Sample Publisher" />```
editor      | editor | ```<meta itemprop="editor" content="Sample Editor" />```
translator  | contributor, refined | ```<meta id="translator01"itemprop="contributor" content="Sample Translator</dc:creator>```<br />```<meta refines="#translator01" property="role" scheme="marc:relators" content="trl" />```
illustrator | illustrator | ```<meta itemprop="illustrator" content="Sample Illustrator" />```
copyright holder | copyrightHolder | ```<meta itemprop="copyrightHolder" content="Mister Owner" />```
date created | dateCreated | ```<meta itemprop="dateCreated" content="2013-10-08" />```
date modified | dateModified | ```<meta itemprop="dateModified" content="2013-11-15" />```
accessibility metadata | | 
mathml | accessiblityFeature:mathML | ```<meta itemprop="accessibilityFeature" content="MathML" />```
described images | accessiblityFeature:alternativeText | ```<meta itemprop="accessibilityFeature" content="alternativeText" />```
structural navigation | accessiblityFeature:structuralNavigation | ```<meta itemprop="accessibilityFeature" content="structuralNavigation" />```
video captions | accessiblityFeature:captions | ```<meta itemprop="accessibilityFeature" content="captions" />```

### Example -nav file

[Sample file](sample-with-microdata-nav.html)