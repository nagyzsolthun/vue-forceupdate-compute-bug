<template>
    <div>last update time: {{time}}</div>
</template>

<script>

export default {
    computed: { time: () => (new Date()).toLocaleTimeString() },
    created: function() {
        const vm = this;
        window.setTimeout( () => {
            console.log("refreshing vm..");
            vm.$forceUpdate();
        }, 2000);
    }
}
</script>
