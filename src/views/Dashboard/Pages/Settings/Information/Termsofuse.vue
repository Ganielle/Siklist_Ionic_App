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
                            <h1 style="color: white;">Terms of use</h1>
                        </center>
                    </ion-title>
                </ion-toolbar>
            </ion-header>
        <ion-content>
            <MDBContainer class="p-4">
                <p>
                    Welcome to <span style="font-weight: bold;">Siklisto!</span> Before using our app, we ask that you carefully review and agree to our Terms of
                    Use. By using our app, you are agreeing to be bound by these terms, so please read them carefully.
                </p>
                <br/>
                <p>
                    1.) <span style="font-weight: bold;">Acceptance of Terms.</span> By using this app, you agree to these Terms of Use. If you do not agree to these Terms of Use, please do not use this app.
                </p>
                <br/>
                <p>
                    2.) <span style="font-weight: bold;">License.</span> We grant you a limited, non- exclusive, non-transferable license to access and use our app for
                    your personal use only. You may not reproduce, distribute, modify, or create derivative works from the
                    app without our prior written consent.
                </p>
                <br/>
                <p>
                    3.) <span style="font-weight: bold;">User Conduct.</span> You agree to use our app for lawful purposes only and to comply with all applicable
                    laws and regulations. You agree not to use our app in any way that could damage, disable, overburden, or
                    impair our servers or networks.
                </p>
                <br/>
                <p>
                    4.) <span style="font-weight: bold;">Availability.</span> We strive to provide reliable and accurate information regarding e-bike charging stations.
                    However, we cannot guarantee that the information provided is always accurate or up-to-date, and we do
                    not guarantee that the app will always be available or that access to the app will be uninterrupted.
                </p>
                <br/>
                <p>
                    5.) <span style="font-weight: bold;">Privacy.</span> We take your privacy seriously and have implemented measures to protect your personal
                    information. Please refer to our Privacy Policy for more information.
                </p>
                <br/>
                <p>
                    6.) <span style="font-weight: bold;">Limitation of Liability.</span> In no event shall we be liable for any damages arising out of or related to your
                    use of the app, including, but not limited to, direct, indirect, incidental, special, or consequential damages.
                </p>
                <br/>
                <p>
                    7.) <span style="font-weight: bold;">Indemnification.</span> You agree to indemnify, defend, and hold harmless our company, its officers,
                    directors, employees, agents, licensors, and suppliers from and against all losses, expenses, damages,
                    and costs, including reasonable attorneys' fees, resulting from any violation of these Terms of Use.
                </p>
                <br/>
                <p>
                    8.) <span style="font-weight: bold;">Modification of Terms.</span> We reserve the right to modify these Terms of Use at any time without prior
                    notice. Your continued use of the app after any such modification constitutes your acceptance of the
                    new Terms of Use.
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
    name: "Termsofuse",
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