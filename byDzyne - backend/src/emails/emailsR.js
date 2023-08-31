
const nodemailer =require("nodemailer");
const express = require("express");


export const registro = async(req, res) => {


    const {name, ci, lastname, telf, location, email } = req.body;

    console.log(req);
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth:{
      user: "jjrenteria@espe.edu.ec",
      pass: "qrskwfzzbodjduxu",
    },
  });
  transporter.verify().then(console.log).catch(console.error);
       // Obtén los datos del formulario del cuerpo de la solicitu

  transporter.sendMail({
    from: '"Julissa" <jjrenteria@espe.edu.ec>', // sender address
    to: email, // list of receivers
    subject: "byDzyne", // Subject line
    text: "Registro Exitoso!", // plain text body
    html:`<!DOCTYPE html>
    <html>
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha384-PjEV4El2Fp5kInmiddEKp0C3DeUP7ym0+iCif1/NxEsX1rV0jmyP45WgDwWgpJpmz" crossorigin="anonymous">
    
        <title>Registro exitoso</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f2f2f2;
                padding: 20px;
                line-height: 1.6;
                margin: 0;
            }
    
            .container {
                background-color: #fff;
                max-width: 600px;
                margin: 0 auto;
                padding: 30px;
                border-radius: 5px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
    
            .header {
                text-align: center;
                margin-bottom: 30px;
            }
    
            .header2 {
                text-align: center;
                margin-bottom: 30px;
                background-color: #ccc;
                padding-bottom: 5px;
                width: 100%;
            }
    
            h1 {
                color: #333;
                font-size: 24px;
                text-align: center;
            }
    
            ul {
                list-style-type: none;
                padding: 0;
                margin-bottom: 20px;
                text-align: left;
            }
    
            li {
                margin-bottom: 10px;
            }
    
            p {
                margin-bottom: 20px;
            }
    
            .button-container {
                text-align: center;
                margin-top: 20px;
            }
    
            .button {
                display: inline-block;
                background-color: #007bff;
                color: #fff;
                padding: 10px 20px;
                text-decoration: none;
                border-radius: 4px;
            }
    
            .footer {
                text-align: center;
                color: #777;
                font-size: 14px;
                margin-top: 30px;
            }
    
            img {
                width: 669px;
                height: 200px;
            }
    
            ul {
                margin-left: 0;
                padding-left: 90px;
            }
        </style>
    </head>
    <body>
        <div class="header">
            <img src="https://i.imgur.com/dCMQIGR.png">
        </div>
    
        <div class="container">
            <div class="header2"><br>
                <h1>Registro exitoso</h1>
            </div>
            <p>
                Estimado ${name} ${lastname},
            </p>
            <p>
                ¡Nos complace informarte que tu registro ha sido exitoso! Agradecemos tu interés en nuestro formulario y nos complace darte la bienvenida a nuestra comunidad. A continuación, encontrarás los detalles de tu registro:
            </p>
            <ul>
                <li><strong>Nombre:</strong> ${name} ${lastname}</li>
                <li><strong>Número de cédula:</strong>  ${ci}</li>
                <li><strong>Dirección:</strong>  ${location}</li>
                <li><strong>Número de teléfono:</strong>  ${telf}</li>
                <li><strong>Correo electrónico:</strong>  ${email}</li>
            </ul>
            <p>
               Hemos recibido tus datos y estamos revisando cuidadosamente la información proporcionada. Actualmente, tus datos están en proceso de validación por nuestro equipo. Te notificaremos tan pronto como la validación sea completada.
            </p>
            <p>
                Gracias por elegir nuestro formulario y esperamos poder validar tus datos pronto. ¡Estamos ansiosos por darte la bienvenida oficialmente a nuestra comunidad!
            </p>
            <p>
                Atentamente,<br>
                Josue Velásquez<br>
                Equipo de Soporte<br>
                BYDZYNE
            </p>
            <div class="header2">
            <div class="footer">
               
                <br> <p>
                    Información de contacto: josue27.velasquez9@gmail.com | Teléfono: (123) 321-4321 <a href="inicio.html">
            <i class="fas fa-home"></i>
        </a>
                </p>
                <p>
                  <div class="header">
       
    </div>
            </div>
            </div>
        </div>
    </body>
    </html> `, // html body
  }).then(info => {
    console.log("enviado registro exitoso");
  });
}


