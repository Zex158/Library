Ext.define('App.view.Header',{
    extend: 'Ext.container.Container',
    html: '<h2 style = "text-align: center">Manager</h2>',
    padding: 20,
    height: 100,
    width: '100%',
    alias: 'widget.xheader',
    id: 'xheader',
    region: 'north',
    frame:false
})