var one= "Joe Doe"; /* string */
var two=22; /* number */
var three=true; /* boolean */
var four; /* undefined */
var five=null; /* null */
var six ={ name : "roma" }; /* object */

var youngStr="I am under 25";
var oldStr="I am over 25 years old";
var MyCurrentAge=18 ;
var result;
result= MyCurrentAge<=25?(result=youngStr):(result=oldStr);
console.log(result);
/*
if (MyCurrentAge<=25){ result=youngStr;
} else {
    result=oldStr;
}
*/

/*
if (MyCurrentAge <= 25) {
    console.log("I am under 25");
}
else {
    console.log("I am over 25 years old");
};
*/

/*
MyCurrentAge<=25?(console.log("I am under 25") ) : (console.log("I am over 25 years old")); */

