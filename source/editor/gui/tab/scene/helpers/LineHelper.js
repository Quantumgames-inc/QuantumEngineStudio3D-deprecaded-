"use strict";

/** 
 * Line helper is used to preview THREE.Line objects.
 * 
 * @class LineHelper
 * @param {THREE.Line} object
 * @param {Number} hex Helper color in hexadecimal.
 */
function LineHelper(object, hex)
{
	THREE.Line.call(this, object.geometry, object.material.clone());

	this.material.color = new THREE.Color((hex !== undefined) ? hex : 0xFFFF00);

	this.object = object;
	this.matrixAutoUpdate = false;
	this.update();
}

LineHelper.prototype = Object.create(THREE.Line.prototype);

LineHelper.prototype.update = function()
{
	this.matrixWorld.copy(this.object.matrixWorld);
};