const fs = require('fs')


class Contenedor {
    constructor(title, price, thumbnail, id){
        this.title = title
        this.price = price
        this.thumbnail = thumbnail 
        this.id = id 
    }

    //METODOS
    save(objecto){
        fs.promises.appendFile('./archivo.txt', objecto)
        .then( contenido => {
            console.log((contenido.id) )
        })
        .catch (err => {
            console.log("Error", err)
        })
    }

    getById(id){
        fs.promises.readFile('./archivo.txt', 'utf-8', (error, contenido) => {
            if(contenido.id == id){
                console.log(contenido)
            } else {
                console.log('Error: '+ error)
            }
        })
    }

    getAll(){
        fs.promises.readFile('./archivo.txt', 'utf-8', (error, contenido) => {
            if(error){
                console.log(error)
            } else{
                const todo = [contenido]
                console.log(todo)
            }
        } )
    }

    deleteById(id){
        fs.promises.readFile('./archivo.txt', 'uf-8', (error, contenido) => {
            if(contenido.id == id){
                fs.unlink('./archivo.txt')
            } else{
                console.log(error)
            }
        })
    }

    deleteAll(){
        return fs.unlink('./archivo.txt', error => {
            if(error){
                console.log(error)
            } else {
                console.log('Eliminado')
            }
        })
    }

}

const usuario = new Contenedor ("Almohada", 1.000, "url de imagen", 1)

// usuario.save(toString(usuario))



// usuario.deleteAll()

