/*Event Handling*/$(document).ready(function(){$(document).on("click","#showNotes",function(){$("body").toggleClass("show-notes")});$(document).on("click",".collapsable h2",function(){$(this).parent().toggleClass("closed")});$(document).on("focus","input[type=text]",function(){$(this).select()});$("select.lookup").change(function(){selectOptionDisplay($(this));$(this).blur()});$(document).on("mouseover","#verse ol > li span, #strongsTracking ul > li > span, #referenceTracking h2",function(){if($("#"+$(this).attr("class")).length>0){$("#verse").addClass("isolate");$(".verse").attr("id",$(this).attr("class"))}});$(document).on("mouseout","#verse ol > li  span, #strongsTracking ul > li > span, #referenceTracking h2",function(){$("#verse").removeClass("isolate")});$(document).on("mouseover","#wordControlPanel",function(){$(this).removeClass("not-active")});$(document).on("mouseout","#wordControlPanel",function(){});$(document).on("click","#wordControlPanel .highlight",function(){var e=$(this).parent().find(".wordControlPanelStrongsNumber").text();highlightStrongsNumber(e)});$(document).on("click","#wordControlPanel .search",function(){var e=$(this).parent().find(".wordControlPanelStrongsNumber").text();$("input#reverseRootStrongsNumber").val(e);$("input#searchTerm").val(e);$("input#search").click()});$(document).on("click","#wordControlPanel .definitions-link",function(){$(this).siblings(".definitions").toggleClass("hide")});$(document).on("click",".references a",function(){markReference($(this).parent("li"));return!1});$(document).on("click","#strongsTracking a.close",function(){var e=$(this).closest("li"),t=e.attr("id");e.remove();$("#"+t).attr("id","");return!1});$(document).on("click","#strongsTracking a.tracker",function(){highlightStrongsNumber($(this).attr("href"));return!1});$("#colorFormColor").change(function(){var e=$("#changeColor #colorFormStrongsNumber").val(),t=$("#changeColor #colorFormColor").val();$("#"+e).find("style").html("#"+e+" #verse span."+e+", #"+e+" ."+e+", ."+e+" {color:#fff;background:"+t+";}")});$("#changeColor").on("submit",function(){var e=$("#changeColor #colorFormStrongsNumber").val(),t=$("#changeColor #colorFormColor").val();$("#"+e).find("style").html("."+e+"{background:"+t+";color:#fff;}");return!1});$("#findBranches").click(function(){wordTree($("#reverseRootStrongsNumber").val());return!1});$("#colorSelector").ColorPicker({color:"#0000ff",onShow:function(e){$(e).fadeIn(500);return!1},onHide:function(e){$(e).fadeOut(500);return!1},onChange:function(e,t,n){$("#colorSelector div").css("backgroundColor","#"+t);$("#colorFormColor").val("#"+t).change()}});$(".findRareWords").click(function(){findRareWords($("#maximumNumberOfUses").val());return!1});$(".highlight-all").click(function(e){e.preventDefault();$.each(createUniqueStrongsNumbersArray(),function(e,t){highlightStrongsNumber(t)})});$(".random-verse").click(function(){var e=parseInt(Math.random()*66,10);$("select.bookSelect option:nth-child("+e+")")});$(".bookmark").click(function(e){e.preventDefault();$("ol#bookmarks").append(createReferenceListItem(currentReference()))});$(document).on("click",".collapsable h2 a.remove",function(e){e.preventDefault();$(this).closest(".collapsable").remove()});$(".changeStyle").change(function(){$("#"+$(this).attr("name")).html("body { "+$(this).val()+"}")})});var body=document.body,timer2;window.addEventListener("scroll",function(){clearTimeout(timer);body.classList.contains("disable-hover")||body.classList.add("disable-hover");timer2=setTimeout(function(){body.classList.remove("disable-hover")},500)},!1);