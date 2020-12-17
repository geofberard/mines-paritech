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
  '  first_name: "Victor", \n' +
  '  surname: "Hugo", \n' +
  '  groups : [ "Writer", "Painter"]\n' +
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

export const explainCursor =
  "> cur = db.zips.find({query}); null;\n> cur.explain()";

export const debuggingExemple =
  '> db.zips.explain().find({state:"MA"},{city:true, _id:false}).sort({city : -1}).limit(5);';

export const debuggingResult = {
  queryPlanner: {
    plannerVersion: 1,
    namespace: "test.zips",
    indexFilterSet: false,
    parsedQuery: {
      state: {
        $eq: "MA",
      },
    },
    serverInfo: {
      host: "localhost",
      port: 27017,
      version: "4.0.4",
      gitVersion: "f288a3bdf201007f3693c58e140056adf8b04839",
    },
    ok: 1,
  },
};

export const explainDetails =
  '> cur = db.zips.explain("executionStats").find({state:"MA"},{city:true, _id:false}).sort({city : -1}).limit(5); null;';

export const explainResult = {
  queryPlanner: {
    namespace: "test.zips",
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 5,
    executionTimeMillis: 20,
    totalKeysExamined: 0,
    totalDocsExamined: 29353,
  },
  serverInfo: {
    host: "it-gbe",
    port: 27017,
    version: "3.2.11",
    gitVersion: "009580ad490190ba33d1c6253ebd8d91808923e4",
  },
  ok: 1,
};

export const distinctCmd = "> db.zips.distinct({field} , {search_query})";

export const distinctExample =
  '> db.zips.distinct("state" , {})\n' +
  "[\n" +
  '	"MA",\n' +
  '	"RI",\n' +
  '	"NH",\n' +
  "    ...\n" +
  "]";

export const geospacialCmd =
  '> db.zips.createIndex( { loc : "2d" } )\n' +
  '> db.zips.find( { "loc": {$near : [ -112.416728, 37.781334 ] } } ).limit(5)';

export const geospacialResult =
  '{ "_id" : "84759", "city" : "PANGUITCH", "loc" : [ -112.436886, 37.80777 ], "pop" : 1797, "state" : "UT" }\n' +
  '{ "_id" : "84710", "city" : "ALTON", "loc" : [ -112.548389, 37.469905 ], "pop" : 159, "state" : "UT" }\n' +
  '{ "_id" : "84760", "city" : "PARAGONAH", "loc" : [ -112.773972, 37.89172 ], "pop" : 334, "state" : "UT" }\n' +
  '{ "_id" : "84717", "city" : "BRYCE CANYON", "loc" : [ -112.074311, 37.608427 ], "pop" : 958, "state" : "UT" }\n' +
  '{ "_id" : "84761", "city" : "PAROWAN", "loc" : [ -112.832251, 37.844861 ], "pop" : 1988, "state" : "UT" }';

export const aggregateCmd =
  "> db.zips.aggregate([{ $group: {group} } , { $match: {group} }])\n" +
  '> db.zips.aggregate([{ $group: { _id: "$city", totalPop: { $sum: "$pop" } } }])';

export const aggregateResult =
  '{ "_id" : "WRANGELL", "totalPop" : 2573 }\n' +
  '{ "_id" : "SKAGWAY", "totalPop" : 692 }\n' +
  '{ "_id" : "THORNE BAY", "totalPop" : 744 }\n' +
  "...";

export const postsDocument =
  "{\n" +
  '  _id: ObjectId("54853dd6dd8fc0fec931fcbc"),\n' +
  '  title: "Title",\n' +
  '  body: "...",\n' +
  '  author: "Author",\n' +
  '  date: "Date",\n' +
  "  comments: [\n" +
  '    { name: "Observer", comment: "Comment",}\n' +
  "  ],\n" +
  '  tags: ["Course", "MongoDB"],\n' +
  "};";

export const authorDocument = '{ _id: "UserName", email: "UserEmail" }';

export const design1User =
  "...\n" +
  '{ _id : "vHugo", email : "victor.hugo@gmail.com", follower:["gWashington"]}\n' +
  '{ _id : "gWashington", email : "george.washington@gmail.com"}\n' +
  "...";

export const design2User =
  '{ _id : "vHugo", email : "victor.hugo@gmail.com"}\n' +
  '{ _id : "gWashington", email : "george.washington@gmail.com"}';

export const design2Follower =
  '{ _id : 1, _from : "gWashington", _to : "vHugo"}';

export const design3User =
  '{ _id : "vHugo", email : "victor.hugo@gmail.com"}\n' +
  '{ _id : "gWashington", email : "george.washington@gmail.com"}';

export const design3Follower =
  '{ _id : 1, _from : "gWashington", _to : "vHugo"}';

export const design3Following =
  '{ _id : 1, _from : "vHugo", _to : "gWashington"}';

export const installMacOs1 =
  "$ cd path_to_downloaded_file\n$ tar xvf mongodb-macos-x86_64-4.4.2.tgz";

export const installMacOs2 =
  "$ sudo mkdir -p /usr/local/var/mongodb\n" +
  "$ sudo chmod 777 /usr/local/var/mongodb";

export const installMacOs3 = "$ cd mongodb-macos-x86_64-4.4.2/bin";

export const installMacOs4 = "$ ./mongod --dbpath /usr/local/var/mongodb";

export const installMacOs5 = "$ ./mongo";

export const installToolsMacOs1 = "$ unzip mongodb-database-tools-*.zip";

export const installToolsMacOs2 = "$ cd mongodb-macos-x86_64-4.4.2/bin";

export const installToolsMacOs3 = "$ ./mongoimport <your params>";

export const installWindows1 = '$ cd C:\\\n$ md "\\data\\db"';

export const installWindows2 =
  '$ cd "C:\\Program Files\\MongoDB\\Server\\4.2\\bin\\"';

export const installWindows3 = '$ mongod.exe --dbpath="c:\\data\\db"';

export const installWindows4 = "$ mongo.exe";

export const installPip = "$  pip3 install Django\n$  pip3 install pymongo";

export const runPythonServer =
  "$  cd src/main/python\n" +
  "$  $ python3 src/main/python/manage.py runserver";

export const gitCloneRepo =
  "$ git clone https://github.com/geofberard/MongoTasks.git\n" +
  "$ cd MongoTasks";

export const gitReset = "$ git reset HEAD --hard\n$ git checkout step-X";

export const writeConcernQuery =
  "> db.products.insert(\n" +
  '  { item: "envelopes", qty : 100, type: "Clasp" },\n' +
  "  { writeConcern: { w: 2, wtimeout: 5000 } }\n" +
  ")";

export const writeConcernDefault =
  "> cfg = rs.conf()\n" +
  "> cfg.settings = {}\n" +
  '> cfg.settings.getLastErrorDefaults = { w: "majority", wtimeout: 5000 }\n' +
  "> rs.reconfig(cfg)";
