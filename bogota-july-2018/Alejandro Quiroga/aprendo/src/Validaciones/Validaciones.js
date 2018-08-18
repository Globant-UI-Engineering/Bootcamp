export function ValidaRegistroProfesor(state)
{ 
    let error=""     
   for  (var item in state)
   {
    //
    if(error!=="")
    {
        //console.log(error)
       break
    }
    if(item!=="colegio" && item!=="area")
        { 
             isEmpty(state[item]) ? error="Debes Digitar el " + item : error=""
             minChar(state[item]) ? error="El " + item + " Debe Tener enter 5 y 20 Caracteres " : error=""           
        }
    
    
   }
     return error;  
}

export function ValidaRegistroAlumno(state)
{ 
    let error=""     
   for  (var item in state)
   {
    //
    if(error!=="")
    {
        //console.log(error)
       break
    }
    if(item!=="colegio" && item!=="grado")
        { 
             isEmpty(state[item]) ? error="Debes Digitar el " + item : error=""
             minChar(state[item]) ? error="El " + item + " Debe Tener enter 5 y 20 Caracteres " : error=""           
        }
    
    
   }
     return error;  
}

export function ValidaRegistroTema(state)
{ 
    let error=""     
   for  (var item in state)
   {
    //
    if(error!=="")
    {
        //console.log(error)
       break
    }
    if(item!=="profesor" && item!=="area")
    {
   
             isEmpty(state[item]) ? error="Debes Digitar el " + item : error=""
             minChar(state[item]) ? error="El " + item + " Debe Tener enter 5 y 20 Caracteres " : error=""           
       
    }
    
   }
     return error;  
}

export function ValidaRegistroPregunta(state)
{ 
    let error=""     
   for  (var item in state)
   {
    //
    if(error!=="")
    {
        //console.log(error)
       break
    }
    if(item!=="profesor" && item!=="area" && item!=="tema" && item!=="grado" && item!=="respuestas" && item!=="radios")
    {
   
             isEmpty(state[item]) ? error="Debes Digitar el " + item : error=""
             minChar(state[item]) ? error="El " + item + " Debe Tener enter 5 y 20 Caracteres " : error=""           
       
    }
    
   }
     return error;  
}




function isEmpty(param)
{
    if(param.trim().length===0)
    {
        return true;
    } 
        else
    {
        return false;
    }
}

function minChar(param)
{
    if((param.trim().length<5 || param.trim().length>50)  )
    {
        return true
    }
    else
    {
        return false
    }

}

export function isMail(param)
{
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

    if (!filter.test(param)) 
    {
        return false
    }
    else
    {
        return true
    }
}

export function confirmPassword(pass,confirm)
{
    if(pass===confirm)
    {
        return true
    }
    else
    {
        return false
    }
}

export function isSelect(param)
{
    if(param === "0")
        {
        return true
        }
    else
        {
        return false
        } 
}

export function isRespuesta(param)
{
    if(param === "")
        {
        return true
        }
    else
        {
        return false
        } 
}

