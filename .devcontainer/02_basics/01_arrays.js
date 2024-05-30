                   //**************************** Arrays ************************** */

      //const myArray = [1,3,2,4,2]        // =>js arrays resizeable hote h<=

      const heros = ["sakti","memy","divyanshu","Mahi","Hmare"]
      console.log(heros[2]);


      //         Array methods

       heros.push("iron man")  // =>add last arrays by push method<=
       heros.pop()            //  =>remove last array by pop method<=

       heros.unshift("Hulk")   // =>add first arrays by unshift method<=
       heros.shift()            //  =>remove first arrays by shift<=
       
       console.log(heros.includes("Hulk"));        // => i want to cheak "Huik" in array OR not <=
       console.log(heros.indexOf("rahul"));        // => which means "rahul" not exixt <=
       console.log(heros.indexOf("divyanshu"));    // =>show the number of postion <=

       const friends = heros.join()                // =>change to value-type in String<=

        
       console.log(heros);
       console.log(friends);
       console.log(typeof friends);



              // slice, splice method
                                                          // =>Quistion=< What is diffrent Between 'slice and splice'?
       console.log("A",heros);  
       
       const newheros = heros.slice(1, 3)     //  => ye pura range nhi leta h (1,2,3) me se bs (1,2) lega <=
       
       console.log(newheros);
       console.log("B",heros);                   

       const newheros1 = heros.splice(1, 3)   //  => ye pura range leta h (1,2,3) me se bs (1,2,3) pura lega <=

       console.log(newheros1);

    //    console.log("A" ,heros);
    //    console.log("b" ,newheros);
    //    console.log("c" ,newheros1);


    



