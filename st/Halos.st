Smalltalk current createPackage: 'Halos' properties: #{}!
Widget subclass: #Halo
	instanceVariableNames: 'div'
	package: 'Halos'!

!Halo methodsFor: 'adding'!

appendTo: aJQuerySelectorString
   self renderOn: (HTMLCanvas onJQuery: aJQuerySelectorString asJQuery)
! !

!Halo methodsFor: 'rendering'!

renderOn: html
	div := html div class: 'halo'.
	self update.
!

update
	div contents: [:html| html h1 with: 'Hello World']
! !

!Halo class methodsFor: 'instance creation'!

newOn: aJQuerySelectorString
	^self new appendTo: aJQuerySelectorString
! !

