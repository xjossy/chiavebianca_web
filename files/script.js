function supportsSvg() {
    return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.0")
}

function correctImg(elem) {
	if(!supportsSvg()) {
		elem.src = elem.src.replace('.svg','.png');
		elem.style.backgroundImage = elem.style.backgroundImage.replace('.svg','.png')
	}
}