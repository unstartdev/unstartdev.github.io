require.config({
    paths: {
        "lncldav": "https://cdn1.lncld.net/static/js/3.0.4/av-min",
        "valine": "https://unpkg.com/valine/dist/Valine.min"
    }
});

require(['lncldav', 'valine'], function (valine) {
    init({
        el: '#comment',
        notify: false,
        verify: false,
        appId: '{{ site.valine.appid }}',
        appKey: '{{ site.valine.appkey }}',
        placeholder: 'Play a game',
        path:window.location.pathname,
        avatar: 'retro',
        region: '{{ site.valine.region }}'
    });
});