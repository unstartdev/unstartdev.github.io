require.config({
    paths: {
        "lncldav": "https://cdn1.lncld.net/static/js/3.0.4/av-min",
        "valine": "https://unpkg.com/valine/dist/Valine.min"
    }
});

require(['lncldav', 'valine'], function Valine() {
    valine.init({
        el: '#comment',
        notify: false,
        verify: false,
        appId: 'zzVxYEdgSg9Glf88mC84VG6a-MdYXbMMI',
        appKey: 'dWwF0uammXUkNl2nqAQDpDW7',
        placeholder: 'Play a game',
        path:window.location.pathname,
        avatar: 'retro',
        region: 'us'
    });
});