"use strict";function initPhotoSwipe(gallerySelector){var added=!1,parseThumbnailElements=function(el){for(var thumbElements=el.childNodes,numNodes=thumbElements.length,items=[],figureEl,linkEl,size,item,i=0;i<numNodes;i++)1===(figureEl=thumbElements[i]).nodeType&&(linkEl=figureEl.children[0]).getAttribute("href")&&(size=linkEl.getAttribute("data-size").split("x"),item={src:linkEl.getAttribute("href"),w:parseInt(size[0],10),h:parseInt(size[1],10)},linkEl.children.length>0&&(item.msrc=linkEl.children[0].getAttribute("src")),item.el=figureEl,items.push(item));return items},closest=function closest(el,fn){return el&&(fn(el)?el:closest(el.parentNode,fn))},onToggleButtonClick=function(e){(e=e||window.event).preventDefault?e.preventDefault():e.returnValue=!1;var eTarget,productImages=(e.target||e.srcElement).closest(".product-images"),clickedListItem=productImages.querySelectorAll(".image-item")[0],slider;if(productImages.querySelector(".flickity-slider")&&(clickedListItem=productImages.querySelector(".image-item.is-selected")),clickedListItem){for(var clickedGallery=clickedListItem.parentNode,childNodes=clickedListItem.parentNode.childNodes,numChildNodes=childNodes.length,nodeIndex=0,index,i=0;i<numChildNodes;i++)if(1===childNodes[i].nodeType){if(childNodes[i]===clickedListItem){index=nodeIndex;break}nodeIndex++}return index>=0&&openPhotoSwipe(index,clickedGallery),!1}},onThumbnailsClick=function(e){(e=e||window.event).preventDefault?e.preventDefault():e.returnValue=!1;var eTarget=e.target||e.srcElement;if("A"!==eTarget.tagName.toUpperCase()){var clickedListItem=closest(eTarget,(function(el){return el.tagName&&"FIGURE"===el.tagName.toUpperCase()}));if(clickedListItem){for(var clickedGallery=clickedListItem.parentNode,childNodes=clickedListItem.parentNode.childNodes,numChildNodes=childNodes.length,nodeIndex=0,index,i=0;i<numChildNodes;i++)if(1===childNodes[i].nodeType){if(childNodes[i]===clickedListItem){index=nodeIndex;break}nodeIndex++}return index>=0&&openPhotoSwipe(index,clickedGallery),!1}}},photoswipeParseHash=function(){var hash=window.location.hash.substring(1),params={};if(hash.length<5)return params;for(var vars=hash.split("&"),i=0,ij=vars.length;i<ij;i++)if(vars[i]){var pair=vars[i].split("=");pair.length<2||(params[pair[0]]=pair[1])}return params.gid&&(params.gid=parseInt(params.gid,10)),params},openPhotoSwipe=function(index,galleryElement,disableAnimation,fromURL){var pswpElement=document.querySelector(".pswp"),gallery,options,items;if(items=parseThumbnailElements(galleryElement),options={galleryUID:galleryElement.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(index){var thumbnail=items[index].el.getElementsByTagName("img")[0],pageYScroll=window.pageYOffset||document.documentElement.scrollTop,rect=thumbnail.getBoundingClientRect();return{x:rect.left,y:rect.top+pageYScroll,w:rect.width}}},fromURL)if(options.galleryPIDs){for(var j=0,ji=items.length;j<ji;j++)if(items[j].pid==index){options.index=j;break}}else options.index=parseInt(index,10)-1;else options.index=parseInt(index,10);if(!isNaN(options.index)){disableAnimation&&(options.showAnimationDuration=0),(gallery=new PhotoSwipe(pswpElement,PhotoSwipeUI_Default,items,options)).init();var selector=".pswp__thumbnails";gallery.listen("gettingData",(function(){if(!added){added=!0;var oldThumbnailEls=document.querySelectorAll(selector);oldThumbnailEls.length&&oldThumbnailEls.forEach((function(odlThumb){odlThumb.remove()})),setTimeout((function(){addPreviews(gallery)}),200)}})),gallery.listen("close",(function(){var scrollWrap,pswpThumbEl=gallery.scrollWrap.closest(".pswp").querySelector(".pswp__thumbnails");pswpThumbEl&&(pswpThumbEl.remove(),added=!1)})),gallery.listen("afterChange",(function(){var scrollWrap,pswpThumbEl=gallery.scrollWrap.closest(".pswp").querySelector(".pswp__thumbnails");pswpThumbEl&&Object.keys(gallery.items).forEach((function(k){var currThumbItem=pswpThumbEl.children[k];currThumbItem.classList.remove("active"),gallery.getCurrentIndex()==k&&currThumbItem.classList.add("active")}))}))}};function addPreviews(gallery){var scrollWrap=gallery.scrollWrap,productImagesWrapperEl=document.querySelector(".product-gallery"),thumbnailEl=document.createElement("div");if(thumbnailEl.classList.add("pswp__thumbnails"),productImagesWrapperEl){var productThumbWrapperEl=productImagesWrapperEl.querySelector(".product-thumbnail-images-container");if(productThumbWrapperEl){var thumbSlider=productThumbWrapperEl.querySelector(".flickity-slider");thumbnailEl.innerHTML=thumbSlider?thumbSlider.innerHTML:productThumbWrapperEl.innerHTML}else Object.keys(gallery.items).forEach((function(k){var currItem=gallery.items[k],newThumbEl=document.createElement("div"),newImgEl=document.createElement("img");newImgEl.setAttribute("src",currItem.msrc),newThumbEl.classList.add("thumbnail-item"),newThumbEl.appendChild(newImgEl),thumbnailEl.appendChild(newThumbEl)}));Object.keys(gallery.items).forEach((function(k){var currThumbItem=thumbnailEl.children[k];currThumbItem.removeAttribute("style"),currThumbItem.classList.remove("is-selected","is-nav-selected"),gallery.getCurrentIndex()==k&&currThumbItem.classList.add("active"),currThumbItem.addEventListener("click",(function(){gallery.goTo(gallery.items.indexOf(gallery.items[k]))}))})),scrollWrap.parentNode.insertBefore(thumbnailEl,scrollWrap.nextSibling)}}for(var galleryElements=document.querySelectorAll(gallerySelector),i=0,l=galleryElements.length;i<l;i++){var buttonEl=galleryElements[i].closest(".product-images").querySelector(".photoswipe-toggle-button");galleryElements[i].setAttribute("data-pswp-uid",i+1),buttonEl.onclick=onToggleButtonClick,galleryElements[i].onclick=onThumbnailsClick}var hashData=photoswipeParseHash();hashData.pid&&hashData.gid&&openPhotoSwipe(hashData.pid,galleryElements[hashData.gid-1],!0,!0)}initPhotoSwipe(".product-images-container");