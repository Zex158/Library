Ext.define('App.view.Main', {
    extend: 'Ext.container.Container',
    alias: 'widget.xmain',
    requires: [
        'App.view.Reader'
    ],
    region: 'center',
    id: 'xmain',
    title: 'Main',
    layout: 'fit',
    items: [
        {
            xtype: 'xreader',
            width: '100%'
        }
    ]
})