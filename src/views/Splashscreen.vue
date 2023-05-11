<template>
    <ion-page>
        <ion-content>
            <MDBContainer fluid class="pt-5 pb-5">
                <center>
                    <div class="image-logo">
                        <img :src="siklist" />
                    </div>
                </center>
                <div class="move-center-btn">
                    <MDBBtn 
                        color="success"
                        block 
                        type="submit"
                        @click="() => $router.push({name: 'welcome'})"
                    >GET STARTED</MDBBtn>
                    
                </div>
                <div class="move-center-signin text-center">
                    <span>Already have an account?</span><a href=""> Sign In</a>
                </div>
            </MDBContainer>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonContent, IonPage } from '@ionic/vue';
import { MDBContainer, MDBBtn } from "mdb-vue-ui-kit";
import siklist from '@/assets/01 Splash Screen (2).png'

export default defineComponent({
    name: "GetStarted",
    components: {
        IonPage,
        IonContent,
        MDBContainer,
        MDBBtn
    },
    data() {
        return{
            siklist
        }
    }
})

</script>

<style>
.image-logo{
    width: 200px;
    /* position: absolute; */
    /* top: 50%; */
    /* left: 100%; */
    transform: translate(0%, 50%);
}
.move-center-btn{
    transform: translate(0%, 150px);
}
.move-center-signin{
    transform: translate(0%, 180px);
}
</style>
