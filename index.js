const $RefParser = require("@apidevtools/json-schema-ref-parser");

var args = process.argv.slice(2);
let rootSchema = args[0];

$RefParser.bundle(rootSchema, (err, schema) => {
  if (err) {
    console.error(err);
  }
  else {
    console.log(JSON.stringify(schema, null, 2));
  }
})
