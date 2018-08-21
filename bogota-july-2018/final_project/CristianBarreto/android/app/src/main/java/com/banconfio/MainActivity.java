package com.banconfio;

import android.os.Bundle; // For SplashScreen
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // For SplashScreen

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Banconfio";
    }
    /**
     * For Splash Screen
     */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);
        super.onCreate(savedInstanceState);
    }
}
