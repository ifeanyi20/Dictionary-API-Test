/* Test Cases for testing Dictionary API using Java Script as languange*/
/* These tests have been created in Postman and exported the Java Script code from Postman */

/* Test for creating Dictionary */
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://dictionary.iachieved.it/dictionary",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Basic API_KEY",
    "cache-control": "no-cache",
    "Postman-Token": "203f390e-fdd5-4f35-8b27-a587f6cfbf95"
  },
  "processData": false,
  "data": ""
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

/* Test for deleting the dictionary */
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://dictionary.iachieved.it/dictionary",
  "method": "DELETE",
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Basic API_KEY",
    "cache-control": "no-cache",
    "Postman-Token": "59de4c57-0cbd-416d-9475-0c813915e126"
  },
  "processData": false,
  "data": ""
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

/* Test for inserting dictionary element */
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://dictionary.iachieved.it/dictionary/79551ce5-c12c-44dc-845f-b036fe13ab95/keys/hand",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Basic API_KEY",
    "cache-control": "no-cache",
    "Postman-Token": "5ef9ed93-dff3-499c-b103-cb3627e30cd8"
  },
  "processData": false,
  "data": "{\r\n  \"value\": \"A body part\"\r\n}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

/* Test for getting all keys */
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://dictionary.iachieved.it/dictionary/79551ce5-c12c-44dc-845f-b036fe13ab95/keys",
  "method": "GET",
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Basic API_KEY",
    "cache-control": "no-cache",
    "Postman-Token": "4ee618b1-6fbf-4d91-81e1-3f2f4cdb0d39"
  },
  "processData": false,
  "data": ""
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

/* Test for Getting value for given key */
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://dictionary.iachieved.it/dictionary/79551ce5-c12c-44dc-845f-b036fe13ab95/keys/wrong",
  "method": "GET",
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Basic API_KEY",
    "cache-control": "no-cache",
    "Postman-Token": "ec98c65b-f14e-4168-96db-d4577d8b6742"
  },
  "processData": false,
  "data": ""
}

$.ajax(settings).done(function (response) {
  console.log(response);
});


/* Test for deleting element for a specific key */
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://dictionary.iachieved.it/dictionary/79551ce5-c12c-44dc-845f-b036fe13ab95/keys/hand",
  "method": "DELETE",
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Basic API_KEY",
    "cache-control": "no-cache",
    "Postman-Token": "0df4a887-ac57-4ff1-9f7b-08869a5bf37b"
  },
  "processData": false,
  "data": ""
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
