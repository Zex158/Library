Ext.define('App.view.Reader', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.xreader',
    id: 'readerC',
    requires: [
        'App.store.Readers'
    ],
    store: Ext.create('App.store.Readers'),
    columns: [
        {
            header: '姓名',
            flex: 1,
            dataIndex: 'name'
        }, {
            header: '年龄',
            flex: 1,
            dataIndex: 'age'
        }, {
            header: '性别',
            flex: 1,
            dataIndex: 'sex',
            renderer: function(v){
                return v == 'male' ? '男' : '女'
            }
        }, {
            xtype: 'datecolumn',
            format: 'Y年m月d日',
            header: '创建日期',
            width: 150,
            dataIndex: 'createDate'
        }, {
            header: '等级',
            flex: 1,
            dataIndex: 'level'
        }
    ],
    tbar: {
        items: [
            {
                text: '新建',
                id: 'btn-addReader',
                handler: readerOption('add')
            }, {
                text: '编辑',
                id: 'btn-editReader',
                disabled: true,
                handler: readerOption('edit')
            }, {
                text: '删除',
                id: 'btn-deleteReader',
                disabled: true,
                handler: readerOption('delete')
            }
        ]
    },
    selModel: {
        listeners: {
            select: function(sm, rec, index, eopts) {
                Ext.getCmp('btn-deleteReader').enable();
                Ext.getCmp('btn-editReader').enable();
            }
        }
    }
})

function readerOption(type){
    switch (type){
        case 'add':
            return addReader;
        case 'edit':
            return editReader;
        case 'delete':
            return deleteReader;
        default:
            console.warn('invalid reader option type');
            return;
    }
}

function addReader(){
    addWin()
}

function deleteReader(){
    var selectedModel = Ext.getCmp('readerC').getSelectionModel(),
        record = selectedModel.getSelection()[0],
        store = Ext.getCmp('readerC').store;
    if (record) {
        Ext.Msg.confirm('提示', '确认删除', function(btn) {
            if (btn == 'yes') {
                store.remove(record);
                Ext.getCmp('btn-deleteReader').disable();
                Ext.getCmp('btn-editReader').disable();
            }
        });
    }
}

function editReader(){
    var record = Ext.getCmp('readerC').getSelectionModel().getSelection()[0];
    if (record) {
        addWin(record);
    }
}

function addWin(rec){
    var me = this;

    var win = Ext.create('Ext.window.Window', {
        title: rec ? '编辑' : '添加',
        modal: true,
        width: 400,
        height: 300,
        items: [{
            xtype: 'form',
            defaults: {
                anchor: '80%',
                margin: 10
            },
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'name',
                    allowBlank: false,
                    labelSeparator: ':',
                    labelAlign: 'left',
                    name: 'name'
                }, {
                    xtype: 'numberfield',
                    hideTrigger: true,
                    fieldLabel: '年龄',
                    allowDecimals: false,
                    allowBlank: false,
                    name: 'age'
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: '性别',
                    columns: 2,
                    allowBlank: false,
                    items: [
                        {
                            boxLabel: '男',
                            name: 'sex',
                            inputValue: 'male',
                            checked: true
                        }, {
                            boxLabel: '女',
                            name: 'sex',
                            inputValue: 'female'
                        }
                    ]
                }, {
                    xtype: 'datefield',
                    fieldLabel: '创建日期',
                    allowBlank: false,
                    name: 'createDate'
                }, {
                    xtype: 'radiogroup',
                    fieldLabel: '级别',
                    columns: 3,
                    allowBlank: false,
                    name: 'level',
                    items: [
                        {
                            boxLabel: '普通',
                            name: 'level',
                            inputValue: 1,
                            checked: true
                        }, {
                            boxLabel: '白银',
                            name: 'level',
                            inputValue: 2
                        }, {
                            boxLabel: '黄金',
                            name: 'level',
                            inputValue: 3
                        }
                    ]
                }
            ]
        }],
        listeners: {
            show: function(){
                if (rec){
                    var form = win.down('form');
                    var infos = form.items.items;
                    infos[0].setValue(rec.get('name'));
                    infos[1].setValue(rec.get('age'));
                    infos[2].setValue(rec.get('sex'));
                    infos[3].setValue(rec.get('createDate'));
                    infos[4].setValue(rec.get('level'));
                }
            }
        },
        buttons: [
            {
                text: '完成',
                handler: function(){
                    var form = win.down('form'),
                        store = Ext.getCmp('readerC').store,
                        reader = form.getValues(),
                        id;
                    if(!form.isValid()){
                        return;
                    }
                    if(rec){
                        //编辑
                        rec.set(reader);
                    }else{
                        //添加
                        id = store.getAt(store.getCount()-1).data.id + 1;
                        reader.id = id;
                        store.add(reader);
                    }
                    win.close();
                }
            },
            {
                text: '取消',
                handler: function(){
                    win.close()
                }
            }
        ]
    });

    win.show()
}