# Chatter

![logo](public/img/logo.png)

A chatting app built on React-Firebase-Websockets that allows you to chat via text with random people.



## Demo

![login_page](img/new_login.png)

Login screen ^^

![screen2](img/new_chat.png)

Chat Screen ^^

## Packages

* react
* react-router-dom
* react-bootstrap
* bootstrap
* [react-icons](https://www.npmjs.com/package/react-icons)
* firebase
* react-google-recaptcha-v3



## Firebase

Firestore properties for user:

```json
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow write: if false;
      allow read: if request.auth.uid != null;
    }
    
    // allow user to change own data 
    match /user/{userId} {
    	allow write: if request.auth.uid == userId;
    }
  }
}
```



