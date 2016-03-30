'use strict';
const co = require('co');

function* getTodos(ctx, next) {
    let error = true;
    let rslt = null;
    let models = ctx.fs.dc.models;

    try {
        let todos = yield models.Todo.findAll();
        rslt = todos;
        error = false;
    } catch (e) {
        ctx.fs.logger.error(`path: ${ctx.path}, error: ${e}`);
    }

    if (error) {
        ctx.status = 400;
        ctx.body = {error: "FindError"};
    } else {
        ctx.status = 200;
        ctx.body = rslt;
    }
}

function* addTodo(ctx, next) {
    let info = ctx.request.body;
    let error = true;
    let models = ctx.fs.dc.models;
    let todo = undefined;

    if (info && info.text) {
        try {
            todo = yield models.Todo.create({text: info.text, complete: false});
            error = false;
        } catch (e) {
            ctx.fs.logger.error(`path: ${ctx.path}, body: ${JSON.stringify(info)}, error: ${e}`);
        }
    }

    if (error) {
        ctx.status = 400;
        ctx.body = {error: "AddError"};
    } else {
        ctx.status = 200;
        ctx.body = todo;
    }
}

function* destroyTodo(ctx, next) {
    let id = ctx.params.id;
    let condition = ctx.query;
    console.log(ctx.query);
    console.log(ctx.querystring);
    let error = true;
    let models = ctx.fs.dc.models;

    try {
        if (!isNaN(id)) {
            let todo = yield models.Todo.findOne({where: {id: id}});
            if (todo == null) {
                throw new Error(`todo not found where id=${id}`);
            }
            // deleting
            yield models.Todo.destroy({where: {id: id}});
            error = false;
        } else if(!id && condition) {
            yield models.Todo.destroy({where: condition});
            error = false;
        }
    } catch (e) {
        ctx.fs.logger.error(`path: ${ctx.path}, error: ${e}`);
    }

    if (error) {
        ctx.status = 400;
        ctx.body = {error: "DeleteError"};
    } else {
        ctx.status = 200;
        ctx.body = '';
    }
}

function* updateTodo(ctx, next) {
    let id = ctx.params.id;
    let info = ctx.request.body;
    let error = true;
    let models = ctx.fs.dc.models;

    try {
        if (!info) {
            throw new Error(`params error`);
        }

        if (!isNaN(id)) {
            let todo = yield models.Todo.findOne({where: {id: id}});
            if (todo == null) {
                throw new Error(`todo not found where id=${id}`);
            }
            yield models.Todo.update(info, {where: {id: id}});
            error = false;
        } else {
            yield models.Todo.update(info, {where: {id: {$gt: 0}}});
            error = false;
        }
    } catch (e) {
        ctx.fs.logger.error(`path: ${ctx.path}, error: ${e}`);
    }

    if (error) {
        ctx.status = 400;
        ctx.body = {error: "UpdateError"};
    } else {
        ctx.status = 200;
        ctx.body = '';
    }
}

module.exports = {
    entry: function (app, router, opts) {
        app.fs.logger.log('info', '[TodoApp-API]', 'Inject routes into router.');
        router.get('/todos', co.wrap(getTodos));
        router.post('/todos', co.wrap(addTodo));
        router.delete('/todos', co.wrap(destroyTodo));
        router.delete('/todos/:id', co.wrap(destroyTodo));
        router.put('/todos', co.wrap(updateTodo));
        router.put('/todos/:id', co.wrap(updateTodo));
    },
    models: function (dc) {
        let Todo = dc.orm.define('todo', {
            text: {
                type: dc.ORM.STRING,
                field: 'text'
            },
            complete: {
                type: dc.ORM.BOOLEAN,
                field: 'complete'
            }
        }, {
            tableName: 'Todo'
        });
        dc.models.Todo = Todo;
    }
};