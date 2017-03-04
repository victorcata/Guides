# Firebase

## Dependencies
```javascript
<script src="https://www.gstatic.com/firebasejs/<VERSION>/firebase.js"></script>
npm install firebase -save
```
## Database reference
```javascript
var config = {
    apiKey: '<API_KEY>',
    authDomain: '<PROJECT_ID>.firebaseapp.com',
    databaseURL: 'https://<DB_NAME>.firebaseio.com'
};
firebase.initializeApp(config);
var ref = firebase.database().ref();
```
## Saving data
```javascript
ref.child('users').set({
    id1: { prop: value },
    id2: { prop: value }
});
```
```javascript
ref.child('users').child('id1').set({ prop: value });
```
