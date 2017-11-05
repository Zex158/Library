var data = {
    readers: [
        {
            name: '离散',
            age: '15',
            sex: 'male',
            createDate: new Date('2017/01/05'),
            level: 1,
            id: 1
        }, {
            name: '杭爱国',
            age: '16',
            sex: 'male',
            createDate: new Date('2017/01/15'),
            level: 2,
            id: 2
        }, {
            name: '李三',
            age: '62',
            sex: 'female',
            createDate: new Date('2016/01/05'),
            level: 2,
            id: 3
        }, {
            name: '单思',
            age: '52',
            sex: 'female',
            createDate: new Date('2016/05/15'),
            level: 1,
            id: 4
        }, {
            name: '阿里',
            age: '26',
            sex: 'male',
            createDate: new Date('2017/05/20'),
            level: 3,
            id: 5
        }, {
            name: '热撒旦',
            age: '35',
            sex: 'male',
            createDate: new Date('2016/01/05'),
            level: 2,
            id: 6
        }, {
            name: '到底散',
            age: '56',
            sex: 'male',
            createDate: new Date('2016/11/05'),
            level: 3,
            id: 7
        }, {
            name: '快捷',
            age: '25',
            sex: 'female',
            createDate: new Date('2017/01/05'),
            level: 2,
            id: 8
        },
    ]
}

Ext.define('App.store.Readers', {
    Extend: 'Ext.data.Model',
    requires: [
        'App.model.Reader'
    ],
    model: 'App.model.Reader',
    autoLoad: true,
    proxy: {
        type: 'memory',
        data: data,
        reader: {
            type: 'json',
            root: 'readers'
        }
    }
})