export const registroAceptado = async(req, res) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth:{
        user: "jjrenteria@espe.edu.ec",
        pass: "qrskwfzzbodjduxu",
      },
    });
    transporter.verify().then(console.log).catch(console.error);  
         // Extrae los campos relevantes del formulario
         if (req.body) {
          // Extrae los campos relevantes del formulario
          const {
           persona
         } = req.body;
            
    transporter.sendMail({
      from: '"Julissa" <jjrenteria@espe.edu.ec>', // sender address
      to: persona.email, // list of receivers
      subject: "byDzyne", // Subject line
      text: "Validación de datos Aceptada", // plain text body
      html:`<!DOCTYPE html>
      <html>
      <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha384-PjEV4El2Fp5kInmiddEKp0C3DeUP7ym0+iCif1/NxEsX1rV0jmyP45WgDwWgpJpmz" crossorigin="anonymous">
      
          <title>Confirmación de aprobación de datos</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f2f2f2;
                  padding: 20px;
                  line-height: 1.6;
                  margin: 0;
              }
      
              .container {
                  background-color: #fff;
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 30px;
                  border-radius: 5px;
                  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
              }
      
              .header {
                  text-align: center;
                  margin-bottom: 30px;
              }
      
              .header2 {
                  text-align: center;
                  margin-bottom: 30px;
                  background-color: #ccc;
                  padding-bottom: 5px;
                  width: 100%;
              }
      
              h1 {
                  color: #333;
                  font-size: 24px;
                  text-align: center;
              }
      
              ul {
                  list-style-type: none;
                  padding: 0;
                  margin-bottom: 20px;
                  text-align: left;
              }
      
              li {
                  margin-bottom: 10px;
              }
      
              p {
                  margin-bottom: 20px;
              }
      
              .button-container {
                  text-align: center;
                  margin-top: 20px;
              }
      
              .button {
                  display: inline-block;
                  background-color: #007bff;
                  color: #fff;
                  padding: 10px 20px;
                  text-decoration: none;
                  border-radius: 4px;
              }
      
              .footer {
                  text-align: center;
                  color: #777;
                  font-size: 14px;
                  margin-top: 30px;
              }
      
              img {
                  width: 669px;
                  height: 200px;
              }
      
              ul {
                  margin-left: 0;
                  padding-left: 90px;
              }
          </style>
      </head>
      <body>
          <div class="header">
              <img src="https://i.imgur.com/dCMQIGR.png">
          </div>
      
          <div class="container">
              <div class="header2"><br>
                  <h1>Confirmación de aprobación de datos</h1>
              </div>
              <p>
                  Estimado${persona.name} ${persona.lastname},
              </p>
              <p>
                  Nos complace informarle que sus datos han sido aprobados por nuestro equipo. A continuación, encontrará los detalles de su aprobación:
              </p>
              <ul>
              <li><strong>Nombre:</strong> ${persona.name} ${persona.lastname}</li>
              <li><strong>Número de cédula:</strong>  ${persona.ci}</li>
              <li><strong>Dirección:</strong>  ${persona.location}</li>
              <li><strong>Número de teléfono:</strong>  ${persona.telf}</li>
              <li><strong>Correo electrónico:</strong>  ${persona.email}</li>
              </ul>
              <p>
                  También nos gustaría invitarle a subir una foto de autenticación de usted con su respectiva cédula en mano. Puede hacerlo haciendo clic en el siguiente enlace:
              </p>
              <div class="button-container">
                  <a href="http://localhost:4200/validateform/${persona.idform}" class="button">Subir foto de autenticación</a>
              </div>
              <p>
                  Si necesita más información, no dude en ponerse en contacto con nuestro equipo de soporte.
              </p>
              <p>
                  ¡Gracias por utilizar nuestra aplicación!
              </p>
              <p>
                  Atentamente,<br>
                  Josue Velásquez<br>
                  Equipo de Soporte<br>
                  BYDZYNE
              </p>
              <div class="header2">
              <div class="footer">
                 
                  <br> <p>
                      Información de contacto: josue27.velasquez9@gmail.com | Teléfono: (123) 321-4321 <a href="inicio.html">
              <i class="fas fa-home"></i>
          </a>
                  </p>
                  <p>
                    <div class="header">
         
      </div>
              </div>
              </div>
          </div>
      </body>
      </html>
      
       `, // html body
    }).then(info => {
      
      return res.status(200).send(
        {
            msg : "Email enviado para ingreso de segunda imagen"
        }
      )
    }).catch(console.error);
    }else {
       return res.status(400).json({ error: "Datos del formulario no proporcionados" });
    }
}

      // ... (código posterior)
    

