Ext.define('App.view.Menu', {
    extend: 'Ext.tree.Panel',
    requires: [
        'App.store.Menu'
    ],
    id: 'xmenu',
    alias: 'widget.xmenu',
    title:'Menu',
    width: 150,
    region: 'west',
    rootVisible: false,
    line: false,
    store: Ext.create('App.store.Menu')
})