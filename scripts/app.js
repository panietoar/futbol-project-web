requirejs({
    baseUrl: '../lib',
    paths: {
        app: '../scripts'
    }
});

requirejs(['app/main'], function(main) {
    main.init();
});