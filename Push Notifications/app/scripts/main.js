/*
*
*  Push Notifications codelab
*  Copyright 2015 Google Inc. All rights reserved.
*
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*
*      https://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License
*
*/

/* eslint-env browser, es6 */

'use strict';

// const applicationServerPublicKey = '<Your Public Key>';
const applicationServerPublicKey = 'BOikkfJqHdSM1iDnwCC51RTiIDxC30LR0R2g-jYVIKmoQooccgZSaDgB-17Frhu9V1YKzBKsluoclIxQ2BwyV5c';

const pushButton = document.querySelector('.js-push-btn');

let isSubscribed = false;
let swRegistration = null;

function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

function updateSubscriptionOnServer(subscription) {
    // step5:
    console.log(`subscription`, subscription);
    // TODO: Send subscription to application server
    const subscriptionJson = document.querySelector('.js-subscription-json');
    const subscriptionDetails = document.querySelector('.js-subscription-details');
    if (subscription) {
        subscriptionJson.textContent = JSON.stringify(subscription, null, 4);
        subscriptionDetails.classList.remove('is-invisible');
    } else {
        subscriptionDetails.classList.add('is-invisible');
    }
}

function subscribeUser() {
    // step4: subscribe server push
    const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
    console.log(`\n applicationServerKey`, applicationServerKey);
    swRegistration
    .pushManager
    .subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey
    })
    .then(function(subscription) {
        console.log('User is subscribed.');
        updateSubscriptionOnServer(subscription);
        isSubscribed = true;
        updateBtn();
    })
    .catch(function(err) {
        console.log('Failed to subscribe the user: ', err);
        updateBtn();
    });
}

function unsubscribeUser() {
    swRegistration
    .pushManager
    .getSubscription()
    .then(function(subscription) {
        if (subscription) {
            return subscription.unsubscribe();
        }
    })
    .catch(function(error) {
        console.log('Error unsubscribing', error);
    })
    // catch then
    .then(function() {
        updateSubscriptionOnServer(null);
        console.log('User is unsubscribed.');
        isSubscribed = false;
        updateBtn();
    });
}

function updateBtn() {
    // step6:
    if (Notification.permission === 'denied') {
        pushButton.textContent = 'Push Messaging Blocked.';
        pushButton.disabled = true;
        updateSubscriptionOnServer(null);
        return;
    }
    // step3: toggle subscribe
    pushButton.addEventListener('click', function() {
        pushButton.disabled = true;
        if (isSubscribed) {
            // step9: Unsubscribe user
            unsubscribeUser();
        } else {
            subscribeUser();
        }
    });
    if (isSubscribed) {
        pushButton.textContent = 'Disable Push Messaging';
    } else {
        pushButton.textContent = 'Enable Push Messaging';
    }
    pushButton.disabled = false;
}

function initializeUI() {
    // step2: Set the initial subscription value
    swRegistration
    .pushManager
    .getSubscription()
    .then(function(subscription) {
        isSubscribed = !(subscription === null);
        if (isSubscribed) {
            console.log('User IS subscribed.');
        } else {
            console.log('User is NOT subscribed.');
        }
        updateBtn();
    });
}

// step1: check support & register sw
if ('serviceWorker' in navigator && 'PushManager' in window) {
    console.log('Service Worker and Push is supported');
    navigator.serviceWorker
    .register('sw.js')
    .then(function(swReg) {
        console.log('Service Worker is registered', swReg);
        swRegistration = swReg;
        initializeUI();
    })
    .catch(function(error) {
        console.error('Service Worker Error', error);
    });
} else {
    console.warn('Push messaging is not supported');
    pushButton.textContent = 'Push Not Supported';
}

