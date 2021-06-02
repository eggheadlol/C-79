name_array=[];

function submit(){
    //to fetch text input values
    var name_1=document.getElementById("name1").value;
    var name_2=document.getElementById("name2").value;
    var name_3=document.getElementById("name3").value;
    var name_4=document.getElementById("name4").value;

    //to push the names into the array
    name_array.push(name_1);
    name_array.push(name_2);
    name_array.push(name_3);
    name_array.push(name_4);

    //to show the output
    document.getElementById("display_output").innerHTML=name_array;

    //to hide submit button and to show sort button
    document.getElementById("submit_btn").style.display="none";
    document.getElementById("sort_btn").style.display="inline-block";   
}

   function sort(){
       name_array.sort();

       document.getElementById("display_output").innerHTML=name_array;  
   }