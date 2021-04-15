
function wrapHeader() {
	var selectors = [
		".primary-container>.primary-container-row>.primary-container-col>.col>h1",
		".primary-container>.primary-container-row>.primary-container-col>.col>.h1",
		".primary-container>.primary-container-row>.primary-container-col>.col>h2",
		".primary-container>.primary-container-row>.primary-container-col>.col>.h2",
		".primary-container>.primary-container-row>.primary-container-col>.col>h3",
		".primary-container>.primary-container-row>.primary-container-col>.col>.h3",
		".primary-container>.primary-container-row>.primary-container-col>.col>h4",
		".primary-container>.primary-container-row>.primary-container-col>.col>.h4",
		".primary-container>.primary-container-row>.primary-container-col>.col>h5",
		".primary-container>.primary-container-row>.primary-container-col>.col>.h5",
		".primary-container>.primary-container-row>.primary-container-col>.col>h6",
		".primary-container>.primary-container-row>.primary-container-col>.col>.h6"
	]
	for (var i = selectors.length - 1; i >= 0; i--) {
		$(selectors[i]).each(function(i){
			var html = $(this).html()
			var span = $("<span></span>")
			span.append(html)
			$(this).html(span)
		})
	}
}



$(document).ready(function(){
	wrapHeader()
})
