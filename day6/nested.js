// function parent(){
//     function child(){
//         console.log("IM the child func");
        
//     }
//     child();
// }
// parent();
// var a = 10;
// let b = 20;
// function parent(){
//     var a = "HEllo";
//     let b = "hi";
//     console.log(a);
//     console.log(b);
//     console.log(this.a);
    
    
// }
// parent();


//lexical-scope / scope-chaine
//-->the ability of js-engine search for variable in local-scope if it is not available 
//it will start searching global-scope.

// function main(){
//     let a =10;
//     function child(){
//         console.log(a);
//     }
//     child();
// }
// main();

//CLOUSER:
//the binding of child function to the parent function.
//or
//the binding of child function lexical-scope to the parent-function.


// function parent(){
//     let a =10;
//     function child(){
//         console.log(a);
//     }
//     return child;
// }
// parent()()



//NOTE: disadvantage of closure is memory wastage
//if i called child function multiple times, multiple time clouser will be cresated in 
//heap area.

function parent(){
    function child1(){
        console.log("child1");
        function child_1(){
            console.log("child_1");
        }
        return child_1
    }
    function child2(){
        console.log("child2");
        function child_2(){
            console.log("child_2");
        }
        return child_2
    }
    return [child1,child2]
}
parent()[0]()();
parent()[1]()();