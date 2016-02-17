/*!
 * Plugins v1.0
*/

/* Table of Contents
==================================================
/*
/*  SECTION 1
/*    1.1 - equalHeightColumns.js
/*    1.2 - jquery.magnific-popup.min.js
/*    1.3 - jquery.bxslider.min.js
/*    1.4 - bselect.js
/*    1.5 - plusgallery.js
/*    1.6 - waypoints.js
/*    1.7 - jquery.fitvids.js
/*


/* =================== */ 
/*      SECTION 1      */
/* =================== */

/*    1.1 - equalHeightColumns.js
================================================== */

/*global jQuery */
/*! 
* equalHeightColumns.js 1.1
*
* Copyright 2013, Paul Sprangers http://paulsprangers.com
* Released under the WTFPL license 
* http://www.wtfpl.net
*
* Date: Thu Aug 8 12:18:00 2013 +0100
*/

(function( $ ){

    $.fn.equalHeightColumns = function( options ) {

            defaults = { 
                minWidth: -1,               // Won't resize unless window is wider than this value
                maxWidth: 99999,            // Won't resize unless window is narrower than this value
                setHeightOn: 'min-height'   // The CSS attribute on which the equal height is set. Usually height or min-height
            };

            var $this   = $(this); // store the object
            options     = $.extend( {}, defaults, options ); // merge options
            
            // Recalculate the distance to the top of the element to keep it centered
            var resizeHeight = function () {

                // Get window width
                var windowWidth = $(window).width();

                // Check to see if the current browser width falls within the set minWidth and maxWidth
                if( options.minWidth < windowWidth  &&  options.maxWidth > windowWidth ){
                    var height = 0;
                    var highest = 0;

                    // Reset heights
                    $this.css( options.setHeightOn, 0 );

                    // Figure out the highest element
                    $this.each( function(){

                        height = $(this).height();

                        if( height > highest ){
                            highest = height;
                        }

                    } );

                    // Set that height on the element
                    $this.css( options.setHeightOn, highest );

                }
                else{
                    // Add check so this doesn't have to happen everytime 
                    $this.css( options.setHeightOn, 0 );
                }
            };

            // Call once to set initially
            resizeHeight();

            // Call on resize. Opera debounces their resize by default. 
            $(window).resize(resizeHeight);
            
            // Also check if any images are present and recalculate when they load
            // there might be an optimization opportunity here
            $this.find('img').load( resizeHeight );
            
            // If afterLoading is defined, add a load event to the selector
            if ( typeof options.afterLoading !== 'undefined' ) {
            	$this.find(options.afterLoading).load( resizeHeight );
			}
			
			// If afterTimeout is defined use it a the timeout value
			if ( typeof options.afterTimeout !== 'undefined' ) {
            	setTimeout(function(){
	            	resizeHeight();
	            	
	            	// check afterLoading again, to make sure that dynamically added nodes are present
	            	if ( typeof options.afterLoading !== 'undefined' ) {
		            	$this.find(options.afterLoading).load( resizeHeight );
					}
            	}, options.afterTimeout);
			}

    };

})( jQuery );


/*    1.2 - jquery.magnific-popup.min.js
================================================== */

