<template>
    <ion-page> 
        <ion-content>
            <PageOne :image-source="imageSource" :title="title"
            :subtitle="subtitle" :description="content"  />
            
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <MDBBtn 
                            outline="success"
                            block 
                            @click="() => $router.push({name: 'dashboard'})"
                        >SKIP</MDBBtn>
                    </MDBCol>
                    <MDBCol>
                        <MDBBtn 
                            color="success"
                            block
                            @click="NextButton"
                        >NEXT</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonContent, IonPage, onIonViewDidEnter } from '@ionic/vue';
import { MDBContainer, MDBBtn, MDBRow, MDBCol } from "mdb-vue-ui-kit";

import PageOne from '@/components/Welcome/Pageone.vue'

import page1 from '@/assets/Welcome/page1.png'
import page2 from '@/assets/Welcome/page2.png'
import page3 from '@/assets/Welcome/page3.png'
import page4 from '@/assets/Welcome/page4.png'

export default defineComponent({
    name: "Welcome",
    data() {
        return{
            imageSource: "",
            title: "",
            subtitle: "",
            content: "",
            index: 0
        }
    },
    components: {
        IonPage,
        IonContent,
        PageOne,
        MDBContainer,
        MDBBtn,
        MDBRow,
        MDBCol
    },
    methods: {
        SetCurrentContent(){
            if (this.index == 0){
                this.imageSource = page1
                this.title= "Find E-Bike"
                this.subtitle= "Charging Stations"
                this.content = "Find all or nearby E-bike Charging Station in Manila wherever and whenever you want"
            }
            else if (this.index == 1){
                this.imageSource = page2
                this.title = "Add New E-bike"
                this.subtitle = "Charging Stations"
                this.content = "Contribute and help to improve Manila e-bike charging stations data."
            }
            else if (this.index == 2){
                this.imageSource = page3
                this.title = "Bookmark E-bike"
                this.subtitle = "Charging Stations"
                this.content = "Save your favorite e-bike charging stations in manila and access information without searching on map."
            }
            else if (this.index == 3){
                this.imageSource = page4
                this.title = "Charging Stations"
                this.subtitle = ""
                this.content = "Save your favorite e-bike charging stations in Manila and access information without searching in map."
            }
            else{
                this.$router.push({name: 'dashboard'})
            }
        },
        NextButton(){
            this.index++
            this.SetCurrentContent()
        },
        ResetIndex(){
            this.index = 0
        }
    },
    ionViewWillEnter() {
        this.index = 0
        this.SetCurrentContent()
    },
})

</script>

<style>
.ion-page{
    justify-content: flex-start !important;
}
</style>