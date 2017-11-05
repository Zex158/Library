Ext.application({
    name: 'App',
    appFolder: 'app',
    launch: function(){
        Ext.create('App.view.Viewport');
    }
})