sap.ui.define(
	["./BaseController", "sap/m/MessageBox"],
	function (BaseController, MessageBox) {
		"use strict";

		return BaseController.extend("com.myorg.myapp.controller.Main", {
			sayHello: function () {
				MessageBox.show("Hello World!");

				jQuery.ajax({
					type: "GET",
					contentType: "application/json",
					url: "http://localhost:3001/person",
					dataType: "json",
					async: false,
					success: function (data, textStatus, jqXHR) {
						console.log(data)
						alert(JSON.stringify(data));
						MessageBox.show("Hello World!");
					},
				});

			},
		});
	}
);
