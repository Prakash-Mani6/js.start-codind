                           // 1 =>  primtive datatypes

      // String, symbol,     null,number,    bigInt,Boolean,    undefined 

   let str = "prakash"               //=>String<=
   const id = Symbol('1234')        // =>Symbol<=
   const anthorid = Symbol('1234')
   console.log(id === anthorid);

   let nun = null                  // =>Null<=
   let numb = 123                  // =>number<=
  

   const bigNumber = 12432222n;    //=>bigInt<=
   let  bool = true                //=>boolean<=
   let und ""                      //=>undefinede<=



                                 // 2 => Refence (Non Primitive)

      // Array, Objects, Functions

      const frindName = ["prakash","animesh","pranshu","vikas"];   //   => Array<=    


        let obj = {
          name: "prakash",     //      => object<=
          age: 22,
        }



        //function () {}

        const myFunction = function name(params) {
            console.log("hello World");                   //=>function<=
        }





                      // **************Memory***************


              // stack (primitive),  Heap(Non-Primitive)         