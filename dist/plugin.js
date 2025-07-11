var capacitorCapacitorInstallReferrer = (function (exports, core) {
    'use strict';

    const CapacitorInstallReferrer = core.registerPlugin('CapacitorInstallReferrer', {
        web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.CapacitorInstallReferrerWeb()),
    });

    class CapacitorInstallReferrerWeb extends core.WebPlugin {
        async getReferrer() {
            return { installReferrer: "",
                referrerClickTimestamp: 0,
                installBeginTimestamp: 0,
                googlePlayInstant: true };
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CapacitorInstallReferrerWeb: CapacitorInstallReferrerWeb
    });

    exports.CapacitorInstallReferrer = CapacitorInstallReferrer;

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
