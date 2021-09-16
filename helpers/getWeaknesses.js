const pokemonTypes = require('./pokemonTypes');
const modifiers = require('./modifiers');

module.exports = (types) => {
  const [type1, type2] = types;
  
  const type1Relations = pokemonTypes[type1];
  const type2Relations = pokemonTypes[type2];

  console.log(type1Relations, type2Relations);

  const typeRelations = {};

  type1Relations.superEffectiveFrom.forEach((type) => {
    typeRelations[type] = modifiers.SUPER_EFFECTIVE;
  });
  type1Relations.notVeryEffectiveFrom.forEach((type) => {
    typeRelations[type] = modifiers.NOT_VERY_EFFECTIVE;
  });
  type1Relations.noDamageFrom.forEach((type) => {
    typeRelations[type] = modifiers.IMMUNE;
  });

  if (type2Relations) {
    type2Relations.superEffectiveFrom.forEach((type) => {
      if (typeRelations[type]) typeRelations[type] *= modifiers.SUPER_EFFECTIVE;
      else typeRelations[type] = modifiers.SUPER_EFFECTIVE;
    });
    type2Relations.notVeryEffectiveFrom.forEach((type) => {
      if (typeRelations[type]) typeRelations[type] *= modifiers.NOT_VERY_EFFECTIVE;
      else typeRelations[type] = modifiers.NOT_VERY_EFFECTIVE;
    });
    type2Relations.noDamageFrom.forEach((type) => {
      if (typeRelations[type]) typeRelations[type] *= modifiers.IMMUNE;
      else typeRelations[type] = modifiers.IMMUNE;
    });
  }

  console.log(typeRelations);

  const typeStrings = [];
  Object.entries(typeRelations).forEach(([key, value]) => {
    if (value > 1) typeStrings.push(key);
  })

  return typeStrings;
}
