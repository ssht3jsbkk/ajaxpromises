function makeAjaxCall(url, methodType){
	var xhr = new XMLHttpRequest();
  var PromiseObj = new Promise(function(resolve, reject){
  xhr.open(methodType, url, true);
  xhr.send();
  xhr.onreadystatechange = function(){
  		if (xhr.readyState === 4){
         if (xhr.status === 200){
         		console.log("xhr done successfully");
            var resp = xhr.responseText;
            var respJson = JSON.parse(resp);
            resolve(respJson);
        } else {
            reject(xhr.status);
         		console.log("xhr failed");
         }
      } else {
      		console.log("xhr processing going on");
      }
  }
  console.log("request sent succesfully");
});

  return PromiseObj;
}

document.getElementById("userDetails").addEventListener("click", function(){

  var userId = document.getElementById("userId").value;
	var URL = "https://api.github.com/users/"+userId;
	makeAjaxCall(URL, "GET").then(processUserDetailsResponse, errorHandler);
});

document.getElementById("repoList").addEventListener("click", function(){
	
  var userId = document.getElementById("userId").value;
	var URL = "https://api.github.com/users/"+userId+"/repos";
	makeAjaxCall(URL, "GET").then(processRepoListResponse, errorHandler);
});
