var xml = "";
var schema = "";

var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "test.xml");
  oReq.send();

function reqListener() {
        xml = this.responseText.toString();
        //console.log(xml);
        getXSD();
  }

  function getXSD(){
        var request = new XMLHttpRequest();
        request.open('GET', 'test.xsd', true);
        request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            schema = request.responseText;
            //console.log(schema);
            isValid(schema,xml);
        }
        };

        request.send();
  }


    function isValid(schema,xml){
        var result = xmllint.validateXML({
	        xml: xml,
	        schema: schema
        }).errors

        if(result==null)
            parseXML(xml);
        else
            alert(result);
  }

  function parseXML(xml){
        var parse = new DOMParser();
        xml = parse.parseFromString(xml,"text/xml");
        
        var students = xml.getElementsByTagName('student');
        var student, rollno, firstname, lastname, branch, marks; 
        for(i=0;i<students.length;i++){
            rollno = students[i].attributes[0].value;
            firstname = students[i].getElementsByTagName('firstname')[0].textContent
            const row = `<tr>
            <td>${rollno}</td>
            <td>${firstname}</td>
            </tr>`;
            var res = document.getElementById("cl");
            res.insertAdjacentHTML("beforeend",row);
        }
        //console.log(students[0].getElementsByTagName('firstname')[0].textContent);
    
  }

  

  