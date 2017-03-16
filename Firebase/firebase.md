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
## Child
```javascript
var config = {
    databaseURL: '<URL>/web/data'
};
```
Equivalent to
```javascript
var config = {
    databaseURL: '<URL>'
};
ref.child('/web/data')
```
## Set
```javascript
ref.child('id').set({
    id1: { prop: value },
    id2: { prop: value }
});
```
```javascript
ref.child('id').child('id1').set({ prop: value }, [onComplete]);
```
## Update
```javascript
var child = ref.child('item');
child.update({
    'id/prop': 'value',
    'id/prop': 'value'
});
```
```javascript
ref.child('id').child('id1').update({ prop: value }, [onComplete]);
```
## Push
```javascript
ref.child('id').push('Saving data...', [onComplete]);
```
## Transaction
```javascript
ref.transaction(function(current){
    return current;
});
```
## Events
- 'value'
- 'child_added'
- 'child_changed'
- 'child_removed'
```javascript
ref.on('event', successCallback, [errorCallback])
ref.once('event', successCallback, [errorCallback])
ref.off('event')
ref.off()
```
## Queries
- orderByChild()
```javascript
ref.orderByChild('prop').on('event', fn)
```
- orderByKey()
```javascript
ref.orderByKey().on('event', fn)
```
- orderByValue()
```javascript
ref.orderByValue().on('event', fn)
```
- orderByPriority()
```javascript
ref.orderByPriority().limitToFirst(2).on('event', fn)
```
- limitToFirst()
```javascript
ref.orderByChild('prop').limitToFirst(2).on('event', fn)
```
- limitToLast()
```javascript
ref.orderByChild('prop').limitToLast(2).on('event', fn)
```
- startAt()
```javascript
ref.orderByChild('prop').startAt(3).on('event', fn)
```
- endAt()
```javascript
ref.orderByKey().startAt('b').endAt('b~').on('event', fn)
```
- equalTo()
```javascript
ref.orderByChild('prop').equalTo(value).on('event', fn)
```
## Working offline
```javascript
ref.onDisconnect().set('I disconnected!')
```
## Authentication
Providers
- TwitterAuthProvider
- GoogleAuthProvider
```javascript
var auth = firebase.auth();
var provider = new firebase.auth.TwitterAuthProvider();
var provider
auth.signInWithPopup(provider).then(onComplete).catch(onError)
auth.onAuthStateChanged(fn)
```
## Arrays
```javascript
// we send this
['a', 'b', 'c', 'd', 'e']
// Firebase databases store this
{0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e'}
```
