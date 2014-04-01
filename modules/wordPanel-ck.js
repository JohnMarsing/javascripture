/*global javascripture*/(function(e){javascripture.modules.wordPanel={init:function(t){var n=this;if(!t.data("lemma"))return!1;var r=t.data("lemma").split(" "),i="",s="",o="",u="",a="",f="",l="",c="",h=[],p,d=t.data("morph");e.each(r,function(r,v){if(v!=="G3588"){if(v!=="added"&&v!=="trans-change"){i=v;var m=javascripture.api.word.getFamily(v),g=v;s=javascripture.modules.hebrew.stripPointing(javascripture.data.strongsDictionary[g].lemma);o=javascripture.data.strongsDictionary[g].strongs_def;u=javascripture.data.strongsDictionary[g].derivation;l=javascripture.data.strongsDictionary[g].xlit;c=javascripture.data.strongsDictionary[g].pron;var y=javascripture.data.strongsDictionary[g].kjv_def.split(",");e.each(y,function(e,t){var n=t.trim();a+='<a href="#" class="kjv-def" data-language="kjv" data-clusivity="exclusive" data-range="word" data-lemma="'+v+'" data-word="'+n+'">'+n+"</a>, "});f=t.text();g.substring(0,1)==="H"&&(p="hebrew");g.substring(0,1)==="G"&&(p="greek");h[r]=e(".wordControlPanelTemplate").clone().removeClass("wordControlPanelTemplate").addClass("wordControlPanel");h[r].find(".wordControlPanelStrongsNumber").addClass(m).text(i).data({language:p,lemma:g,range:"verse"});h[r].find(".wordControlPanelLemma").text(s);h[r].find(".wordControlPanelEnglish").text(f);h[r].find(".wordControlPanelStrongsDef").text(o);h[r].find(".wordControlPanelDerivation").text(u);h[r].find(".wordControlPanelTransliteration").text(l);h[r].find(".wordControlPanelPronounciation").text(c);h[r].find(".wordControlPanelKJVDef").html(a);h[r].find(".wordControlPanelMorphology").html(d+": "+javascripture.api.morphology.get(d))}var b="";typeof javascripture.data.strongsObjectWithFamilies[v]!="undefined"&&javascripture.data.strongsObjectWithFamilies[v].roots?e.each(javascripture.data.strongsObjectWithFamilies[v].roots,function(e,t){t.substring(0,1)==="H"&&(p="hebrew");t.substring(0,1)==="G"&&(p="greek");b+='<a href="#search='+t+'" class="'+javascripture.api.word.getFamily(t)+' word-tree" data-lemma="'+t+'" data-language="'+p+'">'+t+"</a> "}):b+="No roots";var w="";b===""?w+="<p>no roots</p>":w+="roots: "+b;var E="",S=n.getBranchesMarkup(v);S===""?E+="<p>no branches</p>":E+="branches: "+S;h[r].find("#wordTreeRoots").html(w);h[r].find("#wordTreeBranches").html(E);var x=javascripture.api.word.getFamily(v),T="family: "+x;h[r].find("#wordTreeFamily").html(T);var N=parseInt(x.substring(1,x.length),10),C=javascripture.modules.colors.getStrongsColor(N),k=javascripture.modules.colors.getStrongsStyle(x,C);h[r].find("style").html(k)}});e("#wordControlPanel").html(h).show();e.each(h,function(t,n){e("#wordControlPanel").append(n)})},getBranchesMarkup:function(t){var n="";e.each(javascripture.data.strongsObjectWithFamilies,function(r,i){e.each(i,function(e,i){if(i==t){var s;r.substring(0,1)==="H"&&(s="hebrew");r.substring(0,1)==="G"&&(s="greek");n+='<a href="#search='+r+'" class="'+javascripture.api.word.getFamily(r)+' word-tree" data-lemma="'+r+'"  data-language="'+s+'">'+r+"</a> "}})});return n}};e(document).on("click","#verse ol > li span",function(t){t.preventDefault();t.stopPropagation();javascripture.modules.wordPanel.init(e(this))});e(document).on("click",".wordControlPanel .close",function(t){t.preventDefault();e("#wordControlPanel").hide()})})(jQuery);