package com.cellrebel.sdk.capacitor;

import android.os.Handler;

import com.cellrebel.sdk.workers.TrackingManager;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "CellRebelSDK")
public class CellRebelSDKPlugin extends Plugin {

    @PluginMethod
    public void init(PluginCall call) {
        String clientKey = call.getString("clientKey");
        Handler mainHandler = new Handler(getContext().getMainLooper());
        Runnable myRunnable = new Runnable() {
            @Override
            public void run() {
                TrackingManager.init(getContext(), clientKey);
            }
        };
        mainHandler.post(myRunnable);

        call.resolve();
    }

    @PluginMethod
    public void startTracking(PluginCall call) {
        Handler mainHandler = new Handler(getContext().getMainLooper());
        Runnable myRunnable = new Runnable() {
            @Override
            public void run() {
                TrackingManager.startTracking(getContext());
            }
        };
        mainHandler.post(myRunnable);

        call.resolve();
    }

    @PluginMethod
    public void stopTracking(PluginCall call) {
        Handler mainHandler = new Handler(getContext().getMainLooper());
        Runnable myRunnable = new Runnable() {
            @Override
            public void run() {
                TrackingManager.stopTracking(getContext());
            }
        };
        mainHandler.post(myRunnable);

        call.resolve();
    }
}
