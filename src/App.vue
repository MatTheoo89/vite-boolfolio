<script>

import Header from './components/partials/header.vue';

export default {
  components: { Header },
  
  name: 'App',
}
</script>

<template>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,300,700' rel='stylesheet' type='text/css'>

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <title>Document</title>
</head>
<body>
  <Header/>

  <router-view></router-view>

</body>
</html>

 
</template>


<style lang="scss">
  @use './styles/general';
</style>