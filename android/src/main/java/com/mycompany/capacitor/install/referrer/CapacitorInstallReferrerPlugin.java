package com.mycompany.capacitor.install.referrer;

import android.content.Context;
import android.os.RemoteException;
import com.android.installreferrer.api.*;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "CapacitorInstallReferrer")
public class CapacitorInstallReferrerPlugin extends Plugin {
    private int referrerRetryCount = 0;
    private static final int MAX_RETRY = 2;
    @PluginMethod
    public void getReferrer(final PluginCall call) {
        Context context = getContext();
        InstallReferrerClient referrerClient = InstallReferrerClient.newBuilder(context).build();
        referrerRetryCount = 0;
        referrerClient.startConnection(new InstallReferrerStateListener() {
            @Override
            public void onInstallReferrerSetupFinished(int responseCode) {
                if (responseCode == InstallReferrerClient.InstallReferrerResponse.OK) {
                    try {
                        ReferrerDetails details = referrerClient.getInstallReferrer();
                        JSObject ret = new JSObject();
                        ret.put("installReferrer", details.getInstallReferrer());
                        ret.put("referrerClickTimestamp", details.getReferrerClickTimestampSeconds());
                        ret.put("installBeginTimestamp", details.getInstallBeginTimestampSeconds());
                        ret.put("googlePlayInstant", details.getGooglePlayInstantParam());
                        call.resolve(ret);
                    } catch (RemoteException e) {
                        call.reject("InstallReferrer error: " + e.getMessage());
                    } finally {
                        referrerClient.endConnection();
                    }
                } else {
                    call.reject("Failed to get referrer, code: " + responseCode);
                    referrerClient.endConnection();
                }
            }

            @Override
            public void onInstallReferrerServiceDisconnected() {
                if (referrerRetryCount < MAX_RETRY) {
                    referrerRetryCount++;
                    referrerClient.startConnection(this);
                } else {
                    call.reject("InstallReferrer service disconnected after retries");
                    referrerClient.endConnection();
                }
            }
        });
    }
}
