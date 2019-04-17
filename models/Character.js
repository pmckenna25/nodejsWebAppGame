const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename),
    'data',
    'characters.json'
);

const getCharactersFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) =>{
        if(err){
            cb([]);
        }else{
            cb(JSON.parse(fileContent));
        }
    });
};
module.exports = class Character{

    constructor(name, imageUrl, classType, level){

        this.name = name;
        this.imageUrl = imageUrl;
        this.classType = classType;
        this.level = level;
    }

    save(){

        this.id = Math.random().toString();
        getCharactersFromFile(characters =>{
            characters.push(this);
            fs.writeFile(p, JSON.stringify(characters), err =>{
                console.log(err);
            });
        });
    }

    static fetchAll(cb){
        getCharactersFromFile(cb);
    };
};