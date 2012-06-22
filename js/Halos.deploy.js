smalltalk.addPackage('Halos', {});
smalltalk.addClass('Halo', smalltalk.Widget, ['div'], 'Halos');
smalltalk.addMethod(
"_appendTo_",
smalltalk.method({
selector: "appendTo:",
fn: function (aJQuerySelectorString){
var self=this;
smalltalk.send(self, "_renderOn_", [smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(aJQuerySelectorString, "_asJQuery", [])])]);
return self;}
}),
smalltalk.Halo);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
(self['@div']=smalltalk.send(smalltalk.send(html, "_div", []), "_class_", ["halo"]));
smalltalk.send(self, "_update", []);
return self;}
}),
smalltalk.Halo);

smalltalk.addMethod(
"_update",
smalltalk.method({
selector: "update",
fn: function (){
var self=this;
smalltalk.send(self['@div'], "_contents_", [(function(html){return smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", ["Hello World"]);})]);
return self;}
}),
smalltalk.Halo);


smalltalk.addMethod(
"_newOn_",
smalltalk.method({
selector: "newOn:",
fn: function (aJQuerySelectorString){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_appendTo_", [aJQuerySelectorString]);
return self;}
}),
smalltalk.Halo.klass);


