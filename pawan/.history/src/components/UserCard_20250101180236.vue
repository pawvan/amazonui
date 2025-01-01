<script lang="ts">
import {defineComponent } from 'vue'
import {useCounter } from './useCounter'
export default defineComponent({
setup(){
const {count,increment,decrement} =useCounter
return {
 count,increment,decrement}
}
})
</script>
<template>
<div><p>{{count}}</p>
<button @click="increment">add me</button>
<button @onclick="decrement"></button>
</div>

</template>