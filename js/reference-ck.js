var reference;(function(e){function t(t){var r=t.book,i=t.chapter,s=t.verse,o=i-1,u=s-1,a=!1,f='<div class="reference" data-book="'+r+'" data-chapter="'+i+'"><h1>'+r+" "+i+"</h1>";f+='<ol class="wrapper">';var l,c;if(hebrewObject[r]){l=hebrewObject;c="hebrew"}else{l=greekObject;c="greek"}e.each(bibleObject[r][o],function(t,s){f+='<li id="'+r.replace(/ /gi,"_")+"_"+i+"_"+(t+1)+'">';f+='<div class="wrapper"';t===u&&(f+=' id="current"');if(t===u-5){f+=' id="context"';a=!0}f+=">";f+='<div class="english">';e.each(bibleObject[r][o][t],function(e,t){f+=n(t,c)});f+="</div>";if(l[r]&&l[r][o][t]){f+="<div class='original "+c+"'>";e.each(l[r][o][t],function(e,t){f+=n(t,c)});f+="</div>"}f+="</div>";f+="</li>"});f+="</ol>";f+="</div>";return f}function n(e,t){var n="",r="",i=e[1];strongsObjectWithFamilies[e[1]]&&(r=strongsObjectWithFamilies[e[1]].family);n+="<span";n+=' class="'+reference.getFamily(i)+'"';n+=' title="'+e[1];e[2]&&(n+=" "+e[2]);n+='"';n+=' data-word="'+e[0]+'"';n+=' data-lemma="'+e[1]+'"';n+=' data-language="'+t+'"';n+=' data-range="verse"';n+=' data-family="'+r+'"';e[2]&&(n+=' data-morph="'+e[2]+'"');n+=">"+e[0]+"</span> ";return n}function r(t,n){var r=t.book,i=t.chapter,s={},o=parseInt(i,10)+n,u=o-1,a;if(bibleObject[r]&&bibleObject[r][u]!==undefined){s.book=r;s.chapter=o}else e.each(bible.Data.books,function(e,t){if(t[0]===r){a=e+n;if(bible.Data.books[a]!==undefined){s.book=bible.Data.books[a][0];n>0?s.chapter=1:s.chapter=bible.Data.verses[a].length}}});return s}function i(){var t=window.location.hash;if(t.indexOf("search")>-1){var n=t.split("=")[1];searchByStrongsNumber(n)}else{var r=t.split("&");if(r.length>1){var i=r[0].split("=")[1],s=parseInt(r[1].split("=")[1],10),o=1;r[2]&&(o=parseInt(r[2].split("=")[1],10));reference.load({book:i,chapter:s,verse:o}).scrollToVerse(e("#current"))}}}e.fn.scrollStopped=function(t){e(this).scroll(function(){var n=this,r=e(n);r.data("scrollTimeout")&&clearTimeout(r.data("scrollTimeout"));r.data("scrollTimeout",setTimeout(t,250,n))})};reference={load:function(n){var i=n.book,s=n.chapter,o=n.verse;undefined===o&&(n.verse=1);e("head title").text(i+" "+s+":"+o);var u=e('<div class="three-references" />'),a=r(n,-1),f=r(n,1);if(a.book){u.data("prev",a);u.append(t(a))}u.append(t(n));if(f.book){u.data("next",f);u.append(t(f))}e.fn.waypoint&&e(".reference").waypoint("destroy");e("#verse").html(u);maintainState(i,s,o);return this},scrollToVerse:function(t,n){undefined===n&&(n=0);e("body").scrollTop(0);n-=e(".dock").height();t.length>0&&e("body").scrollTo(t,{offset:n});e(document).trigger("createWayPoint")},getAnchoringData:function(t){var n="#current",r=0,i=e("body").scrollTop(),s;if(t){t==="prev"&&(s=e(".reference:first-child ol.wrapper li:first-child"));t==="next"&&(s=e(".reference:last-child ol.wrapper li:last-child"));n="#"+s.attr("id");r=i-s.offset().top+e(".dock").height()}return[r,n]},anchorReference:function(t){var n=t[1],r=t[0],i=e(n);n===".current-verse"&&(verseHeight=i.height(),r=-e(window).height()/2+verseHeight);if(i.length===0){i=e("#"+jsonCollection.currentId);r=-e("[data-role=header]").height()}this.scrollToVerse(i,r)},getFamily:function(e){return strongsObjectWithFamilies[e]?strongsObjectWithFamilies[e].family:e}};i();e(window).bind("hashchange",function(e){var t=new Date;i();var n=new Date;timer(t,n)});e(window).scrollStopped(function(){var t=e("body").scrollTop(),n=e(".referencePanel").height()-e(window).height()+e(".dock").height(),r;if(t<=0){console.log("prev");var i=e(".three-references").data("prev");r=reference.getAnchoringData("prev");reference.load(i).anchorReference(r)}if(t>=n){console.log("next");var s=e(".three-references").data("next");r=reference.getAnchoringData("next");reference.load(s).anchorReference(r)}});e(".goToReference").submit(function(t){t.preventDefault();console.log(e("#goToReference").val());var n=bible.parseReference(e("#goToReference").val()),r="book="+bible.Data.books[n.bookID-1][0]+"&chapter="+n.chapter+"&verse="+n.verse;console.log(r);window.location.hash=r;e(this).closest(".popup").popup("close");return!1})})(jQuery);