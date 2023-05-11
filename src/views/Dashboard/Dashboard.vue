<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="welcome">
                    <ion-icon :icon="mapOutline" />
                </ion-tab-button>
                <ion-tab-button tab="welcome" >
                    <ion-icon :icon="batteryChargingOutline" />
                </ion-tab-button>
                <ion-tab-button tab="welcome">
                    <ion-icon :icon="addCircleOutline" />
                </ion-tab-button>
                <ion-tab-button tab="welcome">
                    <ion-icon :icon="starOutline" />
                </ion-tab-button>
                <ion-tab-button tab="settings" href="/dashboard/settings">
                    <ion-icon :icon="personCircleOutline" />
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script lang="ts">
import { IonPage, IonTabs, IonRouterOutlet, IonTabButton, IonTabBar,
    IonIcon, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';
import { mapOutline, batteryChargingOutline, addCircleOutline, starOutline,
    personCircleOutline } from 'ionicons/icons';

export default defineComponent({
    name: 'Dashboard',
    data(){
        return{
            mapOutline,
            batteryChargingOutline,
            addCircleOutline,
            starOutline,
            personCircleOutline
        }
    },
    components: {
        IonPage,
        IonTabs,
        IonRouterOutlet,
        IonTabButton,
        IonTabBar,
        IonIcon,
        IonLabel,
    }
})
</script>

<style>
ion-tab-bar{
    --background: rgb(3, 121, 32);
}
ion-tab-button {
  /* --ripple-color: var(--ion-color-medium); */
  --color: #9b6f6f;
  /* --color-selected: var(--ion-color-medium); */
}
ion-tab-button.tab-selected {
  /* --background: var(--ion-color-dark) !important; */
  --color-selected: var(--ion-color-light);
}
</style>