/*global javascripture*/var createSearchReferencesPanel;(function(e){function n(e,t){var n="";e.word&&(n+=e.word.replace(/ /gi,t));if(e.lemma){n+=t+e.lemma.replace(/ /gi,t);javascripture.data.strongsDictionary[e.lemma]&&(n+=t+javascripture.modules.hebrew.stripPointing(javascripture.data.strongsDictionary[e.lemma].lemma))}e.morph&&(n+=t+e.morph.replace(/ /gi,t));return n}function r(t){var n="";e.each(t,function(e,t){t!==""&&(n+=t.replace(/ /gi,"_")+"_")});return n}function i(t,i){var s=r(t),o="";if(e("#"+s).length===0){var u=n(t," "),a="",f="",l="";if(t.lemma){a=javascripture.modules.reference.getFamily(t.lemma);f=parseFloat(a.substring(1,a.length),10)}e.each(t,function(e,t){l+=e+": "+t+"\r\n"});o+='<div class="collapsable" id="'+s+'" class="'+a+'" title="'+l+'"><style></style><h2 class="'+a+'">'+u;o+='<a aria-hidden="true" class="icon-cross remove"></a></h2><div class="referenceList"><div id="searchLoading">Searching...</div></div></div>';e("#referenceTracking").append(o);if(t.lemma){var c="";if(f>0){var h=javascripture.modules.colors.getStrongsColor(f);c=javascripture.modules.colors.getStrongsStyle(a,h)}if(f>0){e("#"+s+" style").html(c);e("#changeColor #colorFormStrongsNumber").val(t.lemma);var p=e("#"+s+" ."+t.lemma).css("background-color");e("#changeColor #colorFormColor").val(p)}}}}function s(e){var t=e.book,n=e.chapter,r=e.verse;return'<li><a href="#book='+t+"&chapter="+n+"&verse="+r+'">'+t+" "+n+":"+r+"</a></li>"}function o(t){var n=e(t).data();n.word="";n.morph="";n.lemma=n.lemma.replace("G3588 ","");createSearchReferencesPanel(n)}e.fn.serializeObject=function(){var t={},n=this.serializeArray();e.each(n,function(){if(t[this.name]!==undefined){t[this.name].push||(t[this.name]=[t[this.name]]);t[this.name].push(this.value||"")}else t[this.name]=this.value||""});return t};createSearchReferencesPanel=function(n){var s=new Date,o="";n.word&&(n.word=n.word.trim());n.lemma&&(n.lemma=n.lemma.trim());n.morph&&(n.morph=n.morph.trim());var u;n.lemma&&(u=n.lemma.replace(/ /gi,""));var a=r(n,"_");i(n);strongsNumberArray=[];n.lemma&&n.lemma.split(" ");e("#referenceTracking .collapsable").addClass("closed");e("#referenceTracking #"+a).removeClass("closed");setTimeout(function(){worker.addEventListener("message",function(n){var r=n.data;o+='<form><ol class="references">';var i=0,u=javascripture.data.english;if(e("select[name=searchLanguage]").val()==="hebrew"){u=javascripture.data.hebrew;e.each(strongsNumberArray,function(e,t){parseFloat(t.substring(1,t.length))>0&&(strongsNumberArray[e]=t.substring(2,t.length))})}o+=t(r);o+="</ol></form>";e("#referenceTracking #"+a+" form").length<=0&&e("#referenceTracking #"+a+" .referenceList").html(o);goToFirstReference();var f=new Date;timer(s,f)},!1);worker.postMessage({task:"search",parameters:n})},100)};var t=function(t){var n="";e.each(t,function(e,t){n+=s(t)});return n};e(document).on("click",".wordControlPanelStrongsNumber",function(){o(this)});e(document).on("dblclick","#verse ol > li span",function(){o(this)});e("form.search").submit(function(t){t.preventDefault();var n=e(this).serializeObject();n.language=e("#versionSelector").val();createSearchReferencesPanel(n);e(".popup").popup("close")});e(document).on("click","a.word-tree",function(t){t.preventDefault();createSearchReferencesPanel(e(this).data())});e(document).on("click","a.kjv-def",function(t){t.preventDefault();createSearchReferencesPanel(e(this).data())})})(jQuery);