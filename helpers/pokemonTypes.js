const BUG = 'Bug',
      DARK = 'Dark',
      DRAGON = 'Dragon',
      ELECTRIC = 'Electric',
      FAIRY = 'Fairy',
      FIGHTING = 'Fighting',
      FIRE = 'Fire',
      FLYING = 'Flying',
      GHOST = 'Ghost',
      GRASS = 'Grass',
      GROUND = 'Ground',
      ICE = 'Ice',
      NORMAL = 'Normal',
      POISON = 'Poison',
      PSYCHIC = 'Psychic',
      ROCK = 'Rock',
      STEEL = 'Steel',
      WATER = 'Water';

const Bug = {
  superEffectiveAgainst: [DARK, PSYCHIC, GRASS],
  superEffectiveFrom: [FIRE, FLYING, ROCK],
  notVeryEffectiveAgainst: [FAIRY, FIGHTING, FIRE, FLYING, GHOST, POISON, STEEL],
  notVeryEffectiveFrom: [FIGHTING, GRASS, GRASS],
  noDamageAgainst: [],
  noDamageFrom: []
};
const Dark = {
  superEffectiveAgainst: [GHOST, PSYCHIC],
  superEffectiveFrom:[BUG, FAIRY, FIGHTING],
  notVeryEffectiveAgainst: [DARK, FAIRY, FIGHTING],
  notVeryEffectiveFrom: [DARK, GHOST],
  noDamageAgainst: [],
  noDamageFrom: [PSYCHIC]
};
const Dragon = {
  superEffectiveAgainst: [DRAGON],
  superEffectiveFrom: [DRAGON, FAIRY, ICE],
  notVeryEffectiveAgainst: [STEEL],
  notVeryEffectiveFrom: [ELECTRIC, FIRE, GRASS, WATER],
  noDamageAgainst: [FAIRY],
  noDamageFrom: []
};
const Electric = {
  superEffectiveAgainst: [FLYING, WATER],
  superEffectiveFrom: [GROUND],
  notVeryEffectiveAgainst: [DRAGON, ELECTRIC, GRASS],
  notVeryEffectiveFrom: [ELECTRIC, FLYING, STEEL],
  noDamageAgainst: [GROUND],
  noDamageFrom: []
};
const Fairy = {
  superEffectiveAgainst: [DARK, DRAGON, FIGHTING],
  superEffectiveFrom: [POISON, STEEL],
  notVeryEffectiveAgainst: [FIRE, POISON, STEEL],
  notVeryEffectiveFrom: [BUG, DARK, FIGHTING],
  noDamageAgainst: [],
  noDamageFrom: [DRAGON]
};
const Fighting = {
  superEffectiveAgainst: [DARK, ICE, NORMAL, ROCK, STEEL],
  superEffectiveFrom: [FAIRY, FLYING, PSYCHIC],
  notVeryEffectiveAgainst: [BUG, FAIRY, FLYING, POISON, PSYCHIC],
  notVeryEffectiveFrom: [BUG, DARK, ROCK],
  noDamageAgainst: [FLYING],
  noDamageFrom: []
};
const Fire = {
  superEffectiveAgainst: [BUG, GRASS, ICE, STEEL],
  superEffectiveFrom: [GROUND, ROCK, WATER],
  notVeryEffectiveAgainst: [DRAGON, FIRE, ROCK, WATER],
  notVeryEffectiveFrom: [BUG, FAIRY, FIRE, GRASS, ICE, STEEL],
  noDamageAgainst: [],
  noDamageFrom: []
};
const Flying = {
  superEffectiveAgainst: [BUG, FIGHTING, GRASS],
  superEffectiveFrom: [ELECTRIC, ICE, ROCK],
  notVeryEffectiveAgainst: [ELECTRIC, ROCK, STEEL],
  notVeryEffectiveFrom: [BUG, FIGHTING, GRASS],
  noDamageAgainst: [],
  noDamageFrom: [GROUND]
};
const Ghost = {
  superEffectiveAgainst: [GHOST, PSYCHIC],
  superEffectiveFrom: [DARK, GHOST],
  notVeryEffectiveAgainst: [DARK],
  notVeryEffectiveFrom: [BUG, POISON],
  noDamageAgainst: [NORMAL],
  noDamageFrom: [FIGHTING, NORMAL]
};
const Grass = {
  superEffectiveAgainst: [GROUND, ROCK, WATER],
  superEffectiveFrom: [BUG, FIRE, FLYING, ICE, POISON],
  notVeryEffectiveAgainst: [BUG, DRAGON, FIRE, FLYING, GRASS, POISON, STEEL],
  notVeryEffectiveFrom: [ELECTRIC, GRASS, GROUND, WATER],
  noDamageAgainst: [],
  noDamageFrom: []
};
const Ground = {
  superEffectiveAgainst: [ELECTRIC, FIRE, POISON, ROCK, STEEL],
  superEffectiveFrom: [GRASS, ICE, WATER],
  notVeryEffectiveAgainst: [GROUND, GRASS],
  notVeryEffectiveFrom: [POISON, ROCK],
  noDamageAgainst: [FLYING],
  noDamageFrom: [ELECTRIC]
};
const Ice = {
  superEffectiveAgainst: [DRAGON, FLYING, GRASS, GROUND],
  superEffectiveFrom: [FIGHTING, FIRE, ROCK, STEEL],
  notVeryEffectiveAgainst: [FIRE, ICE, STEEL, WATER],
  notVeryEffectiveFrom: [ICE],
  noDamageAgainst: [],
  noDamageFrom: []
};
const Normal = {
  superEffectiveAgainst: [],
  superEffectiveFrom: [FIGHTING],
  notVeryEffectiveAgainst: [ROCK, STEEL],
  notVeryEffectiveFrom: [],
  noDamageAgainst: [GHOST],
  noDamageFrom: [GHOST]
};
const Poison = {
  superEffectiveAgainst: [FAIRY, GRASS],
  superEffectiveFrom: [GROUND, PSYCHIC],
  notVeryEffectiveAgainst: [GHOST, GROUND, POISON, ROCK],
  notVeryEffectiveFrom: [BUG, FAIRY, FIGHTING, GRASS, POISON],
  noDamageAgainst: [STEEL],
  noDamageFrom: []
};
const Psychic = {
  superEffectiveAgainst: [FIGHTING, POISON],
  superEffectiveFrom: [BUG, DARK, GHOST],
  notVeryEffectiveAgainst: [PSYCHIC, STEEL],
  notVeryEffectiveFrom: [FIGHTING, PSYCHIC],
  noDamageAgainst: [DARK],
  noDamageFrom: []
};
const Rock = {
  superEffectiveAgainst: [BUG, FIRE, FLYING, ICE],
  superEffectiveFrom: [FIGHTING, GRASS, GROUND, STEEL, WATER],
  notVeryEffectiveAgainst: [FIGHTING, GROUND, STEEL],
  notVeryEffectiveFrom: [FIRE, FLYING, NORMAL, POISON],
  noDamageAgainst: [],
  noDamageFrom: []
};
const Steel = {
  superEffectiveAgainst: [FAIRY, ICE, ROCK],
  superEffectiveFrom: [FIGHTING, FIRE, GROUND],
  notVeryEffectiveAgainst: [ELECTRIC, FIRE, STEEL],
  notVeryEffectiveFrom: [BUG, DRAGON, FAIRY, FLYING, GRASS, ICE, NORMAL, PSYCHIC, ROCK, STEEL],
  noDamageAgainst: [],
  noDamageFrom: [POISON]
};
const Water = {
  superEffectiveAgainst: [FIRE, GROUND, ROCK],
  superEffectiveFrom: [ELECTRIC, GRASS],
  notVeryEffectiveAgainst: [DRAGON, GRASS, WATER],
  notVeryEffectiveFrom: [FIRE, ICE, STEEL, WATER],
  noDamageAgainst: [],
  noDamageFrom: []
};

module.exports = {
  Bug,
  Dark,
  Dragon,
  Electric,
  Fairy,
  Fighting,
  Fire,
  Flying,
  Ghost,
  Grass,
  Ground,
  Ice,
  Normal,
  Poison,
  Psychic,
  Rock,
  Steel,
  Water
};
