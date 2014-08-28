(function($) {

    var screen_sizes = [{
        width: 1024,
        height: 576
    }, {
        width: 1280,
        height: 720
    }, {
        width: 1920,
        height: 1080
    }];

    var flashvars = {
        fvDebug: 'false',
        fvSyndicator: 'false',
        fvShowSimulcastLogo: false,
        fvReferrer: 'www.usopen.org/index.html',
        fvEventName: "USTA",
        fvPlayerWidth: "1280",
        fvPlayerHeight: "720",
        fvVideoWidth: "1280",
        fvVideoHeight: "720",
        fvPlayerType: "POP_OUT_PLAYER",
        fvPlayerBgColor: "0x000000",
        fvStreamConfigURL: "http://www.usopen.org/en_US/xml/man/lc/lvpChannelConfig_us.xml",
        fvShowWidgets: false,
        fvShowChannelWidget: false,
        fvShowKeyMoments: false,
        fvUsePIP: false,
        fvUseDVR: false,
        fvRefreshIntervalSeconds: 30,
        fvBufferTimeSeconds: 3000,
        fvLiveStreamTimeoutSeconds: 15,
        fvVideoSessionTimeoutMinutes: -1,
        fvMaxBitrateKbps: 4000,
        fvStartingStreamIndex: 1,
        fvDefaultChannelCode: 'A',
        fvDefaultChannelSeekTime: -1,
        fvXmlMessageServer: "scoreboard.usopen.org",
        fvXmlMessagePort: "8000",
        fvMqVersion: "1.2",
        fvTerseMode: true,
        fvTopicPrefix: "events/uso/tennis/",
        fvMipDataPath: "http://www.usopen.org/en_US/xml/gen/scores/scores.ps.xml",
        fvKeysDataPath: "http://www.usopen.org/en_US/xml/gen/ps/",
        fvPlayerImagePath: "http://www.usopen.org/images/players/small/",
        fvSocialDataPath: "http://www.usopen.org/en_US/xml/man/ios/channel",
        fvTweetButtonJSCallback: "twitter_popup",
        fvViewOnTwitterButtonJSCallback: "view_on_twitter",
        fvKeyMomentsDataPath: "http://www.usopen.org/en_US/xml/gen/lc/key/keyMoments_",
        fvOctoshapeInstalledCookieValue: false,
        fvUseOctoshape: false,
        fvUseConviva: false,
        fvConvivaServiceURL: "http://livepass.conviva.com",
        fvConvivaCustomerID: "c3.IBM",
        fvUseOmniture: true,
        fvOmnitureAccount: "ibmusopen",
        fvVisitorNameSpace: "ibminteractive",
        fvTrackingServer: "metrics.usopen.org",
        fvUseMediaAnalytics: false,
        fvSponsorClickHandlerFunctionName: "goLink",
        fvMediaAnalyticsPluginURL: "",
        fvMediaAnalyticsConfigURL: ""
    };

    var params = {
        menu: "false",
        allowFullScreen: "true",
        quality: "high",
        allowScriptAccess: "always",
        bgcolor: "#000000",
        wmode: "direct"
    };

    var attributes = {
        id: "fsvLivePlayer",
        name: "fsvLivePlayer"
    };

    var flash_path = 'http://www.usopen.org/uso/flash/USTALiveVideoPlayer.swf';
    swfobject.embedSWF(flash_path, "player", "1280", "720", "10.2.0", true, flashvars, params, attributes);

    $(function() {
        $('#channel').change(function(e) {
            return goToCourt($(':selected', e.target).val());
        });
        $('#pic_size').change(function(e) {
            return setVideoSize(e.target.selectedIndex);
        });
    });

    window.setVideoSize = function setVideoSize(size_idx) {

        var fv = flashvars;
        var size = screen_sizes[size_idx];

        fv.fvVideoWidth = fv.fvPlayerWidth = '' + size.width;
        fv.fvVideoHeight = fv.fvPlayerHeight = '' + size.height;
        goToCourt(fv.fvDefaultChannelCode);
    };

    window.goToCourt = function goToCourt(court) {
        flashvars.fvDefaultChannelCode = court;
        swfobject.removeSWF('fsvLivePlayer');
        $('body').prepend('<div id=\'player\'></div>');
        swfobject.embedSWF(flash_path, "player", flashvars.fvPlayerWidth, flashvars.fvPlayerHeight, "10.2.0", true, flashvars, params, attributes);
    }

})(window.$);