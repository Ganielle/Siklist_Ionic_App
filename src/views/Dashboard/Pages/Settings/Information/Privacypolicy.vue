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
                            <h1 style="color: white;">Privacy Policy</h1>
                        </center>
                    </ion-title>
                </ion-toolbar>
            </ion-header>
        <ion-content>
            <MDBContainer class="p-4">
                <p>
                    Thank you for using <span style="font-weight: bold;">Siklisto!</span>  We understand that your privacy is important, and we are committed to
                    protecting it. This Privacy Policy describes how we collect, use, and share your personal information
                    connection with the use of our app.
                </p>
                <br/>
                <p>
                    1.) <span style="font-weight: bold;">Information We Collect.</span> We may collect the following types of information:
                    <br/><br/>
                    • Personal information such as your name, email address, and phone number when you register for an
                    account with us.
                    <br/><br/>
                    • Location information when you use our app to locate e-bike charging stations.
                </p>
                <br/>
                <p>
                    2.) <span style="font-weight: bold;">How We Use Your Information.</span> We may use your information for the following purposes:
                    <br/><br/>
                    • To provide you with the services and features of our app.
                    <br/><br/>
                    • To improve and customize our app and your experience using it.
                    <br/><br/>
                    • To communicate with you about your account, app updates, and promotions.
                </p>
                <br/>
                <p>
                    3.) <span style="font-weight: bold;">How We Share Your Information.</span> We may share your information with the following third parties:
                    <br/><br/>
                    • Service providers who help us provide and improve our app, such as hosting providers, analytics
                    providers, and customer service providers.
                    <br/><br/>
                    • Business partners who offer related products or services that we think may interest you.
                    <br/><br/>
                    • Law enforcement or other government authorities when required by law.
                </p>
                <br/>
                <p>
                    4.) <span style="font-weight: bold;">Your Choices and Rights.</span> You may choose to disable location tracking in your device settings or limit
                    the types of information we collect from you. You may also request access to, correction of, or deletion
                    of your personal information by contacting us at support@siklisto.com
                </p>
                <br/>
                <p>
                    5.) <span style="font-weight: bold;">Security.</span> We take reasonable measures to protect your personal information from unauthorized
                    access, disclosure, or loss.
                </p>
                <br/>
                <p>
                    6.) <span style="font-weight: bold;">Children's Privacy.</span> Our app is not intended for children under the age of 18, and we do not knowingly
                    collect personal information from children under the age of 18.
                </p>
                <br/>
                <p>
                    7.) <span style="font-weight: bold;">Changes to this Privacy Policy.</span> We may update this Privacy Policy from time to time. We will notify you
                    of any material changes by posting the updated Privacy Policy on our app or by sending you an email.
                </p>
                <br/>
                <p>
                    8.) <span style="font-weight: bold;">Contact Us.</span> If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at support@siklisto.com
                </p>
                <hr/>
                <span>Last updated: March 31, 2023</span>
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