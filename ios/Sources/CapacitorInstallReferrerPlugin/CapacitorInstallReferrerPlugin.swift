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
        CAPPluginMethod(name: "echo", returnType: CAPPluginReturnPromise)
    ]
    private let implementation = CapacitorInstallReferrer()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }
}
