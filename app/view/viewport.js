Ext.define('App.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'App.view.Header',
        'App.view.Main',
        'App.view.Menu'
    ],
    layout: 'fit',
    items: {
        xtype: 'container',
        layout: 'border',
        items: [
            {
                xtype: 'xheader',
            },{
                xtype: 'xmenu',
            },{
                xtype: 'xmain'
            }
        ]
    }
})