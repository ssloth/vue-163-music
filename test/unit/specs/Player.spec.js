import Vue from 'vue';
import player from 'components/player/player';
describe('test player.vue', () => {
  it('karma测试', () => {
    const Constructor = Vue.extend(player);
    const vm = new Constructor().$mount();
    expect(vm.isNull).toEqual(false);
  });
});
