/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
	// Application Constructor
	initialize: function() {
		document.getElementById("btn").addEventListener("click", app.takePhoto);
	},
	// deviceready Event Handler
	//
	// Bind any cordova events here. Common events are:
	// 'pause', 'resume', etc.
	onDeviceReady: function() {
		this.receivedEvent("deviceready");
	},
	// take a picture!
	takePhoto: function() {
		let opts = {
			quality: 80,
			destinationType: Camera.DestinationType.FILE_URI,
			sourceType: Camera.PictureSourceType.CAMERA,
			encodingType: Camera.EncodingType.JPEG,
			cameraDirection: Camera.Direction.BACK,
			targetWidth: 300,
			targetHeight: 400
		};
		console.log("Button Clicked");
		navigator.camera.getPicture(app.onSuccess, app.onFail, opts);
	},
	onSuccess: function(imageURI) {
		// document.getElementById('msg').textContent = imageURI;
		document.getElementById("photo").src = "data:image/jpeg;base64," + imageURI;
	},
	onFail: function(message) {
		alert("Failed because: " + message);
	}
};
app.initialize();

// /*
//  * Licensed to the Apache Software Foundation (ASF) under one
//  * or more contributor license agreements.  See the NOTICE file
//  * distributed with this work for additional information
//  * regarding copyright ownership.  The ASF licenses this file
//  * to you under the Apache License, Version 2.0 (the
//  * "License"); you may not use this file except in compliance
//  * with the License.  You may obtain a copy of the License at
//  *
//  * http://www.apache.org/licenses/LICENSE-2.0
//  *
//  * Unless required by applicable law or agreed to in writing,
//  * software distributed under the License is distributed on an
//  * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
//  * KIND, either express or implied.  See the License for the
//  * specific language governing permissions and limitations
//  * under the License.
//  */
// var app = {
// 	// Application Constructor
// 	initialize: function() {
// 		document.getElementById("btn").addEventListener("click", app.takePhoto);
// 	},

// 	// deviceready Event Handler
// 	//
// 	// Bind any cordova events here. Common events are:
// 	// 'pause', 'resume', etc.
// 	onDeviceReady: function() {
// 		this.receivedEvent("deviceready");
// 	},

// 	// take a picture!
// 	takePhoto: function() {
// 		console.log("Button Clicked");
// 		navigator.camera.getPicture(app.onSuccess, app.onFail, {
// 			quality: 50,
// 			destinationType: Camera.DestinationType.Data_URL //FILE_URI
// 		});
// 	},

// 	onSuccess: function(imageURI) {
// 		var image = document.getElementById("photo");
// 		image.src = imageURI;
// 	},

// 	onFail: function(message) {
// 		alert("Failed because: " + message);
// 	}
// };

// app.initialize();
