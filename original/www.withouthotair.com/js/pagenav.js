//position of top page nav
var ytop = 0;
//position of bottom page nav
var ybottom = 84.5;

var n_pages,n_firstpage,n_lastpage;

function setnumpages (n) {
  n_pages = n;
}

function setpages (firstpage,lastpage) {
  n_firstpage = firstpage;
  n_lastpage = lastpage;
  n_pages = n_lastpage - n_firstpage + 1;
}

function writePages (ypos) {
	//n_links is number of links between Prev and Next buttons
	//n_index is page number of this file
	//ypos is vertical position to write page nav buttons
	var n_links = 15;
	var offset = n_firstpage - 1;
	

	// get the url of the page
	var s_fullPath = window.location;
	// extract the path, prefix, index and ext.
	var re_fileName = /([^\/]+)$/;
	var re_nameIdxExt = /^(.+?)(\d+)(\..+)$/;
	
	if (!re_fileName.exec(s_fullPath)) return;
	
	var s_fileName = RegExp.$1;
	var s_filePath = RegExp.leftContext;

	if (!re_nameIdxExt.exec(s_fileName)) return;
	
	var s_prefix = RegExp.$1,
		n_index = Number(RegExp.$2),
		s_ext = RegExp.$3;
		
	n_index = n_index - offset;

	//start of nav block. left is same as #container left margin
	document.write('<div class="pages" style="left:65px; top:'+ypos+'em;">');	
	
	//if not on first page, enable Prev button
	if (n_index != 1)
		//document.write('<td><a href="http://www.withouthotair.com/js/'&#32;+&#32;s_filePath&#32;+&#32;s_prefix&#32;+&#32;1&#32;+&#32;s_ext&#32;+&#32;'"><img src="http://www.withouthotair.com/js/button_page_first.gif" alt="Go to first page" width="20" height="20" border="0"></a><a href="http://www.withouthotair.com/js/'&#32;+&#32;s_filePath&#32;+&#32;s_prefix&#32;+&#32;(n_index&#32;-&#32;1)&#32;+&#32;s_ext&#32;+&#32;'"><img src="http://www.withouthotair.com/js/button_page_prev.gif" alt="Go to previous page" width="20" height="20" border="0"></a></td>');
		document.write('<a href="http://www.withouthotair.com/js/'&#32;+&#32;s_filePath&#32;+&#32;s_prefix&#32;+&#32;(n_index-1&#32;+&#32;offset)&#32;+&#32;s_ext&#32;+&#32;'" class="nextprev" title="Go to Previous Page">&laquo; Previous</a>');
	
	//if we are on the first page, disable Prev button
	if (n_index == 1) 
		document.write('<span class="nextprev">&laquo; Previous</span>');

	//we don't need this 'Page n of nn' (or write it elsewhere)
	//document.write('<td>Page ' + n_index + ' of ' + n_pages + '.</td>');

	//if we want links...
	if (n_links) {
		//we can't have more links than pages
		if (n_links > n_pages)
			n_links = n_pages;
		
	
		var n_sideLinks = Math.floor((n_links - 1) / 2),
			n_firstLink, n_lastLink;
		
		//START: if we have fewer links than pages, this code determines which page numbers to print
		if (n_index + n_sideLinks >= n_pages) {
			n_firstLink = n_pages - n_links + 1;
			n_lastLink = n_pages;
		}
		else if (n_index - n_sideLinks <= 0) {
			n_firstLink = 1;
			n_lastLink = n_links;
		}
		else {
			n_firstLink = n_index - n_sideLinks;
			n_lastLink = n_firstLink + n_links - 1;
		}
		//END
					
		
		//write the page numbers with links
		for (var i = n_firstLink; i <= n_lastLink; i++) {
			//document.write(i == n_index ? i + ' ' : '<a href="http://www.withouthotair.com/js/'&#32;+&#32;s_filePath&#32;+&#32;s_prefix&#32;+&#32;i&#32;+&#32;s_ext&#32;+&#32;'" title="Go to page ' + i + '">' + i + '</a> ');
			var a;
			a = i + offset;
			document.write(i == n_index ? '<span class="current">' + a +'</span>' : '<a href="http://www.withouthotair.com/js/'&#32;+&#32;s_filePath&#32;+&#32;s_prefix&#32;+&#32;a&#32;+s_ext&#32;+&#32;'" title="Go to page ' + a +'">' + a +'</a>');
		//document.write('</td>');
		}
	}

	//if not on last page, enable Next button
	if (n_index != n_pages) {
		//document.write('<td><a href="http://www.withouthotair.com/js/'&#32;+&#32;s_filePath&#32;+&#32;s_prefix&#32;+&#32;(n_index&#32;+&#32;1)&#32;+&#32;s_ext&#32;+&#32;'"><img src="http://www.withouthotair.com/js/button_page_next.gif" alt="Go to next page" width="20" height="20" border="0"></a><a href="http://www.withouthotair.com/js/'&#32;+&#32;s_filePath&#32;+&#32;s_prefix&#32;+&#32;n_pages&#32;+&#32;s_ext&#32;+&#32;'"><img src="http://www.withouthotair.com/js/button_page_last.gif" alt="Go to last page" width="20" height="20" border="0"></a></td>');
		var a;
		a = n_index + 1 + offset;
		document.write('<a href="http://www.withouthotair.com/js/'&#32;+&#32;s_filePath&#32;+&#32;s_prefix&#32;+&#32;a&#32;+&#32;s_ext&#32;+&#32;'" class="nextprev" title="Go to Next Page">Next &raquo;</a>');
		}
	if (n_index == n_pages)
		document.write('<span class="nextprev">Next &raquo;</span>');
	
	document.write('</div>');
	document.write('<br style="clear:both" />');
	

}