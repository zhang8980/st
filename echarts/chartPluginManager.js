(function(global)
{
var chartFactory = (global.chartFactory || (global.chartFactory = {}));
var chartPluginManager = (chartFactory.chartPluginManager || (chartFactory.chartPluginManager = {}));
chartPluginManager.plugins = (chartPluginManager.plugins || {});

//@deprecated 兼容1.8.1版本的window.chartPluginManager变量名，未来版本会移除
global.chartPluginManager = chartPluginManager;

chartPluginManager.get = function(id){ return this.plugins[id]; };

var plugin0=
{"id":"org.datagear.chart.line","nameLabel":{"value":"基本折线图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每一列都绘制为一个图表系列"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列，如果标记，【数值】仅支持标记单列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":100,"categories":[{"nameLabel":{"value":"折线图"},"name":"line","order":100}],"categoryOrders":[]};
plugin0.renderer=

	{
		render: function(chart)
		{
			chartFactory.chartSupport.lineRender(chart);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.lineUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.lineResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.lineDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.lineOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.lineOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin0.chartRenderer = plugin0.renderer;
chartPluginManager.plugins["org.datagear.chart.line"] = plugin0;
var plugin1=
{"id":"org.datagear.chart.line.smooth","nameLabel":{"value":"平滑折线图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每一列都绘制为一个图表系列"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列，如果标记，【数值】仅支持标记单列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":105,"categories":[{"nameLabel":{"value":"折线图"},"name":"line","order":100}],"categoryOrders":[]};
plugin1.renderer=

	{
		render: function(chart)
		{
			var options = { dg: { smooth: true } };
			chartFactory.chartSupport.lineRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.lineUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.lineResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.lineDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.lineOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.lineOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin1.chartRenderer = plugin1.renderer;
chartPluginManager.plugins["org.datagear.chart.line.smooth"] = plugin1;
var plugin2=
{"id":"org.datagear.chart.line.area","nameLabel":{"value":"面积图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每一列都绘制为一个图表系列"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列，如果标记，【数值】仅支持标记单列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":110,"categories":[{"nameLabel":{"value":"折线图"},"name":"line","order":100}],"categoryOrders":[]};
plugin2.renderer=

	{
		render: function(chart)
		{
			var options = { dg: { area: true } };
			chartFactory.chartSupport.lineRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.lineUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.lineResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.lineDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.lineOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.lineOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin2.chartRenderer = plugin2.renderer;
chartPluginManager.plugins["org.datagear.chart.line.area"] = plugin2;
var plugin3=
{"id":"org.datagear.chart.line.area.smooth","nameLabel":{"value":"平滑面积图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每一列都绘制为一个图表系列"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列，如果标记，【数值】仅支持标记单列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":115,"categories":[{"nameLabel":{"value":"折线图"},"name":"line","order":100}],"categoryOrders":[]};
plugin3.renderer=

	{
		render: function(chart)
		{
			var options = { dg: { smooth: true, area: true } };
			chartFactory.chartSupport.lineRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.lineUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.lineResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.lineDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.lineOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.lineOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin3.chartRenderer = plugin3.renderer;
chartPluginManager.plugins["org.datagear.chart.line.area.smooth"] = plugin3;
var plugin4=
{"id":"org.datagear.chart.line.area.stack","nameLabel":{"value":"堆叠面积图"},"descLabel":{"value":"堆叠面积图应至少包含一个标记【类别】的数据集，或者至少包含一个标记多【数值】的数据集，或者至少包含两个没有标记【类别】、标记单【数值】的数据集"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每一列都绘制为一个图表系列"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列，如果标记，【数值】仅支持标记单列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":120,"categories":[{"nameLabel":{"value":"折线图"},"name":"line","order":100}],"categoryOrders":[]};
plugin4.renderer=

	{
		render: function(chart)
		{
			var options = { dg: { stack: true, area: true} };
			chartFactory.chartSupport.lineRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.lineUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.lineResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.lineDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.lineOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.lineOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin4.chartRenderer = plugin4.renderer;
chartPluginManager.plugins["org.datagear.chart.line.area.stack"] = plugin4;
var plugin5=
{"id":"org.datagear.chart.line.area.smooth.stack","nameLabel":{"value":"平滑堆叠面积图"},"descLabel":{"value":"平滑堆叠面积图应至少包含一个标记【类别】的数据集，或者至少包含一个标记多【数值】的数据集，或者至少包含两个没有标记【类别】、标记单【数值】的数据集"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每一列都绘制为一个图表系列"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列，如果标记，【数值】仅支持标记单列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":125,"categories":[{"nameLabel":{"value":"折线图"},"name":"line","order":100}],"categoryOrders":[]};
plugin5.renderer=

	{
		render: function(chart)
		{
			var options = { dg: { stack: true, area: true, smooth: true } };
			chartFactory.chartSupport.lineRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.lineUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.lineResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.lineDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.lineOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.lineOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin5.chartRenderer = plugin5.renderer;
chartPluginManager.plugins["org.datagear.chart.line.area.smooth.stack"] = plugin5;
var plugin6=
{"id":"org.datagear.chart.line.step","nameLabel":{"value":"阶梯折线图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每一列都绘制为一个图表系列"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列，如果标记，【数值】仅支持标记单列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":130,"categories":[{"nameLabel":{"value":"折线图"},"name":"line","order":100}],"categoryOrders":[]};
plugin6.renderer=

	{
		render: function(chart)
		{
			var options = { dg: { step: true } };
			chartFactory.chartSupport.lineRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.lineUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.lineResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.lineDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.lineOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.lineOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin6.chartRenderer = plugin6.renderer;
chartPluginManager.plugins["org.datagear.chart.line.step"] = plugin6;
var plugin7=
{"id":"org.datagear.chart.bar","nameLabel":{"value":"基本柱状图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每一列都绘制为一个图表系列"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列，如果标记，【数值】仅支持标记单列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":200,"categories":[{"nameLabel":{"value":"柱状图"},"name":"bar","order":200}],"categoryOrders":[]};
plugin7.renderer=

	{
		render: function(chart)
		{
			chartFactory.chartSupport.barRender(chart);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.barUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.barResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.barDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.barOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.barOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin7.chartRenderer = plugin7.renderer;
chartPluginManager.plugins["org.datagear.chart.bar"] = plugin7;
var plugin8=
{"id":"org.datagear.chart.bar.horizontal","nameLabel":{"value":"横向柱状图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每一列都绘制为一个图表系列"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列，如果标记，【数值】仅支持标记单列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":205,"categories":[{"nameLabel":{"value":"柱状图"},"name":"bar","order":200}],"categoryOrders":[]};
plugin8.renderer=

	{
		render: function(chart)
		{
			var options = { dg: { horizontal: true } };
			chartFactory.chartSupport.barRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.barUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.barResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.barDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.barOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.barOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin8.chartRenderer = plugin8.renderer;
chartPluginManager.plugins["org.datagear.chart.bar.horizontal"] = plugin8;
var plugin9=
{"id":"org.datagear.chart.bar.stack","nameLabel":{"value":"堆叠柱状图"},"descLabel":{"value":"堆叠柱状图应至少包含一个标记【类别】的数据集，或者至少包含一个标记多【数值】的数据集，或者至少包含两个没有标记【类别】、标记单【数值】的数据集"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每一列都绘制为一个图表系列"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列，如果标记，【数值】仅支持标记单列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":210,"categories":[{"nameLabel":{"value":"柱状图"},"name":"bar","order":200}],"categoryOrders":[]};
plugin9.renderer=

	{
		render: function(chart)
		{
			var options={ dg: { stack: true } };
			chartFactory.chartSupport.barRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.barUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.barResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.barDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.barOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.barOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin9.chartRenderer = plugin9.renderer;
chartPluginManager.plugins["org.datagear.chart.bar.stack"] = plugin9;
var plugin10=
{"id":"org.datagear.chart.bar.stack.horizontal","nameLabel":{"value":"横向堆叠柱状图"},"descLabel":{"value":"横向堆叠柱状图应至少包含一个标记【类别】的数据集，或者至少包含一个标记多【数值】的数据集，或者至少包含两个没有标记【类别】、标记单【数值】的数据集"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每一列都绘制为一个图表系列"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列，如果标记，【数值】仅支持标记单列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":215,"categories":[{"nameLabel":{"value":"柱状图"},"name":"bar","order":200}],"categoryOrders":[]};
plugin10.renderer=

	{
		render: function(chart)
		{
			var options={ dg: { horizontal: true, stack: true } };
			chartFactory.chartSupport.barRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.barUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.barResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.barDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.barOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.barOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin10.chartRenderer = plugin10.renderer;
chartPluginManager.plugins["org.datagear.chart.bar.stack.horizontal"] = plugin10;
var plugin11=
{"id":"org.datagear.chart.bar.polar.radius","nameLabel":{"value":"径向柱状图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每一列都绘制为一个图表系列"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列，如果标记，【数值】仅支持标记单列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":220,"categories":[{"nameLabel":{"value":"柱状图"},"name":"bar","order":200}],"categoryOrders":[]};
plugin11.renderer=

	{
		render: function(chart)
		{
			chartFactory.chartSupport.barPolarRender(chart);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.barPolarUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.barPolarResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.barPolarDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.barPolarOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.barPolarOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin11.chartRenderer = plugin11.renderer;
chartPluginManager.plugins["org.datagear.chart.bar.polar.radius"] = plugin11;
var plugin12=
{"id":"org.datagear.chart.bar.polar.angle","nameLabel":{"value":"角度柱状图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每一列都绘制为一个图表系列"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列，如果标记，【数值】仅支持标记单列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":225,"categories":[{"nameLabel":{"value":"柱状图"},"name":"bar","order":200}],"categoryOrders":[]};
plugin12.renderer=

	{
		render: function(chart)
		{
			var options={ dg: { axisType: "angle" } };
			chartFactory.chartSupport.barPolarRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.barPolarUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.barPolarResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.barPolarDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.barPolarOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.barPolarOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin12.chartRenderer = plugin12.renderer;
chartPluginManager.plugins["org.datagear.chart.bar.polar.angle"] = plugin12;
var plugin13=
{"id":"org.datagear.chart.bar.polar.radius.stack","nameLabel":{"value":"堆叠径向柱状图"},"descLabel":{"value":"堆叠径向柱状图应至少包含一个标记【类别】的数据集，或者至少包含一个标记多【数值】的数据集，或者至少包含两个没有标记【类别】、标记单【数值】的数据集"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每一列都绘制为一个图表系列"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列，如果标记，【数值】仅支持标记单列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":230,"categories":[{"nameLabel":{"value":"柱状图"},"name":"bar","order":200}],"categoryOrders":[]};
plugin13.renderer=

	{
		render: function(chart)
		{
			var options={ dg: { stack: true } };
			chartFactory.chartSupport.barPolarRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.barPolarUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.barPolarResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.barPolarDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.barPolarOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.barPolarOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin13.chartRenderer = plugin13.renderer;
chartPluginManager.plugins["org.datagear.chart.bar.polar.radius.stack"] = plugin13;
var plugin14=
{"id":"org.datagear.chart.bar.polar.angle.stack","nameLabel":{"value":"堆叠角度柱状图"},"descLabel":{"value":"堆叠角度柱状图应至少包含一个标记【类别】的数据集，或者至少包含一个标记多【数值】的数据集，或者至少包含两个没有标记【类别】、标记单【数值】的数据集"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每一列都绘制为一个图表系列"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列，如果标记，【数值】仅支持标记单列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":235,"categories":[{"nameLabel":{"value":"柱状图"},"name":"bar","order":200}],"categoryOrders":[]};
plugin14.renderer=

	{
		render: function(chart)
		{
			var options={ dg: { axisType: "angle", stack: true } };
			chartFactory.chartSupport.barPolarRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.barPolarUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.barPolarResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.barPolarDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.barPolarOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.barPolarOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin14.chartRenderer = plugin14.renderer;
chartPluginManager.plugins["org.datagear.chart.bar.polar.angle.stack"] = plugin14;
var plugin15=
{"id":"org.datagear.chart.pie","nameLabel":{"value":"基本饼图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值"},"name":"value","required":true,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":300,"categories":[{"nameLabel":{"value":"饼图"},"name":"pie","order":300}],"categoryOrders":[]};
plugin15.renderer=

	{
		render: function(chart)
		{
			chartFactory.chartSupport.pieRender(chart);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.pieUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.pieResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.pieDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.pieOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.pieOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin15.chartRenderer = plugin15.renderer;
chartPluginManager.plugins["org.datagear.chart.pie"] = plugin15;
var plugin16=
{"id":"org.datagear.chart.pie.ring","nameLabel":{"value":"环形饼图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值"},"name":"value","required":true,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":305,"categories":[{"nameLabel":{"value":"饼图"},"name":"pie","order":300}],"categoryOrders":[]};
plugin16.renderer=

	{
		render: function(chart)
		{
			var options = {dg: {ring: true}};
			chartFactory.chartSupport.pieRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.pieUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.pieResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.pieDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.pieOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.pieOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin16.chartRenderer = plugin16.renderer;
chartPluginManager.plugins["org.datagear.chart.pie.ring"] = plugin16;
var plugin17=
{"id":"org.datagear.chart.pie.rose","nameLabel":{"value":"玫瑰饼图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值"},"name":"value","required":true,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":310,"categories":[{"nameLabel":{"value":"饼图"},"name":"pie","order":300}],"categoryOrders":[]};
plugin17.renderer=

	{
		render: function(chart)
		{
			var options = {dg: {rose: true}};
			chartFactory.chartSupport.pieRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.pieUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.pieResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.pieDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.pieOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.pieOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin17.chartRenderer = plugin17.renderer;
chartPluginManager.plugins["org.datagear.chart.pie.rose"] = plugin17;
var plugin18=
{"id":"org.datagear.chart.pie.nest","nameLabel":{"value":"嵌套饼图"},"descLabel":{"value":"嵌套饼图应至少包含一个标记【类别】的数据集，或者至少包含一个标记多【数值】的数据集，或者至少包含两个没有标记【类别】、标记单【数值】的数据集"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值"},"name":"value","required":true,"multiple":false},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":315,"categories":[{"nameLabel":{"value":"饼图"},"name":"pie","order":300}],"categoryOrders":[]};
plugin18.renderer=

	{
		render: function(chart)
		{
			var options = {dg: {splitDataSet: true, seriesLayout: "nest"}};
			chartFactory.chartSupport.pieRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.pieUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.pieResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.pieDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.pieOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.pieOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin18.chartRenderer = plugin18.renderer;
chartPluginManager.plugins["org.datagear.chart.pie.nest"] = plugin18;
var plugin19=
{"id":"org.datagear.chart.gauge","nameLabel":{"value":"基本仪表盘"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每一单元格都绘制为一个指标值"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"最小值"},"descLabel":{"value":"可选标记，最小值，默认为：0"},"name":"min","required":false,"multiple":false},{"nameLabel":{"value":"最大值"},"descLabel":{"value":"可选标记，最大值，默认为：100"},"name":"max","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":400,"categories":[{"nameLabel":{"value":"仪表盘"},"name":"gauge","order":400}],"categoryOrders":[]};
plugin19.renderer=

	{
		render : function(chart)
		{
			chartFactory.chartSupport.gaugeRender(chart);
		},
		update : function(chart, results)
		{
			chartFactory.chartSupport.gaugeUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.gaugeResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.gaugeDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.gaugeOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.gaugeOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin19.chartRenderer = plugin19.renderer;
chartPluginManager.plugins["org.datagear.chart.gauge"] = plugin19;
var plugin20=
{"id":"org.datagear.chart.gauge.step","nameLabel":{"value":"阶段仪表盘"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每一单元格都绘制为一个指标值"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"最小值"},"descLabel":{"value":"可选标记，最小值，默认为：0"},"name":"min","required":false,"multiple":false},{"nameLabel":{"value":"最大值"},"descLabel":{"value":"可选标记，最大值，默认为：100"},"name":"max","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":405,"categories":[{"nameLabel":{"value":"仪表盘"},"name":"gauge","order":400}],"categoryOrders":[]};
plugin20.renderer=

	{
		render : function(chart)
		{
			var options = {dg: {gaugeType: "step"}};
			chartFactory.chartSupport.gaugeRender(chart, options);
		},
		update : function(chart, results)
		{
			chartFactory.chartSupport.gaugeUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.gaugeResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.gaugeDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.gaugeOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.gaugeOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin20.chartRenderer = plugin20.renderer;
chartPluginManager.plugins["org.datagear.chart.gauge.step"] = plugin20;
var plugin21=
{"id":"org.datagear.chart.gauge.ring","nameLabel":{"value":"得分环"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每一单元格都绘制为一个指标值"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"最小值"},"descLabel":{"value":"可选标记，最小值，默认为：0"},"name":"min","required":false,"multiple":false},{"nameLabel":{"value":"最大值"},"descLabel":{"value":"可选标记，最大值，默认为：100"},"name":"max","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":410,"categories":[{"nameLabel":{"value":"仪表盘"},"name":"gauge","order":400}],"categoryOrders":[]};
plugin21.renderer=

	{
		render : function(chart)
		{
			var options = {dg: {gaugeType: "ring"}};
			chartFactory.chartSupport.gaugeRender(chart, options);
		},
		update : function(chart, results)
		{
			chartFactory.chartSupport.gaugeUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.gaugeResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.gaugeDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.gaugeOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.gaugeOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin21.chartRenderer = plugin21.renderer;
chartPluginManager.plugins["org.datagear.chart.gauge.ring"] = plugin21;
var plugin22=
{"id":"org.datagear.chart.scatter","nameLabel":{"value":"气泡图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每一列都绘制为一个图表系列"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列，如果标记，【数值】仅支持标记单列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":500,"categories":[{"nameLabel":{"value":"散点图"},"name":"scatter","order":500}],"categoryOrders":[]};
plugin22.renderer=

	{
		render: function(chart)
		{
			chartFactory.chartSupport.scatterRender(chart);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.scatterUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.scatterResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.scatterDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.scatterOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.scatterOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin22.chartRenderer = plugin22.renderer;
chartPluginManager.plugins["org.datagear.chart.scatter"] = plugin22;
var plugin23=
{"id":"org.datagear.chart.scatter.coord","nameLabel":{"value":"坐标散点图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"横坐标"},"descLabel":{"value":"横坐标"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"纵坐标"},"descLabel":{"value":"纵坐标"},"name":"value","required":true,"multiple":false},{"nameLabel":{"value":"指标值"},"descLabel":{"value":"可选标记，指标值，数值越大散点尺寸越大"},"name":"weight","required":false,"multiple":false},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":505,"categories":[{"nameLabel":{"value":"散点图"},"name":"scatter","order":500}],"categoryOrders":[]};
plugin23.renderer=

	{
		render: function(chart)
		{
			chartFactory.chartSupport.scatterCoordRender(chart);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.scatterCoordUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.scatterCoordResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.scatterCoordDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.scatterCoordOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.scatterCoordOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin23.chartRenderer = plugin23.renderer;
chartPluginManager.plugins["org.datagear.chart.scatter.coord"] = plugin23;
var plugin24=
{"id":"org.datagear.chart.scatter.ripple","nameLabel":{"value":"涟漪气泡图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每一列都绘制为一个图表系列"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列，如果标记，【数值】仅支持标记单列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":510,"categories":[{"nameLabel":{"value":"散点图"},"name":"scatter","order":500}],"categoryOrders":[]};
plugin24.renderer=

	{
		render: function(chart)
		{
			chartFactory.chartSupport.scatterRippleRender(chart);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.scatterRippleUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.scatterRippleResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.scatterRippleDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.scatterRippleOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.scatterRippleOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin24.chartRenderer = plugin24.renderer;
chartPluginManager.plugins["org.datagear.chart.scatter.ripple"] = plugin24;
var plugin25=
{"id":"org.datagear.chart.scatter.coord.ripple","nameLabel":{"value":"涟漪坐标散点图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"横坐标"},"descLabel":{"value":"横坐标"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"纵坐标"},"descLabel":{"value":"纵坐标"},"name":"value","required":true,"multiple":false},{"nameLabel":{"value":"指标值"},"descLabel":{"value":"可选标记，指标值，数值越大散点尺寸越大"},"name":"weight","required":false,"multiple":false},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":515,"categories":[{"nameLabel":{"value":"散点图"},"name":"scatter","order":500}],"categoryOrders":[]};
plugin25.renderer=

	{
		render: function(chart)
		{
			chartFactory.chartSupport.scatterCoordRippleRender(chart);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.scatterCoordRippleUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.scatterCoordRippleResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.scatterCoordRippleDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.scatterCoordRippleOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.scatterCoordRippleOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin25.chartRenderer = plugin25.renderer;
chartPluginManager.plugins["org.datagear.chart.scatter.coord.ripple"] = plugin25;
var plugin26=
{"id":"org.datagear.chart.radar","nameLabel":{"value":"基本雷达图"},"descLabel":{"value":"雷达图支持三种数据集结构：<br>多行式数据集：相同【条目名】的多行数据表示一条雷达网，应设置如下数据标记：条目名、指标名（仅一列）、指标上限（仅一列）、指标值（仅一列）。<br>单行式数据集：一行数据表示一条雷达网，应设置如下数据标记：条目名、指标名（至少三列）、指标上限（至少三列）、指标值（至少三列），且指标名、指标上限、指标值标记列数应相同。<br>列式数据集：每一列【指标值】数据表示一条雷达网，应设置如下数据标记：指标名、指标上限、指标值（可标记多列），且数据集中应至少包含三行数据。"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"条目名"},"descLabel":{"value":"一条雷达网的条目名称，对于多行式数据集、单行式数据集，必须标记一列；对于列式数据集，不应标记"},"name":"item","required":false,"multiple":false},{"nameLabel":{"value":"指标名"},"descLabel":{"value":"指标名，对于多行式数据集，应仅标记一列；对于单行式数据集，应至少标记三列；对于列式数据集，应仅标记一列"},"name":"name","required":true,"multiple":true},{"nameLabel":{"value":"指标值"},"descLabel":{"value":"指标值，对于多行式数据集，应仅标记一列；对于单行式数据集，应至少标记三列，且与【指标名】列一一对应；对于列式数据集，可标记任意多列"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"指标上限"},"descLabel":{"value":"指标上限，对于多行式数据集，应仅标记一列；对于单行式数据集，应至少标记三列，且与【指标名】列一一对应；对于列式数据集，应仅标记一列"},"name":"max","required":true,"multiple":true}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":600,"categories":[{"nameLabel":{"value":"雷达图"},"name":"radar","order":600}],"categoryOrders":[]};
plugin26.renderer=

	{
		render: function(chart)
		{
			chartFactory.chartSupport.radarRender(chart);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.radarUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.radarResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.radarDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.radarOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.radarOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin26.chartRenderer = plugin26.renderer;
chartPluginManager.plugins["org.datagear.chart.radar"] = plugin26;
var plugin27=
{"id":"org.datagear.chart.radar.circle","nameLabel":{"value":"圆形雷达图"},"descLabel":{"value":"雷达图支持三种数据集结构：<br>多行式数据集：相同【条目名】的多行数据表示一条雷达网，应设置如下数据标记：条目名、指标名（仅一列）、指标上限（仅一列）、指标值（仅一列）。<br>单行式数据集：一行数据表示一条雷达网，应设置如下数据标记：条目名、指标名（至少三列）、指标上限（至少三列）、指标值（至少三列），且指标名、指标上限、指标值标记列数应相同。<br>列式数据集：每一列【指标值】数据表示一条雷达网，应设置如下数据标记：指标名、指标上限、指标值（可标记多列），且数据集中应至少包含三行数据。"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"条目名"},"descLabel":{"value":"一条雷达网的条目名称，对于多行式数据集、单行式数据集，必须标记一列；对于列式数据集，不应标记"},"name":"item","required":false,"multiple":false},{"nameLabel":{"value":"指标名"},"descLabel":{"value":"指标名，对于多行式数据集，应仅标记一列；对于单行式数据集，应至少标记三列；对于列式数据集，应仅标记一列"},"name":"name","required":true,"multiple":true},{"nameLabel":{"value":"指标值"},"descLabel":{"value":"指标值，对于多行式数据集，应仅标记一列；对于单行式数据集，应至少标记三列，且与【指标名】列一一对应；对于列式数据集，可标记任意多列"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"指标上限"},"descLabel":{"value":"指标上限，对于多行式数据集，应仅标记一列；对于单行式数据集，应至少标记三列，且与【指标名】列一一对应；对于列式数据集，应仅标记一列"},"name":"max","required":true,"multiple":true}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":605,"categories":[{"nameLabel":{"value":"雷达图"},"name":"radar","order":600}],"categoryOrders":[]};
plugin27.renderer=

	{
		render: function(chart)
		{
			var options={ radar: { shape: "circle" } };
			chartFactory.chartSupport.radarRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.radarUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.radarResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.radarDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.radarOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.radarOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin27.chartRenderer = plugin27.renderer;
chartPluginManager.plugins["org.datagear.chart.radar.circle"] = plugin27;
var plugin28=
{"id":"org.datagear.chart.funnel","nameLabel":{"value":"基本漏斗图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值"},"name":"value","required":true,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":700,"categories":[{"nameLabel":{"value":"漏斗图"},"name":"funnel","order":700}],"categoryOrders":[]};
plugin28.renderer=

	{
		render: function(chart)
		{
			chartFactory.chartSupport.funnelRender(chart);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.funnelUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.funnelResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.funnelDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.funnelOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.funnelOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin28.chartRenderer = plugin28.renderer;
chartPluginManager.plugins["org.datagear.chart.funnel"] = plugin28;
var plugin29=
{"id":"org.datagear.chart.funnel.pyramid","nameLabel":{"value":"金字塔图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值"},"name":"value","required":true,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":705,"categories":[{"nameLabel":{"value":"漏斗图"},"name":"funnel","order":700}],"categoryOrders":[]};
plugin29.renderer=

	{
		render: function(chart)
		{
			var options = {dg: {sort: "ascending"}};
			chartFactory.chartSupport.funnelRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.funnelUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.funnelResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.funnelDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.funnelOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.funnelOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin29.chartRenderer = plugin29.renderer;
chartPluginManager.plugins["org.datagear.chart.funnel.pyramid"] = plugin29;
var plugin30=
{"id":"org.datagear.chart.map","nameLabel":{"value":"基本地图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名，应与地图中的地区名对应"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值"},"name":"value","required":true,"multiple":false},{"nameLabel":{"value":"地图名"},"descLabel":{"value":"可选标记，图表使用的地图名，用于支持地图随数据刷新的情况，第一个不为空的列值将用作地图名"},"name":"map","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":800,"categories":[{"nameLabel":{"value":"地图"},"name":"map","order":800}],"categoryOrders":[]};
plugin30.renderer=

	{
		asyncRender: true,
		render: function(chart)
		{
			chartFactory.chartSupport.mapRender(chart);
		},
		asyncUpdate: true,
		update: function(chart, results)
		{
			chartFactory.chartSupport.mapUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.mapResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.mapDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.mapOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.mapOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin30.chartRenderer = plugin30.renderer;
chartPluginManager.plugins["org.datagear.chart.map"] = plugin30;
var plugin31=
{"id":"org.datagear.chart.map.scatter","nameLabel":{"value":"地图散点图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"经度"},"descLabel":{"value":"经度值"},"name":"longitude","required":true,"multiple":false},{"nameLabel":{"value":"纬度"},"descLabel":{"value":"纬度值"},"name":"latitude","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"可选标记，指标数值，数值越大散点尺寸越大"},"name":"value","required":false,"multiple":false},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列"},"name":"category","required":false,"multiple":false},{"nameLabel":{"value":"地图名"},"descLabel":{"value":"可选标记，图表使用的地图名，用于支持地图随数据刷新的情况，第一个不为空的列值将用作地图名"},"name":"map","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":805,"categories":[{"nameLabel":{"value":"地图"},"name":"map","order":800},{"nameLabel":{"value":"散点图"},"name":"scatter","order":500}],"categoryOrders":[805,530]};
plugin31.renderer=

	{
		asyncRender: true,
		render: function(chart)
		{
			chartFactory.chartSupport.mapScatterRender(chart);
		},
		asyncUpdate: true,
		update: function(chart, results)
		{
			chartFactory.chartSupport.mapScatterUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.mapScatterResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.mapScatterDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.mapScatterOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.mapScatterOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin31.chartRenderer = plugin31.renderer;
chartPluginManager.plugins["org.datagear.chart.map.scatter"] = plugin31;
var plugin32=
{"id":"org.datagear.chart.map.graph","nameLabel":{"value":"地图关系图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"源ID"},"descLabel":{"value":"可选标记，源节点ID"},"name":"sourceId","required":false,"multiple":false},{"nameLabel":{"value":"源经度"},"descLabel":{"value":"源点经度"},"name":"sourceLongitude","required":true,"multiple":false},{"nameLabel":{"value":"源纬度"},"descLabel":{"value":"源点纬度"},"name":"sourceLatitude","required":true,"multiple":false},{"nameLabel":{"value":"源名称"},"descLabel":{"value":"源节点名称"},"name":"sourceName","required":true,"multiple":false},{"nameLabel":{"value":"源类别"},"descLabel":{"value":"可选标记，源节点类别，不同类别的数据将被绘制为不同的颜色"},"name":"sourceCategory","required":false,"multiple":false},{"nameLabel":{"value":"源数值"},"descLabel":{"value":"可选标记，源节点数值，数值越大节点绘制尺寸越大"},"name":"sourceValue","required":false,"multiple":false},{"nameLabel":{"value":"目标ID"},"descLabel":{"value":"可选标记，目标节点ID"},"name":"targetId","required":false,"multiple":false},{"nameLabel":{"value":"目标经度"},"descLabel":{"value":"目标点经度"},"name":"targetLongitude","required":true,"multiple":false},{"nameLabel":{"value":"目标纬度"},"descLabel":{"value":"目标点纬度"},"name":"targetLatitude","required":true,"multiple":false},{"nameLabel":{"value":"目标名称"},"descLabel":{"value":"目标节点名称"},"name":"targetName","required":true,"multiple":false},{"nameLabel":{"value":"目标类别"},"descLabel":{"value":"可选标记，目标节点类别，不同类别的数据将被绘制为不同的颜色"},"name":"targetCategory","required":false,"multiple":false},{"nameLabel":{"value":"目标数值"},"descLabel":{"value":"可选标记，目标节点数值，数值越大节点绘制尺寸越大"},"name":"targetValue","required":false,"multiple":false},{"nameLabel":{"value":"地图名"},"descLabel":{"value":"可选标记，图表使用的地图名，用于支持地图随数据刷新的情况，第一个不为空的列值将用作地图名"},"name":"map","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":810,"categories":[{"nameLabel":{"value":"地图"},"name":"map","order":800},{"nameLabel":{"value":"关系图"},"name":"graph","order":1400}],"categoryOrders":[810,1430]};
plugin32.renderer=

	{
		asyncRender: true,
		render: function(chart)
		{
			chartFactory.chartSupport.mapGraphRender(chart);
		},
		asyncUpdate: true,
		update: function(chart, results)
		{
			chartFactory.chartSupport.mapGraphUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.mapGraphResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.mapGraphDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.mapGraphOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.mapGraphOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin32.chartRenderer = plugin32.renderer;
chartPluginManager.plugins["org.datagear.chart.map.graph"] = plugin32;
var plugin33=
{"id":"org.datagear.chart.map.scatter.ripple","nameLabel":{"value":"涟漪地图散点图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"经度"},"descLabel":{"value":"经度值"},"name":"longitude","required":true,"multiple":false},{"nameLabel":{"value":"纬度"},"descLabel":{"value":"纬度值"},"name":"latitude","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"可选标记，指标数值，数值越大散点尺寸越大"},"name":"value","required":false,"multiple":false},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列"},"name":"category","required":false,"multiple":false},{"nameLabel":{"value":"地图名"},"descLabel":{"value":"可选标记，图表使用的地图名，用于支持地图随数据刷新的情况，第一个不为空的列值将用作地图名"},"name":"map","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":815,"categories":[{"nameLabel":{"value":"地图"},"name":"map","order":800},{"nameLabel":{"value":"散点图"},"name":"scatter","order":500}],"categoryOrders":[815,540]};
plugin33.renderer=

	{
		asyncRender: true,
		render: function(chart)
		{
			chartFactory.chartSupport.mapScatterRippleRender(chart);
		},
		asyncUpdate: true,
		update: function(chart, results)
		{
			chartFactory.chartSupport.mapScatterRippleUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.mapScatterRippleResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.mapScatterRippleDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.mapScatterRippleOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.mapScatterRippleOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin33.chartRenderer = plugin33.renderer;
chartPluginManager.plugins["org.datagear.chart.map.scatter.ripple"] = plugin33;
var plugin34=
{"id":"org.datagear.chart.map.lines","nameLabel":{"value":"地图路径图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"可选标记，路径线名，相同名称的数据组成一条路径线，如果不标记，则整个数据集组成一条路径线"},"name":"name","required":false,"multiple":false},{"nameLabel":{"value":"经度"},"descLabel":{"value":"经度数值"},"name":"longitude","required":true,"multiple":false},{"nameLabel":{"value":"纬度"},"descLabel":{"value":"纬度值"},"name":"latitude","required":true,"multiple":false},{"nameLabel":{"value":"地图名"},"descLabel":{"value":"可选标记，图表使用的地图名，用于支持地图随数据刷新的情况，第一个不为空的列值将用作地图名"},"name":"map","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":820,"categories":[{"nameLabel":{"value":"地图"},"name":"map","order":800}],"categoryOrders":[]};
plugin34.renderer=

	{
		asyncRender: true,
		render: function(chart)
		{
			chartFactory.chartSupport.mapLinesRender(chart);
		},
		asyncUpdate: true,
		update: function(chart, results)
		{
			chartFactory.chartSupport.mapLinesUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.mapLinesResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.mapLinesDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.mapLinesOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.mapLinesOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin34.chartRenderer = plugin34.renderer;
chartPluginManager.plugins["org.datagear.chart.map.lines"] = plugin34;
var plugin35=
{"id":"org.datagear.chart.map.flyline","nameLabel":{"value":"地图飞线图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"可选标记，指标名"},"name":"name","required":false,"multiple":false},{"nameLabel":{"value":"源点经度"},"descLabel":{"value":"源点经度"},"name":"sourceLongitude","required":true,"multiple":false},{"nameLabel":{"value":"源点纬度"},"descLabel":{"value":"源点纬度"},"name":"sourceLatitude","required":true,"multiple":false},{"nameLabel":{"value":"终点经度"},"descLabel":{"value":"终点经度"},"name":"targetLongitude","required":true,"multiple":false},{"nameLabel":{"value":"终点纬度"},"descLabel":{"value":"终点纬度"},"name":"targetLatitude","required":true,"multiple":false},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列"},"name":"category","required":false,"multiple":false},{"nameLabel":{"value":"地图名"},"descLabel":{"value":"可选标记，图表使用的地图名，用于支持地图随数据刷新的情况，第一个不为空的列值将用作地图名"},"name":"map","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":850,"categories":[{"nameLabel":{"value":"地图"},"name":"map","order":800}],"categoryOrders":[]};
plugin35.renderer=

	{
		asyncRender: true,
		render: function(chart)
		{
			chartFactory.chartSupport.mapFlylineRender(chart);
		},
		asyncUpdate: true,
		update: function(chart, results)
		{
			chartFactory.chartSupport.mapFlylineUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.mapFlylineResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.mapFlylineDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.mapFlylineOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.mapFlylineOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin35.chartRenderer = plugin35.renderer;
chartPluginManager.plugins["org.datagear.chart.map.flyline"] = plugin35;
var plugin36=
{"id":"org.datagear.chart.map.heatmap","nameLabel":{"value":"地图热力图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"经度"},"descLabel":{"value":"经度值"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"纬度"},"descLabel":{"value":"纬度值"},"name":"value","required":true,"multiple":false},{"nameLabel":{"value":"热力值"},"descLabel":{"value":"热力值"},"name":"weight","required":true,"multiple":false},{"nameLabel":{"value":"地图名"},"descLabel":{"value":"可选标记，图表使用的地图名，用于支持地图随数据刷新的情况，第一个不为空的列值将用作地图名"},"name":"map","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":865,"categories":[{"nameLabel":{"value":"地图"},"name":"map","order":800},{"nameLabel":{"value":"热力图"},"name":"heatmap","order":1000}],"categoryOrders":[865,1015]};
plugin36.renderer=

	{
		asyncRender: true,
		render: function(chart)
		{
			chartFactory.chartSupport.mapHeatmapRender(chart);
		},
		asyncUpdate: true,
		update: function(chart, results)
		{
			chartFactory.chartSupport.mapHeatmapUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.mapHeatmapResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.mapHeatmapDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.mapHeatmapOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.mapHeatmapOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin36.chartRenderer = plugin36.renderer;
chartPluginManager.plugins["org.datagear.chart.map.heatmap"] = plugin36;
var plugin37=
{"id":"org.datagear.chart.candlestick","nameLabel":{"value":"基本K线图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"开盘值"},"descLabel":{"value":"开盘值"},"name":"open","required":true,"multiple":false},{"nameLabel":{"value":"收盘值"},"descLabel":{"value":"收盘值"},"name":"close","required":true,"multiple":false},{"nameLabel":{"value":"最低值"},"descLabel":{"value":"最低值"},"name":"min","required":true,"multiple":false},{"nameLabel":{"value":"最高值"},"descLabel":{"value":"最高值"},"name":"max","required":true,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":900,"categories":[{"nameLabel":{"value":"K线图"},"name":"candlestick","order":900}],"categoryOrders":[]};
plugin37.renderer=

	{
		render: function(chart)
		{
			chartFactory.chartSupport.candlestickRender(chart);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.candlestickUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.candlestickResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.candlestickDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.candlestickOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.candlestickOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin37.chartRenderer = plugin37.renderer;
chartPluginManager.plugins["org.datagear.chart.candlestick"] = plugin37;
var plugin38=
{"id":"org.datagear.chart.heatmap","nameLabel":{"value":"基本热力图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"横坐标"},"descLabel":{"value":"横坐标"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"纵坐标"},"descLabel":{"value":"纵坐标"},"name":"value","required":true,"multiple":false},{"nameLabel":{"value":"热力值"},"descLabel":{"value":"热力值"},"name":"weight","required":true,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":1000,"categories":[{"nameLabel":{"value":"热力图"},"name":"heatmap","order":1000}],"categoryOrders":[]};
plugin38.renderer=

	{
		render: function(chart)
		{
			chartFactory.chartSupport.heatmapRender(chart);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.heatmapUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.heatmapResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.heatmapDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.heatmapOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.heatmapOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin38.chartRenderer = plugin38.renderer;
chartPluginManager.plugins["org.datagear.chart.heatmap"] = plugin38;
var plugin39=
{"id":"org.datagear.chart.tree","nameLabel":{"value":"基本树图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"ID"},"descLabel":{"value":"可选标记，节点ID"},"name":"id","required":false,"multiple":false},{"nameLabel":{"value":"名称"},"descLabel":{"value":"节点名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"父节点"},"descLabel":{"value":"父节点标识，如果标记了ID列，则其值应是ID列值，否则，应是名称列值"},"name":"parent","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"可选标记，节点值"},"name":"value","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":1100,"categories":[{"nameLabel":{"value":"树图"},"name":"tree","order":1100}],"categoryOrders":[]};
plugin39.renderer=

	{
		render: function(chart)
		{
			chartFactory.chartSupport.treeRender(chart);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.treeUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.treeResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.treeDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.treeOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.treeOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin39.chartRenderer = plugin39.renderer;
chartPluginManager.plugins["org.datagear.chart.tree"] = plugin39;
var plugin40=
{"id":"org.datagear.chart.tree.tb","nameLabel":{"value":"自上向下树图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"ID"},"descLabel":{"value":"可选标记，节点ID"},"name":"id","required":false,"multiple":false},{"nameLabel":{"value":"名称"},"descLabel":{"value":"节点名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"父节点"},"descLabel":{"value":"父节点标识，如果标记了ID列，则其值应是ID列值，否则，应是名称列值"},"name":"parent","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"可选标记，节点值"},"name":"value","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":1105,"categories":[{"nameLabel":{"value":"树图"},"name":"tree","order":1100}],"categoryOrders":[]};
plugin40.renderer=

	{
		render: function(chart)
		{
			var options = {dg: {orient: "TB"}};
			chartFactory.chartSupport.treeRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.treeUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.treeResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.treeDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.treeOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.treeOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin40.chartRenderer = plugin40.renderer;
chartPluginManager.plugins["org.datagear.chart.tree.tb"] = plugin40;
var plugin41=
{"id":"org.datagear.chart.tree.rl","nameLabel":{"value":"自右向左树图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"ID"},"descLabel":{"value":"可选标记，节点ID"},"name":"id","required":false,"multiple":false},{"nameLabel":{"value":"名称"},"descLabel":{"value":"节点名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"父节点"},"descLabel":{"value":"父节点标识，如果标记了ID列，则其值应是ID列值，否则，应是名称列值"},"name":"parent","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"可选标记，节点值"},"name":"value","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":1110,"categories":[{"nameLabel":{"value":"树图"},"name":"tree","order":1100}],"categoryOrders":[]};
plugin41.renderer=

	{
		render: function(chart)
		{
			var options = {dg: {orient: "RL"}};
			chartFactory.chartSupport.treeRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.treeUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.treeResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.treeDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.treeOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.treeOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin41.chartRenderer = plugin41.renderer;
chartPluginManager.plugins["org.datagear.chart.tree.rl"] = plugin41;
var plugin42=
{"id":"org.datagear.chart.tree.bt","nameLabel":{"value":"自下向上树图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"ID"},"descLabel":{"value":"可选标记，节点ID"},"name":"id","required":false,"multiple":false},{"nameLabel":{"value":"名称"},"descLabel":{"value":"节点名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"父节点"},"descLabel":{"value":"父节点标识，如果标记了ID列，则其值应是ID列值，否则，应是名称列值"},"name":"parent","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"可选标记，节点值"},"name":"value","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":1120,"categories":[{"nameLabel":{"value":"树图"},"name":"tree","order":1100}],"categoryOrders":[]};
plugin42.renderer=

	{
		render: function(chart)
		{
			var options = {dg: {orient: "BT"}};
			chartFactory.chartSupport.treeRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.treeUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.treeResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.treeDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.treeOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.treeOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin42.chartRenderer = plugin42.renderer;
chartPluginManager.plugins["org.datagear.chart.tree.bt"] = plugin42;
var plugin43=
{"id":"org.datagear.chart.tree.rectangle","nameLabel":{"value":"矩形树图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"ID"},"descLabel":{"value":"可选标记，节点ID"},"name":"id","required":false,"multiple":false},{"nameLabel":{"value":"名称"},"descLabel":{"value":"节点名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"父节点"},"descLabel":{"value":"父节点标识，如果标记了ID列，则其值应是ID列值，否则，应是名称列值"},"name":"parent","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"节点值，叶子节点的数值不应该为空"},"name":"value","required":true,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":1125,"categories":[{"nameLabel":{"value":"树图"},"name":"tree","order":1100}],"categoryOrders":[]};
plugin43.renderer=

	{
		render: function(chart)
		{
			chartFactory.chartSupport.treemapRender(chart);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.treemapUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.treemapResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.treemapDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.treemapOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.treemapOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin43.chartRenderer = plugin43.renderer;
chartPluginManager.plugins["org.datagear.chart.tree.rectangle"] = plugin43;
var plugin44=
{"id":"org.datagear.chart.sunburst","nameLabel":{"value":"基本旭日图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"ID"},"descLabel":{"value":"可选标记，节点ID"},"name":"id","required":false,"multiple":false},{"nameLabel":{"value":"名称"},"descLabel":{"value":"节点名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"父节点"},"descLabel":{"value":"父节点标识，如果标记了ID列，则其值应是ID列值，否则，应是名称列值"},"name":"parent","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"节点值，叶子节点的数值不应该为空"},"name":"value","required":true,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":1200,"categories":[{"nameLabel":{"value":"旭日图"},"name":"sunburst","order":1200}],"categoryOrders":[]};
plugin44.renderer=

	{
		render: function(chart)
		{
			chartFactory.chartSupport.sunburstRender(chart);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.sunburstUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.sunburstResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.sunburstDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.sunburstOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.sunburstOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin44.chartRenderer = plugin44.renderer;
chartPluginManager.plugins["org.datagear.chart.sunburst"] = plugin44;
var plugin45=
{"id":"org.datagear.chart.sankey","nameLabel":{"value":"基本桑基图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"源名称"},"descLabel":{"value":"源节点名称"},"name":"sourceName","required":true,"multiple":false},{"nameLabel":{"value":"源数值"},"descLabel":{"value":"可选标记，源节点数值，数值越大节点宽越度"},"name":"sourceValue","required":false,"multiple":false},{"nameLabel":{"value":"目标名称"},"descLabel":{"value":"目标节点名称"},"name":"targetName","required":true,"multiple":false},{"nameLabel":{"value":"目标数值"},"descLabel":{"value":"可选标记，目节点数值，数值越大节点越宽"},"name":"targetValue","required":false,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"源节点和目标节点的连接权重数值，数值越大连线越度"},"name":"value","required":true,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":1300,"categories":[{"nameLabel":{"value":"桑基图"},"name":"sankey","order":1300}],"categoryOrders":[]};
plugin45.renderer=

	{
		render: function(chart)
		{
			chartFactory.chartSupport.sankeyRender(chart);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.sankeyUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.sankeyResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.sankeyDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.sankeyOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.sankeyOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin45.chartRenderer = plugin45.renderer;
chartPluginManager.plugins["org.datagear.chart.sankey"] = plugin45;
var plugin46=
{"id":"org.datagear.chart.sankey.vertical","nameLabel":{"value":"纵向桑基图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"源名称"},"descLabel":{"value":"源节点名称"},"name":"sourceName","required":true,"multiple":false},{"nameLabel":{"value":"源数值"},"descLabel":{"value":"可选标记，源节点数值，数值越大节点宽越度"},"name":"sourceValue","required":false,"multiple":false},{"nameLabel":{"value":"目标名称"},"descLabel":{"value":"目标节点名称"},"name":"targetName","required":true,"multiple":false},{"nameLabel":{"value":"目标数值"},"descLabel":{"value":"可选标记，目节点数值，数值越大节点越宽"},"name":"targetValue","required":false,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"源节点和目标节点的连接权重数值，数值越大连线越度"},"name":"value","required":true,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":1305,"categories":[{"nameLabel":{"value":"桑基图"},"name":"sankey","order":1300}],"categoryOrders":[]};
plugin46.renderer=

	{
		render: function(chart)
		{
			var options = {dg: {orient: "vertical"}};
			chartFactory.chartSupport.sankeyRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.sankeyUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.sankeyResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.sankeyDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.sankeyOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.sankeyOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin46.chartRenderer = plugin46.renderer;
chartPluginManager.plugins["org.datagear.chart.sankey.vertical"] = plugin46;
var plugin47=
{"id":"org.datagear.chart.graph","nameLabel":{"value":"基本关系图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"源ID"},"descLabel":{"value":"可选标记，源节点ID"},"name":"sourceId","required":false,"multiple":false},{"nameLabel":{"value":"源名称"},"descLabel":{"value":"源节点名称"},"name":"sourceName","required":true,"multiple":false},{"nameLabel":{"value":"源类别"},"descLabel":{"value":"可选标记，源节点类别，不同类别的数据将被绘制为不同的颜色"},"name":"sourceCategory","required":false,"multiple":false},{"nameLabel":{"value":"源数值"},"descLabel":{"value":"可选标记，源节点数值，数值越大节点绘制尺寸越大"},"name":"sourceValue","required":false,"multiple":false},{"nameLabel":{"value":"目标ID"},"descLabel":{"value":"可选标记，目标节点ID"},"name":"targetId","required":false,"multiple":false},{"nameLabel":{"value":"目标名称"},"descLabel":{"value":"目标节点名称"},"name":"targetName","required":true,"multiple":false},{"nameLabel":{"value":"目标类别"},"descLabel":{"value":"可选标记，目标节点类别，不同类别的数据将被绘制为不同的颜色"},"name":"targetCategory","required":false,"multiple":false},{"nameLabel":{"value":"目标数值"},"descLabel":{"value":"可选标记，目标节点数值，数值越大节点绘制尺寸越大"},"name":"targetValue","required":false,"multiple":false},{"nameLabel":{"value":"关系数值"},"descLabel":{"value":"可选标记，源节点和目标节点的连接权重数值，数值越大连线越长"},"name":"value","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":1400,"categories":[{"nameLabel":{"value":"关系图"},"name":"graph","order":1400}],"categoryOrders":[]};
plugin47.renderer=

	{
		render: function(chart)
		{
			chartFactory.chartSupport.graphRender(chart);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.graphUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.graphResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.graphDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.graphOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.graphOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin47.chartRenderer = plugin47.renderer;
chartPluginManager.plugins["org.datagear.chart.graph"] = plugin47;
var plugin48=
{"id":"org.datagear.chart.graph.circular","nameLabel":{"value":"环形关系图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"源ID"},"descLabel":{"value":"可选标记，源节点ID"},"name":"sourceId","required":false,"multiple":false},{"nameLabel":{"value":"源名称"},"descLabel":{"value":"源节点名称"},"name":"sourceName","required":true,"multiple":false},{"nameLabel":{"value":"源类别"},"descLabel":{"value":"可选标记，源节点类别，不同类别的数据将被绘制为不同的颜色"},"name":"sourceCategory","required":false,"multiple":false},{"nameLabel":{"value":"源数值"},"descLabel":{"value":"可选标记，源节点数值，数值越大节点绘制尺寸越大"},"name":"sourceValue","required":false,"multiple":false},{"nameLabel":{"value":"目标ID"},"descLabel":{"value":"可选标记，目标节点ID"},"name":"targetId","required":false,"multiple":false},{"nameLabel":{"value":"目标名称"},"descLabel":{"value":"目标节点名称"},"name":"targetName","required":true,"multiple":false},{"nameLabel":{"value":"目标类别"},"descLabel":{"value":"可选标记，目标节点类别，不同类别的数据将被绘制为不同的颜色"},"name":"targetCategory","required":false,"multiple":false},{"nameLabel":{"value":"目标数值"},"descLabel":{"value":"可选标记，目标节点数值，数值越大节点绘制尺寸越大"},"name":"targetValue","required":false,"multiple":false},{"nameLabel":{"value":"关系数值"},"descLabel":{"value":"可选标记，源节点和目标节点的连接权重数值，数值越大连线越长"},"name":"value","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":1405,"categories":[{"nameLabel":{"value":"关系图"},"name":"graph","order":1400}],"categoryOrders":[]};
plugin48.renderer=

	{
		render: function(chart)
		{
			var options = {dg: {layout: "circular"}};
			chartFactory.chartSupport.graphRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.graphUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.graphResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.graphDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.graphOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.graphOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin48.chartRenderer = plugin48.renderer;
chartPluginManager.plugins["org.datagear.chart.graph.circular"] = plugin48;
var plugin49=
{"id":"org.datagear.chart.boxplot","nameLabel":{"value":"基本箱形图"},"descLabel":{"value":"箱形图通常由两个或以上数据集组成：箱形数据集、异常值数据集（可选）。<br>箱形数据集应设置如下数据标记：名称、最小值、下四分位数-Q1、中位数-Q2、上四分位数-Q3、最大值、类别（可选）。<br>异常值数据集应设置如下数据标记：名称、数值、类别（可选）。"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名，可用箱形数据集、异常值数据集"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"最小值"},"descLabel":{"value":"最小数值，应标记于箱形数据集"},"name":"min","required":false,"multiple":false},{"nameLabel":{"value":"下四分位数-Q1"},"descLabel":{"value":"下四分位数值（Q1），应标记于箱形数据集"},"name":"lower","required":false,"multiple":false},{"nameLabel":{"value":"中位数-Q2"},"descLabel":{"value":"中位数值（Q2），应标记于箱形数据集"},"name":"median","required":false,"multiple":false},{"nameLabel":{"value":"上四分位数-Q3"},"descLabel":{"value":"上四分位数值（Q3），应标记于箱形数据集"},"name":"upper","required":false,"multiple":false},{"nameLabel":{"value":"最大值"},"descLabel":{"value":"最大数值，应标记于箱形数据集"},"name":"max","required":false,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"异常值，应和【名称】一起标记于异常值数据集，可标记多列，每一列都绘制为一个图表系列"},"name":"value","required":false,"multiple":true},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列，如果标记，【数值】仅支持标记单列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":1500,"categories":[{"nameLabel":{"value":"箱形图"},"name":"boxplot","order":1500}],"categoryOrders":[]};
plugin49.renderer=

	{
		render: function(chart)
		{
			chartFactory.chartSupport.boxplotRender(chart);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.boxplotUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.boxplotResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.boxplotDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.boxplotOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.boxplotOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin49.chartRenderer = plugin49.renderer;
chartPluginManager.plugins["org.datagear.chart.boxplot"] = plugin49;
var plugin50=
{"id":"org.datagear.chart.boxplot.horizontal","nameLabel":{"value":"横向箱形图"},"descLabel":{"value":"箱形图通常由两个或以上数据集组成：箱形数据集、异常值数据集（可选）。<br>箱形数据集应设置如下数据标记：名称、最小值、下四分位数-Q1、中位数-Q2、上四分位数-Q3、最大值、类别（可选）。<br>异常值数据集应设置如下数据标记：名称、数值、类别（可选）。"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名，可用箱形数据集、异常值数据集"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"最小值"},"descLabel":{"value":"最小数值，应标记于箱形数据集"},"name":"min","required":false,"multiple":false},{"nameLabel":{"value":"下四分位数-Q1"},"descLabel":{"value":"下四分位数值（Q1），应标记于箱形数据集"},"name":"lower","required":false,"multiple":false},{"nameLabel":{"value":"中位数-Q2"},"descLabel":{"value":"中位数值（Q2），应标记于箱形数据集"},"name":"median","required":false,"multiple":false},{"nameLabel":{"value":"上四分位数-Q3"},"descLabel":{"value":"上四分位数值（Q3），应标记于箱形数据集"},"name":"upper","required":false,"multiple":false},{"nameLabel":{"value":"最大值"},"descLabel":{"value":"最大数值，应标记于箱形数据集"},"name":"max","required":false,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"异常值，应和【名称】一起标记于异常值数据集，可标记多列，每一列都绘制为一个图表系列"},"name":"value","required":false,"multiple":true},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列，如果标记，【数值】仅支持标记单列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":1505,"categories":[{"nameLabel":{"value":"箱形图"},"name":"boxplot","order":1500}],"categoryOrders":[]};
plugin50.renderer=

	{
		render: function(chart)
		{
			var options = {dg:{horizontal:true}};
			chartFactory.chartSupport.boxplotRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.boxplotUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.boxplotResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.boxplotDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.boxplotOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.boxplotOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin50.chartRenderer = plugin50.renderer;
chartPluginManager.plugins["org.datagear.chart.boxplot.horizontal"] = plugin50;
var plugin51=
{"id":"org.datagear.chart.parallel","nameLabel":{"value":"基本平行坐标系图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"可选标记，指标名"},"name":"name","required":false,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每一列都绘制为一条坐标轴，相同别名的数值列将绘制于同一坐标轴（跨数据集）"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":1600,"categories":[{"nameLabel":{"value":"平行坐标系图"},"name":"Parallel","order":1600}],"categoryOrders":[]};
plugin51.renderer=

	{
		render: function(chart)
		{
			chartFactory.chartSupport.parallelRender(chart);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.parallelUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.parallelResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.parallelDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.parallelOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.parallelOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin51.chartRenderer = plugin51.renderer;
chartPluginManager.plugins["org.datagear.chart.parallel"] = plugin51;
var plugin52=
{"id":"org.datagear.chart.parallel.vertical","nameLabel":{"value":"竖向平行坐标系图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"可选标记，指标名"},"name":"name","required":false,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每一列都绘制为一条坐标轴，相同别名的数值列将绘制于同一坐标轴（跨数据集）"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":1605,"categories":[{"nameLabel":{"value":"平行坐标系图"},"name":"Parallel","order":1600}],"categoryOrders":[]};
plugin52.renderer=

	{
		render: function(chart)
		{
			var options = {parallel: {layout: "vertical"}};
			chartFactory.chartSupport.parallelRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.parallelUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.parallelResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.parallelDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.parallelOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.parallelOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin52.chartRenderer = plugin52.renderer;
chartPluginManager.plugins["org.datagear.chart.parallel.vertical"] = plugin52;
var plugin53=
{"id":"org.datagear.chart.parallel.smooth","nameLabel":{"value":"平滑平行坐标系图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"可选标记，指标名"},"name":"name","required":false,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每一列都绘制为一条坐标轴，相同别名的数值列将绘制于同一坐标轴（跨数据集）"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":1610,"categories":[{"nameLabel":{"value":"平行坐标系图"},"name":"Parallel","order":1600}],"categoryOrders":[]};
plugin53.renderer=

	{
		render: function(chart)
		{
			var options = {dg: {smooth: true}};
			chartFactory.chartSupport.parallelRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.parallelUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.parallelResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.parallelDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.parallelOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.parallelOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin53.chartRenderer = plugin53.renderer;
chartPluginManager.plugins["org.datagear.chart.parallel.smooth"] = plugin53;
var plugin54=
{"id":"org.datagear.chart.parallel.vertical.smooth","nameLabel":{"value":"平滑竖向平行坐标系图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"可选标记，指标名"},"name":"name","required":false,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每一列都绘制为一条坐标轴，相同别名的数值列将绘制于同一坐标轴（跨数据集）"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":1615,"categories":[{"nameLabel":{"value":"平行坐标系图"},"name":"Parallel","order":1600}],"categoryOrders":[]};
plugin54.renderer=

	{
		render: function(chart)
		{
			var options = {dg: {smooth: true}, parallel: {layout: "vertical"}};
			chartFactory.chartSupport.parallelRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.parallelUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.parallelResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.parallelDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.parallelOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.parallelOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin54.chartRenderer = plugin54.renderer;
chartPluginManager.plugins["org.datagear.chart.parallel.vertical.smooth"] = plugin54;
var plugin55=
{"id":"org.datagear.chart.themeRiver","nameLabel":{"value":"基本主题河流图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每一列都绘制为一条河流"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选，数据类别，不同类别的数据将被绘制为不同的系列，如果标记，【数值】仅支持标记单列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":1700,"categories":[{"nameLabel":{"value":"主题河流图"},"name":"themeRiver","order":1700}],"categoryOrders":[]};
plugin55.renderer=

	{
		render: function(chart)
		{
			chartFactory.chartSupport.themeRiverRender(chart);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.themeRiverUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.themeRiverResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.themeRiverDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.themeRiverOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.themeRiverOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin55.chartRenderer = plugin55.renderer;
chartPluginManager.plugins["org.datagear.chart.themeRiver"] = plugin55;
var plugin56=
{"id":"org.datagear.chart.pictorialBar","nameLabel":{"value":"基本象形柱图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每一列都绘制为一个图表系列"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列，如果标记，【数值】仅支持标记单列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":1800,"categories":[{"nameLabel":{"value":"象形柱图"},"name":"pictorialBar","order":1800}],"categoryOrders":[]};
plugin56.renderer=

	{
		render: function(chart)
		{
			chartFactory.chartSupport.pictorialBarRender(chart);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.pictorialBarUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.pictorialBarResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.pictorialBarDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.pictorialBarOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.pictorialBarOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin56.chartRenderer = plugin56.renderer;
chartPluginManager.plugins["org.datagear.chart.pictorialBar"] = plugin56;
var plugin57=
{"id":"org.datagear.chart.pictorialBar.h","nameLabel":{"value":"横向象形柱图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每一列都绘制为一个图表系列"},"name":"value","required":true,"multiple":true},{"nameLabel":{"value":"类别"},"descLabel":{"value":"可选标记，数据类别，不同类别的数据将被绘制为不同的系列，如果标记，【数值】仅支持标记单列"},"name":"category","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":1850,"categories":[{"nameLabel":{"value":"象形柱图"},"name":"pictorialBar","order":1800}],"categoryOrders":[]};
plugin57.renderer=

	{
		render: function(chart)
		{
			var options = {dg: {horizontal: true}};
			chartFactory.chartSupport.pictorialBarRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.pictorialBarUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.pictorialBarResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.pictorialBarDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.pictorialBarOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.pictorialBarOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin57.chartRenderer = plugin57.renderer;
chartPluginManager.plugins["org.datagear.chart.pictorialBar.h"] = plugin57;
var plugin58=
{"id":"org.datagear.chart.pictorialBar.progess","nameLabel":{"value":"基本象形进度图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值"},"name":"value","required":true,"multiple":false},{"nameLabel":{"value":"最大值"},"descLabel":{"value":"可选标记，最大值，如果标记，第一个不为空的列值，默认值为：100"},"name":"max","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":1875,"categories":[{"nameLabel":{"value":"象形柱图"},"name":"pictorialBar","order":1800}],"categoryOrders":[]};
plugin58.renderer=

	{
		render: function(chart)
		{
			chartFactory.chartSupport.pictorialBarProgressRender(chart);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.pictorialBarProgressUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.pictorialBarProgressResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.pictorialBarProgressDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.pictorialBarProgressOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.pictorialBarProgressOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin58.chartRenderer = plugin58.renderer;
chartPluginManager.plugins["org.datagear.chart.pictorialBar.progess"] = plugin58;
var plugin59=
{"id":"org.datagear.chart.pictorialBar.progess.h","nameLabel":{"value":"横向象形进度图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值"},"name":"value","required":true,"multiple":false},{"nameLabel":{"value":"最大值"},"descLabel":{"value":"可选标记，最大值，如果标记，第一个不为空的列值，默认值为：100"},"name":"max","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":1880,"categories":[{"nameLabel":{"value":"象形柱图"},"name":"pictorialBar","order":1800}],"categoryOrders":[]};
plugin59.renderer=

	{
		render: function(chart)
		{
			var options = {dg: {horizontal: true}};
			chartFactory.chartSupport.pictorialBarProgressRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.pictorialBarProgressUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.pictorialBarProgressResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.pictorialBarProgressDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.pictorialBarProgressOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.pictorialBarProgressOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin59.chartRenderer = plugin59.renderer;
chartPluginManager.plugins["org.datagear.chart.pictorialBar.progess.h"] = plugin59;
var plugin60=
{"id":"org.datagear.chart.pictorialBar.progess.star","nameLabel":{"value":"星型进度图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值"},"name":"value","required":true,"multiple":false},{"nameLabel":{"value":"最大值"},"descLabel":{"value":"可选标记，最大值，如果标记，第一个不为空的列值，默认值为：100"},"name":"max","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":1885,"categories":[{"nameLabel":{"value":"象形柱图"},"name":"pictorialBar","order":1800}],"categoryOrders":[]};
plugin60.renderer=

	{
		render: function(chart)
		{
			var options =
			{
				dg:
				{
					symbol: "star", symbolSize: "50%",
					symbolMargin: "10%", symbolRepeat: true, symbolRepeatForBg: "fixed"
				}
			};
			
			chartFactory.chartSupport.pictorialBarProgressRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.pictorialBarProgressUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.pictorialBarProgressResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.pictorialBarProgressDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.pictorialBarProgressOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.pictorialBarProgressOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin60.chartRenderer = plugin60.renderer;
chartPluginManager.plugins["org.datagear.chart.pictorialBar.progess.star"] = plugin60;
var plugin61=
{"id":"org.datagear.chart.pictorialBar.progess.h.star","nameLabel":{"value":"横向星型进度图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值"},"name":"value","required":true,"multiple":false},{"nameLabel":{"value":"最大值"},"descLabel":{"value":"可选标记，最大值，如果标记，第一个不为空的列值，默认值为：100"},"name":"max","required":false,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":1890,"categories":[{"nameLabel":{"value":"象形柱图"},"name":"pictorialBar","order":1800}],"categoryOrders":[]};
plugin61.renderer=

	{
		render: function(chart)
		{
			var options =
			{
				dg:
				{
					horizontal: true, symbol: "star", symbolSize: "50%",
					symbolMargin: "10%", symbolRepeat: true, symbolRepeatForBg: "fixed"
				}
			};
			
			chartFactory.chartSupport.pictorialBarProgressRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.pictorialBarProgressUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.pictorialBarProgressResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.pictorialBarProgressDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.pictorialBarProgressOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.pictorialBarProgressOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin61.chartRenderer = plugin61.renderer;
chartPluginManager.plugins["org.datagear.chart.pictorialBar.progess.h.star"] = plugin61;
var plugin62=
{"id":"org.datagear.chart.wordcloud","nameLabel":{"value":"基本词云图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"指标名"},"name":"name","required":true,"multiple":false},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，数值越大节点颜色越深"},"name":"value","required":true,"multiple":false}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":4000,"categories":[{"nameLabel":{"value":"词云图"},"name":"wordcloud","order":4000}],"categoryOrders":[]};
plugin62.renderer=

	{
		render: function(chart)
		{
			chartFactory.chartSupport.wordcloudRender(chart);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.wordcloudUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.wordcloudResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.wordcloudDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.wordcloudOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.wordcloudOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin62.chartRenderer = plugin62.renderer;
chartPluginManager.plugins["org.datagear.chart.wordcloud"] = plugin62;
var plugin63=
{"id":"org.datagear.chart.liquidfill","nameLabel":{"value":"基本水球图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"可选标记，指标名，可标记多列，且应与【数值】列一一对应"},"name":"name","required":false,"multiple":true},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每个单元格值都绘制为一条水波"},"name":"value","required":true,"multiple":true}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":4100,"categories":[{"nameLabel":{"value":"水球图"},"name":"liquidfill","order":4100}],"categoryOrders":[]};
plugin63.renderer=

	{
		render: function(chart)
		{
			chartFactory.chartSupport.liquidfillRender(chart);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.liquidfillUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.liquidfillResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.liquidfillDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.liquidfillOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.liquidfillOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin63.chartRenderer = plugin63.renderer;
chartPluginManager.plugins["org.datagear.chart.liquidfill"] = plugin63;
var plugin64=
{"id":"org.datagear.chart.liquidfill.rect","nameLabel":{"value":"方形水球图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"可选标记，指标名，可标记多列，且应与【数值】列一一对应"},"name":"name","required":false,"multiple":true},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每个单元格值都绘制为一条水波"},"name":"value","required":true,"multiple":true}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":4105,"categories":[{"nameLabel":{"value":"水球图"},"name":"liquidfill","order":4100}],"categoryOrders":[]};
plugin64.renderer=

	{
		render: function(chart)
		{
			var options = {dg: {shape: "rect"}};
			chartFactory.chartSupport.liquidfillRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.liquidfillUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.liquidfillResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.liquidfillDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.liquidfillOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.liquidfillOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin64.chartRenderer = plugin64.renderer;
chartPluginManager.plugins["org.datagear.chart.liquidfill.rect"] = plugin64;
var plugin65=
{"id":"org.datagear.chart.liquidfill.diamond","nameLabel":{"value":"菱形水球图"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"名称"},"descLabel":{"value":"可选标记，指标名，可标记多列，且应与【数值】列一一对应"},"name":"name","required":false,"multiple":true},{"nameLabel":{"value":"数值"},"descLabel":{"value":"指标值，可标记多列，每个单元格值都绘制为一条水波"},"name":"value","required":true,"multiple":true}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":4110,"categories":[{"nameLabel":{"value":"水球图"},"name":"liquidfill","order":4100}],"categoryOrders":[]};
plugin65.renderer=

	{
		render: function(chart)
		{
			var options = {dg: {shape: "diamond"}};
			chartFactory.chartSupport.liquidfillRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.liquidfillUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.liquidfillResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.liquidfillDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.liquidfillOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.liquidfillOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin65.chartRenderer = plugin65.renderer;
chartPluginManager.plugins["org.datagear.chart.liquidfill.diamond"] = plugin65;
var plugin66=
{"id":"org.datagear.chart.table","nameLabel":{"value":"基本表格"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"表格列"},"descLabel":{"value":"可选标记，表格列，可标记多列，如果不标记，则所有列都绘制为表格"},"name":"column","required":false,"multiple":true}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":8000,"categories":[{"nameLabel":{"value":"表格"},"name":"table","order":8000}],"categoryOrders":[]};
plugin66.renderer=

	{
		render: function(chart)
		{
			chartFactory.chartSupport.tableRender(chart);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.tableUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.tableResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.tableDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.tableOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.tableOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin66.chartRenderer = plugin66.renderer;
chartPluginManager.plugins["org.datagear.chart.table"] = plugin66;
var plugin67=
{"id":"org.datagear.chart.label","nameLabel":{"value":"基本标签卡"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"标签名"},"descLabel":{"value":"可选标记，标签名"},"name":"name","required":false,"multiple":true},{"nameLabel":{"value":"标签值"},"descLabel":{"value":"标签值，可标记多列，每一列都绘制为一个标签值"},"name":"value","required":true,"multiple":true}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":9000,"categories":[{"nameLabel":{"value":"标签卡"},"name":"label","order":9000}],"categoryOrders":[]};
plugin67.renderer=

	{
		render: function(chart)
		{
			chartFactory.chartSupport.labelRender(chart);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.labelUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.labelResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.labelDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.labelOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.labelOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin67.chartRenderer = plugin67.renderer;
chartPluginManager.plugins["org.datagear.chart.label"] = plugin67;
var plugin68=
{"id":"org.datagear.chart.label.valueFirst","nameLabel":{"value":"值前置标签卡"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"标签名"},"descLabel":{"value":"可选标记，标签名"},"name":"name","required":false,"multiple":true},{"nameLabel":{"value":"标签值"},"descLabel":{"value":"标签值，可标记多列，每一列都绘制为一个标签值"},"name":"value","required":true,"multiple":true}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":9005,"categories":[{"nameLabel":{"value":"标签卡"},"name":"label","order":9000}],"categoryOrders":[]};
plugin68.renderer=

	{
		render: function(chart)
		{
			var options={ valueFirst: true };
			chartFactory.chartSupport.labelRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.labelUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.labelResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.labelDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.labelOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.labelOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin68.chartRenderer = plugin68.renderer;
chartPluginManager.plugins["org.datagear.chart.label.valueFirst"] = plugin68;
var plugin69=
{"id":"org.datagear.chart.label.hideName","nameLabel":{"value":"名称隐藏标签卡"},"resources":[{"name":"icon.png"},{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{"default":"icon.png"},"dataSigns":[{"nameLabel":{"value":"标签名"},"descLabel":{"value":"可选标记，标签名"},"name":"name","required":false,"multiple":true},{"nameLabel":{"value":"标签值"},"descLabel":{"value":"标签值，可标记多列，每一列都绘制为一个标签值"},"name":"value","required":true,"multiple":true}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":9010,"categories":[{"nameLabel":{"value":"标签卡"},"name":"label","order":9000}],"categoryOrders":[]};
plugin69.renderer=

	{
		render: function(chart)
		{
			var options={ hideName: true };
			chartFactory.chartSupport.labelRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.labelUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.labelResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.labelDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.labelOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.labelOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin69.chartRenderer = plugin69.renderer;
chartPluginManager.plugins["org.datagear.chart.label.hideName"] = plugin69;
var plugin70=
{"id":"org.datagear.chart.form.select","nameLabel":{"value":"单选下拉框"},"resources":[{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{},"dataSigns":[{"nameLabel":{"value":"选项名"},"descLabel":{"value":"可选标记，选项名，可标记多列，且应与【选项值】列一一对应"},"name":"name","required":false,"multiple":true},{"nameLabel":{"value":"选项值"},"descLabel":{"value":"选项值，可标记多列，每一列都绘制为一个下拉选项"},"name":"value","required":true,"multiple":true}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":9500,"categories":[{"nameLabel":{"value":"表单"},"name":"form","order":9500}],"categoryOrders":[]};
plugin70.renderer=

	{
		render: function(chart)
		{
			var options = {multiple: false};
			chartFactory.chartSupport.selectRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.selectUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.selectResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.selectDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.selectOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.selectOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin70.chartRenderer = plugin70.renderer;
chartPluginManager.plugins["org.datagear.chart.form.select"] = plugin70;
var plugin71=
{"id":"org.datagear.chart.form.select.multiple","nameLabel":{"value":"多选下拉框"},"resources":[{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{},"dataSigns":[{"nameLabel":{"value":"选项名"},"descLabel":{"value":"可选标记，选项名，可标记多列，且应与【选项值】列一一对应"},"name":"name","required":false,"multiple":true},{"nameLabel":{"value":"选项值"},"descLabel":{"value":"选项值，可标记多列，每一列都绘制为一个下拉选项"},"name":"value","required":true,"multiple":true}],"dataSetRange":{"main":{"min":1}},"version":"4.3.0","order":9505,"categories":[{"nameLabel":{"value":"表单"},"name":"form","order":9500}],"categoryOrders":[]};
plugin71.renderer=

	{
		render: function(chart)
		{
			var options = {multiple: true};
			chartFactory.chartSupport.selectRender(chart, options);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.selectUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.selectResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.selectDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.selectOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.selectOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin71.chartRenderer = plugin71.renderer;
chartPluginManager.plugins["org.datagear.chart.form.select.multiple"] = plugin71;
var plugin72=
{"id":"org.datagear.chart.custom","nameLabel":{"value":"自定义"},"resources":[{"name":"LICENSE"},{"name":"plugin.json"}],"iconResourceNames":{},"version":"4.4.0","order":10000,"categories":[{"nameLabel":{"value":"自定义"},"name":"custom","order":10000}],"categoryOrders":[]};
plugin72.renderer=

	{
		asyncRender: function(chart)
		{
			return chartFactory.chartSupport.customAsyncRender(chart);
		},
		render: function(chart)
		{
			chartFactory.chartSupport.customRender(chart);
		},
		asyncUpdate: function(chart, results)
		{
			return chartFactory.chartSupport.customAsyncUpdate(chart, results);
		},
		update: function(chart, results)
		{
			chartFactory.chartSupport.customUpdate(chart, results);
		},
		resize: function(chart)
		{
			chartFactory.chartSupport.customResize(chart);
		},
		destroy: function(chart)
		{
			chartFactory.chartSupport.customDestroy(chart);
		},
		on: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.customOn(chart, eventType, handler);
		},
		off: function(chart, eventType, handler)
		{
			chartFactory.chartSupport.customOff(chart, eventType, handler);
		}
	};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin72.chartRenderer = plugin72.renderer;
chartPluginManager.plugins["org.datagear.chart.custom"] = plugin72;
var plugin73=
{"id":"datagearHtmlChartPluginForGetWidgetException","nameLabel":{"value":"AttributeValueHtmlChartPlugin"},"resources":[],"iconResourceNames":{},"attributes":[],"dataSigns":[],"version":"","order":0,"categories":[],"categoryOrders":[]};
plugin73.renderer=
{
	render : function(chart)
	{
		var element = chart.elementJquery();
		var value = chart.attrValue("DG_EXCEPTION_MESSAGE");
		element.html(value);
	},
	update : function(){}
};
//@deprecated 兼容4.0.0版本的chartRenderer属性名，未来版本会移除
plugin73.chartRenderer = plugin73.renderer;
chartPluginManager.plugins["datagearHtmlChartPluginForGetWidgetException"] = plugin73;
})(this);
