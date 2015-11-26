var request = require('request');
var http =require('http');

var Output = React.createClass({displayName: 'Output',
	getInitialState: function() {
		return {
			value: ""
		};
	},

	handleChangeInput: function(evt) {
		this.setState({
			value: evt.target.value
		});
	},


	render: function() {
		return (


			React.createElement("textarea", {rows: "20", cols: "30"})


		);
	}
});


var IdInput = React.createClass({displayName: 'IdInput',
	getInitialState: function() {
		return {
			value: ""
		};
	},

	handleChangeInput: function(evt) {
		this.setState({
			value: evt.target.value
		});
	},

	readValue: function() {
		alert(this.state.value);
	},

	updateValue: function() {
		alert(this.state.value);
	},

	deleteValue: function() {

		delp(this.state.value)
	},

	render: function() {
		return (
			React.createElement("div", null,
				React.createElement("div", null,
					"Enter Pet Id:",
					React.createElement("input", {value: this.state.value, onChange: this.handleChangeInput})
				),

				React.createElement("button", {onClick: this.addValue}, "Read"),

				React.createElement("button", {onClick: this.deleteValue}, "Delete")

			)

		);
	}
});

var PetInput = React.createClass({displayName: 'PetInput',
	getInitialState: function() {
		return {
			value: ""
		};
	},

	handleChangeTA: function(evt) {
		this.setState({
			value: evt.target.value
		});
	},

	addValue: function() {
		alert(this.state.value);

	},

	updateValue: function() {
		alert(this.state.value);
	},

	render: function() {
		return (
			React.createElement("div", null,


				React.createElement("textarea", {rows: "20", cols: "30", onChange: this.handleChangeTA, value: this.state.value})
				,

				React.createElement("button", {onClick: this.addValue}, "Add"),

				React.createElement("button", {onClick: this.updateValue}, "Update")
			)

		);
	}
});
React.render(
	React.createElement("div", null, React.createElement(IdInput, null), React.createElement(PetInput, null), React.createElement(Output, null)),
	document.body
);




function delp(petid){





	request({
			url:'http://localhost:8080/pet/'+petid, //URL to hit
			method: 'DELETE',

			headers: ({
				//'Host':'localhost:8080',
				//'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI3OWZjYTA2OTM4NWY0ZGI3Y2Q2MTM1NjU0MzdjYWJjMSJ9._UgdbhaYLB-V0tvKwdd-34zSSaNGqrZGFX__zAZxSyU',
				'Content-Type': 'application/json'
			}),
			protocol: http
		},
		function(error, response, body){
			if(error) {
				console.log(error);
			} else {
				console.log(body)
			}
		}
	);
/*
var url='http://localhost:8000/pet/'+petid
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.responseType = 'json';

	xhr.onload = function() {
		console.log(xhr.response);
	};

	xhr.onerror = function() {
		console.log("Booo");
	};

	xhr.send();*/
/*
var url='http://localhost:8080/pet/'+petid
	var xhr = new XMLHttpRequest();

console.log("sda")
	if ("withCredentials" in xhr) {
		console.log("sda")
		// Check if the XMLHttpRequest object has a "withCredentials" property.
		// "withCredentials" only exists on XMLHTTPRequest2 objects.
		xhr.open('DELETE', url, true);
		console.log("sda")
	} else if (typeof XDomainRequest != "undefined") {
		console.log("sda")
		// Otherwise, check if XDomainRequest.
		// XDomainRequest only exists in IE, and is IE's way of making CORS requests.
		xhr = new XDomainRequest();
		xhr.open('DELETE', url);
		console.log("sda")
	} else {
		console.log("sda")
		// Otherwise, CORS is not supported by the browser.
		xhr = null;
		console.log("sda")
	}
	console.log(xhr.responseText);
	console.log("sda")
	xhr.onload = function() {
		var responseText = xhr.responseText;
		console.log(responseText);
		// process the response.
	};

	xhr.onerror = function() {
		console.log('There was an error!');
	};*/
}
