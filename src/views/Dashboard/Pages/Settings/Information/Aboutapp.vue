<template>
    <ion-page>
        <ion-header>
                <ion-toolbar>
                    <ion-icon :icon="chevronBackOutline" size="large"
                        color="success" @click="() => $router.push({name: 'settings'})"/>
                </ion-toolbar>
                <ion-toolbar>
                    <ion-title>
                        <center>
                            <h1 style="color: white;">About App</h1>
                        </center>
                    </ion-title>
                </ion-toolbar>
            </ion-header>
        <ion-content>
            <MDBContainer class="p-4">
                <h1>About Siklisto</h1>
                <p>
                    Siklisto is a mobile app that guides users to all or nearby charging stations in NCR. You can depend on
                    us and use the Siklisto application for free. For you to make an informed decision about where to charge
                    and keep moving, all users of Siklisto can contribute real-time updates about electric bike charging
                    stations in NCR.
                </p>
                <br/>
                <h1>Access Siklisto</h1>
                <p>
                    Siklisto can be downloaded to your app from
                    &lt;link where to download > (available for Android and IOS)
                </p>
                <br/>
                <p>
                    If you haven't used Siklisto before and have some free time, we suggest creating an account to use the
                    applications' features. You can add NCR ebike charging stations, calculate the the charging hour of your
                    e-bike and get notification when your ebike is done charging, and bookmark your favorite charging
                    stations with a Siklisto account.
                </p>
                <br/>
                <h1>Find Nearby ebike Charging Stations</h1>
                <p>
                    You're using Siklisto to locate ebike charging stations near you, and this app will do it for you!
                    You can use the utilize the app's feature and enable location services on your device for the best
                    experience finding a location on the go.
                </p>
                <br/>
                <h1>Add Location</h1>
                <p>
                    The Siklisto database is updated collaboratively by developers and users. This effort will be crowd
                    sourced to ensure that the application always provides users with the most up-to- date information about
                    e-bike charging station location.

                    <br/>
                    <br/>
                    If you discover a location that is missing from the Siklisto map, please consider adding it! Our team will
                    analyze and verify the e-bike charging stations to assure their reliability, and the additional stations will only be available in NCR.

                </p>

                <hr/>
                <span>For questions, you can contact us <a href="dashboard/settings/contactus">here</a></span>
            </MDBContainer>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonContent, IonPage, IonIcon, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
import { chevronBackOutline } from 'ionicons/icons';
import { MDBContainer } from "mdb-vue-ui-kit";
export default defineComponent({
    name: "Aboutapp",
    data(){
        return {
            chevronBackOutline
        }
    },
    components: {
        IonContent,
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonIcon,
        MDBContainer
    }
})
</script>

<style>
ion-toolbar{
    --background: rgb(3, 121, 32);;
}
ion-header{
    background: rgb(3, 121, 32) !important;
}
</style>