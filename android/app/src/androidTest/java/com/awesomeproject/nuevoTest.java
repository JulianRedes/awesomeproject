package com.awesomeproject;

import static androidx.test.espresso.Espresso.onView;
import static androidx.test.espresso.action.ViewActions.click;
import static androidx.test.espresso.action.ViewActions.typeText;
import static androidx.test.espresso.assertion.ViewAssertions.matches;
import static androidx.test.espresso.matcher.ViewMatchers.isDisplayed;
import static androidx.test.espresso.matcher.ViewMatchers.withContentDescription;
import static androidx.test.espresso.matcher.ViewMatchers.withText;

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.Matchers.allOf;

import org.junit.After;
import org.junit.Rule;
import org.junit.Test;

import androidx.test.espresso.ViewInteraction;
import androidx.test.filters.LargeTest;
import androidx.test.rule.ActivityTestRule;
import androidx.test.runner.AndroidJUnit4;

import com.microsoft.appcenter.espresso.Factory;
import com.microsoft.appcenter.espresso.ReportHelper;

import org.junit.runner.RunWith;

import kotlin.jvm.JvmField;

@RunWith(AndroidJUnit4.class)
@LargeTest
public class nuevoTest {

    @Rule
    public ReportHelper reportHelper = Factory.getReportHelper();

    @Rule
    @JvmField
    public ActivityTestRule<MainActivity> mActivityTestRule = new ActivityTestRule<>(MainActivity.class);


    private ViewInteraction obtenerComponente(String nombre){

        return onView(allOf(withContentDescription(nombre), isDisplayed()));
    }


    @Test
    public void botonMostrarMensaje() {
        try {
            Thread.sleep(1500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        ViewInteraction botonMensaje = this.obtenerComponente("labelBoton");

                //onView(
                //allOf(withContentDescription("labelBoton"), isDisplayed()));

        botonMensaje.perform(click());

        ViewInteraction componenteText = this.obtenerComponente("labelText");

                //onView(
                //allOf(withContentDescription("labelText"), isDisplayed()));

        componenteText.check(matches(withText("Hola, mundo")));

        try {
            Thread.sleep(7000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void botonProfile() {
        try {
            Thread.sleep(1500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        ViewInteraction irAProfile = this.obtenerComponente("labelProfile");


        irAProfile.perform(click());

        ViewInteraction botonNuevo = this.obtenerComponente("labelNuevo");


        botonNuevo.perform(click());

        try {
            Thread.sleep(7000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void botonSettings() {
        try {
            Thread.sleep(1500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        ViewInteraction irASettings = this.obtenerComponente("labelSettings");

        irASettings.perform(click());

        ViewInteraction settingsTextInput = this.obtenerComponente("labelTextInput");

        settingsTextInput.perform(typeText("Ejemplo"));

        ViewInteraction botonEnviar = this.obtenerComponente("labelEnviar");

        botonEnviar.perform(click());

        ViewInteraction textView = this.obtenerComponente("labelTextSettings");

        textView.check(matches(withText(containsString("Ejemplo"))));

        try {
            Thread.sleep(7000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @After
    public void TearDown(){
        reportHelper.label("Stopping App");
    }

}