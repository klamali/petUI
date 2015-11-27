
/*
 *
 *  (C) Copyright 2010-2015 hSenid Mobile Solutions (Pvt) Limited.
 *   All Rights Reserved.
 *
 *   These materials are unpublished, proprietary, confidential source code of
 *   hSenid Mobile Solutions (Pvt) Limited and constitute a TRADE SECRET
 *   of hSenid Mobile Solutions (Pvt) Limited.
 *
 *   hSenid Mobile Solutions (Pvt) Limited retains all title to and intellectual
 *   property rights in these materials.
 *
 */


var request = require('request');
var http = require('http');


//////////////////////////////////////////////////////////////////////////////////////////////////////
var Output = React.createClass({
    displayName: 'Output',
    getInitialState: function () {
        return {
            value: ""
        };
    },
    render: function () {
        return (
            React.createElement("textarea", {rows: "20", cols: "30"})
        );
    }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////

var IdInput = React.createClass({
    displayName: 'IdInput',
    getInitialState: function () {
        return {
            value: ""
        };
    },

    handleChangeInput: function (evt) {
        this.setState({
            value: evt.target.value
        });
    },

    readValue: function () {
        readp(this.state.value);
    },

    deleteValue: function () {

        delp(this.state.value)
    },

    render: function () {
        return (
            React.createElement("div", null,
                React.createElement("div", null,
                    "Enter Pet Id:",
                    React.createElement("input", {value: this.state.value, onChange: this.handleChangeInput})
                ),

                React.createElement("button", {onClick: this.readValue}, "Read"),

                React.createElement("button", {onClick: this.deleteValue}, "Delete")
            )

        );
    }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var PetInput = React.createClass({
    displayName: 'PetInput',
    getInitialState: function () {
        return {
            value: ""
        };
    },

    handleChangeTA: function (evt) {
        this.setState({
            value: evt.target.value
        });
    },

    addValue: function () {
        addp(this.state.value);
    },

    updateValue: function () {
        updatep(this.state.value);
    },

    render: function () {
        return (
            React.createElement("div", null,


                React.createElement("textarea", {
                    rows: "20",
                    cols: "30",
                    onChange: this.handleChangeTA,
                    value: this.state.value
                })
                ,

                React.createElement("button", {onClick: this.addValue}, "Add"),

                React.createElement("button", {onClick: this.updateValue}, "Update")
            )

        );
    }
});

/////////////////////////////////////////////////////////////////////////////////////////


React.render(
    React.createElement("div", null, React.createElement(IdInput, null), React.createElement(PetInput, null)),
    document.body
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addp(petdata) {

    request({
            url: 'http://localhost:8080/pet', //URL to hit
            method: 'POST',
            headers: ({
                //'Host':'localhost:8080',
                //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI3OWZjYTA2OTM4NWY0ZGI3Y2Q2MTM1NjU0MzdjYWJjMSJ9._UgdbhaYLB-V0tvKwdd-34zSSaNGqrZGFX__zAZxSyU',
                'Content-Type': 'application/json'
            }),
            jsonp: true,
            body: petdata
        },
        function (error, response, body) {
            if (error) {
                console.log(error);
            } else {
                console.log(body);
                var s = document.getElementById("data_out");
                s.innerHTML = body;
            }
        }
    );

}

function updatep(petdata) {
    request({
            url: 'http://localhost:8080/pet', //URL to hit
            method: 'PUT',
            headers: ({
                //	'Host':'localhost:8080',
                //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI3OWZjYTA2OTM4NWY0ZGI3Y2Q2MTM1NjU0MzdjYWJjMSJ9._UgdbhaYLB-V0tvKwdd-34zSSaNGqrZGFX__zAZxSyU',
                'Content-Type': 'application/json'
            }),
            jsonp: true,
            body: petdata
        },
        function (error, response, body) {
            if (error) {
                console.log(error);
            } else {
                // var status= response.statusCode;
                //var obj =JSON.parse(body);
                //var len=obj.issues.length;
                console.log(body)
                var s = document.getElementById("data_out");
                s.innerHTML = body;

            }
        }
    );
}

function delp(petid) {
    request({
            url: 'http://localhost:8080/pet/' + petid, //URL to hit
            method: 'DELETE',
            headers: ({
                //'Host':'localhost:8080',
                //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI3OWZjYTA2OTM4NWY0ZGI3Y2Q2MTM1NjU0MzdjYWJjMSJ9._UgdbhaYLB-V0tvKwdd-34zSSaNGqrZGFX__zAZxSyU',
                'Content-Type': 'application/json'
            })
        },
        function (error, response, body) {
            if (error) {
                console.log(error);
            } else {
                console.log(body)

            }
        }
    );

}


function readp(petid) {

    request({
            url: 'http://localhost:8080/pet/' + petid, //URL to hit
            method: 'GET',
            headers: ({
                //'Host':'localhost:8080',
                //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI3OWZjYTA2OTM4NWY0ZGI3Y2Q2MTM1NjU0MzdjYWJjMSJ9._UgdbhaYLB-V0tvKwdd-34zSSaNGqrZGFX__zAZxSyU',
                'Content-Type': 'application/json'
            })
        },
        function (error, response, body) {
            if (error) {
            } else {
                console.log(body);
                var s = document.getElementById("data_out");
                s.innerHTML = body;
            }
        }
    );

}
