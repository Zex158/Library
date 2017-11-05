Ext.define('App.model.Reader', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'name',
            type: 'string'
        },{
            name: 'age',
            type: 'int'
        },{
            name: 'sex',
            type: 'string'
        },{
            name: 'createDate',
            type: 'date'
        },{
            name: 'level',
            type: 'int'
        }, {
            name: 'id',
            type: 'int'
        }
    ]
})