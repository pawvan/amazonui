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
}
})
</script>