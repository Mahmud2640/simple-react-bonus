const db = {};
const addToDb = item => {
   // db[item] = 1
   if (item in db) {
      db[item]= db[item] + 1;
   } else {
      db[item] = 1;
   }
}