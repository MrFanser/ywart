<template>
  <div class="SystemMsg">
  	<header>
  		<span @click="goback">&lt;</span>
  		<span>站内信</span>
  		<span class="hid">&lt;</span>
  	</header>
  </div>
</template>

<script>
export default {
	methods:{
		goback(){
			history.back()
		}
	}
}
</script>

<style scroped>
	*{
		margin: 0;
		padding: 0;
	}
	.hid{
		visibility: hidden;
	}
	header{
		max-width: 700px;
		width: 100%;
		display: flex;
	    justify-content: space-between;
	}
</style>