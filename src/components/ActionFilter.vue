<template>
  <div class="action-button backGreenSpecial"><slot></slot></div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
@media screen and (min-width: 740px)
  .action-button
    position: absolute;
    width: 77px
    height: 77px
    font-size: 31px
    bottom: 25px
    right: 25px
    border-radius: 50%
    filter: drop-shadow(0px 3px 20px rgba(130, 153, 166, 0.25))
    display: flex
    align-items: center
    justify-content: center
    cursor: pointer
@media screen and (max-width: 740px)
  .action-button
    position: absolute;
    width: 43px
    height: 43px
    font-size: 21px
    bottom: 15px
    right: 15px
    border-radius: 50%
    filter: drop-shadow(0px 3px 20px rgba(130, 153, 166, 0.25))
    display: flex
    align-items: center
    justify-content: center
    cursor: pointer
</style>
