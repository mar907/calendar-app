const jwt= require('jsonwebtoken');

const generarJWT = (uid, name) => {
      return new Promise ((resolve, reject) => {
          const payload= {uid, name};
          jwt.sign(payload, process.env.SEWCRET_JWT_SEED,{
              expiresIn: '60h'
          }, (err, token) => {
              if (err) {
                  console.log (err);
                  reject ('no se pudo crear el token')
              } 
              resolve (token);
          })
      })
}










module.exports = {
    generarJWT
}