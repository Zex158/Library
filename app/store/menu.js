var data = {
    menuItems: [
        {
            text: '读者管理',
            leaf: true
        },{
            text: '图书管理',
            leaf: true
        },{
            text: '管理员管理',
            leaf: true
        }
    ]
}


Ext.define('App.store.Menu', {
    extend: 'Ext.data.TreeStore',
    autoLoad: true,
    proxy: {
        data: data,
        type: 'memory',
        reader: {
            type: 'json',
            root: 'menuItems'
        }
    }
})