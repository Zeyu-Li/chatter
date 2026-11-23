// 1st-gen trigger API, kept so redeploying updates the existing function in place
// (firebase-tools cannot upgrade a deployed 1st-gen function to 2nd gen).
const functions = require("firebase-functions/v1");
const { Filter } = require("bad-words");

const { initializeApp } = require("firebase-admin/app");
initializeApp();

exports.detectEvilUsers = functions.firestore
    .document('messages/{msgId}')
    .onCreate(async (doc, ctx) => {
        const filter = new Filter();
        const {text, uuid} = doc.data();

        if (filter.isProfane(text)) {
            const cleaned = filter.clean(text);
            await doc.ref.update({text: cleaned})
        }
    })
