smalltalk.addPackage('Halos', {});
smalltalk.addClass('Halo', smalltalk.Widget, ['div'], 'Halos');
smalltalk.addMethod(
"_appendTo_",
smalltalk.method({
selector: "appendTo:",
category: 'adding',
fn: function (aJQuerySelectorString){
var self=this;
smalltalk.send(self, "_renderOn_", [smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(aJQuerySelectorString, "_asJQuery", [])])]);
return self;},
args: ["aJQuerySelectorString"],
source: "appendTo: aJQuerySelectorString\x0a   self renderOn: (HTMLCanvas onJQuery: aJQuerySelectorString asJQuery)",
messageSends: ["renderOn:", "onJQuery:", "asJQuery"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.Halo);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
(self['@div']=smalltalk.send(smalltalk.send(html, "_div", []), "_class_", ["halo"]));
smalltalk.send(self, "_update", []);
return self;},
args: ["html"],
source: "renderOn: html\x0a\x09div := html div class: 'halo'.\x0a\x09self update.",
messageSends: ["class:", "div", "update"],
referencedClasses: []
}),
smalltalk.Halo);

smalltalk.addMethod(
"_update",
smalltalk.method({
selector: "update",
category: 'rendering',
fn: function (){
var self=this;
smalltalk.send(self['@div'], "_contents_", [(function(html){return smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", ["Hello World"]);})]);
return self;},
args: [],
source: "update\x0a\x09div contents: [:html| html h1 with: 'Hello World']",
messageSends: ["contents:", "with:", "h1"],
referencedClasses: []
}),
smalltalk.Halo);


smalltalk.addMethod(
"_newOn_",
smalltalk.method({
selector: "newOn:",
category: 'instance creation',
fn: function (aJQuerySelectorString){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_appendTo_", [aJQuerySelectorString]);
return self;},
args: ["aJQuerySelectorString"],
source: "newOn: aJQuerySelectorString\x0a\x09^self new appendTo: aJQuerySelectorString",
messageSends: ["appendTo:", "new"],
referencedClasses: []
}),
smalltalk.Halo.klass);


