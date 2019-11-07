module.exports = function(sequelize, DataTypes) {
    var foundAnimals = sequelize.define("Found_Animals", {
        id: { type: DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
        animal_name: { type: DataTypes.STRING, validate: {allowNulll:false}, is: ["^[a-z]+$",'i']},
        species: { type: DataTypes.STRING, validate: {allowNulll:false}, is: ["^[a-z]+$",'i']},
        breed: { type: DataTypes.STRING, validate: {allowNulll:false}, is: ["^[a-z]+$",'i']},
        picture: { type: DataTypes.STRING, validate: {allowNulll:false}},
        color: { type: DataTypes.STRING, validate: {allowNulll:false}, is: ["^[a-z]+$",'i']},
        animal_description: { type: DataTypes.TEXT, validate: {allowNulll:false}, is: ["^[a-z]+$",'i']},
        found_date: { type: DataTypes.DATE, validate: {allowNulll:false}},
        found_where: { type: DataTypes.TEXT, validate: {allowNulll:false}},
        zip_code: { type:DataTypes.INTEGER },
        contact_email: { type: DataTypes.STRING, validate: {isEmail:true}},
        });
    return foundAnimals;
    };