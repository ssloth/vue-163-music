import Vue from 'vue';
import Player from 'pages/player/player';

describe ('player.vue', () => {
  it ('should render correct contents', () => {
    const Constructor = Vue.extend (Player);
    const vm = new Constructor ().$mount ();
    expect (vm.isNull).to.equal (false);
  });
});
