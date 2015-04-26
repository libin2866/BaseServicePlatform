/**
 * Created by libin on 15/4/19.
 */
 /*
function createXHR(){
    if (typeof XMLHttpRequest != "undefined"){
        return new XMLHttpRequest();
    } else if (typeof ActiveXObject != "undefined"){
        if (typeof arguments.callee.activeXString != "string"){
            var versions = [ "MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                    "MSXML2.XMLHttp"],
                i, len;
            for (i=0,len=versions.length; i < len; i++){
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    break;
                } catch (ex){                    //跳过
                }
            }
        }
        return new ActiveXObject(arguments.callee.activeXString);
    } else {
        throw new Error("No XHR object available.");
    } }

function getConnectionAj() {
	console.log("Connection begin");
    var xhr = createXHR();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {

                console.log(xhr.responseText);
                
            } else {
                console.log("Request was unsuccessful: " + xhr.status);
            }
        }
    };
    xhr.open("get", "Handle", true);
    xhr.send(null);
}

*/
$.ajax({  
           type: "GET",  
           url: "Handle",  
           //我们用text格式接收  
           //dataType: "text",   
           //json格式接收数据  
           dataType: "json",  
           data:  "insite="+'123'+"&outside"+"345",//"ruleId="+ruleId+"&ruleGroupId="+ruleGroupId+"&prodName="+prodName,  
           success: function (jsonStr) {  
               //实例2个字符串变量来拼接下拉列表  
               //alert(jsonStr);  
               //使用jquery解析json中的数据  
             /* var ruleListTemp = "<table width=\"100%\"  border=\"0\" cellspacing=\"0\" cellpadding=\"0\">";  
                 
                $.each(jsonStr, function (n, value) {  
                 //alert(value.ruleId);  
                   ruleListTemp += ("<tr><td>" + value.ruleName);  
                   ruleListTemp += ("</td></tr>");   
               });  
                ruleListTemp += ("</table>");  
  
               $("#ruleList").html(ruleListTemp);  */
        	   console.log(jsonStr);
        	   console.log(typeof jsonStr)
        	   //console.log( $.parseJSON(jsonStr.toString()))
        	   renderPics(jsonStr);
        	   
        	   
           }  
    });   