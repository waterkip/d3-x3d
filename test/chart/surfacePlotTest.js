let test = require('tape');
let d3X3dom = require("../../");

test("Test Surface Plot, surfacePlot()", function(t) {
	let surfacePlot = d3X3dom.chart.surfacePlot();

	// Test Getter/ Setter functions for width
	t.deepEqual(surfacePlot.width(), 500, "Default width should be 500");
	surfacePlot.width(300);
	t.deepEqual(surfacePlot.width(), 300);

	// Test Getter/ Setter functions for height
	t.deepEqual(surfacePlot.height(), 500, "Default height should be 500");
	surfacePlot.height(300);
	t.deepEqual(surfacePlot.height(), 300);

	// Test for Getter and setter function for dimensions
	t.deepEqual(surfacePlot.dimensions(), { x: 40, y: 40, z: 40 }, "Returns default dimensions");
	surfacePlot.dimensions({ x: 10, y: 20, z: 30 });
	t.deepEqual(surfacePlot.dimensions(), { x: 10, y: 20, z: 30 }, "Dimensions changed");

	// Test for Getter and setter function for xScale
	t.deepEqual(surfacePlot.xScale(), undefined, "xScale is undefined");
	surfacePlot.xScale(0.2);
	t.deepEqual(surfacePlot.xScale(), 0.2, "xScale changed");

	// Test for Getter and setter function for yScale
	t.deepEqual(surfacePlot.yScale(), undefined, "yScale is undefined");
	surfacePlot.yScale(0.1);
	t.deepEqual(surfacePlot.yScale(), 0.1, "yScale changed");

	// Test for Getter and setter function for zScale
	t.deepEqual(surfacePlot.zScale(), undefined, "zScale is undefined");
	surfacePlot.zScale(0.1);
	t.deepEqual(surfacePlot.zScale(), 0.1, "zScale changed");

	// Test for Getter and Setter function for debug
	t.deepEqual(surfacePlot.debug(), false, "Show debug log and stats is set to false");
	surfacePlot.debug(true);
	t.deepEqual(surfacePlot.debug(), true);

	// Test Getter/ Setter functions for colors
	t.deepEqual(surfacePlot.colors(), ["blue", "red"], 'Default colors should be ["blue", "red"]');
	surfacePlot.colors(["orange", "yellow"]);
	t.deepEqual(surfacePlot.colors(), ["orange", "yellow"]);

	// Test for Getter and setter function for color Scale
	t.deepEqual(surfacePlot.colorScale(), undefined, "colorScale is undefined");
	surfacePlot.colorScale(2);
	t.deepEqual(surfacePlot.colorScale(), 2, "colorScale changed");

	t.end()
});
