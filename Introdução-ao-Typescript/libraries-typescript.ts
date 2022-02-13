import $ from 'jquery'

$.fn.extend({
  newFunction(){
    console.log('Chamou nova função')
  }
  
})

$('body').newFunction();