<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix ="c" %>    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<link rel='stylesheet' type='text/css' href='css/style.css'>

</head>
<body>
<div class="content">
	<h1 align="center">AirSpace Telecomm</h1>
	<div id='box' align="center">
	

    <p>Click to add rows</p>
    <button onclick="insertRow();">Add a new row</button>
    

    <p>Click to delete the first row of the table</p>
    <button onclick="deleteFirstRow();">Delete first row</button>
    <p></p>
    <label for='search'>Search here:</label>
    <input id='search' type='text' oninput="compareValues(this)" placeholder="First Last">
    <input id='notFound' type='text' readonly>
    <p></p>
    <hr>
    <p></p>
  </div>

  <div id='tableDiv' class="overflow-scroll">
    <table id="myTable">
      <caption>A typical HTML table</caption>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">User Name</th>
          <th scope="col">Password</th>
          <th scope="col">Mobile No</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Michel</td>
          <td>Buffa</td>
          <td>52</td>
          <td>Nice</td>
        </tr>
        <tr>
          <td>Dark</td>
          <td>Vador</td>
          <td>Unknown</td>
          <td>Unknown</td>        
</tr>
        <tr>
          <td>Luke</td>
          <td>Skywalker</td>
          <td>Unknown</td>
          <td>Unknown</td>
        </tr>
      </tbody>
    </table>
  </div> </div>
  
    <script >
    
    
    function insertRow() {
    	var len = ${sessionScope.length};
        console.log(len);
    var table = document.querySelector("#myTable");
    var row=table.insertRow();
    for (var i = 0; i < len; ++i) {
        // without parameters, insert at the end,
        // otherwise parameter = index where the row will be inserted
        console.log("inside: "+i);
        row.innerHTML = "<td>" + array[i] +"${sessionScope.data[i].name}" + 
        "</td><td>" + "${sessionScope.data[i].userName}" + 
        "</td><td>" + "${sessionScope.data[i].password}" + 
        "</td><td>" + "${sessionScope.data[i].mobileNo}" + "</td>";
    }}


    function deleteFirstRow() {
        var table = document.querySelector("#myTable");
        table.deleteRow(1); // 0 is the header
    }

    function compareValues(input) {

        let myTable = document.querySelector('#myTable');
        // console.log(myTable);
        let inputLength = input.value.length;
        input = input.value.toLowerCase();//lower case for comparison

        let countMatch = 0;
        let feedBack = document.querySelector('#notFound');
        //start loop at 1 to skip header
        for (var i = 1; i < myTable.rows.length; ++i) {
            //a - first and second cell of each row 
            //b -slice name to match lengh of input
            //c -set all tables to default color
            //d - if input matches, change color and input is not empty
            //e - change the color

            let name = myTable.rows[i].cells[0].innerText;//a
            //let lastName = myTable.rows[i].cells[1].innerText;
            let fullName = name ;//+ " " + lastName;

            fullName = fullName.slice(0, inputLength);//b
            fullName = fullName.toLowerCase();

            myTable.rows[i].style.backgroundColor = '#ffffff';//c

            if ((input === fullName) && (inputLength !== 0)) {//d
                myTable.rows[i].style.backgroundColor = '#ccff99';//e
                countMatch++;
            }
        }

        //display message if there is a match or not
        if (countMatch === 0) {
            feedBack.value = 'Sorry, no contact found.';
        } else {
            feedBack.value = countMatch + ' ' + 'contacts match.';
        }
    }





    
    </script>

</body>
</html>

