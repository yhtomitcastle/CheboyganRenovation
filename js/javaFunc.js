function imageAppear(previewPic) {
/*
First, clear any enlarged image/text by hiding the fullView class.
Then, display the selected fullView class image and accompany text.
*/
var sentClass=previewPic.className;
var eleMatchClass=document.getElementsByClassName(sentClass);
var fullviewDivs = document.getElementsByClassName("fullview");
for (var i = fullviewDivs.length - 1; i >= 0; i--) {
	fullviewDivs[i].style.display="none";
}
eleMatchClass[1].style.display="block";
eleMatchClass[1].scrollIntoView();
}