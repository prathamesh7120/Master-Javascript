 const accountId = 144553;
 let accountEmail = "chavanprathamesh813@gmail.com";
 var accountPassword  = 12345;
 accountCity = "Pune";

 
 // accountId = 123456;  // not allowed

 console.log(accountId);

 accountEmail = "acc@gmail.com";

 accountPassword = 123;

 accountCity = "Chennai";

 let accountState;

 console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

 /*
 prefer not to use var
 because of issue in block scope and functional scope
 */

