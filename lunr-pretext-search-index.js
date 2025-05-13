var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-parsons",
  "level": "1",
  "url": "sec-parsons.html",
  "type": "Section",
  "number": "1.1",
  "title": "A Parson’s Block",
  "body": " A Parson's Block   Parsons Problem, Mathematical Proof  even numbers   Create a proof of the theorem: If is an even number, then .  [Ed. If you examine the source, you will also notice the <exercise> lacks a language attribute. It is relying on the docinfo\/parsons\/@language value that is in bookinfo.xml. If present, that attribute will be used for any Parsons that lack a language .]     Suppose is even.     Then is a prime number.    Then there exists an so that .    Then there exists an so that .     Click the heels of your ruby slippers together three times.    So .  This is a superfluous second paragraph in this block.    Thus .    And a little bit of irrelevant multi-line math .     Dorothy will not be much help with this proof.    "
},
{
  "id": "number-theory-proof",
  "level": "2",
  "url": "sec-parsons.html#number-theory-proof",
  "type": "Checkpoint",
  "number": "1.1.1",
  "title": "Parsons Problem, Mathematical Proof.",
  "body": " Parsons Problem, Mathematical Proof  even numbers   Create a proof of the theorem: If is an even number, then .  [Ed. If you examine the source, you will also notice the <exercise> lacks a language attribute. It is relying on the docinfo\/parsons\/@language value that is in bookinfo.xml. If present, that attribute will be used for any Parsons that lack a language .]     Suppose is even.     Then is a prime number.    Then there exists an so that .    Then there exists an so that .     Click the heels of your ruby slippers together three times.    So .  This is a superfluous second paragraph in this block.    Thus .    And a little bit of irrelevant multi-line math .     Dorothy will not be much help with this proof.   "
},
{
  "id": "sec-doenetml",
  "level": "1",
  "url": "sec-doenetml.html",
  "type": "Section",
  "number": "1.2",
  "title": "A DoenetML embed",
  "body": " A DoenetML embed   "
},
{
  "id": "sec-prefigure",
  "level": "1",
  "url": "sec-prefigure.html",
  "type": "Section",
  "number": "1.3",
  "title": "Prefigure Diagrams",
  "body": " Prefigure Diagrams   Sample polygons   Examples of polygons              "
},
{
  "id": "poly-ex",
  "level": "2",
  "url": "sec-prefigure.html#poly-ex",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": " Sample polygons   Examples of polygons             "
},
{
  "id": "sec-euclid1-1",
  "level": "1",
  "url": "sec-euclid1-1.html",
  "type": "Section",
  "number": "1.4",
  "title": "Proposition 1.1",
  "body": " Proposition 1.1   "
},
{
  "id": "sec-anurag",
  "level": "1",
  "url": "sec-anurag.html",
  "type": "Section",
  "number": "1.5",
  "title": "Proposition 2.1",
  "body": " Proposition 2.1   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
