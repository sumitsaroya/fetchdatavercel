const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.getStudents = functions.https.onRequest(async (request, response) => {
    const db = admin.database();
    const ref = db.ref('userInputs');
    try {
        const snapshot = await ref.once('value');
        const data = snapshot.val();
        response.status(200).json(data);
    } catch (error) {
        console.error(error);
        response.status(500).send('Internal Server Error');
    }
});
