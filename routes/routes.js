let mongoose = require("mongoose");
let formidable = require('formidable');


//mongoose models
let Profile = require('../models/profileModel.js');
let Card = require('../models/cardModel.js');



//global variables
let today1;
function today() {
        let date = new Date();
        let todaysDate = date.toString();
        let today = todaysDate.split(/\s/);
        today1 = today[1] + " " + today[2] + " " + today[3] + " " + today[4];
};

let inboxCardId;
let inboxSubmit;
let sentCardId;
let sentSubmit;
let profile;





module.exports = (app) => {


/*=====================================
        APP LOCALS & local Variables
======================================*/
let members;
app.locals.members = members;

let selectedName;
app.locals.selectedName = selectedName;

let logInName;
app.locals.logInName = logInName;

let sentCards;
app.locals.sentCards = sentCards;

let sentPreviewedCard;
app.locals.sentPreviewedCard = sentPreviewedCard;

let inboxCards;
app.locals.inboxCards = inboxCards;

let inboxPreviewedCard;
app.locals.inboxPreviewedCard = inboxPreviewedCard;

let inboxReplies;
app.locals.inboxReplies = inboxReplies;

let sentboxReplies;
app.locals.sentboxReplies = sentboxReplies;

let memberProfile;
app.locals.memberProfile = memberProfile;

//error text when creating profile or logging in
let mustMatch;
app.locals.mustMatch = mustMatch;
let alreadyExists;
app.locals.alreadyExists = alreadyExists;

let wrongName;
app.locals.wrongName = wrongName;

let wrongPswd;
app.locals.wrongPswd = wrongPswd;

//error texton  edit profile page
let pswdsMustMatch;
app.locals.pswdsMustMatch = pswdsMustMatch;


let profileToEdit;
app.locals.profileToEdit = profileToEdit;



/*=====================================
    MIDDLEWARE FUNCTIONS AND ROUTES
======================================*/
app.use(function (req, res, next) {
        console.log(`${req.method} request for '${req.url}'`);
        next();
});



/*=====================================
        GET HOME PAGE
======================================*/
app.get("/", function (req, res) {
        sentPreviewedCard = "";
        inboxPreviewedCard = "";


        Profile.find({}, { password: 0 }, function (err, docs) {


                members = docs;

                res.render("index.ejs", {
                        wrongName: wrongName,
                        wrongPswd: wrongPswd,
                        logInName: logInName,
                        mustMatch: mustMatch,
                        alreadyExists: alreadyExists,
                        members: members
                });
        });
});


/*=====================================
        GET CREATE CARD PAGE
======================================*/
app.get("/createcard", function (req, res) {
        wrongName = "";
        wrongPswd = "";
        sentPreviewedCard = "";
        inboxPreviewedCard = "";
        mustMatch = "";

        if (logInName) {
                Profile.find({}, function (err, docs) {
                        console.log(docs, "this is the members");
                        console.log(selectedName, "this is the selected name in the create card GET")

                        members = docs;

                        res.render("card.ejs", {
                                members: members,
                                selectedName: selectedName,
                                logInName: logInName
                        });
                });
        } else {
                res.render("noAccess.ejs");
        }
});

/*=====================================
        GET INBOX PAGE
======================================*/
app.get("/inbox", function (req, res) {
        wrongName = "";
        wrongPswd = "";
        sentPreviewedCard = "";
        mustMatch = "";

        Card.find({ inbox: "deleted" }, function (err, inboxCardDeleted) {
             
                for (let i = 0; i < inboxCardDeleted.length; i++) {
                        if (inboxCardDeleted[i].sent == "deleted") {
                                Card.deleteMany({ _id: inboxCardDeleted[i]._id }, function (err) {
                                        if (err) {
                                                console.log(err);
                                        } else {
                                                console.log(inboxCardDeleted[i], 'is deleted from database........');
                                        }
                                });
                        }
                }
        });

        Profile.find({}, { password: 0 }, function (err, docs) {
                members = docs;
        })

        if (logInName) {
                Card.find({ inbox: "recieved" }, function (err, inboxDocs) {

                        // console.log(inboxDocs, "CARDS IN THE INBOX FOLDER");
                        inboxCards = inboxDocs;

                        res.render("inbox.ejs", {
                                logInName: logInName,
                                inboxCards: inboxCards,
                                inboxPreviewedCard: inboxPreviewedCard,
                                inboxReplies: inboxReplies,
                                members: members
                        });
                });
        } else {
                res.render("noAccess.ejs");
        }
});


/*=====================================
        GET SENT PAGE
======================================*/
app.get("/sent", function (req, res) {
        wrongName = "";
        wrongPswd = "";
        inboxPreviewedCard = "";
        mustMatch = "";

        Card.find({ sent: "deleted" }, function (err, sentCardDeleted) {
                
                for (let i = 0; i < sentCardDeleted.length; i++) {
                        if (sentCardDeleted[i].inbox == "deleted") {
                                Card.deleteMany({ _id: sentCardDeleted[i]._id }, function (err) {
                                        if (err) {
                                                console.log(err);
                                        } else {
                                                console.log(sentCardDeleted[i], 'is deleted from database........');
                                        }
                                });
                        }
                }
        });

        Profile.find({}, { password: 0 }, function (err, docs) {
                members = docs;
        })

        if (logInName) {
                Card.find({ sent: "recieved" }, function (err, docs) {
                        sentCards = docs;

                        res.render("sent.ejs", {
                                logInName: logInName,
                                sentCards: sentCards,
                                sentPreviewedCard: sentPreviewedCard,
                                sentboxReplies: sentboxReplies,
                                members: members
                        });
                });
        } else {
                res.render("noAccess.ejs");
        }
});


/*=====================================
        GET MEMBERS PAGE
======================================*/
app.get("/members", function (req, res) {
        wrongName = "";
        wrongPswd = "";
        sentPreviewedCard = "";
        inboxPreviewedCard = "";
        mustMatch = "";

        Profile.find({}, { password: 0 }, function (err, docs) {
                console.log(docs, "this is the members");

                members = docs;

                res.render("members.ejs", {
                        members: members,
                        logInName: logInName
                });
        });
});

/*=====================================
        GET EDIT PROFILE PAGE
======================================*/
app.get("/editProfile", function (req, res) {
        wrongName = "";
        wrongPswd = "";
        sentPreviewedCard = "";
        inboxPreviewedCard = "";

        Profile.find({}, { password: 0 }, function (err, docs) {
                members = docs;
        })

        if (logInName) {
                res.render("editProfile.ejs", {
                        logInName: logInName,
                        profileToEdit: profileToEdit,
                        members: members
                });
        } else {
                res.render("noAccess.ejs");
        }
});

/*=====================================
      GET ADD PROFILE PHOTO PAGE
======================================*/
app.get("/profilePhoto", function (req, res) {
        wrongName = "";
        wrongPswd = "";
        sentPreviewedCard = "";
        inboxPreviewedCard = "";
        mustMatch = "";

        Profile.find({}, { password: 0 }, function (err, docs) {
                members = docs;
        })

        if (logInName) {
                res.render("profilePhoto.ejs", {
                        logInName: logInName,
                        memberProfile: memberProfile,
                        members: members
                });
        } else {
                res.render("noAccess.ejs");
        };
});







/*POST REQUESTS=======================*/

/*=====================================
       POST LOG IN INFO
======================================*/
app.post("/logIn", function (req, res) {
        console.log(req.body, "the req.body while trying to logging in....");

        Profile.find({ name: req.body.name }, { name: 1, password: 1 }, function (err, docs) {
                theProfile = docs;
                console.log(docs, "the documents for the found name");

                if (docs.length == 0) {
                        wrongName = "Incorrect log in name";
                        console.log("Incorrect log in name");
                        res.redirect('http://localhost:3000');
                } else
                        if (docs.length > 0) {
                                //if name found, then validate password
                                wrongName = "";
                                for (let i = 0; i < docs.length; i++) {
                                        console.log(docs[i].name, "is the correct log in name in database");
                                        //wrong password
                                        if (docs[i].password !== req.body.password) {
                                                console.log(docs[i].password, " wrong password!");
                                                wrongPswd = "Incorrect Password";
                                                logInName = "";
                                                res.redirect('http://localhost:3000');
                                        } else
                                        //correct password
                                        {
                                                console.log(docs[i].password, " correct password!")
                                                wrongPswd = "";
                                                logInName = req.body.name;
                                                res.redirect('http://localhost:3000/inbox');
                                        }
                                }//end for loop

                        }//end if else docs.length > 0
        });//end find by name
});


/*=====================================
        LOG OUT
======================================*/
app.post("/logOut", function (req, res) {
        console.log("logging out........");
        logInName = "";
        res.redirect('http://localhost:3000/');
});



/*=====================================
       CREATE PROFILE
======================================*/
app.post("/createProfile", function (req, res) {
        console.log(req.body, "profile created");

        today();

        if (req.body.password != req.body.confirmPswd) {
                mustMatch = "Passwords must match!";
                res.redirect('http://localhost:3000');
        } else {

                //Profile is the database collection name
                profile = new Profile({
                        name: req.body.name,
                        password: req.body.password,
                        createdAt: today1,
                        bio: req.body.bio

                });

                profile.save(function (err) {
                        if (err) {
                                console.log(err);
                                alreadyExists = "User name already exists!";
                                res.redirect('http://localhost:3000');
                        } else {
                                console.log('Profile created.......');
                                logInName = req.body.name;
                                mustMatch = "";
                                alreadyExists = "";
                                res.redirect('http://localhost:3000/inbox');
                        }
                });
        }
});




/*=====================================
       EDIT PROFILE
======================================*/
app.post("/editProfile/:user", function (req, res) {
        profileToEditId = req.body.memberId;

        if (req.body.password != req.body.confirmPswd) {
                pswdsMustMatch = "Passwords must match!";
                res.redirect('http://localhost:3000');
        } else {

                Profile.find({ _id: req.body.memberId }, function (err, docs) {
                        if (err) {
                                console.log(err);
                        } else {
                                console.log(docs, "the member whos profile is to be edited");
                                profileToEdit = docs;
                                pswdsMustMatch = "Passwords must match!";
                                res.redirect('http://localhost:3000/editProfile');
                        }
                });
        }
});

app.post("/profileEdited", function (req, res) {
        console.log(req.body, "this is the req body of profile edited");

        if (req.body.submit == "save") {
                profileToEdit = "";
                console.log("it is saved");
                Profile.updateOne({ _id: req.body.profileId }, { $set: { password: req.body.password, bio: req.body.bio } }, function (err, edited) {
                        if (err) {
                                console.log(err);
                        } else {
                                console.log(edited, 'profile has beeen edited........');

                                res.redirect('http://localhost:3000/members');
                        }
                })
        }
});


/*=================================================
SELECT MEMBER FROM MEMBER PAGE TO SEND  CARD TO
===================================================*/
app.post("/sendMemberCard", function (req, res) {

        selectedName = req.body.name;

        console.log(selectedName, "...........app.post sendMemberCard ........");
        res.redirect('http://localhost:3000/createcard');
});


/*=====================================
       ADD PROFILE PHOTO
======================================*/
app.post("/profilePhoto", function (req, res) {

        addPhoto_memberId = req.body.memberId;

        Profile.find({ _id: addPhoto_memberId }, function (err, docs) {
                if (err) {
                        console.log(err);
                } else {
                        console.log(docs, "...........app.post profilePhoto ........");
                        memberProfile = docs;
                        res.redirect('http://localhost:3000/profilePhoto');
                }
        })
});


let fileName;
/*=====================================
       post file upload MEMBERS
======================================*/
app.post('/upload', function (req, res) {

        var form = new formidable.IncomingForm(),
                files = [],
                fields = [];
        form.uploadDir = __dirname + "/public/photos/profilePhotos";

        form.on('file', function (field, file) {
                fileName = file.name;

                let pathsplit = file.path.split("/");
                pathsplit.pop();
                pathsplit.push(file.name);
                let newPathName = pathsplit.join('/');
                console.log(file, "......THE FILE.......");
                files.push([field, file]);

                fs.rename(file.path, newPathName, (err) => {
                        if (err) throw err;
                        console.log('Rename complete!');
                });
        })
        form.on('end', function () {
                console.log('done');

                console.log(fileName, ".............the file name from form.on end");


                Profile.updateOne({ _id: memberProfile[0]._id }, { $set: { profilePhoto: fileName } }, function (err, info) {
                        if (err) {
                                console.log(err);
                        } else {
                                console.log(info, 'profile photo has been added........');

                                res.redirect('http://localhost:3000/members');
                        }
                })
        });
        form.parse(req);
});


/*=====================================
       POST CARD THAT WAS MADE
======================================*/
app.post("/createcard", function (req, res) {
        console.log(req.body, "this is the created card");

        today();

        let card = new Card({
                greeting: req.body.greeting,
                imagePath: req.body.imagePath,
                imageBlend: req.body.imageBlend,
                fontColour: req.body.fontColour,
                textShadow: req.body.textShadow,
                backgroundColour: req.body.backgroundColour,
                borderStyle: req.body.borderStyle,
                borderColour: req.body.borderColour,
                from: req.body.from,
                to: req.body.to,
                message: req.body.message,
                inbox: "recieved",
                sent: "recieved",
                date: today1
        });
        card.save(function (err) {
                if (err) {
                        console.log(err);
                } else {
                        console.log('card is saved!');

                        res.redirect('http://localhost:3000/sent');

                }
        });
});


/*==========================================
       PREVIEW OR DELETE CARD FROM INBOX
============================================*/
app.post("/inboxFolder", function (req, res) {
        inboxCardId = req.body.cardId;
        inboxSubmit = req.body.submit;

        if (inboxSubmit == "preview") {
                Card.find({ _id: inboxCardId }, function (err, previewed) {
                        inboxPreviewedCard = previewed;
                        inboxReplies = inboxPreviewedCard[0].replies;
                        res.redirect('http://localhost:3000/inbox');
                });//end find card
        } else
                if (inboxSubmit == "delete") {
                        inboxPreviewedCard = "";
                        Card.updateOne({ _id: inboxCardId }, { $set: { inbox: "deleted" } }, function (err, deleted) {
                                if (err) {
                                        console.log(err);
                                } else {
                                        console.log(deleted, 'inbox card is updated with deleted status........');

                                        res.redirect('http://localhost:3000/inbox');
                                }
                        })
                }
});




/*===============================================
       PREVIEW OR DELETE CARD FROM SENT FOLDER
===============================================*/
app.post("/sentFolder", function (req, res) {
        sentCardId = req.body.cardId;
        sentSubmit = req.body.submit;

        if (sentSubmit == "preview") {
                Card.find({ _id: sentCardId }, function (err, previewed) {
                        sentPreviewedCard = previewed;
                        sentboxReplies = sentPreviewedCard[0].replies;
                        res.redirect('http://localhost:3000/sent');
                });
        } else
                if (sentSubmit == "delete") {
                        sentPreviewedCard = "";
                        Card.updateOne({ _id: sentCardId }, { $set: { sent: "deleted" } }, function (err, deleted) {
                                if (err) {
                                        console.log(err);
                                } else {
                                        console.log(deleted, 'sent card is updated with deleted status........');

                                        res.redirect('http://localhost:3000/sent');

                                }
                        })
                }
});

/*===============================================
       CLOSE CARD PREVIEW
===============================================*/
app.post("/closeCardPreview", function (req, res) {
        if (req.body.closedFrom == "inbox") {
                inboxPreviewedCard = "";
                inboxReplies = "";
                res.redirect('http://localhost:3000/inbox');
        } else
                if (req.body.closedFrom == "sentBox") {
                        sentPreviewedCard = "";
                        sentboxReplies = "";
                        res.redirect('http://localhost:3000/sent');
                }
});



var id = mongoose.Types.ObjectId();
/*=====================================
       POST REPLIES
======================================*/
app.post("/sentBoxReplies", function (req, res) {
        console.log(req.body, "the reply from sent folder");
        today();

        Card.updateOne({ _id: req.body.cardId }, { $push: { replies: { _id: id, from: req.body.from, date: today1, message: req.body.message } } }, function (err) {

                Card.find({ _id: sentCardId }, function (err, sentboxPreviewed) {
                        sentPreviewedCard = sentboxPreviewed;
                        sentboxReplies = sentPreviewedCard[0].replies;
                        res.redirect('http://localhost:3000/sent');
                });
        });//end updateOne card
});

app.post("/inboxReplies", function (req, res) {
        console.log(req.body, "the reply from inbox");
        today();

        Card.updateOne({ _id: req.body.cardId }, { $push: { replies: { _id: id, from: req.body.from, date: today1, message: req.body.message } } }, function (err) {
                console.log("card pushed replies..");

                Card.find({ _id: inboxCardId }, function (err, inboxPreviewed) {
                        inboxPreviewedCard = inboxPreviewed;
                        inboxReplies = inboxPreviewedCard[0].replies;
                        res.redirect('http://localhost:3000/inbox');
                });//end find card
        });//end updateOne card


});


/*=====================================
       DELETE  REPLIES
======================================*/
app.post("/deleteReply", function (req, res) {

        console.log(req.body, "the req.body info for the reply to be deleted.........");

        Card.find({ _id: req.body.cardId }, function (err, docs) {

                let repliesLeft = docs[0].replies.filter(function (x) {
                        if (x._id != req.body.replyId) {
                                return x;
                        }
                });
                console.log(repliesLeft, "this is the replies left");

                Card.updateOne({ _id: req.body.cardId }, { $set: { replies: repliesLeft } }, function (err, updated) {
                        console.log(updated, "the card that was updated.......");

                        Card.find({ _id: req.body.cardId }, function (err, docs) {

                                if (req.body.deleteFrom == "inbox") {
                                        inboxReplies = docs[0].replies;
                                        res.redirect('http://localhost:3000/inbox');
                                } else
                                        if (req.body.deleteFrom == "sentBox") {
                                                sentboxReplies = docs[0].replies;
                                                res.redirect('http://localhost:3000/sent');
                                        }
                        });
                })
        });//end find card
});



/*=====================================
        SEND TO ERROR 403 PAGE
======================================*/
app.get("/public", function (req, res) {
        res.render("noAccess.ejs");
});//end app.get "/public"


/*=====================================
        SEND TO ERROR 404 PAGE
======================================*/
app.use(function (req, res) {
        res.render("pageNotFound.ejs");
});//end error 404

}//end module exports