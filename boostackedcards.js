window.onload = () => {
	var items = [...document.querySelectorAll('.menu-item')], 
		color, 
		text,
		selectedElem,
		prevSelectedElem;
	
	items.forEach(item => {
	  item.addEventListener('mouseenter', (e) => {
		color = getComputedStyle(e.target)['background-color'];
		//text = e.target.querySelector('a').text;
		
		document.body.style['background-color'] = fadeRGBColor(color);
	  });
	  
	  item.onclick = (e) => {
		selectedElem = e.target;
		
		// Identify the newly selected item
		if (!selectedElem.classList.contains('menu-item')) {
		  selectedElem = selectedElem.parentElement;
		}
		
		// Remove the mark on the previously slected item
		prevSelectedElem = document.body.querySelector('.selected');
		prevSelectedElem && prevSelectedElem.classList.remove('selected');
		
		// Add the selection style on the newly selected item
		selectedElem.classList.add('selected');
		
	  };
	})
  }
  
  // From a rgb color (for ex: rgb(233, 0, 116)) , return a faded color
  const fadeRGBColor = (RGBColor) => {
	var valuesPart = RGBColor.split(/['()']/)[1]; 
   
	return 'rgba(' + valuesPart+ ', 0.4)';
  }