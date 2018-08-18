import React, {Component} from 'react'

class RegistroFoto extends Component
{
    constructor(props)
    {
        super(props)
        this.cargaimagen=this.cargaimagen.bind(this)
    }

    cargaimagen(file: FileList)
    {
      this.fileupload=file.item(0);
      var reader=new FileReader();
      reader.onload=(event:any)=>{
  this.imagen=event.target.result;
  console.log(event.target.result.split(",")[1]);
  this.productomodel.imagen_producto=event.target.result.split(",")[1];
  this.encode=event.target.result;
      }
      reader.readAsDataURL(this.fileupload);
      
    }
render()
{
    return(
        <div>
            <h1>foto</h1>
            <div class="image-upload1">
                      <div class="alto-imagen overflow">
                      <label for="file-input">
                          <img class="image-preview" src="http://192.168.0.3:80/aprendo/fotos/no-image.jpg"/>
                      </label>
                  
                      <input id="file-input" required accept="image/*" name="imagen_producto"    onChange="cargaimagen($event.target.files)" type="file"/>
                    </div>
            </div>
        </div>



    )

}



}


export default RegistroFoto;