/*! Magnific Popup - v0.9.9 - 2013-12-27
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2013 Dmitry Semenov; */
(function(e){var t,n,i,o,r,a,s,l="Close",c="BeforeClose",d="AfterClose",u="BeforeAppend",p="MarkupParse",f="Open",m="Change",g="mfp",h="."+g,v="mfp-ready",C="mfp-removing",y="mfp-prevent-close",w=function(){},b=!!window.jQuery,I=e(window),x=function(e,n){t.ev.on(g+e+h,n)},k=function(t,n,i,o){var r=document.createElement("div");return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},T=function(n,i){t.ev.triggerHandler(g+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},E=function(n){return n===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=n),t.currTemplate.closeBtn},_=function(){e.magnificPopup.instance||(t=new w,t.init(),e.magnificPopup.instance=t)},S=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};w.prototype={constructor:w,init:function(){var n=navigator.appVersion;t.isIE7=-1!==n.indexOf("MSIE 7."),t.isIE8=-1!==n.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=S(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),o=e(document),t.popupsCache={}},open:function(n){i||(i=e(document.body));var r;if(n.isObj===!1){t.items=n.items.toArray(),t.index=0;var s,l=n.items;for(r=0;l.length>r;r++)if(s=l[r],s.parsed&&(s=s.el[0]),s===n.el[0]){t.index=r;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(t.isOpen)return t.updateItemHTML(),void 0;t.types=[],a="",t.ev=n.mainEl&&n.mainEl.length?n.mainEl.eq(0):o,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=k("bg").on("click"+h,function(){t.close()}),t.wrap=k("wrap").attr("tabindex",-1).on("click"+h,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=k("container",t.wrap)),t.contentContainer=k("content"),t.st.preloader&&(t.preloader=k("preloader",t.container,t.st.tLoading));var c=e.magnificPopup.modules;for(r=0;c.length>r;r++){var d=c[r];d=d.charAt(0).toUpperCase()+d.slice(1),t["init"+d].call(t)}T("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(x(p,function(e,t,n,i){n.close_replaceWith=E(i.type)}),a+=" mfp-close-btn-in"):t.wrap.append(E())),t.st.alignTop&&(a+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:I.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:o.height(),position:"absolute"}),t.st.enableEscapeKey&&o.on("keyup"+h,function(e){27===e.keyCode&&t.close()}),I.on("resize"+h,function(){t.updateSize()}),t.st.closeOnContentClick||(a+=" mfp-auto-cursor"),a&&t.wrap.addClass(a);var u=t.wH=I.height(),m={};if(t.fixedContentPos&&t._hasScrollBar(u)){var g=t._getScrollbarSize();g&&(m.marginRight=g)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):m.overflow="hidden");var C=t.st.mainClass;return t.isIE7&&(C+=" mfp-ie7"),C&&t._addClassToMFP(C),t.updateItemHTML(),T("BuildControls"),e("html").css(m),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||i),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(v),t._setFocus()):t.bgOverlay.addClass(v),o.on("focusin"+h,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(u),T(f),n},close:function(){t.isOpen&&(T(c),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(C),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){T(l);var n=C+" "+v+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var i={marginRight:""};t.isIE7?e("body, html").css("overflow",""):i.overflow="",e("html").css(i)}o.off("keyup"+h+" focusin"+h),t.ev.off(h),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,T(d)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||I.height();t.fixedContentPos||t.wrap.css("height",t.wH),T("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(T("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var o=t.st[i]?t.st[i].markup:!1;T("FirstMarkupParse",o),t.currTemplate[i]=o?e(o):!0}r&&r!==n.type&&t.container.removeClass("mfp-"+r+"-holder");var a=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(a,i),n.preloaded=!0,T(m,n),r=n.type,t.container.prepend(t.contentContainer),T("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".mfp-close").length||t.content.append(E()):t.content=e:t.content="",T(u),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,o=t.items[n];if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var r=t.types,a=0;r.length>a;a++)if(o.el.hasClass("mfp-"+r[a])){i=r[a];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,T("ElementParse",o),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var o="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){var r=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(r||2!==n.which&&!n.ctrlKey&&!n.metaKey){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(a>I.width())return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var o={status:e,text:i};T("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(y)){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(i&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?o.height():document.body.scrollHeight)>(e||I.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){return n.target===t.wrap[0]||e.contains(t.wrap[0],n.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),T(p,[t,n,i]),e.each(n,function(e,n){if(void 0===n||n===!1)return!0;if(o=e.split("_"),o.length>1){var i=t.find(h+"-"+o[0]);if(i.length>0){var r=o[1];"replaceWith"===r?i[0]!==n[0]&&i.replaceWith(n):"img"===r?i.is("img")?i.attr("src",n):i.replaceWith('<img src="'+n+'" class="'+i.attr("class")+'" />'):i.attr(o[1],n)}}else t.find(h+"-"+e).html(n)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.id="mfp-sbm",e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:w.prototype,modules:[],open:function(t,n){return _(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(n){_();var i=e(this);if("string"==typeof n)if("open"===n){var o,r=b?i.data("magnificPopup"):i[0].magnificPopup,a=parseInt(arguments[1],10)||0;r.items?o=r.items[a]:(o=i,r.delegate&&(o=o.find(r.delegate)),o=o.eq(a)),t._openClick({mfpEl:o},i,r)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),b?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n);return i};var P,O,z,M="inline",B=function(){z&&(O.after(z.addClass(P)).detach(),z=null)};e.magnificPopup.registerModule(M,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(M),x(l+"."+M,function(){B()})},getInline:function(n,i){if(B(),n.src){var o=t.st.inline,r=e(n.src);if(r.length){var a=r[0].parentNode;a&&a.tagName&&(O||(P=o.hiddenClass,O=k(P),P="mfp-"+P),z=r.after(O).detach().removeClass(P)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>");return n.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}});var F,H="ajax",L=function(){F&&i.removeClass(F)},A=function(){L(),t.req&&t.req.abort()};e.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(H),F=t.st.ajax.cursor,x(l+"."+H,A),x("BeforeChange."+H,A)},getAjax:function(n){F&&i.addClass(F),t.updateStatus("loading");var o=e.extend({url:n.src,success:function(i,o,r){var a={data:i,xhr:r};T("ParseAjax",a),t.appendContent(e(a.data),H),n.finished=!0,L(),t._setFocus(),setTimeout(function(){t.wrap.addClass(v)},16),t.updateStatus("ready"),T("AjaxContentAdded")},error:function(){L(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(o),""}}});var j,N=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var i=t.st.image.titleSrc;if(i){if(e.isFunction(i))return i.call(t,n);if(n.el)return n.el.attr(i)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=t.st.image,n=".image";t.types.push("image"),x(f+n,function(){"image"===t.currItem.type&&e.cursor&&i.addClass(e.cursor)}),x(l+n,function(){e.cursor&&i.removeClass(e.cursor),I.off("resize"+h)}),x("Resize"+n,t.resizeImage),t.isLowIE&&x("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,j&&clearInterval(j),e.isCheckingImgSize=!1,T("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(r){j&&clearInterval(j),j=setInterval(function(){return i.naturalWidth>0?(t._onImageHasSize(e),void 0):(n>200&&clearInterval(j),n++,3===n?o(10):40===n?o(50):100===n&&o(500),void 0)},r)};o(1)},getImage:function(n,i){var o=0,r=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,T("ImageLoadComplete")):(o++,200>o?setTimeout(r,100):a()))},a=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,l=i.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",n.img=e(c).on("load.mfploader",r).on("error.mfploader",a),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),c=n.img[0],c.naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:N(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(j&&clearInterval(j),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}});var W,R=function(){return void 0===W&&(W=void 0!==document.createElement("p").style.MozTransform),W};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom";if(n.enabled&&t.supportsTransition){var o,r,a=n.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,t.css(o),t},d=function(){t.content.css("visibility","visible")};x("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return d(),void 0;r=s(e),r.css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){d(),setTimeout(function(){r.remove(),e=r=null,T("ZoomAnimationEnded")},16)},a)},16)}}),x(c+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=a,!e){if(e=t._getItemToZoom(),!e)return;r=s(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),x(l+i,function(){t._allowZoom()&&(d(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return t.currItem.hasSize?t.currItem.img:!1},_getOffset:function(n){var i;i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var o=i.offset(),r=parseInt(i.css("padding-top"),10),a=parseInt(i.css("padding-bottom"),10);o.top-=e(window).scrollTop()-r;var s={width:i.width(),height:(b?i.innerHeight():i[0].offsetHeight)-a-r};return R()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var Z="iframe",q="//about:blank",D=function(e){if(t.currTemplate[Z]){var n=t.currTemplate[Z].find("iframe");n.length&&(e||(n[0].src=q),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(Z,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(Z),x("BeforeChange",function(e,t,n){t!==n&&(t===Z?D():n===Z&&D(!0))}),x(l+"."+Z,function(){D()})},getIframe:function(n,i){var o=n.src,r=t.st.iframe;e.each(r.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0});var a={};return r.srcAction&&(a[r.srcAction]=o),t._parseMarkup(i,a,n),t.updateStatus("ready"),i}}});var K=function(e){var n=t.items.length;return e>n-1?e-n:0>e?n+e:e},Y=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,i=".mfp-gallery",r=Boolean(e.fn.mfpFastClick);return t.direction=!0,n&&n.enabled?(a+=" mfp-gallery",x(f+i,function(){n.navigateByImgClick&&t.wrap.on("click"+i,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),o.on("keydown"+i,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),x("UpdateStatus"+i,function(e,n){n.text&&(n.text=Y(n.text,t.currItem.index,t.items.length))}),x(p+i,function(e,i,o,r){var a=t.items.length;o.counter=a>1?Y(n.tCounter,r.index,a):""}),x("BuildControls"+i,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(y),a=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(y),s=r?"mfpFastClick":"click";o[s](function(){t.prev()}),a[s](function(){t.next()}),t.isIE7&&(k("b",o[0],!1,!0),k("a",o[0],!1,!0),k("b",a[0],!1,!0),k("a",a[0],!1,!0)),t.container.append(o.add(a))}}),x(m+i,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),x(l+i,function(){o.off(i),t.wrap.off("click"+i),t.arrowLeft&&r&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null}),void 0):!1},next:function(){t.direction=!0,t.index=K(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=K(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;(t.direction?o:i)>=e;e++)t._preloadItem(t.index+e);for(e=1;(t.direction?i:o)>=e;e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=K(n),!t.items[n].preloaded){var i=t.items[n];i.parsed||(i=t.parseEl(n)),T("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,T("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}});var U="retina";e.magnificPopup.registerModule(U,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;n=isNaN(n)?n():n,n>1&&(x("ImageHasSize."+U,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),x("ElementParse."+U,function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),function(){var t=1e3,n="ontouchstart"in window,i=function(){I.off("touchmove"+r+" touchend"+r)},o="mfpFastClick",r="."+o;e.fn.mfpFastClick=function(o){return e(this).each(function(){var a,s=e(this);if(n){var l,c,d,u,p,f;s.on("touchstart"+r,function(e){u=!1,f=1,p=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],c=p.clientX,d=p.clientY,I.on("touchmove"+r,function(e){p=e.originalEvent?e.originalEvent.touches:e.touches,f=p.length,p=p[0],(Math.abs(p.clientX-c)>10||Math.abs(p.clientY-d)>10)&&(u=!0,i())}).on("touchend"+r,function(e){i(),u||f>1||(a=!0,e.preventDefault(),clearTimeout(l),l=setTimeout(function(){a=!1},t),o())})})}s.on("click"+r,function(){a||o()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+r+" click"+r),n&&I.off("touchmove"+r+" touchend"+r)}}(),_()})(window.jQuery||window.Zepto);


/*    1.3 - jquery.bxslider.min.js
================================================== */

/***
 * BxSlider v4.2.3 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 ***/
!function(e){var t={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,keyboardEnabled:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0}};e.fn.bxSlider=function(n){if(0===this.length)return this;if(this.length>1)return this.each(function(){e(this).bxSlider(n)}),this;var s={},o=this,r=e(window).width(),a=e(window).height(),l=function(){s.settings=e.extend({},t,n),s.settings.slideWidth=parseInt(s.settings.slideWidth),s.children=o.children(s.settings.slideSelector),s.children.length<s.settings.minSlides&&(s.settings.minSlides=s.children.length),s.children.length<s.settings.maxSlides&&(s.settings.maxSlides=s.children.length),s.settings.randomStart&&(s.settings.startSlide=Math.floor(Math.random()*s.children.length)),s.active={index:s.settings.startSlide},s.carousel=s.settings.minSlides>1||s.settings.maxSlides>1?!0:!1,s.carousel&&(s.settings.preloadImages="all"),s.minThreshold=s.settings.minSlides*s.settings.slideWidth+(s.settings.minSlides-1)*s.settings.slideMargin,s.maxThreshold=s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin,s.working=!1,s.controls={},s.interval=null,s.animProp="vertical"===s.settings.mode?"top":"left",s.usingCSS=s.settings.useCSS&&"fade"!==s.settings.mode&&function(){var e=document.createElement("div"),t=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in t)if(void 0!==e.style[t[i]])return s.cssPrefix=t[i].replace("Perspective","").toLowerCase(),s.animProp="-"+s.cssPrefix+"-transform",!0;return!1}(),"vertical"===s.settings.mode&&(s.settings.maxSlides=s.settings.minSlides),o.data("origStyle",o.attr("style")),o.children(s.settings.slideSelector).each(function(){e(this).data("origStyle",e(this).attr("style"))}),d()},d=function(){o.wrap('<div class="'+s.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),s.viewport=o.parent(),s.loader=e('<div class="bx-loading" />'),s.viewport.prepend(s.loader),o.css({width:"horizontal"===s.settings.mode?1e3*s.children.length+215+"%":"auto",position:"absolute"}),s.usingCSS&&s.settings.easing?o.css("-"+s.cssPrefix+"-transition-timing-function",s.settings.easing):s.settings.easing||(s.settings.easing="swing");v();s.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),s.viewport.parent().css({maxWidth:u()}),s.settings.pager||s.settings.controls||s.viewport.parent().css({margin:"0 auto 0px"}),s.children.css({"float":"horizontal"===s.settings.mode?"left":"none",listStyle:"none",position:"relative"}),s.children.css("width",h()),"horizontal"===s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginRight",s.settings.slideMargin),"vertical"===s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginBottom",s.settings.slideMargin),"fade"===s.settings.mode&&(s.children.css({position:"absolute",zIndex:0,display:"none"}),s.children.eq(s.settings.startSlide).css({zIndex:s.settings.slideZIndex,display:"block"})),s.controls.el=e('<div class="bx-controls" />'),s.settings.captions&&P(),s.active.last=s.settings.startSlide===f()-1,s.settings.video&&o.fitVids();var t=s.children.eq(s.settings.startSlide);("all"===s.settings.preloadImages||s.settings.ticker)&&(t=s.children),s.settings.ticker?s.settings.pager=!1:(s.settings.controls&&C(),s.settings.auto&&s.settings.autoControls&&T(),s.settings.pager&&w(),(s.settings.controls||s.settings.autoControls||s.settings.pager)&&s.viewport.after(s.controls.el)),c(t,g)},c=function(t,i){var n=t.find('img:not([src=""]), iframe').length;if(0===n)return void i();var s=0;t.find('img:not([src=""]), iframe').each(function(){e(this).one("load error",function(){++s===n&&i()}).each(function(){this.complete&&e(this).load()})})},g=function(){if(s.settings.infiniteLoop&&"fade"!==s.settings.mode&&!s.settings.ticker){var t="vertical"===s.settings.mode?s.settings.minSlides:s.settings.maxSlides,i=s.children.slice(0,t).clone(!0).addClass("bx-clone"),n=s.children.slice(-t).clone(!0).addClass("bx-clone");o.append(i).prepend(n)}s.loader.remove(),m(),"vertical"===s.settings.mode&&(s.settings.adaptiveHeight=!0),s.viewport.height(p()),o.redrawSlider(),s.settings.onSliderLoad(s,s.active.index),s.initialized=!0,s.settings.responsive&&e(window).bind("resize",Z),s.settings.auto&&s.settings.autoStart&&(f()>1||s.settings.autoSlideForOnePage)&&A(),s.settings.ticker&&H(),s.settings.pager&&I(s.settings.startSlide),s.settings.controls&&W(),s.settings.touchEnabled&&!s.settings.ticker&&O(),s.settings.keyboardEnabled&&!s.settings.ticker&&e(document).keydown(N)},p=function(){var t=0,n=e();if("vertical"===s.settings.mode||s.settings.adaptiveHeight)if(s.carousel){var o=1===s.settings.moveSlides?s.active.index:s.active.index*x();for(n=s.children.eq(o),i=1;i<=s.settings.maxSlides-1;i++)n=n.add(o+i>=s.children.length?s.children.eq(i-1):s.children.eq(o+i))}else n=s.children.eq(s.active.index);else n=s.children;return"vertical"===s.settings.mode?(n.each(function(){t+=e(this).outerHeight()}),s.settings.slideMargin>0&&(t+=s.settings.slideMargin*(s.settings.minSlides-1))):t=Math.max.apply(Math,n.map(function(){return e(this).outerHeight(!1)}).get()),"border-box"===s.viewport.css("box-sizing")?t+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))+parseFloat(s.viewport.css("border-top-width"))+parseFloat(s.viewport.css("border-bottom-width")):"padding-box"===s.viewport.css("box-sizing")&&(t+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))),t},u=function(){var e="100%";return s.settings.slideWidth>0&&(e="horizontal"===s.settings.mode?s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin:s.settings.slideWidth),e},h=function(){var e=s.settings.slideWidth,t=s.viewport.width();return 0===s.settings.slideWidth||s.settings.slideWidth>t&&!s.carousel||"vertical"===s.settings.mode?e=t:s.settings.maxSlides>1&&"horizontal"===s.settings.mode&&(t>s.maxThreshold||t<s.minThreshold&&(e=(t-s.settings.slideMargin*(s.settings.minSlides-1))/s.settings.minSlides)),e},v=function(){var e=1;if("horizontal"===s.settings.mode&&s.settings.slideWidth>0)if(s.viewport.width()<s.minThreshold)e=s.settings.minSlides;else if(s.viewport.width()>s.maxThreshold)e=s.settings.maxSlides;else{var t=s.children.first().width()+s.settings.slideMargin;e=Math.floor((s.viewport.width()+s.settings.slideMargin)/t)}else"vertical"===s.settings.mode&&(e=s.settings.minSlides);return e},f=function(){var e=0;if(s.settings.moveSlides>0)if(s.settings.infiniteLoop)e=Math.ceil(s.children.length/x());else for(var t=0,i=0;t<s.children.length;)++e,t=i+v(),i+=s.settings.moveSlides<=v()?s.settings.moveSlides:v();else e=Math.ceil(s.children.length/v());return e},x=function(){return s.settings.moveSlides>0&&s.settings.moveSlides<=v()?s.settings.moveSlides:v()},m=function(){var e;if(s.children.length>s.settings.maxSlides&&s.active.last&&!s.settings.infiniteLoop){if("horizontal"===s.settings.mode){var t=s.children.last();e=t.position(),S(-(e.left-(s.viewport.width()-t.outerWidth())),"reset",0)}else if("vertical"===s.settings.mode){var i=s.children.length-s.settings.minSlides;e=s.children.eq(i).position(),S(-e.top,"reset",0)}}else e=s.children.eq(s.active.index*x()).position(),s.active.index===f()-1&&(s.active.last=!0),void 0!==e&&("horizontal"===s.settings.mode?S(-e.left,"reset",0):"vertical"===s.settings.mode&&S(-e.top,"reset",0))},S=function(e,t,i,n){if(s.usingCSS){var r="vertical"===s.settings.mode?"translate3d(0, "+e+"px, 0)":"translate3d("+e+"px, 0, 0)";o.css("-"+s.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"===t?setTimeout(function(){o.css(s.animProp,r),0===e?q():o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),q()})},0):"reset"===t?o.css(s.animProp,r):"ticker"===t&&(o.css("-"+s.cssPrefix+"-transition-timing-function","linear"),o.css(s.animProp,r),o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),S(n.resetValue,"reset",0),L()}))}else{var a={};a[s.animProp]=e,"slide"===t?o.animate(a,i,s.settings.easing,function(){q()}):"reset"===t?o.css(s.animProp,e):"ticker"===t&&o.animate(a,speed,"linear",function(){S(n.resetValue,"reset",0),L()})}},b=function(){for(var t="",i=f(),n=0;i>n;n++){var o="";s.settings.buildPager&&e.isFunction(s.settings.buildPager)||s.settings.pagerCustom?(o=s.settings.buildPager(n),s.pagerEl.addClass("bx-custom-pager")):(o=n+1,s.pagerEl.addClass("bx-default-pager")),t+='<div class="bx-pager-item"><a href="" data-slide-index="'+n+'" class="bx-pager-link">'+o+"</a></div>"}s.pagerEl.html(t)},w=function(){s.settings.pagerCustom?s.pagerEl=e(s.settings.pagerCustom):(s.pagerEl=e('<div class="bx-pager" />'),s.settings.pagerSelector?e(s.settings.pagerSelector).html(s.pagerEl):s.controls.el.addClass("bx-has-pager").append(s.pagerEl),b()),s.pagerEl.on("click touchend","a",z)},C=function(){s.controls.next=e('<a class="bx-next" href="">'+s.settings.nextText+"</a>"),s.controls.prev=e('<a class="bx-prev" href="">'+s.settings.prevText+"</a>"),s.controls.next.bind("click touchend",E),s.controls.prev.bind("click touchend",y),s.settings.nextSelector&&e(s.settings.nextSelector).append(s.controls.next),s.settings.prevSelector&&e(s.settings.prevSelector).append(s.controls.prev),s.settings.nextSelector||s.settings.prevSelector||(s.controls.directionEl=e('<div class="bx-controls-direction" />'),s.controls.directionEl.append(s.controls.prev).append(s.controls.next),s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))},T=function(){s.controls.start=e('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+s.settings.startText+"</a></div>"),s.controls.stop=e('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+s.settings.stopText+"</a></div>"),s.controls.autoEl=e('<div class="bx-controls-auto" />'),s.controls.autoEl.on("click",".bx-start",k),s.controls.autoEl.on("click",".bx-stop",M),s.settings.autoControlsCombine?s.controls.autoEl.append(s.controls.start):s.controls.autoEl.append(s.controls.start).append(s.controls.stop),s.settings.autoControlsSelector?e(s.settings.autoControlsSelector).html(s.controls.autoEl):s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl),D(s.settings.autoStart?"stop":"start")},P=function(){s.children.each(function(){var t=e(this).find("img:first").attr("title");void 0!==t&&(""+t).length&&e(this).append('<div class="bx-caption"><span>'+t+"</span></div>")})},E=function(e){e.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&o.stopAuto(),o.goToNextSlide())},y=function(e){e.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&o.stopAuto(),o.goToPrevSlide())},k=function(e){o.startAuto(),e.preventDefault()},M=function(e){o.stopAuto(),e.preventDefault()},z=function(t){if(t.preventDefault(),!s.controls.el.hasClass("disabled")){s.settings.auto&&o.stopAuto();var i=e(t.currentTarget);if(void 0!==i.attr("data-slide-index")){var n=parseInt(i.attr("data-slide-index"));n!==s.active.index&&o.goToSlide(n)}}},I=function(t){var i=s.children.length;return"short"===s.settings.pagerType?(s.settings.maxSlides>1&&(i=Math.ceil(s.children.length/s.settings.maxSlides)),void s.pagerEl.html(t+1+s.settings.pagerShortSeparator+i)):(s.pagerEl.find("a").removeClass("active"),void s.pagerEl.each(function(i,n){e(n).find("a").eq(t).addClass("active")}))},q=function(){if(s.settings.infiniteLoop){var e="";0===s.active.index?e=s.children.eq(0).position():s.active.index===f()-1&&s.carousel?e=s.children.eq((f()-1)*x()).position():s.active.index===s.children.length-1&&(e=s.children.eq(s.children.length-1).position()),e&&("horizontal"===s.settings.mode?S(-e.left,"reset",0):"vertical"===s.settings.mode&&S(-e.top,"reset",0))}s.working=!1,s.settings.onSlideAfter(s.children.eq(s.active.index),s.oldIndex,s.active.index)},D=function(e){s.settings.autoControlsCombine?s.controls.autoEl.html(s.controls[e]):(s.controls.autoEl.find("a").removeClass("active"),s.controls.autoEl.find("a:not(.bx-"+e+")").addClass("active"))},W=function(){1===f()?(s.controls.prev.addClass("disabled"),s.controls.next.addClass("disabled")):!s.settings.infiniteLoop&&s.settings.hideControlOnEnd&&(0===s.active.index?(s.controls.prev.addClass("disabled"),s.controls.next.removeClass("disabled")):s.active.index===f()-1?(s.controls.next.addClass("disabled"),s.controls.prev.removeClass("disabled")):(s.controls.prev.removeClass("disabled"),s.controls.next.removeClass("disabled")))},A=function(){if(s.settings.autoDelay>0){setTimeout(o.startAuto,s.settings.autoDelay)}else o.startAuto(),e(window).focus(function(){o.startAuto()}).blur(function(){o.stopAuto()});s.settings.autoHover&&o.hover(function(){s.interval&&(o.stopAuto(!0),s.autoPaused=!0)},function(){s.autoPaused&&(o.startAuto(!0),s.autoPaused=null)})},H=function(){var t=0;if("next"===s.settings.autoDirection)o.append(s.children.clone().addClass("bx-clone"));else{o.prepend(s.children.clone().addClass("bx-clone"));var i=s.children.first().position();t="horizontal"===s.settings.mode?-i.left:-i.top}if(S(t,"reset",0),s.settings.pager=!1,s.settings.controls=!1,s.settings.autoControls=!1,s.settings.tickerHover)if(s.usingCSS){var n,r="horizontal"==s.settings.mode?4:5;s.viewport.hover(function(){var e=o.css("-"+s.cssPrefix+"-transform");n=parseFloat(e.split(",")[r]),S(n,"reset",0)},function(){var t=0;s.children.each(function(){t+="horizontal"==s.settings.mode?e(this).outerWidth(!0):e(this).outerHeight(!0)});var i=s.settings.speed/t,o=("horizontal"==s.settings.mode?"left":"top",i*(t-Math.abs(parseInt(n))));L(o)})}else s.viewport.hover(function(){o.stop()},function(){var t=0;s.children.each(function(){t+="horizontal"==s.settings.mode?e(this).outerWidth(!0):e(this).outerHeight(!0)});var i=s.settings.speed/t,n="horizontal"==s.settings.mode?"left":"top",r=i*(t-Math.abs(parseInt(o.css(n))));L(r)});L()},L=function(e){speed=e?e:s.settings.speed;var t={left:0,top:0},i={left:0,top:0};"next"===s.settings.autoDirection?t=o.find(".bx-clone").first().position():i=s.children.first().position();var n="horizontal"===s.settings.mode?-t.left:-t.top,r="horizontal"===s.settings.mode?-i.left:-i.top,a={resetValue:r};S(n,"ticker",speed,a)},F=function(t){var i=e(window),n={top:i.scrollTop(),left:i.scrollLeft()};n.right=n.left+i.width(),n.bottom=n.top+i.height();var s=t.offset();return s.right=s.left+t.outerWidth(),s.bottom=s.top+t.outerHeight(),!(n.right<s.left||n.left>s.right||n.bottom<s.top||n.top>s.bottom)},N=function(e){var t=document.activeElement.tagName.toLowerCase(),i="input|textarea",n=new RegExp(t,["i"]),s=n.exec(i);if(null==s&&F(o)){if(39==e.keyCode)return E(e),!1;if(37==e.keyCode)return y(e),!1}},O=function(){s.touch={start:{x:0,y:0},end:{x:0,y:0}},s.viewport.bind("touchstart MSPointerDown pointerdown",X),s.viewport.on("click",".bxslider a",function(e){s.viewport.hasClass("click-disabled")&&(e.preventDefault(),s.viewport.removeClass("click-disabled"))})},X=function(e){if(s.controls.el.addClass("disabled"),s.working)e.preventDefault(),s.controls.el.removeClass("disabled");else{s.touch.originalPos=o.position();var t=e.originalEvent,i="undefined"!=typeof t.changedTouches?t.changedTouches:[t];s.touch.start.x=i[0].pageX,s.touch.start.y=i[0].pageY,s.viewport.get(0).setPointerCapture&&(s.pointerId=t.pointerId,s.viewport.get(0).setPointerCapture(s.pointerId)),s.viewport.bind("touchmove MSPointerMove pointermove",R),s.viewport.bind("touchend MSPointerUp pointerup",V),s.viewport.bind("MSPointerCancel pointercancel",Y)}},Y=function(){S(s.touch.originalPos.left,"reset",0),s.controls.el.removeClass("disabled"),s.viewport.unbind("MSPointerCancel pointercancel",Y),s.viewport.unbind("touchmove MSPointerMove pointermove",R),s.viewport.unbind("touchend MSPointerUp pointerup",V),s.viewport.get(0).releasePointerCapture&&s.viewport.get(0).releasePointerCapture(s.pointerId)},R=function(e){var t=e.originalEvent,i="undefined"!=typeof t.changedTouches?t.changedTouches:[t],n=Math.abs(i[0].pageX-s.touch.start.x),o=Math.abs(i[0].pageY-s.touch.start.y);if(3*n>o&&s.settings.preventDefaultSwipeX?e.preventDefault():3*o>n&&s.settings.preventDefaultSwipeY&&e.preventDefault(),"fade"!==s.settings.mode&&s.settings.oneToOneTouch){var r=0,a=0;"horizontal"===s.settings.mode?(a=i[0].pageX-s.touch.start.x,r=s.touch.originalPos.left+a):(a=i[0].pageY-s.touch.start.y,r=s.touch.originalPos.top+a),S(r,"reset",0)}},V=function(e){s.viewport.unbind("touchmove MSPointerMove pointermove",R),s.controls.el.removeClass("disabled");var t=e.originalEvent,i="undefined"!=typeof t.changedTouches?t.changedTouches:[t],n=0,r=0;s.touch.end.x=i[0].pageX,s.touch.end.y=i[0].pageY,"fade"===s.settings.mode?(r=Math.abs(s.touch.start.x-s.touch.end.x),r>=s.settings.swipeThreshold&&(s.touch.start.x>s.touch.end.x?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto())):("horizontal"===s.settings.mode?(r=s.touch.end.x-s.touch.start.x,n=s.touch.originalPos.left):(r=s.touch.end.y-s.touch.start.y,n=s.touch.originalPos.top),!s.settings.infiniteLoop&&(0===s.active.index&&r>0||s.active.last&&0>r)?S(n,"reset",200):Math.abs(r)>=s.settings.swipeThreshold?(0>r?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):S(n,"reset",200)),s.viewport.unbind("touchend MSPointerUp pointerup",V),s.viewport.get(0).releasePointerCapture&&s.viewport.get(0).releasePointerCapture(s.pointerId)},Z=function(){if(s.initialized)if(s.working)window.setTimeout(Z,10);else{var t=e(window).width(),i=e(window).height();(r!==t||a!==i)&&(r=t,a=i,o.redrawSlider(),s.settings.onSliderResize.call(o,s.active.index))}};return o.goToSlide=function(t,i){if(!s.working&&s.active.index!==t){s.working=!0,s.oldIndex=s.active.index,s.active.index=0>t?f()-1:t>=f()?0:t;var n=!0;if(n=s.settings.onSlideBefore(s.children.eq(s.active.index),s.oldIndex,s.active.index),"undefined"!=typeof n&&!n)return s.active.index=s.oldIndex,void(s.working=!1);if("next"===i?s.settings.onSlideNext(s.children.eq(s.active.index),s.oldIndex,s.active.index)||(n=!1):"prev"===i&&(s.settings.onSlidePrev(s.children.eq(s.active.index),s.oldIndex,s.active.index)||(n=!1)),"undefined"!=typeof n&&!n)return s.active.index=s.oldIndex,void(s.working=!1);if(s.active.last=s.active.index>=f()-1,(s.settings.pager||s.settings.pagerCustom)&&I(s.active.index),s.settings.controls&&W(),"fade"===s.settings.mode)s.settings.adaptiveHeight&&s.viewport.height()!==p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed),s.children.filter(":visible").fadeOut(s.settings.speed).css({zIndex:0}),s.children.eq(s.active.index).css("zIndex",s.settings.slideZIndex+1).fadeIn(s.settings.speed,function(){e(this).css("zIndex",s.settings.slideZIndex),q()});else{s.settings.adaptiveHeight&&s.viewport.height()!==p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed);var r=0,a={left:0,top:0},l=null;if(!s.settings.infiniteLoop&&s.carousel&&s.active.last)if("horizontal"===s.settings.mode)l=s.children.eq(s.children.length-1),a=l.position(),r=s.viewport.width()-l.outerWidth();else{var d=s.children.length-s.settings.minSlides;a=s.children.eq(d).position()}else if(s.carousel&&s.active.last&&"prev"===i){var c=1===s.settings.moveSlides?s.settings.maxSlides-x():(f()-1)*x()-(s.children.length-s.settings.maxSlides);l=o.children(".bx-clone").eq(c),a=l.position()}else if("next"===i&&0===s.active.index)a=o.find("> .bx-clone").eq(s.settings.maxSlides).position(),s.active.last=!1;else if(t>=0){var g=t*x();a=s.children.eq(g).position()}if("undefined"!=typeof a){var u="horizontal"===s.settings.mode?-(a.left-r):-a.top;S(u,"slide",s.settings.speed)}}}},o.goToNextSlide=function(){if(s.settings.infiniteLoop||!s.active.last){var e=parseInt(s.active.index)+1;o.goToSlide(e,"next")}},o.goToPrevSlide=function(){if(s.settings.infiniteLoop||0!==s.active.index){var e=parseInt(s.active.index)-1;o.goToSlide(e,"prev")}},o.startAuto=function(e){s.interval||(s.interval=setInterval(function(){"next"===s.settings.autoDirection?o.goToNextSlide():o.goToPrevSlide()},s.settings.pause),s.settings.autoControls&&e!==!0&&D("stop"))},o.stopAuto=function(e){s.interval&&(clearInterval(s.interval),s.interval=null,s.settings.autoControls&&e!==!0&&D("start"))},o.getCurrentSlide=function(){return s.active.index},o.getCurrentSlideElement=function(){return s.children.eq(s.active.index)},o.getSlideCount=function(){return s.children.length},o.isWorking=function(){return s.working},o.redrawSlider=function(){s.children.add(o.find(".bx-clone")).outerWidth(h()),s.viewport.css("height",p()),s.settings.ticker||m(),s.active.last&&(s.active.index=f()-1),s.active.index>=f()&&(s.active.last=!0),s.settings.pager&&!s.settings.pagerCustom&&(b(),I(s.active.index))},o.destroySlider=function(){s.initialized&&(s.initialized=!1,e(".bx-clone",this).remove(),s.children.each(function(){void 0!==e(this).data("origStyle")?e(this).attr("style",e(this).data("origStyle")):e(this).removeAttr("style")}),void 0!==e(this).data("origStyle")?this.attr("style",e(this).data("origStyle")):e(this).removeAttr("style"),e(this).unwrap().unwrap(),s.controls.el&&s.controls.el.remove(),s.controls.next&&s.controls.next.remove(),s.controls.prev&&s.controls.prev.remove(),s.pagerEl&&s.settings.controls&&!s.settings.pagerCustom&&s.pagerEl.remove(),e(".bx-caption",this).remove(),s.controls.autoEl&&s.controls.autoEl.remove(),clearInterval(s.interval),s.settings.responsive&&e(window).unbind("resize",Z),s.settings.keyboardEnabled&&e(document).unbind("keydown",N))},o.reloadSlider=function(e){void 0!==e&&(n=e),o.destroySlider(),l()},l(),this}}(jQuery);


/*    1.4 - bselect.js
================================================== */

(function( $, undefined ) {
    "use strict";

    var elements = 0;
    var dataName = "bselect";
    var instances = [];
    var bootstrapButtonSizes = [ "mini", "small", "large" ];
    var sliceArray = Array.prototype.slice;

    var methods = {
        // Get/set options of the component
        option: function( option, value ) {
            var curr = this.data( dataName ).options || {},
                prev = $.extend( {}, curr );

            if ( typeof option === "string" && option[ 0 ] !== "_" ) {
                if ( value === undefined ) {
                    return curr[ option ];
                } else {
                    curr[ option ] = value;
                    updateOptions( this, prev, curr );

                    return this;
                }
            } else if ( $.isPlainObject( option ) ) {
                $.extend( curr, option );
                updateOptions( this, prev, curr );

                this.data( dataName ).options = curr;
            }

            return curr;
        },

        // Retrieve the BSelect container
        element: function() {
            return this.data( dataName ).element;
        },

        toggle: function( e ) {
            if ( this[ 0 ].disabled ) {
                return this;
            }

            var bselect = _callMethod( this, "element" );

            if ( e instanceof $.Event ) {
                var option = _callMethod( this, "option", "showOn" );
                //e.stopPropagation();

                if ( $( e.target ).is( ".bselect-label" ) && option !== "both" ) {
                    return this;
                }
            }

            if ( bselect.find( ".bselect-dropdown" ).is( ":hidden" ) ) {
                _callMethod( this, "show" );
            } else {
                _callMethod( this, "hide" );
            }

            return this;
        },
        show: function() {
            var searchInput, activeItem, bselect, dropdown, inputWidth;
            var data = this.data( dataName );

            if ( this[ 0 ].disabled || data.open ) {
                return this;
            }

            bselect = data.element;
            dropdown = bselect.find( ".bselect-dropdown" );

            dropdown.css( "left", "-9999em" ).show();
            adjustDropdownHeight( bselect );

            // Adjust the scrolling to match the current select option position - issue #10
            activeItem = bselect.find( ".bselect-option.active" );
            if ( activeItem.length ) {
                var optionList = bselect.find( ".bselect-option-list" ),
                    activeItemPos = activeItem.position().top,
                    optionListPos = optionList.position().top;

                if ( activeItemPos - optionListPos < optionList.height() ) {
                    optionList.scrollTop( 0 );
                } else {
                    optionList.scrollTop( activeItemPos - optionListPos );
                }
            }

            dropdown.hide().css( "left", "auto" );

            dropdown.slideDown( _callMethod( this, "option", "animationDuration" ) );
            this.data( dataName, $.extend( data, {
                open: true
            }));

            // The following class will allow us to show that nice inset shadow in .dropdown-toggle
            bselect.addClass( "open" );

            // Adjust the size of the search input to match the container inner width
            searchInput = bselect.find( ".bselect-search-input" ).focus();
            inputWidth = searchInput.parent().width() - searchInput.next().outerWidth();
            searchInput.innerWidth( inputWidth );

            bselect.find( ".bselect-search-input" ).attr( "aria-expanded", "true" );

            return this;
        },
        hide: function( clear ) {
            var data = this.data( dataName );
            if ( this[ 0 ].disabled || !data.open ) {
                return this;
            }

            var options = data.options,
                bselect = data.element;

            clear = clear === undefined ? true : clear;

            this.data( dataName, $.extend( data, {
                open: false
            }));

            bselect.find( ".bselect-dropdown" ).slideUp( options.animationDuration );
            bselect.removeClass( "open" );

            // Clear the search input and the results, if that's case
            if ( clear && options.clearSearchOnExit ) {
                _callMethod( this, "clearSearch" );
            }

            bselect.find( ".bselect-search-input" ).attr( "aria-expanded", "false" );

            return this;
        },
        select: function( arg ) {
            var $elem, val;
            var bselect = _callMethod( this, "element" );

            if ( arg instanceof $.Event ) {
                $elem = $( arg.currentTarget );
                arg.preventDefault();
            } else {
                $elem = bselect.find( "li" ).eq( arg );

                if ( !$elem.length ) {
                    return this;
                }
            }

            // Remove the highlighted status from any previously selected item...
            var index = bselect.find( "li" )
                               .removeClass( "active" )
                               .attr( "aria-selected", "false" )
                               .index( $elem );

            var option = this.find( "option[value!='']" ).get( index );

            // Trigger the selected event
            this.trigger( "bselectselect", [ option ] );

            // ...and add to the new selected item :)
            val = $elem.addClass( "active" ).data( "value" );
            $elem.attr( "aria-selected", "true" );

            bselect.find( ".bselect-label" ).text( $elem.text() );
            _callMethod( this, "hide" );

            // We'll keep up-to-date the old select, too
            this.data( dataName ).tempDisable = true;
            this.val( val ).trigger( "change" );

            // Trigger the selected event
            this.trigger( "bselectselected", [ val, option ] );

            return this;
        },

        // Searches every item in the list for the given text
        search: function( arg ) {
            var listItems, listItem, i, len, results;
            var options = _callMethod( this, "option" );
            var searched = arg instanceof $.Event ? arg.target.value : arg;
            var bselect = _callMethod( this, "element" );

            if ( this[ 0 ].disabled ) {
                return this;
            }

            // Avoid searching for nothing
            if ( searched === "" ) {
                _callMethod( this, "clearSearch" );
            }

            if ( !( arg instanceof $.Event ) ) {
                bselect.find( ".bselect-search" ).val( searched );
            }

            // Same search/few chars? We won't search then!
            if (
                ( searched === options.lastSearch ) ||
                ( searched.length < options.minSearchInput )
            ) {
                return;
            }

            // Initialize the result collection
            results = $();

            listItems = bselect.find( "li" ).hide();
            for ( i = 0, len = listItems.length; i < len; i++ ) {
                listItem = listItems[ i ];
                if ( listItem.textContent.toLowerCase().indexOf( searched.toLowerCase() ) > -1 ) {
                    results = results.add( $( listItem ).show() );
                }
            }

            if ( results.length === 0 ) {
                showNoOptionsAvailable( this );
            } else {
                bselect.find( ".bselect-message" ).hide();
            }

            this.trigger( "bselectsearch", [ searched, results ] );

            adjustDropdownHeight( listItems.end() );
            return this;
        },

        clearSearch: function() {
            var bselect = _callMethod( this, "element" );

            bselect.find( ".bselect-search-input" ).val( "" );
            bselect.find( "li" ).show();
            bselect.find( ".bselect-message" ).hide();

            adjustDropdownHeight( bselect );

            return this;
        },

        // Disable the bselect instance
        disable: function() {
            if ( !this[ 0 ].disabled ) {
                _callMethod( this, "element" ).addClass( "disabled" );
                this.prop( "disabled", true );
            }

            return this;
        },

        // Enable the bselect instance
        enable: function() {
            if ( this[ 0 ].disabled ) {
                _callMethod( this, "element" ).removeClass( "disabled" );
                this.prop( "disabled", false );
            }

            return this;
        },

        // Refreshes the option list. Useful when new HTML is added
        refresh: function() {
            var bselect = _callMethod( this, "element" );
            var optionList = bselect.find( ".bselect-option-list" ).empty();
            var mapping = {};
            var i = 0;

            bselect.toggleClass( "disabled", this.prop( "disabled" ) );

            this.find( "option, > optgroup" ).each(function() {
                var classes, li;
                var isOption = $( this ).is( "option" );

                if ( isOption && !this.value ) {
                    return;
                }

                if ( isOption ) {
                    classes = "bselect-option";
                    if ( $( this ).closest( "optgroup" ).length ) {
                        classes += " grouped";
                    }
                } else {
                    classes = "bselect-option-group";
                }

                li = $( "<li />" ).attr({
                    "class": classes,
                    // While there aren't roles for optgroup, we'll stick with the role option.
                    role: "option",
                    tabindex: isOption ? 2 : -1,
                    "aria-selected": "false"
                });

                if ( isOption ) {
                    li.data( "value", this.value );
                    mapping[ this.value ] = i;

                    li.html( "<a href='#'>" + this.text + "</a>" );
                } else {
                    li.text( this.label );
                }

                li.appendTo( optionList );
                i++;
            });

            if ( i === 0 ) {
                showNoOptionsAvailable( this );
            }

            this.data( dataName ).itemsMap = mapping;
            return this;
        },

        destroy: function() {
            var bselect = _callMethod( this, "element" );
            this.data( dataName, null );

            // Remove our cached thing
            instances.splice( instances.indexOf( this ), 1 );

            bselect.remove();
            this.removeClass( "bselect-inaccessible" ).unbind( ".bselect" );
            return this;
        }
    };

    // Determine whether an DOM Element has bselect instance
    function hasBSelect( el ) {
        return $.isPlainObject( $( el ).data( dataName ) );
    }

    // Helper function that will call an BSelect method in the context of $elem
    function _callMethod( $elem, method ) {
        if ( methods[ method ] !== undefined ) {
            return methods[ method ].apply( $elem, sliceArray.call( arguments, 2 ) );
        }

        return $elem;
    }

    /**
     * Get the placeholder of an element.
     * Retrieves in the following order:
     * - bselect options
     * - .data("placeholder") / attribute data-placeholder
     * - Default bselect i18n "selectAnOption"
     */
    function getPlaceholder( $elem ) {
        return _callMethod( $elem, "option", "placeholder" ) ||
               $elem.data( "placeholder" ) ||
               $.bselect.i18n.selectAnOption;
    }

    // Adjusts the dropdown height of an bselect.
    function adjustDropdownHeight( $elem ) {
        var list = $elem.find( ".bselect-option-list" );
        var len = list.find( "li:visible" ).length;

        list.innerHeight( parseInt( list.css( "line-height" ), 10 ) * 1.5 * ( len < 5 ? len : 5 ) );
    }

    // Updates visual properties of the bselect after the plugin was initialized
    function updateOptions( $elem, prev, curr ) {
        var bselect = _callMethod( $elem, "element" );

        $.each( prev, function(key, val) {
            if ( curr[ key ] !== val ) {
                if ( key === "size" ) {
                    var sizes = $.map( bootstrapButtonSizes.slice( 0 ), function( size ) {
                        return "bselect-" + size;
                    }).join( " " );

                    bselect.removeClass( sizes );
                    if ( bootstrapButtonSizes.indexOf( curr.size ) > -1 ) {
                        bselect.addClass( "bselect-" + curr.size );
                    }
                }
            }
        });
    }

    // Show the 'no options available' message
    function showNoOptionsAvailable( $elem ) {
        var bselect = _callMethod( $elem, "element" );
        bselect.find( ".bselect-message" ).text( $.bselect.i18n.noOptionsAvailable ).show();
    }

    /**
     * Handle keypress on the search input and on the options.
     * - On the search input: arrow up goes to the last visible item, while arrow down
     *   does the opposite.
     * - In the options, arrows are used to navigate and enter to select.
     */
    function handleKeypress( e ) {
        if ( e.keyCode !== 38 && e.keyCode !== 40 && e.keyCode !== 13 ) {
            return;
        }

        var $this = $( this );
        var isInput = $this.is( ".bselect-search-input" );

        switch ( e.keyCode ) {
            // UP
            case 38:
                if ( isInput ) {
                    $( e.delegateTarget ).find( ".bselect-option:visible:last" ).focus();
                } else {
                    $this.prevAll( ".bselect-option:visible" ).eq( 0 ).focus();
                }
                break;

            // DOWN
            case 40:
                if ( isInput ) {
                    $( e.delegateTarget ).find( ".bselect-option:visible:first" ).focus();
                } else {
                    $this.nextAll( ".bselect-option:visible" ).eq( 0 ).focus();
                }
                break;

            // ENTER
            case 13:
                if ( !isInput ) {
                    $this.trigger( "click" );
                }
                break;
        }

        return false;
    }

    // Run all the setup stuff
    function setup( elem, options ) {
        var caret, label, container, id, dropdown;
        var $elem = $( elem );

        // First of, let's build the base HTML of BSelect
        id = ++elements;
        container = $( "<div class='bselect' />", {
            id: "bselect-" + id
        });

        dropdown = $( "<div class='bselect-dropdown' />" );

        // Configure the search input
        if ( options.searchInput === true ) {
            var search = $( "<div class='bselect-search' />" );

            $( "<input type='text' class='bselect-search-input' />" ).attr({
                role: "combobox",
                tabindex: 1,
                "aria-expanded": "false",
                "aria-owns": "bselect-option-list-" + id

                // The W3C documentation says that role="combobox" should have aria-autocomplete,
                // but the validator tells us that this is invalid. Very strange.
                //"aria-autocomplete": "list"
            }).appendTo( search );

            $( "<span class='bselect-search-icon' />" )
                .append( "<i class='icon-search'></i>" )
                .appendTo( search );

            search.appendTo( dropdown );
        }

        $( "<div class='bselect-message' role='status' />" ).appendTo( dropdown );

        $( "<ul class='bselect-option-list' />" ).attr({
            id: "bselect-option-list-" + id,
            role: "listbox"
        }).appendTo( dropdown );

        container.append( dropdown ).insertAfter( $elem );

        // Save some precious data in the original select now, as we have the container in the DOM
        $elem.data( dataName, {
            options: options,
            element: container,
            open: false
        });

        updateOptions( $elem, $.bselect.defaults, options );
        _callMethod( $elem, "refresh" );

        $elem.bind( "bselectselect.bselect", options.select );
        $elem.bind( "bselectselected.bselect", options.selected );
        $elem.bind( "bselectsearch.bselect", options.search );

        label = $( "<span />" ).addClass( "bselect-label" ).text( getPlaceholder( $elem ) );
        caret = $( "<button type='button' />" ).addClass( "bselect-caret" )
                                               .html( "<span class='caret'></span>" );
        container.prepend( caret ).prepend( label );

        label.outerWidth( $elem.outerWidth() - caret.outerWidth() );

        // Hide this ugly select!
        $elem.addClass( "bselect-inaccessible" );

        // We'll cache the container for some actions
        instances.push( $elem );

        // Event binding
        container.find( ".bselect-search-input" ).keyup( $.proxy( methods.search, $elem ) );
        container.on( "click", ".bselect-option", $.proxy( methods.select, $elem ) );
        container.on( "click", ".bselect-caret, .bselect-label", $.proxy( methods.toggle, $elem ) );
        container.on( "keydown", ".bselect-option, .bselect-search-input", handleKeypress );

        // Issue #6 - Listen to the change event and update the selected value
        $elem.bind( "change.bselect", function() {
            var data = $elem.data( dataName );
            var index = data.itemsMap[ this.value ];

            if ( data.tempDisable ) {
                data.tempDisable = false;
                return;
            }

            _callMethod( $elem, "select", index );
        }).trigger( "change.bselect" );
    }

    $.fn.bselect = function( arg ) {
        if ( typeof arg === "string" && this[ 0 ] ) {
            if ( hasBSelect( this[ 0 ] ) && methods[ arg ] !== undefined ) {
                return methods[ arg ].apply( $( this[ 0 ] ), sliceArray.call( arguments, 1 ) );
            }

            return this;
        }

        return this.each(function() {
            // #8 - avoid creating bselect again on the same element
            if ( hasBSelect( this ) ) {
                return;
            }

            arg = $.isPlainObject( arg ) ? arg : {};
            arg = $.extend( {}, $.bselect.defaults, arg );

            setup( this, arg );
        });
    };

    $.bselect = {
        defaults: {
            size: "normal",
            showOn: "both",
            clearSearchOnExit: true,
            minSearchInput: 0,
            animationDuration: 300,
            searchInput: true,
            search: null,
            select: null,
            selected: null
        },
        i18n: {
            selectAnOption: "Select an option",
            noOptionsAvailable: "No options available."
        }
    };

    $( document ).on( "click.bselect", "label", function( e ) {
        var i, len, id;

        for ( i = 0, len = instances.length; i < len; i++ ) {
            id = instances[ i ][ 0 ].id;
            if ( id && $( e.target ).attr( "for" ) === id ) {
                _callMethod( instances[ i ], "show" );
                return false;
            }
        }
    }).on( "click.bselect", function( e ) {
        var i, len, data;

        for ( i = 0, len = instances.length; i < len; i++ ) {
            data = instances[ i ].data( dataName );

            if ( data.open && !data.element.has( e.target ).length ) {
                _callMethod( instances[ i ], "hide" );
            }
        }
    });

    // #18 - resizing within the original element
    $( window ).resize(function() {
        var i, len, data, caret;

        for ( i = 0, len = instances.length; i < len; i++ ) {
            data = instances[ i ].data( dataName );
            caret = data.element.find( ".bselect-caret" );

            data.element.find( ".bselect-label" )
                        .outerWidth( instances[ i ].outerWidth() - caret.outerWidth() );
        }
    });

})( jQuery );









/*    1.5 - plusgallery.js
================================================== */


/*
 * +Gallery Javascript Photo gallery v0.9.4
 * http://plusgallery.net/
 *
 * Copyright 2013, Jeremiah Martin | Twitter: @jeremiahjmartin
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html

 */


jQuery.ajaxSetup({ cache: false });
/*
SLIDEFADE
------------------------------------------------------------------------------------------------------*/

/* Custom plugin for a slide/in out animation with a fade - JJM */

(function ($) {
  $.fn.slideFade = function (speed, callback) {
    var slideSpeed;
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] == "number") {
        slideSpeed  = arguments[i];
      }
      else {
        var callBack = arguments[i];
      }
    }
    if(!slideSpeed) {
      slideSpeed = 500;
    }
    this.animate({
        opacity: 'toggle',
        height: 'toggle'
      }, slideSpeed,
      function(){
        if( typeof callBack != "function" ) { callBack = function(){}; }
        callBack.call(this);
      }
    );
  };
})( jQuery );

(function ($){
  $.fn.plusGallery = function(options){
    var lmnt = this;
    if(lmnt.length === 0) { return false; }
    var pg = {
      /*user defined Defaults*/
      imagePath: 'images/plusgallery',
      type: null,
      albumTitle: false, //show the album title in single album mode
      albumLimit: 16, //Limit amout of albums to load initially.
      limit: 30, //Limit of photos to load for gallery / more that 60 is dumb, separate them into different albums
      apiKey: '', //used with Flickr
      exclude: null,
      include: null,
      imageData: null,

      
      /*don't touch*/
      imgArray: [],
      titleArray: [],
      t: '', //timer
      idx: 0,
      imgCount: 0,
      imgTotal: 0,
      winWidth: 1024, //resets
      touch: false,
      titleText: '',

      init: function(){
        var _doc = $(document);
        //check for touch device
        if ("ontouchstart" in document.documentElement) {
          window.scrollTo(0, 1);
          pg.touch = true;
        }
        
        pg.winWidth = $(window).width();
        
        //reset some shit in case there is another copy that was loaded.
        $('#pgzoomview').remove();
        //Unbind everything first? 
        _doc.off("click", ".pgalbumlink, #pgthumbhome, .pgthumb, .pgzoomarrow, .pgzoomclose, #pgzoomview, #pgzoomslide, .pgzoomimg");

        pg.getDataAttr();
        
        pg.writeHTML();
        if(pg.albumId
          || pg.type == 'instagram'
          || (pg.type == 'local' && !pg.imageData.hasOwnProperty('albums'))){
          //load single Album
          pg.loadSingleAlbum();
        }
        else if(pg.type == 'local') {
          pg.parseAlbumData(pg.imageData);
        }
        else {
          pg.loadAlbumData();
        }
        
        
        
        //attach loadGallery to the album links
        _doc.on("click", ".pgalbumlink",function(e){
          e.preventDefault();
          $(this).append('<span class="pgloading"></span>');
          var galleryTitle = $(this).children('span').html();
          if(pg.type == 'local') {
            var galleryID = $(this).attr('data-album-index').replace('http://', '').replace('//', '').replace('https://', '');
            pg.parseData(pg.imageData.albums[galleryID],galleryTitle);
          } else {
            var galleryURL = this.href;
            pg.loadGallery(galleryURL,galleryTitle);
          }
        });
        
        _doc.on("click", "#pgthumbhome",function(e){
          e.preventDefault();
          $('#pgthumbview').slideFade(700);
          $('#pgalbums').slideFade(700);
        });
        
        //attach links load detail image
        _doc.on('click','.pgthumb',function(e){
          e.preventDefault();
          var idx = $('.pgthumb').index(this);
          pg.loadZoom(idx);
        });
        
        /*zoom events*/
        _doc.on('click','.pgzoomarrow',function(e){
          e.preventDefault();
          var dir = this.rel;
          pg.prevNext(dir);
          return false;
        });
        
        _doc.on('click','.pgzoomclose',function(e){
          e.preventDefault();
          pg.unloadZoom();
        });
        _doc.on("click", "#pgzoomview",function(e){
          e.preventDefault();
          pg.unloadZoom();
        });
        
        _doc.on("click", "#pgzoomslide",function(){
          pg.unloadZoom();
        });
        
        _doc.on("click", ".pgzoomimg",function(){
          if($(this).attr('id').replace('pgzoomimg', '') < pg.imgTotal - 1) {
            pg.prevNext('next');
          }
          return false;
        });
        
        clearTimeout(pg.t);
      },
      
      /*--------------------------
      
        get all the user defined
        variables from the HTML element
      
      ----------------------------*/
      getDataAttr: function(){
        //Gallery Type *required
        var dataAttr = lmnt.attr('data-type');
        
        if(pg.type == null && dataAttr) {
          pg.type = dataAttr;
        }
        else if ( pg.type == null ) {
          throw('You must enter a data type.');
        }
        
        //Gallery User Id *required if not local
        dataAttr = lmnt.attr('data-userid');
        if(dataAttr) {
          pg.userId = dataAttr;
        }
        else if(pg.type != 'local') {
          throw('You must enter a valid User ID');
        }
        
        //Limit on the amount photos per gallery
        dataAttr = lmnt.attr('data-limit');
        if(dataAttr) {
          pg.limit = dataAttr;
        }
        
        //Limit on the amount albums
        dataAttr = lmnt.attr('data-album-limit');
        if(dataAttr) {
          pg.albumLimit = dataAttr;
        }
        
        //album id to exclude
        dataAttr = lmnt.attr('data-exclude');
        if(dataAttr) {
          pg.exclude = dataAttr.split(',');
        }

        //album ids to include
        dataAttr = lmnt.attr('data-include');
        if(dataAttr) {
          pg.include = dataAttr.split(',');
        }
        
        //Api key - used with Flickr
        dataAttr = lmnt.attr('data-api-key');
        if(dataAttr) {
          pg.apiKey = dataAttr;
        }
        
        //Access Token - used with instagram
        dataAttr = lmnt.attr('data-access-token');
        if(dataAttr) {
          pg.accessToken = dataAttr;
        }
        dataAttr = lmnt.attr('data-album-id');
        if(dataAttr) {
          pg.albumId = dataAttr;
          
          //show hide the album title if we are in single gallery mode
          titleAttr = lmnt.attr('data-album-title');
          
          if(titleAttr == 'true') {
            pg.albumTitle = true;
          } else {
            pg.albumTitle = false;
          }
        }
        
        dataAttr = lmnt.attr('data-credit');
        if(dataAttr == 'false') {
          pg.credit = false;
        }

        //Image path
        dataAttr = lmnt.attr('data-image-path');
        if(dataAttr) {
            pg.imagePath = dataAttr;
        }
        
        //JSON string containing image data *required only for local
        dataAttr = lmnt.attr('data-image-data');
        if(dataAttr) {
          pg.imageData = JSON.parse(dataAttr);
        }
      },
      
      /*--------------------------
      
        set up the initial HTML
      
      ----------------------------*/
      writeHTML: function(){
        var touchClass;
        if(pg.touch){
          touchClass = 'touch';
          lmnt.addClass('touch');
        }
        else {
          touchClass = 'no-touch';
          lmnt.addClass('no-touch');
        }
        
        lmnt.append(
          '<ul id="pgalbums" class="clearfix"></ul>' +
          '<div id="pgthumbview">' +
            '<ul id="pgthumbs" class="clearfix"></ul>' +
          '</div>'
        );
        $('body').prepend(
          '<div id="pgzoomview" class="pg ' + touchClass + '">' +
            '<a href="#" rel="previous" id="pgzoomclose" title="Close">Close</a>' +
            '<a href="#" rel="previous" id="pgprevious" class="pgzoomarrow" title="previous">Previous</a>' +
            '<a href="#" rel="next" id="pgnext" class="pgzoomarrow" title="Next">Next</a>' +
            '<div id="pgzoomscroll">' +
              '<ul id="pgzoom"></ul>' +
            '</div>' +
          '</div>'
          );
        
        lmnt.addClass('pg');
        
        if(pg.credit === true) {
          lmnt.append('<div id="pgcredit"><a href="http://www.plusgallery.net" target="_blank" title="Powered by +GALLERY"><span>+</span>Gallery</a></div>');
        }
        
        //console.log('pg.albumTitle: ' + pg.albumTitle);
        
          $('#pgthumbview').prepend('<ul id="pgthumbcrumbs" class="clearfix"><li id="pgthumbhome">&laquo;</li></ul>');
      },
      
      
      /*--------------------------
      
        Parse the album data from
        the given json string.
      
      ----------------------------*/
      parseAlbumData: function(json) {
        lmnt.addClass('loaded');
        var objPath,
            albumTotal,
            galleryImage,
            galleryTitle,
            galleryJSON;

        switch(pg.type)
        {
        //have to load differently for for google/facebook/flickr
        case 'google':
        
          objPath = json.feed.entry;
          albumTotal = objPath.length;
              
          if(albumTotal > pg.albumLimit) {
            albumTotal = pg.albumLimit;
          }
          
          //remove excluded galleries if there are any.
          //albumTotal = albumTotal - pg.exclude.length;
        
          if(albumTotal > 0){
            $.each(objPath,function(i,obj){
              //obj is entry
              if(i < albumTotal){
                galleryTitle = obj.title.$t;
                galleryJSON = obj.link[0].href;
                galleryImage = obj.media$group.media$thumbnail[0].url;
                galleryImage = galleryImage.replace('s160','s210');
              
                pg.loadAlbums(galleryTitle,galleryImage,galleryJSON,i);
              }
  
            });
          }
          else { //else if albumTotal == 0
            throw('There are either no results for albums with this user ID or there was an error loading the data. \n' + galleryJSON);
          }
        break;
        case 'flickr':
          
          objPath = json.photosets.photoset;
          albumTotal = objPath.length;
              
          if(albumTotal > pg.albumLimit) {
            albumTotal = pg.albumLimit;
          }
              
          if(albumTotal > 0 ) {
            $.each(objPath,function(i,obj){
              //obj is entry
              if(i < albumTotal){
                galleryTitle = obj.title._content;
                galleryImage = 'https://farm' + obj.farm + '.staticflickr.com/' + obj.server + '/' + obj.primary + '_' + obj.secret + '_n.jpg';
                galleryJSON = 'https://api.flickr.com/services/rest/?&method=flickr.photosets.getPhotos&api_key=' + pg.apiKey + '&photoset_id=' + obj.id + '&format=json&jsoncallback=?';
    
                pg.loadAlbums(galleryTitle,galleryImage,galleryJSON);
              }
            });
          }
          else { //else if albumTotal == 0
            throw('There are either no results for albums with this user ID or there was an error loading the data. \n' + galleryJSON);
          }
        break;
        case 'facebook':
          objPath = json.data;
          albumTotal = objPath.length;
              
          if(albumTotal > pg.albumLimit) {
            albumTotal = pg.albumLimit;
          }
              
          if(albumTotal > 0) {
            $.each(objPath,function(i,obj){
              if(i < albumTotal){
                galleryTitle = obj.name;
                galleryJSON = 'https://graph.facebook.com/' + obj.id + '/photos?limit=' + pg.limit + '&access_token=' + pg.accessToken;
                galleryImage = 'http://graph.facebook.com/' + obj.id + '/picture?type=album';
                pg.loadAlbums(galleryTitle,galleryImage,galleryJSON);
              }
              
            });
          }
          else {
            throw('There are either no results for albums with this user ID or there was an error loading the data. \n' + albumURL);
          }
          break;
        case 'local':
          objPath = json.albums;
          albumTotal = objPath.length;
          
          if(albumTotal > pg.albumLimit) {
            albumTotal = pg.albumLimit;
          }
              
          if(albumTotal > 0 ) {
            $.each(objPath,function(i,obj){
              //obj is entry
              if(i < albumTotal){
                galleryTitle = obj.title;
                galleryImage = obj.images[0].th;
                galleryJSON = 'http://'+i;
    
                pg.loadAlbums(galleryTitle,galleryImage,galleryJSON);
              }
            });
          }
          else { //else if albumTotal == 0
            throw('There are no albums available in the specified JSON.');
          }
          break;
        }
      },
      
      
      /*--------------------------
      
        Load up Album Data JSON
        before Albums
      
      ----------------------------*/
      loadAlbumData: function() {
        var albumURL;
        switch(pg.type)
        {
        case 'google':
          albumURL = 'https://picasaweb.google.com/data/feed/base/user/' + pg.userId + '?alt=json&kind=album&hl=en_US&max-results=' + pg.albumLimit + '&callback=?';
          break;
        case 'flickr':
          albumURL = 'https://api.flickr.com/services/rest/?&method=flickr.photosets.getList&api_key=' + pg.apiKey + '&user_id=' + pg.userId + '&format=json&jsoncallback=?';
          break;
        case 'facebook':
          albumURL = 'https://graph.facebook.com/' + pg.userId + '/albums?limit=' + pg.albumLimit + '&access_token=' + pg.accessToken + '&callback=?';
          break;
        case 'instagram':
          //we ain't got no albums in instagram
          albumURL = null;
          break;
        case 'local':
          // No album support yet, but url wont be needed anyway.
          albumURL = null;
          break;
    
        default:
          throw('Please define a gallery type.');
        }
        
        $.getJSON(albumURL,function(json) {
          pg.parseAlbumData(json);
        });
      },
      
      
      /*--------------------------
      
        Load all albums to the page
      
      ----------------------------*/
      loadAlbums: function(galleryTitle,galleryImage,galleryJSON) {
        var displayAlbum = true;
        var imgHTML;
        
        //exclude albums if pg.exclude is set
        if(pg.exclude !== null) {
          $.each(pg.exclude,function(index, value){ //exclude albums if pg.exclude is set
            if(galleryJSON.indexOf(value) > 0){
              displayAlbum = false;
            }
          });
        }


        //include only specified albums if pg.include is set
        if(pg.include !== null) {
          displayAlbum = false;
          $.each(pg.include,function(index, value){ //exclude albums if pg.exclude is set
            if(galleryJSON.indexOf(value) > 0){
              displayAlbum = true;
            }
          });
        }
                                   
                                   
        if (displayAlbum){
          if (pg.type == 'facebook' || pg.type == 'flickr') {
            imgHTML = '<img src="'+ pg.imagePath + '/square.png" style="background-image: url(' + galleryImage + ');" title="' + galleryTitle + '" title="' + galleryTitle + '" class="pgalbumimg">';
          }
          else {
            imgHTML = '<img src="' + galleryImage + '" title="' + galleryTitle + '" title="' + galleryTitle + '" class="pgalbumimg">';
          }
          
          if(pg.type == 'local') {
            $('#pgalbums').append(
              '<li class="pgalbumthumb">' +
                '<a href="#" data-album-index="' + galleryJSON + '" class="pgalbumlink">' + imgHTML + '<span class="pgalbumtitle">' + galleryTitle + '</span><span class="pgplus">+</span></a>' +
              '</li>'
            );
          } else {
            $('#pgalbums').append(
              '<li class="pgalbumthumb">' +
                '<a href="' + galleryJSON + '" class="pgalbumlink">' + imgHTML + '<span class="pgalbumtitle">' + galleryTitle + '</span><span class="pgplus"><span>' + galleryTitle + '<span class="button">View Gallery</span></span></span></a>' +
              '</li>'
            );
          }
        }
        
        
          
      
      }, //End loadAlbums
      
      
      /*--------------------------
      
        Load all the images within
        a specific gallery
      
      ----------------------------*/
      loadSingleAlbum:function(){
        var url;
        switch(pg.type)
        {
        case 'google':
          url = 'https://picasaweb.google.com/data/feed/base/user/' + pg.userId + '/albumid/' + pg.albumId + '?alt=json&hl=en_US';
          pg.loadGallery(url);
          break;
        case 'flickr':
          url = 'https://api.flickr.com/services/rest/?&method=flickr.photosets.getPhotos&api_key=' + pg.apiKey + '&photoset_id=' + pg.albumId + '&format=json&jsoncallback=?';
          pg.loadGallery(url);
          break;
        case 'facebook':
          url = 'https://graph.facebook.com/' + pg.albumId + '/photos?limit=' + pg.limit + '&access_token=' + pg.accessToken;
          pg.loadGallery(url);
          break;
        case 'instagram':
          url = 'https://api.instagram.com/v1/users/' + pg.userId + '/media/recent/?access_token=' + pg.accessToken + '&count=' + pg.limit;
          pg.loadGallery(url);
          break;
        case 'local':
          pg.parseData(pg.imageData);
          break;
        }
        
        lmnt.addClass('loaded');
        $('#pgthumbhome').hide();
        
      },
      
      /*--------------------------
      
        Load all the images within
        a specific gallery
      
      ----------------------------*/
      loadGallery: function(url,title){
        pg.imgArray = [];
        pg.titleArray = [];
        $('#pgzoom').empty();
        $.ajax({
          url: url,
          cache: false,
          dataType: "jsonp",
          success: function(json){
            pg.parseData(json,title);
          }, //end success
          error: function(jqXHR, textStatus, errorThrown){
            console.log('Error: \njqXHR:' + jqXHR + '\ntextStatus: ' + textStatus + '\nerrorThrown: '  + errorThrown);
          }
        });
      }, //End loadGallery
      
      
      /*--------------------------
      
        Parse and convert the data
        of the gallery
      
      ----------------------------*/
      parseData: function(json,title){
        var obPath,
            imgTitle,
            imgSrc,
            imgTh,
            imgBg = '',
            thumbsLoaded = 0,
            zoomWidth,
            flickrImgExt;

        $('.crumbtitle').remove();
        $('#pgthumbs').empty();
        if(title === undefined){
          title = '&nbsp;';
        }
        $('#pgthumbcrumbs').append('<li class="crumbtitle">' + title + '</li>');
      
        switch(pg.type)
        {
        case 'google':
          objPath = json.feed.entry;
          break;
        case 'flickr':
          objPath = json.photoset.photo;
          break;
        case 'facebook':
          objPath = json.data;
          break;
        case 'instagram':
          objPath = json.data;
          break;
        case 'local':
          objPath = json.images;
          break;
        }
        
        pg.imgTotal = objPath.length;
        //limit the results
        if(pg.limit < pg.imgTotal){
          pg.imgTotal = pg.limit;
        }
        
        if(pg.imgTotal === 0) {
          throw('Please check your photo permissions,\nor make sure there are photos in this gallery.');
        }

        if(pg.winWidth > 1100) {
          zoomWidth = 1024;
          flickrImgExt = '_b';
        } else if(pg.winWidth > 620) {
          zoomWidth = 768;
          flickrImgExt = '_b';
        } else {
          zoomWidth = 540;
          flickrImgExt = '_z';
        }

        $.each(objPath,function(i,obj){
          //limit the results
          if(i < pg.limit) {
            switch(pg.type)
            {
            case 'google':
              imgTitle = obj.title.$t;
              imgSrc = obj.media$group.media$content[0].url;
              var lastSlash = imgSrc.lastIndexOf('/');
              var imgSrcSubString =imgSrc.substring(lastSlash);
              
              //show the max width image 1024 in this case
              imgSrc = imgSrc.replace(imgSrcSubString, '/s' + zoomWidth + imgSrcSubString);
              
              imgTh = obj.media$group.media$thumbnail[1].url;
              imgTh = imgTh.replace('s144','s160-c');
              break;
            case 'flickr':
              imgTitle = obj.title;
              imgSrc = 'http://farm' + obj.farm + '.staticflickr.com/' + obj.server + '/' + obj.id + '_' + obj.secret + flickrImgExt + '.jpg';
              imgTh = 'http://farm' + obj.farm + '.staticflickr.com/' + obj.server + '/' + obj.id + '_' + obj.secret + '_q.jpg';
              break;
            case 'facebook':
              imgTitle = obj.name;
              imgSrc = obj.images[1].source;
              imgTh = pg.imagePath + '/square.png';
              imgBg = ' style="background: url(' + obj.images[3].source + ') no-repeat 50% 50%; background-size: cover;"';
              break;
            case 'instagram':
              if(obj.caption !== null){
                imgTitle = obj.caption.text;
              }
              imgSrc = obj.images.standard_resolution.url;
              imgTh = obj.images.low_resolution.url;
              break;
            case 'local':
              if(obj.caption !== null){
                imgTitle = obj.caption;
              }
              imgSrc = obj.src;
              imgTh = obj.th;  
              break;
            }
            
            if(!imgTitle) {
              imgTitle = '';
            }
                
            pg.imgArray[i] = imgSrc;
            pg.titleArray[i] = imgTitle;
            
            $('#pgthumbs').append('<li class="pgthumb"><a href="' + imgSrc + '"><img src="' + imgTh + '" id="pgthumbimg' + i + '" class="pgthumbimg" alt="' + imgTitle + '" title="' + imgTitle + '"' + imgBg + '></a></li>');
            
            //check to make sure all the images are loaded and if so show the thumbs
            $('#pgthumbimg' + i).load(function(){
              thumbsLoaded++;
              if(thumbsLoaded == pg.imgTotal) {
                $('#pgalbums').slideFade(700,function(){
                $('.pgalbumthumb .pgloading').remove();
              });
              $('#pgthumbview').slideFade(700);
              }
          });
          } //end if(i < pg.limit)
        }); //end each
      },
      
      zoomIdx: null, //the zoom index
      zoomImagesLoaded: [],
      zoomScrollDir: null,
      zoomScrollLeft: 0,
      loadZoom: function(idx){
        pg.zoomIdx = idx;
        pg.winWidth = $(window).width();
        var pgZoomView = $('#pgzoomview'),
            pgZoomScroll = $('#pgzoomscroll'),
            pgPrevious = $('#pgprevious'),
            pgNext = $('#pgnext'),
            pgZoom = $('#pgzoom'),
            pgZoomHTML = '',
            totalImages = pg.imgArray.length;
        pgZoomView.addClass('fixed');
        
        //show/hide the prev/next links
        if(idx === 0) {
          pgPrevious.hide();
        }
        
        if(idx == totalImages - 1) {
          pgNext.hide();
        }
    
        var pgzoomWidth = pg.imgArray.length * pg.winWidth;
        $('#pgzoom').width(pgzoomWidth);
        
        var scrollLeftInt = parseInt(idx * pg.winWidth);
        
          
        pgZoomView.fadeIn(function(){
          //this has gotta come in after the fade or iOS blows up.
          
          $(window).on('resize',pg.resizeZoom);
          
          $.each(pg.imgArray,function(i){
            pgZoomHTML = pgZoomHTML  + '<li class="pgzoomslide loading" id="pgzoomslide' + i + '" style="width: ' + pg.winWidth + 'px;"><img src="//cdn.shopify.com/s/files/1/0841/3315/t/3/assets/square.gif" class="pgzoomspacer"><span class="pgzoomcaption">' + pg.titleArray[i] + '</span></li>';
    
            if(i + 1 == pg.imgArray.length) {
              //at the end of the loop
                $('#pgzoom').html(pgZoomHTML);
                
                pg.zoomKeyPress();
                $('#pgzoomscroll').scrollLeft(scrollLeftInt);
                pg.zoomScrollLeft = scrollLeftInt;
                pg.loadZoomImg(idx);
                pg.zoomScroll();
                //load siblings
                if((idx - 1) >= 0){
                pg.loadZoomImg(idx - 1);
                }
                
                if((idx + 1) < pg.imgArray.length){
                  pg.loadZoomImg(idx + 1);
                }
              }
            });
          });
      },
      
      
      loadZoomImg:function(idx){
        if($('#pgzoomimg' + idx).length === 0){
          $('#pgzoomslide' + idx + ' .pgzoomspacer').after('<img src="' + pg.imgArray[idx] + '" data-src="' + pg.imgArray[idx] + '" title="' + pg.titleArray[idx] + '" alt="' + pg.titleArray[idx] + '" id="pgzoomimg' + idx + '" class="pgzoomimg">');
          $('#pgzoomimg' + idx).load(function(){
            $(this).addClass('active');
          });
        }
      },
      
      zoomScroll:function(){
        var pgPrevious = $('#pgprevious'),
            pgNext = $('#pgnext'),
            scrollTimeout,
            canLoadZoom = true;
            
    
        $('#pgzoomscroll').on('scroll',function(){
          currentScrollLeft = $(this).scrollLeft();
          if(canLoadZoom === true) {
            canLoadZoom = false;
            scrollTimeout = setTimeout(function(){
              if(currentScrollLeft === 0){
                pgPrevious.fadeOut();
              }
              else {
                pgPrevious.fadeIn();
              }
              
              if(currentScrollLeft >= (pg.imgTotal - 1) * pg.winWidth){
              pgNext.fadeOut();
              }
              else {
                pgNext.fadeIn();
              }
              
              /*Check if we have scrolled left and if so load up the zoom image*/
              if(currentScrollLeft % pg.zoomScrollLeft > 20 || (currentScrollLeft > 0 && pg.zoomScrollLeft === 0)){
                pg.zoomScrollLeft = currentScrollLeft;
                var currentIdx = pg.zoomScrollLeft / pg.winWidth;
                
                var currentIdxCeil = Math.ceil(currentIdx);
                var currentIdxFloor = Math.floor(currentIdx);
                
                //Lazy load siblings on scroll.
                if(!pg.zoomImagesLoaded[currentIdxCeil]) {
                  pg.loadZoomImg(currentIdxCeil);
                }
                if(!pg.zoomImagesLoaded[currentIdxFloor]){
                  pg.loadZoomImg(currentIdxFloor);
                }
              }
              canLoadZoom = true;
            },200);
          }
        });
      },
      
      zoomKeyPress: function(){
        $(document).on('keyup','body',function(e){
          if(e.which == 27){
            pg.unloadZoom();
          }
          else
          if(e.which == 37){
            pg.prevNext('previous');
          }
          else
          if(e.which == 39){
            pg.prevNext('next');
          }
        });
      },
      
      resizeZoom: function(){
        pg.winWidth = $(window).width();
        var pgzoomWidth = pg.imgArray.length * pg.winWidth;
        $('#pgzoom').width(pgzoomWidth);
        $('.pgzoomslide').width(pg.winWidth);
        
        var scrollLeftInt = parseInt(pg.zoomIdx * pg.winWidth);
        
        $('#pgzoomscroll').scrollLeft(scrollLeftInt);
      },
      
      unloadZoom: function(){
        $(document).off('keyup','body');
        $(window).off('resize',pg.resizeZoom);
        $('#pgzoomscroll').off('scroll');
        $('#pgzoomview').fadeOut(function(){
          $('#pgzoom').empty();
          $('#pgzoomview').off('keyup');
          $('#pgzoomview').removeClass('fixed');
        });
          
      },
      
      prevNext: function(dir){
        var currentIdx = $('#pgzoomscroll').scrollLeft() / pg.winWidth;
        
        if(dir == "previous"){
          pg.zoomIdx = Math.round(currentIdx)  - 1;
        }
        else {
          pg.zoomIdx = Math.round(currentIdx) + 1;
        }
        
        var newScrollLeft = pg.zoomIdx * pg.winWidth;
        
        $('#pgzoomscroll').stop().animate({scrollLeft:newScrollLeft});
      }
    };
    
    $.extend(pg, options);
    pg.init();
  };
})( jQuery );


/*    1.6 - waypoints.js
================================================== */

/*!
Waypoints - 3.1.1
Copyright Â© 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var n in t){var r=t[n];for(var s in this.waypoints[n]){var a,l,h,p,u,c=this.waypoints[n][s],d=c.options.offset,f=c.triggerPoint,w=0,y=null==f;c.element!==c.element.window&&(w=c.adapter.offset()[r.offsetProp]),"function"==typeof d?d=d.apply(c):"string"==typeof d&&(d=parseFloat(d),c.options.offset.indexOf("%")>-1&&(d=Math.ceil(r.contextDimension*d/100))),a=r.contextScroll-r.contextOffset,c.triggerPoint=w+a-d,l=f<r.oldScroll,h=c.triggerPoint>=r.oldScroll,p=l&&h,u=!l&&!h,!y&&p?(c.queueTrigger(r.backward),o[c.group.id]=c.group):!y&&u?(c.queueTrigger(r.forward),o[c.group.id]=c.group):y&&r.oldScroll>=c.triggerPoint&&(c.queueTrigger(r.forward),o[c.group.id]=c.group)}}for(var g in o)o[g].flushTriggers();return this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();


/*    1.7 - jquery.fitvids.js
================================================== */


/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

;(function( $ ){

  'use strict';

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null,
      ignore: null
    };

    if(!document.getElementById('fit-vids-style')) {
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement("div");
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        'iframe[src*="player.vimeo.com"]',
        'iframe[src*="youtube.com"]',
        'iframe[src*="youtube-nocookie.com"]',
        'iframe[src*="kickstarter.com"][src*="video.html"]',
        'object',
        'embed'
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var ignoreList = '.fitvidsignore';

      if(settings.ignore) {
        ignoreList = ignoreList + ', ' + settings.ignore;
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not('object object'); // SwfObj conflict patch
      $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

      $allVideos.each(function(count){
        var $this = $(this);
        if($this.parents(ignoreList).length > 0) {
          return; // Disable FitVids on this video.
        }
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width'))))
        {
          $this.attr('height', 9);
          $this.attr('width', 16);
        }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + count;
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+'%');
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );
