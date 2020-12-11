export const inserts =
  '> db.member.insert({first_name: "John", last_name: "Doe"})\n' +
  '> db.member.insert({first_name: "Jean", last_name: "Dupont", city_of_birth: "Paris"}) ';

export const createIndex =
  "> db.records.createIndex( { userid: 1 } )   // Ascending index\n" +
  "> db.records.createIndex( { userid: -1 } )   // Descending index";

export const jonDoe = {
  _id: 'ObjectId("54853dd6dd8fc0fec931fcbc")',
  first_name: "John",
  last_name: "Doe",
};

export const foundCities =
  '{ city: "FISHERS ISLAND" }\n' +
  '{ city: "NEW YORK" }\n' +
  '{ city: "NEW YORK" }\n' +
  '{ city: "NEW YORK" }\n' +
  '{ city: "GOVERNORS ISLAND" }';

export const foundInArray =
  "{\n" +
  '    first_name: "Victor", \n' +
  '    surname: "Hugo", \n' +
  '    groups : [ "Writer", "Painter"]\n' +
  "}";

export const victorHugo = {
  first_name: "Victor",
  surname: "Hugo",
  groups: ["Writer", "Painter"],
  address: {
    number: 6,
    street_name: "Place des Vosges",
    city: "Paris",
    zip: "75004",
  },
};

export const victorHugoAddress = {
  first_name: "Victor",
  surname: "Hugo",
  address: {
    number: 6,
    street_name: "Place des Vosges",
    city: "Paris",
    zip: "75004",
  },
};

export const victorHugoFail = {
  surname: "Hugo",
  groups: ["Writer", "Painter"],
};

export const fullNested = {
  address: {
    number: 6,
    street_name: "Place des Vosges",
    city: "Paris",
    zip: "75004",
  },
};

export const wrongQuery = {
  address: {
    street_name: "Place des Vosges",
    number: 6,
    city: "Paris",
    zip: "75004",
  },
};

export const queryCombination1 =
  '{$and:[{$and:[{city:{regex:"^N"}},{$or:[{state:"NY"},{state:"NJ"}]}]},\n' +
  "{pop:{$gt:100000,$lt:150000}}]}";

export const queryCombination2 =
  "{\n" +
  "  $and: [\n" +
  "    {\n" +
  "      $and: [\n" +
  '        { city: { regex: "^N" } },\n' +
  '        { $or: [{ state: "NY" }, { state: "NJ" }] },\n' +
  "      ],\n" +
  "    },\n" +
  "    { pop: { $gt: 100000, $lt: 150000 } },\n" +
  "  ],\n" +
  "};";

export const cursorExample =
  "> cursor.hasNext()   // > true\n" +
  '> cursor.next()      // > "AGAWAM"\n' +
  '> cursor.next()      // > "CUSHMAN"';

export const cursorOperations =
  "> cusror.sort({city : -1})   // Sort in reverse alphabetical order\n" +
  "> cursor.limit(5)            // Limit the nomber of results to 5\n" +
  "> cusror.skip(3)             // Skip 3 elements besore returning the result";

export const pushElements =
  '{$push : {groups : "Poet"}}\n' +
  '{$pushAll : {groups : ["Poet","Politician"]}}';

export const popElements =
  "{$pop : {groups : 1}}   // remove last element\n" +
  "{$pop : {groups : -1}}  // remove first element";

export const pullElements =
  '{$pull : {groups : "Poet"}}\n' +
  '{$pullAll : {groups : ["Poet","Politician"]}}';

export const addElements =
  '{$addToSet : {groups : "Poet"}}  //  Add "Poet"\n' +
  '{$addToSet : {groups : "Poet"}}  //  Do nothing because exists';

export const upsert =
  '> db.member.update({surname : "Washington"}, \n' +
  '          { $set : {groups : [ "Writer", "Painter"]}}, \n' +
  "          { upsert : true })";

export const updateMulti =
  "> db.member.update({}, \n" +
  '  { $set : {title : "Mr"}}, \n' +
  "  { multi : true })\n";
