
import * as jwt  from "jsonwebtoken";
import db from "../database";

const admin_collection = db.collection("admin")

export const authUser = async(req, res) => {
  
  const { username, password } = req.body;
  try{

      const querySnapshot = await (
        admin_collection
        .where("nameadmin","==",username)
        .get());

        if (!querySnapshot.empty) {
          // Si encontramos resultados, asumimos que el usuario existe
          const userDoc = querySnapshot.docs[0];
          const userData = userDoc.data();
          const storedPassword = userData.passadmin;
    
          // Compara la clave proporcionada con la clave almacenada
          if (password === storedPassword) {
            const token = jwt.sign(
              {
                userId    : userDoc.id,
                username  : userData.nameadmin, 
              },
              'secret' , { expiresIn : '1h' }
            )

           return  res.status(200).send({
            msg : 'OK',  
            token,
            userId  : userDoc.id
            })
          } else {
            return  res.status(401).send({
              msg : 'BAD',  
              token   : 'fake_token',
              userId  : null
              })
          }
        } else {
          return  res.status(401).send({
              msg : 'BAD',  
              token   : 'fake_token',
              userId  : null
              })
        }
      
    

        

    
    
  }catch(error){
    return res.status(500).send({ msg : error.message })
  }

}


export const authRegister = async(req, res ) => {

  const { username, password } = req.body;

  try{
    
    await admin_collection
          .add({
                useramin  : username,
                passadmin : password
              })


    return res.status(200).send({
      msg : 'Usuario guardado con éxtio'
    })
  }catch(error){
    return res.status(500).send({ msg : error })
  }
}

export const getUsers = async(req, res ) => {

  try {
    
    const querySnapshot = await admin_collection.get();
    const adminList = querySnapshot
                .docs
                .map(doc => (
                {
                  idadmin   : doc.id,
                  ...doc.data()
                }));
    return res.status(200).json(
      adminList
    )
  } catch (error) {
    return res.status(500).send({ msg : "Error de servidor"+ error })
  }

}
