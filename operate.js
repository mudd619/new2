

async function inp(temp){
    
    let res = await fetch(temp);
    
    let data = await res.json();
   
    return (data.meals);
    
}

async function loop(data,app){
    let inoo = await data;
   
    inoo.forEach((ele) => {
        let img = document.createElement("img");
        let p = document.createElement("p");
        let temp = document.createElement("a");
        img.src = ele.strMealThumb;
        img.setAttribute("class","img")
        p.innerHTML = ele.strMeal;
        
        temp.append(img,p);
        app.append(temp);    
    });
}


export {inp,loop}