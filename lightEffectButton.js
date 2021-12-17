let colorL = ["#00FFFF", "#0000FF", "#8A2BE2", "#A52A2A", "#7FFF00", "#D2691E", "#FF1493", "#FFD700", "#008000", "#FF00FF", "#FF0000"];

for (let i = 0; i < 11; i++) {
    document.getElementById(""+i).style.background = colorL[i];
    
}



function cChange(elem){
    for (let i = 0; i < 11; i++) {
        if(elem.id == i){                  
            document.querySelector(':root').style.setProperty('--col', colorL[i]);
            let x = colorL[i].slice(1,3); 
            let y = colorL[i].slice(3,5);
            let z = colorL[i].slice(5,7);
            let a = parseInt(x, 16);
            let b = parseInt(y, 16);
            let c = parseInt(z, 16);            
            let temp = a+","+b+","+c;
            document.querySelector(':root').style.setProperty('--coln', temp);                                   
        }
    }
}