export const registroRechazado = async(req, res) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth:{
        user: "jjrenteria@espe.edu.ec",
        pass: "qrskwfzzbodjduxu",
      },
    });
    transporter.verify().then(console.log).catch(console.error);
    
    if (req.body) {
        // Extrae los campos relevantes del formulario
        const {
         persona
       } = req.body;
      console.log(req.body) 
                      
    transporter.sendMail({
      from: '"Julissa" <jjrenteria@espe.edu.ec>', // sender address
      to: persona.email, // list of receivers
      subject: "byDzyne", // Subject line
      text: "Validación de datos Rechada", // plain text body
      html:`<!DOCTYPE html>
      <html>
      <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha384-PjEV4El2Fp5kInmiddEKp0C3DeUP7ym0+iCif1/NxEsX1rV0jmyP45WgDwWgpJpmz" crossorigin="anonymous">
      
          <title>Confirmación de aprobación de datos</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f2f2f2;
                  padding: 20px;
                  line-height: 1.6;
                  margin: 0;
              }
      
              .container {
                  background-color: #fff;
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 30px;
                  border-radius: 5px;
                  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
              }
      
              .header {
                  text-align: center;
                  margin-bottom: 30px;
              }
      
              .header2 {
                  text-align: center;
                  margin-bottom: 30px;
                  background-color: #ccc;
                  padding-bottom: 5px;
                  width: 100%;
              }
      
              h1 {
                  color: #333;
                  font-size: 24px;
                  text-align: center;
              }
      
              ul {
                  list-style-type: none;
                  padding: 0;
                  margin-bottom: 20px;
                  text-align: left;
              }
      
              li {
                  margin-bottom: 10px;
              }
      
              p {
                  margin-bottom: 20px;
              }
      
              .button-container {
                  text-align: center;
                  margin-top: 20px;
              }
      
              .button {
                  display: inline-block;
                  background-color: #007bff;
                  color: #fff;
                  padding: 10px 20px;
                  text-decoration: none;
                  border-radius: 4px;
              }
      
              .footer {
                  text-align: center;
                  color: #777;
                  font-size: 14px;
                  margin-top: 30px;
              }
      
              img {
                  width: 669px;
                  height: 200px;
              }
      
              ul {
                  margin-left: 0;
                  padding-left: 90px;
              }
          </style>
      </head>
      <body>
          <div class="header">
              <img src="https://i.imgur.com/dCMQIGR.png">
          </div>
      
          <div class="container">
              <div class="header2"><br>
                  <h1>Negación de datos</h1>
              </div>
              <p>
                  Estimado ${persona.name} ${persona.lastname},
              </p>
              <p>
                  Lamentamos informarle que los datos proporcionados no han sido aprobados por nuestro equipo. A continuación, encontrará los detalles de la negación:
              </p>
              <ul>
                  <li><strong>Nombre:</strong> ${persona.name} ${persona.lastname}</li>
                  <li><strong>Número de cédula:</strong>   ${persona.ci}</li>
                  <li><strong>Dirección:</strong>   ${persona.location}</li>
                  <li><strong>Número de teléfono:</strong>   ${persona.telf} </li>
                  <li><strong>Correo electrónico:</strong>   ${persona.email} </li>
              </ul>
              <p>
                  Desafortunadamente, no cumple con los requisitos necesarios para aprobar su solicitud en esta ocasión. Puede intentarlo nuevamente llenando el formulario mediante el siquiente botón.
              </p>
              <div class="button-container">
                  <a href="subir_foto.html" class="button">Ir formulario</a>
              </div>
              <p>
                  Agradecemos su interés en nuestra aplicación y lamentamos cualquier inconveniente que esto pueda causar.
              </p>
              <p>
                  ¡Gracias por utilizar nuestra aplicación!
              </p>
              <p>
                  Atentamente,<br>
                  Josue Velásquez<br>
                  Equipo de Soporte<br>
                  BYDZYNE
              </p>
              <div class="header2">
              <div class="footer">
                 
                  <br> <p>
                      Información de contacto: josue27.velasquez9@gmail.com | Teléfono: (123) 321-4321 <a href="inicio.html">
              <i class="fas fa-home"></i>
          </a>
                  </p>
                  <p>
                    <div class="header">
         
      </div>
              </div>
              </div>
          </div>
      </body>
      </html>
       `, // html body
    }).then(info => {
      
      console.log({info});
    }).catch(console.error);
    }else {
       return res.status(400).json({ error: "Datos del formulario no proporcionados" });
    }
}

