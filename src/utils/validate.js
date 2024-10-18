export const validdata = (email,password,name) =>{
   const isemailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
   const ispasswordvalid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
   if(name){
    const isvalidname =  /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name);
    if(!isvalidname) return "Name is not valid"
   }
   if(!isemailvalid) return "Email is not valid"
   if(!ispasswordvalid) return "Password is not valid"
   
}