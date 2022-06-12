
<script>
function changetitle(clicked_id) {
  
  
  var title = document.getElementById("producttitles").innerText;
  
  
  var lastIndex = title.split(" ").pop();

  
  if (lastIndex.includes("UK"))
  {

title = title.substring(0, title.lastIndexOf(" "));
  }
  
  
  title = title+" "+clicked_id;
 
document.getElementById("producttitles").innerText=title;

}
    
    
</script>
