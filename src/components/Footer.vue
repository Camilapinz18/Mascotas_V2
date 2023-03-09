<script setup>

</script>

<template>
   <div class="footer-cont">
      <div class="info-cont">
         <img src="../assets/images/logo.png" />
         <h2>PetMatch</h2>
         <span>1234 Maple Street</span>
         <span>+1 (555) 555-1234</span>
         <span>info@petmatch.com</span>

      </div>
      <n-back-top :right="100" />
  

   </div>
</template>

<style scoped>
.footer-cont {
   background-color: #2C241F;
   height: 10%;
   display: flex;
   flex-direction: column;

}

.footer-cont img {
   width: 100%;


}

.info-cont {
   display: flex;
   flex-direction: column;

   width: min-content;
   padding: 30px;
   margin-left: 40px;
   color: white;
}

.info-cont h2{
   margin-top: 20px;
}
</style>
