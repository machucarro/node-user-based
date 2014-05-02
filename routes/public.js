function init(app){
    app.get('/', routes.index);
    app.get('/ping', routes.ping);
}
