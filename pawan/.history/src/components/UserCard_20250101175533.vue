<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
name:'useCard',
props:{
name:{
type:String,
required:true,
}
,age:{
type:number,
required:false
},
setup(props){
const greeting =`hello ${props.name}`
return {greeting};
}
,

})
</script>
<template>
<div>
<p>{{greeting}}</p>
<p v-if="age">{{age}}</p>
</div>
</template>