export const registroImagA = async(req, res) => {
    
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth:{
        user: "jjrenteria@espe.edu.ec",
        pass: "qrskwfzzbodjduxu",
      },
    });
    transporter.verify().then(console.log).catch(console.error);
    
    if (req.body) {
        // Extrae los campos relevantes del formulario
        const {
         persona
       } = req.body;
      console.log(req.body) 
    transporter.sendMail({
      from: '"Julissa" <jjrenteria@espe.edu.ec>', // sender address
      to: persona.email, // list of receivers
      subject: "byDzyne", // Subject line
      text: "Imagen Aceptada!", // plain text body
      html:`<!DOCTYPE html>
      <html>
      <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha384-PjEV4El2Fp5kInmiddEKp0C3DeUP7ym0+iCif1/NxEsX1rV0jmyP45WgDwWgpJpmz" crossorigin="anonymous">
      
          <title>Validación de foto exitosa </title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f2f2f2;
                  padding: 20px;
                  line-height: 1.6;
                  margin: 0;
              }
      
              .container {
                  background-color: #fff;
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 30px;
                  border-radius: 5px;
                  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
              }
      
              .header {
                  text-align: center;
                  margin-bottom: 30px;
              }
      
              .header2 {
                  text-align: center;
                  margin-bottom: 30px;
                  background-color: #ccc;
                  padding-bottom: 5px;
                  width: 100%;
              }
      
              h1 {
                  color: #333;
                  font-size: 24px;
                  text-align: center;
              }
      
              ul {
                  list-style-type: none;
                  padding: 0;
                  margin-bottom: 20px;
                  text-align: left;
              }
      
              li {
                  margin-bottom: 10px;
              }
      
              p {
                  margin-bottom: 20px;
              }
      
              .button-container {
                  text-align: center;
                  margin-top: 20px;
              }
      
              .button {
                  display: inline-block;
                  background-color: #007bff;
                  color: #fff;
                  padding: 10px 20px;
                  text-decoration: none;
                  border-radius: 4px;
              }
      
              .footer {
                  text-align: center;
                  color: #777;
                  font-size: 14px;
                  margin-top: 30px;
              }
      
              img {
                  width: 669px;
                  height: 200px;
              }
      
              ul {
                  margin-left: 0;
                  padding-left: 90px;
              }
          </style>
      </head>
      <body>
          <div class="header">
              <img src="https://i.imgur.com/dCMQIGR.png">
          </div>
      
          <div class="container">
              <div class="header2"><br>
                  <h1>Validación de foto exitosa</h1>
              </div>
              <p>
                  Estimado ${persona.name} ${persona.lastname},
              </p>
              <p>
                   Nos complace informarte que la foto que enviaste para la validación de tu perfil ha sido revisada y validada exitosamente por nuestro equipo. Apreciamos tu cooperación en este proceso y queremos felicitarte por completar con éxito el paso de validación.
              </p>
              <p>
                  La foto que has proporcionado cumple con nuestros requisitos y ahora tu perfil está completamente validado. Esto significa que tienes acceso completo a todas las funcionalidades y beneficios de nuestra plataforma.
              </p>
              <p>
                  Si necesita más información, no dude en ponerse en contacto con nuestro equipo de soporte.
              </p>
              <p>
                 Gracias por tu colaboración y confianza en nuestra plataforma. Valoramos tu participación y esperamos que disfrutes de tu experiencia con nosotros.
              </p>
              <p>
                  Atentamente,<br>
                  Josue Velásquez<br>
                  Equipo de Soporte<br>
                  BYDZYNE
              </p>
              <div class="header2">
              <div class="footer">
                 
                  <br> <p>
                      Información de contacto: josue27.velasquez9@gmail.com | Teléfono: (123) 321-4321 <a href="inicio.html">
              <i class="fas fa-home"></i>
          </a>
                  </p>
                  <p>
                    <div class="header">
         
      </div>
              </div>
              </div>
          </div>
      </body>
      </html>
       `, // html body
    }).then(info => {
      
      console.log({info});
    }).catch(console.error);
}else {
    res.status(400).json({ error: "Datos del formulario no proporcionados" });
}

}

