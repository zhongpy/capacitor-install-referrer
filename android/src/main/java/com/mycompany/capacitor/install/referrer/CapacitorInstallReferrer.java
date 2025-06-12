package com.mycompany.capacitor.install.referrer;

import android.content.Context;
import android.os.RemoteException;
import com.android.installreferrer.api.*;

public class CapacitorInstallReferrer {
    public ReferrerDetails getInstallReferrerDetails(Context context) throws RemoteException {
        InstallReferrerClient referrerClient = InstallReferrerClient.newBuilder(context).build();
        referrerClient.startConnection(null); // Connection handled outside
        return referrerClient.getInstallReferrer();
    }
}
