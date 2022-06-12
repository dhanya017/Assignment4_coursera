var names=new Array();
names[0]="Marie";
names[1]="Joy";
names[2]="Jaison";
names[3]="James";
names[4]="Rose";
names[5]="Lalu";
names[6]="Jimmy";
names[7]="Akash";
for (var i = 0; i < names.length; i++) {
    if(names[i].charAt(0)==="j"||names[i].charAt(0)==="J"){
        console.log("Goodbye "+names[i]);
    }
    else{
        console.log("Hello "+names[i]);
    }
    
}
