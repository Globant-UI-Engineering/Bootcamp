function changePosition(i) {
    
    var firstTypedValueById = document.getElementById(i).id;
 
    document.getElementById(100).id = firstTypedValueById;
    document.getElementById(i).id = 100;
    
    
   
}