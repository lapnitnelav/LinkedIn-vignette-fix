function fixTitle(node=document){
  pics=node.getElementsByClassName("profile-picture");
  for(index=0;index<pics.length;index++) {
      pics[index].title=decodeHtml(pics[index].alt);
   }
}
function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}
// Functions above, procedural code below.
// Search item spy
var targets = document.getElementsByClassName('search-result__occlusion-hint ember-view');
var config = { childList: true};
var observer = new MutationObserver(function(mutations) {
   mutations.forEach(function(mutation) {
     fixTitle(mutation.target);
   });    
 });
for (var idx=0; idx < targets.length; idx++)
{
 observer.observe(targets[idx], config);
}
// First pass for the existing images.
fixTitle();
