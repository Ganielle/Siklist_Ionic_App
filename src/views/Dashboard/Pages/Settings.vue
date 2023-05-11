<template>
    <ion-page>
        <ion-content>
            <MDBContainer class="p-3">
                <h5>Account and Settings</h5>
                <div class="rounded" style="background-color: rgb(3, 121, 32);">
                    <MDBRow style="padding-top: 15px; padding-bottom: 5px;">
                        <MDBCol>
                            <ion-icon :icon="personCircleOutline" style="width: 100%; height: 100%;"
                             color="light"/>
                        </MDBCol>
                        <MDBCol>
                            <span style="font-size: 0.9em; font-weight: bold; color: white;">John Doe</span>
                            <p style="font-size: 0.8em; color: white;">johndoe@gmail.com</p>
                        </MDBCol>
                        <MDBCol>
                            <ion-icon :icon="pencilOutline" style="width: 50%; height: 50%; padding-top: 15px;
                                padding-left: 30%;"
                             color="light"/>
                        </MDBCol>
                    </MDBRow>
                </div>


                <br/>
                <center>
                    <h6>Account and Settings</h6>
                </center>
                <div class="rounded" style="border: 1px solid rgb(3, 121, 32);">
                    <MDBRow style="padding-top: 5px; padding-bottom: 5px;">
                        <MDBCol>
                            <ion-icon :icon="personCircleOutline" style="width: 100%; height: 100%;"
                             color="success"/>
                        </MDBCol>
                        <MDBCol>
                            <span style="font-size: 0.9em; font-weight: bold; color: black;">My account</span>
                            <p style="font-size: 0.6em; color: black;">View or make changes to your account</p>
                        </MDBCol>
                        <MDBCol>
                            <ion-icon :icon="chevronForwardOutline" style="width: 50%; height: 50%; padding-top: 15px;
                                padding-left: 30%;"
                             color="black"/>
                        </MDBCol>
                    </MDBRow>
                </div>


                <br/>
                <center>
                    <h6>Information</h6>
                </center>
                <div class="rounded" style="border: 1px solid rgb(3, 121, 32);">
                    <MDBRow style="padding-top: 10px; padding-bottom: 10px;"
                        @click="() => $router.push({name: 'aboutapp'})">
                        <MDBCol class="text-center">
                            <ion-icon :icon="alertCircle" style="width: 70%; height: 70%;"
                             color="success"/>
                        </MDBCol>
                        <MDBCol>
                            <span style="font-size: 0.9em; font-weight: bold; color: black;">About App</span>
                        </MDBCol>
                        <MDBCol>
                            <ion-icon :icon="chevronForwardOutline" style="width: 50%; height: 50%; padding-top: 5px;
                                padding-left: 30%;"
                             color="black"/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow style="padding-top: 10px; padding-bottom: 10px;"
                        @click="() => $router.push({name: 'termsofuse'})">
                        <MDBCol class="text-center">
                            <ion-icon :icon="document" style="width: 70%; height: 70%;"
                             color="success"/>
                        </MDBCol>
                        <MDBCol>
                            <span style="font-size: 0.9em; font-weight: bold; color: black;">Terms of Use</span>
                        </MDBCol>
                        <MDBCol>
                            <ion-icon :icon="chevronForwardOutline" style="width: 50%; height: 50%; padding-top: 5px;
                                padding-left: 30%;"
                             color="black"/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow style="padding-top: 10px; padding-bottom: 10px;"
                        @click="() => $router.push({name: 'privacypolicy'})">
                        <MDBCol class="text-center">
                            <ion-icon :icon="lockClosed" style="width: 70%; height: 70%;"
                             color="success"/>
                        </MDBCol>
                        <MDBCol>
                            <span style="font-size: 0.9em; font-weight: bold; color: black;">Privacy Policy</span>
                        </MDBCol>
                        <MDBCol>
                            <ion-icon :icon="chevronForwardOutline" style="width: 50%; height: 50%; padding-top: 5px;
                                padding-left: 30%;"
                             color="black"/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow style="padding-top: 10px; padding-bottom: 10px;"
                        @click="() => $router.push({name: 'contactus'})">
                        <MDBCol class="text-center">
                            <ion-icon :icon="mail" style="width: 70%; height: 70%;"
                             color="success"/>
                        </MDBCol>
                        <MDBCol>
                            <span style="font-size: 0.9em; font-weight: bold; color: black;">Contact Us</span>
                        </MDBCol>
                        <MDBCol>
                            <ion-icon :icon="chevronForwardOutline" style="width: 50%; height: 50%; padding-top: 5px;
                                padding-left: 30%;"
                             color="black"/>
                        </MDBCol>
                    </MDBRow>
                </div>

                <br/>

                <MDBBtn 
                    color="success"
                    block 
                    type="submit"
                    @click="() => $router.push({name: 'getstarted'})"
                >LOGOUT</MDBBtn>

                <center>
                    <div style="width: 20%; padding-top: 25px;">
                        <img :src="siklist" />
                    </div>
                </center>
            </MDBContainer>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonContent, IonPage, IonIcon } from '@ionic/vue';
import { MDBContainer, MDBBtn, MDBRow, MDBCol } from "mdb-vue-ui-kit";
import { personCircleOutline, pencilOutline, chevronForwardOutline,
    alertCircle, document, lockClosed, mail } from 'ionicons/icons';
import siklist from '@/assets/01 Splash Screen (2).png'

export default defineComponent({
    name: 'Settings',
    data(){
        return{
            personCircleOutline,
            pencilOutline,
            chevronForwardOutline,
            alertCircle,
            document,
            lockClosed,
            mail,
            siklist
        }
    },
    components: {
        IonPage,
        IonContent,
        MDBContainer,
        MDBBtn,
        MDBRow,
        MDBCol,
        IonIcon
    }
})
</script>