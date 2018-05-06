require.config({
    paths: {
        "lncldav": "https://cdn1.lncld.net/static/js/3.0.4/av-min.js",
        "valine": "https://unpkg.com/valine/dist/Valine.min.js"
    }
});

require(['lncldav', 'valine'], function (lncldav, valine){
    new Valine({
        el: '#comment' ,
        notify:false, 
        verify:false, 
        appId: '{{ site.valine.appid }}',
        appKey: '{{ site.valine.appkey }}',
        placeholder: 'Play a game',
        path:window.location.pathname, 
        avatar:'retro',
        region:'{{ site.valine.region }}'
    });
});