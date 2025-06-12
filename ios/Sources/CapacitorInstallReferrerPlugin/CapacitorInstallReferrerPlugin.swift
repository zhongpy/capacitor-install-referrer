import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorInstallReferrerPlugin)
public class CapacitorInstallReferrerPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "CapacitorInstallReferrerPlugin"
    public let jsName = "CapacitorInstallReferrer"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "getReferrer", returnType: CAPPluginReturnPromise)
    ]
    private let implementation = CapacitorInstallReferrer()

    @objc func getReferrer(_ call: CAPPluginCall) {
        call.resolve([
            "installReferrer": "",
            "referrerClickTimestamp": 0,
            "installBeginTimestamp": 0,
            "googlePlayInstant": false
        ])
    }
}
