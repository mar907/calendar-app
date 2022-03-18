

const mongoose= require ('mongoose');

const bdConnection = async() => {
     try {
        await mongoose.connect(process.env.DB_CONNECTION_URI);

        console.log('db online');
     } catch (error) {
         console.log (error);
         throw new Error ('error a la hora de inicializar base de datos')
     }
}

module.exports = {
    bdConnection
}