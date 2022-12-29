//Task1:compare two JSON objects that have same property without any order.

//obj1 and ob2 are two objects with same property but different order

let obj1 = {name:"person1", age:5};
let obj2 = {age:5, name:"person1"};

//Now we are using a Lodash method _.isEqual() to compare above JSON objects.
//In order for that to work we need to inject a JS code in out Header section of the HTML filethat is given below
//<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js"></script>

console.log(_.isEqual(obj1, obj2));

//Output:
//True


//2.Use the Rest Countries API URL "" and display all the countries flag in the console.
//3.Use the same Rest Country API and Print all the Countries name, subregion,and population.
//Both Task 2 and Task 3 are combined below , please refer back ticks where i have printed required data given in the question.

let xhr=new XMLHttpRequest();   //creating an object of xhr.
xhr.open("GET", "https://restcountries.com/v3.1/all");  //configuring the object with request.
xhr.onload=function(){
    if(this.status>=200&& xhr.status<300){
        let jsonObj=JSON.parse(this.response);
        console.log(jsonObj);
        for(let i=0; i<jsonObj.length; i++){
            console.log(`
            flags: ${jsonObj[i].flags.png}    
            names: ${jsonObj[i].name.common}
            regions: ${jsonObj[i].region}
            sub-region: ${jsonObj[i].subregion}
            population: ${jsonObj[i].population}
       
     
         `)

        }
        

        }
        else{
            console.log("No Data Available");
            
        }
        
}

xhr.send();

//Sample Output: Cannot Type here all the output so giving aome of the Output.
//
//flags: https://flagcdn.com/w320/ht.png 
//names: Haiti
//regions: Americas
//sub-region: Caribbean
//population: 11402533



//sample.js:27 
//flags: https://flagcdn.com/w320/lc.png 
//names: Saint Lucia
//regions: Americas
//sub-region: Caribbean
//population: 183629




