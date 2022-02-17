const RequestAPI = async (url='', optionsObj = null , errorMsg=null)=>{
   
   try{
      const response =  await fetch(url,optionsObj);
      if(!response.ok) throw Error("couldn't load the data")
   }catch(err){
         errorMsg = err.message;
   }finally{
       return errorMsg;
   }


}

export default RequestAPI;