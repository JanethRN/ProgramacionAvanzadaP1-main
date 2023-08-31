  


import db from "../database";

const formulario_collection = db.collection("formulario");

// Insertar formulario
export const formRegister = async (req, res) => {
  const { name, lastname, ci, telf, email, date, country, location, gender, imag } = req.body;

  try {
    // Verificar si el CI ya existe en la base de datos
    const existingForm = await formulario_collection.where("ci", "==", ci).get();
    const existingForm2 = await formulario_collection.where("email", "==", email).get();

    if (!existingForm.empty) {
      return res.status(400).send({
        msg: 'La cedula ingresada ya se encuentra registrada'
      });
    }

    if (!existingForm2.empty) {
      return res.status(400).send({
        msg: 'El correo ingresado ya se encuentra registrado'
      });
    }

    await formulario_collection.add({
      name: name,
      lastname: lastname,
      ci: ci,
      telf: telf,
      email: email,
      date: date,
      country: country,
      location: location,
      gender: gender,
      imag: imag,
      imag2: "",
      validacion1: "",
      validacion2: "",
      validacion3: ""
    });

    return res.status(200).send({
      msg: 'Formulario guardado exitosamente'
    });
  } catch (error) {
    return res.status(500).send({ msg: error });
  }
};


// Ver registros
export const getFormulario = async (req, res) => {
  try {
    const querySnapshot = await formulario_collection.get();
    const formList = querySnapshot.docs.map(doc => doc.data());
    return res.status(200).json(
      formList
    )
  } catch (error) {
    return res.status(500).send({ msg: "Error de servidor" + error })
  }
}

//ver formularios con validacion1 : ''
export const getFormulariosEnRevision = async (req, res) => {
  try {
    const querySnapshot = 
      await formulario_collection
            .where("validacion1", "==", "")
            .where("validacion2", "==", "")
            .where("validacion3", "==", "")
            .get();
    const formList = querySnapshot
                      .docs
                      .map(doc => ({
                        idform : doc.id,
                        ...doc.data()
                      }));
    return res.status(200).send(
      formList
    )
  } catch (error) {
    return res.status(500).send({ msg: "Error de servidor" + error })
  }
}

export const getFormulariosEnRevisionPorId = async (req, res) => {
  try {

    const id = req.params.id;
    const doc = 
      await formulario_collection
            .doc(id)
            .get();
    const formList = {
      idform  : doc.id,
      ...doc.data()
    }
    return res.status(200).json(
      formList
    )
  } catch (error) {
    return res.status(500).send({ msg: "Error de servidor" + error })
  }
}







//ver formularios con validacion1 : 'revisado', validacion2 : 'revisado' y validacion3: ''
export const getFormulariosEnRevisionTwo = async (req, res) => {
  try {
    const querySnapshot = 
      await formulario_collection
            .where("validacion1", "==", "revisado")
            .where("validacion2", "==", "revisado")
            .where("validacion3", "==", "")
            .get();
    const formList = querySnapshot
                      .docs
                      .map(doc => ({
                        idform : doc.id,
                        ...doc.data()
                      }));
    return res.status(200).send(
      formList
    )
  } catch (error) {
    return res.status(500).send({ msg: "Error de servidor" + error })
  }
}

//ver formularios con validacion1: 'revisado' y validacion2 : 'revisado'
export const getFormulariosEnRevisionThree = async (req, res) => {
  try {
    const querySnapshot = 
      await formulario_collection
            .where("validacion1", "==", "revisado")
            .where("validacion2", "==", "revisado")
            .where("validacion3", "==", "revisado")
            .get();
    const formList = querySnapshot
                      .docs
                      .map(doc => ({
                        idform : doc.id,
                        ...doc.data()
                      }));
    return res.status(200).json(
      formList
    )
  } catch (error) {
    return res.status(500).send({ msg: "Error de servidor" + error })
  }
}


//cambiar validacion1 : '' a 'revisado' o 'denegado'
export const firstValidate = async(req, res) => {
  try{
    const { idform,validacion1 } = req.body;
    
    await formulario_collection
          .doc(idform)
          .update({
            validacion1,
          });

       return  res.status(200).json({
            msg : "Primera validación con éxito"
          })

  }catch(error){
    return res.status(500).send({ msg: "Error de servidor" + error })
  }
}


// Subir la segunda imagen
export const subirSegundaImagen = async(req, res) => {
  try{
    const { idform,imag2 } = req.body;
    
    await formulario_collection
          .doc(idform)
          .update({
            imag2,
          });

    return  res.status(200).send({
            msg : "Se ha cargado la segunda imagen con éxito"
          })

  }catch(error){
    return res.status(500).send({ msg: "Error de servidor" + error })
  }
}


//cambiar validacion2 : '' a 'revisado' o 'denegado'
export const secondValidate = async(req, res) => {
  try{
    const { idform,validacion2 } = req.body;
    
    await formulario_collection
          .doc(idform)
          .update({
            validacion2,
          });

          res.status(200).json({
            msg : "Segunda validación con éxito"
          })

  }catch(error){
    return res.status(500).send({ msg: "Error de servidor" + error })
  }
}

//cambiar validacion3 : '' a 'revisado' o 'denegado'
export const thirdValidate = async(req, res) => {
  try{
    const { idform,validacion3 } = req.body;
    
    await formulario_collection
          .doc(idform)
          .update({
            validacion3,
          });

          res.status(200).json({
            msg : "Tercera validación con éxito"
          })

  }catch(error){
    return res.status(500).send({ msg: "Error de servidor" + error })
  }
}



