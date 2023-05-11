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
                            <h1 style="color: white;">Contact Us</h1>
                        </center>
                    </ion-title>
                </ion-toolbar>
            </ion-header>
        <ion-content>
            <MDBContainer class="p-4">
                <p>
                    Thank you for using <span style="font-weight: bold;">Siklisto!</span>, our e-bike charging station locator mobile app. If you have any questions,
                    concerns, or feedback, we would love to hear from you. Here are the ways you can get in touch:
                    <br/><br/>
                    Email: support@siklisto.com
                    <br/>
                    Phone: +02 8952
                    <br/>
                    Mailing address: 123 Sta. Mesa
                    <br/><br/>
                    We take pride in providing excellent customer service, and our team is available to assist you with any
                    issues you may encounter while using our app. Please be as detailed as possible when describing your
                    problem or question, so that we can provide the most helpful response.
                    <br/><br/>
                    Thank you for choosing <span style="font-weight: bold;">Siklisto!</span>
                </p>
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
    name: "Privacypolicy",
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