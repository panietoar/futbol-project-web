requirejs({
    baseUrl: '../lib',
    paths: {
        app: '../scripts',
        jquery: ['http://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min', '..lib/jquery'],
        vue: ['//unpkg.com/vue/dist/vue', '..lib/vue']
    }
});

requirejs(['app/main'], function(main) {
    main.init();
});