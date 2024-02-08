import{google} from 'googleapis';
const auth = new google.auth.GoogleAuth();
const secretKey = {
  "type": process.env.type,
  "project_id": process.env.project_id,
  "private_key_id": process.env.private_key_id,
  "private_key": process.env.private_key.split(String.raw`\n`).join('\n'),
  "client_email": process.env.client_email,
  "client_id": process.env.client_id,
  "auth_uri": process.env.auth_uri,
  "token_uri": process.env.token_uri,
  "auth_provider_x509_cert_url": process.env.auth_provider_x509_cert_url,
  "client_x509_cert_url": process.env.client_x509_cert_url,
  "universe_domain": process.env.universe_domain
}

const jwtClient = new google.auth.JWT(
    secretKey.client_email, null,
    secretKey.private_key,  ['https://www.googleapis.com/auth/spreadsheets']);

//authenticate request 
jwtClient.authorize(function (err, tokens) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("Successfully connected!");
  }
 });

 const sheets = google.sheets('v4');

 export default async function handler(req, res) {
    const search = req.query.search || '';
    // sheet ID we are pulling from
    let spreadsheetId = '1uTd_uBHnggaWBvgA5oWCKehzSsIT7UFh_2c4CTvMICQ';
    // range
    let sheetRange = 'Sheet1!2:10';
    let results = [];
    sheets.spreadsheets.values.get({
        auth: jwtClient,
        spreadsheetId: spreadsheetId,
        range: sheetRange
    }, function (err, response) {
      if (err) {
          console.log('The API returned an error: ' + err);
      }
      else {
        for (let row of response.data.values) {
          results.push({
            "title": row[0],
            "image": row[1],
            "description": row[2],
            "alt": row[3],
            "src": row[4],
            "modelImage": row[5],
            "poster" : row[6],
            "about" : row[7],
            "embed": row[8]
          });
        }
        return results;
      }
      res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
      res.setHeader("Access-Control-Allow-Credentials", "true");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
      res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
      res.json(results);
    });
  }



