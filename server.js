const database = require('./database.js');


database.listen(3000, function () {
        console.log("App listening on PORT " + 3000);
});//end app.listen