export const registroImagR = async(req, res) => {
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          auth:{
            user: "jjrenteria@espe.edu.ec",
            pass: "qrskwfzzbodjduxu",
          },
        });
        transporter.verify().then(console.log).catch(console.error);
        
        if (req.body) {
            // Extrae los campos relevantes del formulario
            const {
             persona
           } = req.body;
          console.log(req.body) 
        transporter.sendMail({
          from: '"Julissa" <jjrenteria@espe.edu.ec>', // sender address
          to: persona.email, // list of receivers
          subject: "byDzyne", // Subject line
          text: "Imagen Rechada", // plain text body
          html:`<!DOCTYPE html>
          <html>
          <head>
              
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha384-PjEV4El2Fp5kInmiddEKp0C3DeUP7ym0+iCif1/NxEsX1rV0jmyP45WgDwWgpJpmz" crossorigin="anonymous">
          
              <title>Validación de foto exitosa </title>
              <style>
                  body {
                      font-family: Arial, sans-serif;
                      background-color: #f2f2f2;
                      padding: 20px;
                      line-height: 1.6;
                      margin: 0;
                  }
          
                  .container {
                      background-color: #fff;
                      max-width: 600px;
                      margin: 0 auto;
                      padding: 30px;
                      border-radius: 5px;
                      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                  }
          
                  .header {
                      text-align: center;
                      margin-bottom: 30px;
                  }
          
                  .header2 {
                      text-align: center;
                      margin-bottom: 30px;
                      background-color: #ccc;
                      padding-bottom: 5px;
                      width: 100%;
                  }
          
                  h1 {
                      color: #333;
                      font-size: 24px;
                      text-align: center;
                  }
          
                  ul {
                      list-style-type: none;
                      padding: 0;
                      margin-bottom: 20px;
                      text-align: left;
                  }
          
                  li {
                      margin-bottom: 10px;
                  }
          
                  p {
                      margin-bottom: 20px;
                  }
          
                  .button-container {
                      text-align: center;
                      margin-top: 20px;
                  }
          
                  .button {
                      display: inline-block;
                      background-color: #007bff;
                      color: #fff;
                      padding: 10px 20px;
                      text-decoration: none;
                      border-radius: 4px;
                  }
          
                  .footer {
                      text-align: center;
                      color: #777;
                      font-size: 14px;
                      margin-top: 30px;
                  }
          
                  img {
                      width: 669px;
                      height: 200px;
                  }
          
                  ul {
                      margin-left: 0;
                      padding-left: 90px;
                  }
              </style>
          </head>
          <body>
              <div class="header">
                  <img src="https://i.imgur.com/dCMQIGR.png">
              </div>
          
              <div class="container">
                  <div class="header2"><br>
                      <h1>Denegación de foto enviada</h1>
                  </div>
                  <p>
                      Estimado ${persona.name} ${persona.lastname},
                  </p>
                  <p>
                       Lamentamos informarte que la foto que enviaste para la validación de tu perfil ha sido denegada por nuestro equipo. Tras revisar cuidadosamente la imagen, hemos determinado que no cumple con nuestros requisitos de validación.
                  </p>
                  <p>
                      Entendemos que esto puede resultar decepcionante y te pedimos disculpas por cualquier inconveniente que esto pueda haber causado. Para asegurarnos de mantener la integridad de nuestros perfiles, es importante que la foto cumpla con nuestros criterios establecidos.
                  </p>
                  <p>
                      Te recomendamos enviar una nueva foto que cumpla con los requisitos mencionados en nuestras pautas.
                      Si necesita más información, no dude en ponerse en contacto con nuestro equipo de soporte.
                  </p>
                  <p>
                     Agradecemos tu comprensión y tu interés en completar la validación de tu perfil. Esperamos recibir una nueva foto que cumpla con nuestros requisitos para poder completar exitosamente el proceso de validación.
                  </p>
                    <div class="button-container">
                      <a href="subir_foto.html" class="button">Subir foto de autenticación</a>
                  </div>
                  <p>
                      Atentamente,<br>
                      Josue Velásquez<br>
                      Equipo de Soporte<br>
                      BYDZYNE
                  </p>
                  
                  <div class="header2">
                  <div class="footer">
                     
                      <br> <p>
                          Información de contacto: josue27.velasquez9@gmail.com | Teléfono: (123) 321-4321 <a href="inicio.html">
                  <i class="fas fa-home"></i>
              </a>
                      </p>
                      <p>
                        <div class="header">
             
          </div>
                  </div>
                  </div>
              </div>
          </body>
          </html>
           `, // html body
        }).then(info => {
          
          console.log({info});
        }).catch(console.error);
    }else {
        res.status(400).json({ error: "Datos del formulario no proporcionados" });
    }
}