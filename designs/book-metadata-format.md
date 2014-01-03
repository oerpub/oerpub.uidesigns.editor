# Book metadata format

## In the OPF file

*References*
* [EPUB3 OPF Metadata reference](http://www.idpf.org/epub/30/spec/epub30-publications.html#sec-metadata-elem)
* [Marc relator terms](http://www.loc.gov/marc/relators/relaterm.html): Author- aut,Illustrator- ill, Editor- edt, Translator- trl
* Connexions MDML - can't find one because rhaptos.org is gone
* [LRMI/Schema.org](http://www.lrmi.net/the-specification)
* [Accessibility metadata from schema.org](http://www.idpf.org/accessibility/guidelines/content/meta/schema.org.php) This is what I used to determine the format for using the LRMI/Schema.org fields that we need.

### Mapping Table

Metadata Value | Expression in OPF | Example
----------- | -------------------- | ------------
title       | dc:title             | ```<dc:title>Title of the book</dc:title>```
github repo | dc:identifier        | ```<dc:identifier id="uid">http://github.com/oerpub/demo-book/content/demo-book.opf</dc:identifier> ```
author      | dc:creator with role=aut | ```<dc:creator id="#creator01" opf:file-as="Author, Sample">Sample Author</dc:creator>
    <meta refines="#creator01" property="role" scheme="marc:relators">aut</meta>
	<meta refines="#creator01" property="display-seq">1</meta>
	<meta refines="#creator01" property="custom:github-id">oerpub</meta>```
editor      | dc:creator with role=edt
translator  | dc:creator with role=trl
illustrator | dc:creator with role=ill
copyright holder | meta dcterms:rightsHolder | ```<meta property="dcterms:rightsHolder">Mister Owner</meta>```
language	| dc:language | ```<dc:language  xsi:type="dcterms:RFC4646">en</dc:language>```
license		| dc:rights | ```<dc:rights>Creative Commons Attribution 4.0</dc:rights>```
license URL | meta schema:useRightsUrl | 
subject		| dc:subject xsi:type={cnx or oercommons} | ```<dc:subject xsi:type="http://github.com/Connexions/rhaptos.cnxmlutils/rhaptos/cnxmlutils/schema">Humanities</dc:subject>```
keyword		| dc:subject
derived from | meta schema:isBasedOnUrl | ```<meta property="schema:isBasedOnUrl">http://github.com/oerpub/empty-book/content/empty-book.opf</meta>```

Note: In order to use the meta values from schema.org and the custom github-id, the schema and custom prefixes must declares in the package element. The need for "schema" may change because schema may become a reserved prefix in EPUB 3.01 and then won't have to be declared.

### Full Example

```
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifer="uid"	prefix="schema: http://schema.org
          custom: http://github.com/oerpub/github-bookeditor">
 <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="uid">http://github.com/{owner-id}/{repo-id}/content/{this-file}.opf</dc:identifier>
    <dc:title>Title of the book</dc:title>
    <dc:creator id="#creator01" opf:file-as="Author, Sample">Sample Author</dc:creator>
    <meta refines="#creator01" property="role" scheme="marc:relators">aut</meta>
	<meta refines="#creator01" property="display-seq">1</meta>
    <dc:language  xsi:type="dcterms:RFC4646">en</dc:language>
    <dc:rights>Creative Commons Attribution 4.0</dc:rights>
    <meta property="schema:useRightsUrl">http://creativecommons.org/licenses/by/4.0/</meta>
    <meta property="dcterms:rightsHolder">{Copy right holder name}</meta>
    <meta property="schema:isBasedOnUrl">http://github.com/oerpub/empty-book/content/empty-book.opf</meta>
    <dc:subject xsi:type="http://github.com/Connexions/rhaptos.cnxmlutils/rhaptos/cnxmlutils/schema" id="subject">{subject}</dc:subject>
    <dc:subject>{keyword 1}</dc:subject>
    <dc:subject>{keyword 2, etc.}</dc:subject>
    <dc:description>{Summary with any markup escaped}</dc:description>
    <dc:date opf:event="publication">2013-10-08 {date when new book created}</dc:date>
    <meta properties="dcterms:modified">2013-12-19</meta>
</metadata>
```

### Extended author example with an illustrator and with a github-id. 

```
<dc:creator id="creator01" opf:file-as"Caroll, Lewis">Lewis Carroll</dc:creator>
<meta refines="#creator01" property="role" scheme="marc:relators">aut</meta>
<meta refines="#creator01" property="display-seq">1</meta>
<meta refines="#createor01" property="custom:github-id">lewcar</meta>
    
<dc:creator id="creator02">John Tenniel</dc:creator>
<meta refines="#creator02" property="role" scheme="marc:relators">ill</meta>
<meta refines="#creator02" property="display-seq">2</meta>

```

## In the nav file \(-nav.html\) file.